import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainLayout from './layout/MainLayout';
import ExploreEvents from './pages/ExploreEvents';
import EventDetails from './pages/EventDetails';
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explorar" element={<ExploreEvents />} />
        <Route path="/eventos/:eventId" element={<EventDetails />} />
      </Route>
    </Routes>
  );
}

export default App;