import React from 'react'
import Empty from './Empty'
import  ChatWindows from '../containers/ChatWindows'
import './Main.css'


const Main = ({user, activeUserId}) => {
  const renderMainContent = () => {
    if(!activeUserId ) {
      return <Empty user={user} activeUserId={activeUserId} />
    } else {
      return <ChatWindows activeUserId={activeUserId}/>
    }
  }

  return <main className="Main">{renderMainContent()}</main>
}

export default Main
