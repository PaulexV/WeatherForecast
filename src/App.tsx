import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Forecast from './components/Forecast/Forecast';
import Homepage from './components/Pages/Homepage';
import WeatherInfos from './components/Pages/WeatherInfos';

function App() {
  return (
    <div className="App">
	    <header className="App-header">
		    <h1>Application Météo React</h1>
	    </header>
	    <main>
    	</main>
	    <footer>
		    Page created by Verrier Paul-Alexis & Mezou Nathan
	    </footer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/cards" element={<WeatherInfos />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
