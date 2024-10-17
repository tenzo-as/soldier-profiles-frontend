import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/styles/global.css'
import App from '@/components/App'
import reportWebVitals from '@/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

reportWebVitals(console.log)
