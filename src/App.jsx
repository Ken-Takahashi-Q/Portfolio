import React from 'react';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import DailyExpense from './Pages/DailyExpense';

function App() {
  	return (
		<div className="wrapper" style={{backgroundColor: '#f5f5f5', height: '100%', width: '100%' }}>
			<Route exact path="/" element={<Home/>}/>
			<Route exact path="/light" element={<DailyExpense/>}/>
		</div>
	)
};

export default App;
