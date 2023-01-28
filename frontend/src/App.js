import WeekCalendar from 'react-week-calendar/dist/WeekCalendar'; //react-week-calendar読み込み
import 'react-week-calendar/dist/style.css'; //react-week-calendarのcss読み込み
import "./App.css"; //そのほかのcss読み込み

const events = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date(2023, 0, 30, 1, 30),
    end: new Date(2023, 0, 30, 2, 30),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date(2023, 0, 31, 1, 0),
    end: new Date(2023, 0, 31, 15, 30),
  },
];

function App() {
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
      events = {events}
      />
      <div>
        <submit><button>確認</button></submit>
      </div>
</div>
  );
}



export default App;
