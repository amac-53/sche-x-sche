import logo from './logo.svg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import './App.css';

function App() {
  return (
    <div className="App">
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today', //<>ボタンと「今日」ボタンを配置
          center: 'title', //「年　月」を配置
          right: 'dayGridMonth,timeGridWeek', //「月表示」、「週表示」切り替えボタンを配置
        }}
        events={[
          {title:'event', start:'2023-01-20', end:'2023-01-27'}
        ]}
       />
    </div>
  );
}

export default App;
