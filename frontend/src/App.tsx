// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Calendar from './pages/Calendar';
import EventForm from './pages/EventForm';
import EventList from './pages/EventPage';
import Home from './pages/Home';
import NoPage404 from './pages/NoPage404';
import Layout from './pages/Layout';
import Login1 from './pages/Login1';
import Login2 from './pages/Login2';
import EventPage from './pages/EventPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="eventform" element={<EventForm />} />
          <Route path="eventlist" element={<EventList />} />
          <Route path="*" element={<NoPage404 />} />
          <Route path="Login" element={<Login1 />}></Route>
          <Route path="Login2" element={<Login2 />}></Route>
          <Route path="eventpage" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
