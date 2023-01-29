import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import finish_person from './finish_person';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import axois from 'axios'

const localizer = momentLocalizer(moment)

const formats = {
  dateFormat: 'D',
  dayFormat: 'D(ddd)',
  monthHeaderFormat: 'YYYY年M月',
  dayHeaderFormat: 'M月D日(ddd)',
  dayRangeHeaderFormat: 'YYYY年M月',
}


const eventList = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: false,
    start: new Date('2020-03-01 9:00'),
    end: new Date('2020-03-01 13:00'),
  },
  {
    id: 1,
    title: 'Long Event',
    allDay: false,
    start: new Date('2023-01-29 15:00'),
    end: new Date('2023-1-29 17:00'),
  }
];

function App() {

  const [user_name, setUser] = useState('');
  const [task_name, setTask] = useState('');
  const [n_team, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  // データを送信
  const sendData = () => {
    // const data = {}
    // axios.post("http://localhost:8000/reservations?")
  }
  
  return (
    <div className="App">
      <h1>予定合わせる君</h1>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={finish_person} />
        </Routes>
      </BrowserRouter>

      <div className="n_team">
        <label htmlFor="user_name">名前<span className="must">*</span>:</label>
        <input id="user_name" value={user_name} onChange={(e) => setUser(e.target.value)}
         required />
      </div>

      <div className="n_team">
        <label htmlFor="task_name">タスク名<span className="must">*</span>:</label>
        <input id="task_name" value={task_name} onChange={(e) => setTask(e.target.value)} required />
      </div>

      <div className="n_team">
        <label htmlFor="n_team">チームの人数(数字のみ)<span className="must">*</span>:</label>
        <input type="text" id="n_team" value={n_team} onChange={(e) => setNumber(e.target.value)} required />
      </div>

      <div className="person_input">
        <label htmlFor="date">日付</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>

      <div className="person_input">
        <label htmlFor="start-time">開始時刻</label>
        <input type="time" id="start-time" value={start} onChange={(e) => setStart(e.target.value)} required />
      </div>

      <div className="person_input">
        <label htmlFor="end-time">終了時刻</label>
        <input type="time" id="end-time" value={end} onChange={(e) => setEnd(e.target.value)} required />
      </div>

      {
        <Calendar
          localizer={localizer}
          events={eventList}
          timeslots={2}
          defaultView={Views.WEEK}
          onSelectEvent={event => alert(event.title)}
          views={['month', 'week', 'day']}
          formats={formats}
          style={{ height: 500 }}
        />
      }

      <div>
        <button type="submit" onClick={sendData}>確認</button>
      </div>
    </div>
  );
}



export default App;
