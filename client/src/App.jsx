import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingnIn from './pages/SingnIn';
import SingnUp from './pages/SingnUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/sign-in`} element={<SingnIn />} />
        <Route path={`/sign-up`} element={<SingnUp />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
        <Route path={`/projects`} element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
