import logo from './logo.svg';
import WeekCalendar from 'react-week-calendar/dist/WeekCalendar'; //react-week-calendar読み込み
import 'react-week-calendar/dist/style.css'; //react-week-calendarのcss読み込み
import "./App.css"; //そのほかのcss読み込み
import React, { useState, useEffect } from "react";


function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <h1>予定合わせる君</h1>

      <div class="name_input">
        <label for="name">名前<span class="must">*</span>:</label>
        <input type="text" id="name" name="name" required
        minlength="4" maxlength="8" size="10"></input>
      </div>

      <div class="team_name_input">
        <label for="name">チーム名<span class="must">*</span>:</label>
        <input type="text" id="name" name="name" required
        minlength="4" maxlength="8" size="10"></input>
      </div>

      <div class="person_input">
        <label for="name">チームの人数(数字のみ)<span class="must">*</span>:</label>
        <input type="text" id="name" name="name" required
        minlength="4" maxlength="8" size="5"></input>
      </div>

      <WeekCalendar
      scaleUnit="30"
      />
      <div>
        <submit><button>確認</button></submit>
        <div id = "overlay"></div>
      </div>

     
</div>
  );
}


export default App;
