import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSWR from 'swr';

// third party
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axios from 'axios'

// components
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import UserForms from "./components/UserForms";
import SendBotton from "./components/SendBotton";

// css
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


const localizer = momentLocalizer(moment)

const formats = {
  dateFormat: 'D',
  dayFormat: 'D(ddd)',
  monthHeaderFormat: 'YYYY年M月',
  dayHeaderFormat: 'M月D日(ddd)',
  dayRangeHeaderFormat: 'YYYY年M月',
}

function App() {

  // one schedule
  const [schedule, setSchedule] = useState({
    user_name: '',
    task_name: 'チーム札幌',
    n_team: '',
    date: '',
    start_time: '',
    end_time: '',
  });

  // events
  const [events, setEvents] = useState([
    {
      id: '',
      title: '',
      allDay: false,
      start: '',
      end: '',
    }
  ]);
  const [flag, setFlag] = useState('false');
  let id = 0;

  // when press the button, check if every form is not empty
  const checkInput = () => {
    for (const item in schedule) {
      if (schedule[item] === '') {
        alert(`${item}を入力してください`)
        return false;
      } else {
        alert(`確定してよろしいですか？`)
        // バックエンドにデータ送信
        sendData();
        return true;
      }
    }
  }


  // send data to backend
  const sendData = () => {
    // data replcaed for backend to use
    const data = {
      'username': schedule.user_name,
      'taskname': schedule.task_name,
      'reservation_num': schedule.n_team,
      'start_date_time': schedule.date + 'T' + schedule.start_time,
      'end_date_time': schedule.date + 'T' + schedule.end_time,
    }
    // really send the data
    axios.post("http://localhost:8080/reservation/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    // for debug
    // get every data
    axios.get("http://localhost:8080/reservations/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // polling function
  const getReservation = (path) => {

    console.log(schedule.task_name);

    axios.get("http://localhost:8080/" + path + "/?taskname=" + schedule.task_name)
      .then((res) => {
        console.log(res.data[0]);
        if (res.data != 'false') {
          // add id
          id++;

          // set event
          const event = {
            id: id,
            title: schedule.task_name,
            allDay: false,
            start: new Date(res.data[0].start_date_time),
            end: new Date(res.data[0].end_date_time),
          }
          console.log(event)

          // add events
          setEvents((prev) => ([...prev, event]));
          console.log(events)

          // notification
          alert("予定が決定しました")

          // set flat to true
          setFlag('true');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // polling
  useSWR('reservation_check', getReservation, {
    refreshInterval: flag == 'false' ? 3000 : 0,
  })


  // for debug
  useEffect(() => {
    console.log(schedule);
  }, [schedule])


  return (
    <div className="App">

      {/* header */}
      <AppHeader />

      {/* user input */}
      <UserForms
        setSchedule={setSchedule}
      />

      {/* button */}
      <SendBotton
        checkInput={checkInput}
      />

      {/* calernder */}
      <Container fluid className="mb-5 pb-5">
        <Row>
          <Col>
            <Calendar
              localizer={localizer}
              events={events}
              timeslots={2}
              defaultView={Views.WEEK}
              onSelectEvent={event => alert(event.title)}
              views={['month', 'week', 'day']}
              formats={formats}
              style={{ height: 600 }}
            />
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <AppFooter />
    </div>
  );
}



export default App;