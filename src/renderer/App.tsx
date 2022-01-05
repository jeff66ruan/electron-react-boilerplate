import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';

const Hello = () => {
  return (
    <div className="text-center">
      <img src={icon} alt="logo" className="h-48 w-48" />
      <h1 className="text-2xl font-bold text-red-500">electron!</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
