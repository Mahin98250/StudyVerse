import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { initialiseDatabase } from './core'
import './styles.css'
const root=document.getElementById('root')!
void initialiseDatabase().then(()=>ReactDOM.createRoot(root).render(<React.StrictMode><HashRouter><App/></HashRouter></React.StrictMode>)).catch((error:unknown)=>{console.error(error);ReactDOM.createRoot(root).render(<main className="fatal"><h1>StudyVerse could not start</h1><p>Your browser could not open local study storage. Refresh or try another browser.</p></main>)})