import React from 'react'
import reduxStore from './redux/store.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
 <App />
  </Provider>
   
 
)
