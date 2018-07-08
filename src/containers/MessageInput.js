import React from 'react'
import { setTypingValue } from "../action";
import store from '../store'
import './MessageInput.css'
import { sendMessage } from "../action";


const MessageInput = ({value}) => {

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value))
  }

    const state = store.getState();

  const handleSubmit = e => {
    e.preventDefault()
      const { typing, activeUserId } = state
      store.dispatch(sendMessage(typing, activeUserId))
  }


  return (
      <form className="Message" onSubmit={handleSubmit}>
          <input
              className="Message__input"
              onChange={handleChange}
              value={value}
              placeholder="Write a message"
          />
      </form>
  )
}

export default MessageInput
