import logo from './logo.svg';
import WeekCalendar from 'react-week-calendar/dist/WeekCalendar';
import 'react-week-calendar/dist/style.css';
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>予定合わせる君</h1>
      <WeekCalendar
      scaleUnit="30"

      />
    </div>
  );
}

export default App;
