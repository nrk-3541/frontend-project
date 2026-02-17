import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './components/layout/DashboardLayout';
import FarmerDashboard from './pages/dashboard/FarmerDashboard';
import Recommendations from './pages/dashboard/Recommendations';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="farmer" element={<FarmerDashboard />} />
          <Route path="recommendations" element={<Recommendations />} />
          {/* Add more routes here like 'settings', 'reports' */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
