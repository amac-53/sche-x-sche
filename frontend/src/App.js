import logo from './logo.svg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import './App.css';

function App() {
  return (
    <div className="App">
       <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
      />
    </div>
  );
}

export default App;
