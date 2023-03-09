import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	Route,
	Routes,
	BrowserRouter,
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/contact";
import ErrorPage from "./error-page";
import './index.css'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);