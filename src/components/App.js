import React from 'react'
import "./App.css"

import Sidebar from './Sidebar'
import Main from './Main'
import store from '../store';
import _ from "lodash"



const App = () => {

  const {contacts, user, activeUserId } = store.getState()

  return (
    <div className="App">
     <Sidebar contacts={_.values(contacts)}/>
    <Main activeUserId={activeUserId} user={user}/>
    </div>
  )
}

export default App
