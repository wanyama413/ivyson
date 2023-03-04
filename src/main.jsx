import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { store ,persistor} from './redux/store'
import FloatingWidget from './components/FloatingWidget/FloatingWidget'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
 <App />
 <FloatingWidget  statusMessage="Online" accountName="Neptune Refriegeration" phoneNumber="254742338179"/>
      </PersistGate>

    </Provider>
    
    </BrowserRouter>
   
  </React.StrictMode>,
)
