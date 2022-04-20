import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      </main>
      <footer>
        Website created by Verrier Paul-Alexis & Mezou Nathan
      </footer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/daily" element={<DailyWeather />} />
          <Route path="/weekly" element={<WeeklyWeather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
