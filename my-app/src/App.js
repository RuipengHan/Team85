// import logo from './logo.svg';
// import './App.css';
// //import { Login } from "./Login"
// import { Register } from "./Register"

// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse"
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"


// const locales = {
//   "en-US": require("date-fns/locale/en-US")
// }

// const localizer = dateFnsLocalizer( {
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales
// })

// const events = [
//   {title: "Exams",
//   start: new Date(2023, 2, 21),
//   end: new Date(2023, 2, 23)
//   },
//   {title: "Meeting",
//   start: new Date(2023, 2, 29),
//   end: new Date(2023, 2, 29)
//   },
//   {title: "Workshop",
//   start: new Date(2023, 2, 26),
//   end: new Date(2023, 2, 26)
//   },
// ]

// function App() {
//     const[newEvent, setNewEvent] = useState({title: "", start: "", end:""})
//     const[allEvents, setAllEvents] = useState(events)
  
//     function handleAddEvent() {
//       setAllEvents([...allEvents, newEvent])
//     }
//     return (
//       <div className="App">
//         <Login />
//         <h1>Calendar</h1>
//         <h2>Add New Event</h2>
//         <div>
//           <input type = "text" placeholder = "Add Title" style = {{width: "20%", marginRight: "10px"}}
//           value = {newEvent.title} onChange = {(e) => setNewEvent({...newEvent, title: e.target.value})}
//           />
//           <DatePicker placeholderText="Start Date" style ={{marginRight: "10px"}}
//           selected = {newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
//           />
//            <DatePicker placeholderText="End Date" style ={{marginRight: "10px"}}
//           selected = {newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
//           />
//           <button style = {{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
//         </div>
//         <Calendar localizer ={localizer} events={events}
//         startAccessor="start" endAccessor = "end" style = {{height: 500, margin: "50px"}} 
//         />
//       </div>
//     );
// }

// export default App;

import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;