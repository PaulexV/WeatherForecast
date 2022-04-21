import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/Pages/Homepage';
import WeeklyWeather from './components/Pages/WeeklyWeather';
import DailyWeather from './components/Pages/DailyWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Application Météo React</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/daily" element={<DailyWeather />} />
            <Route path="/weekly" element={<WeeklyWeather />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        Website created by Verrier Paul-Alexis & Mezou Nathan
      </footer>
    </div>
  );
}

export default App;
