import user from "./user"
import contacts from "./contacts"
import activeUserId from "./activeUserId"
import messages from './messages'
import {combineReducers} from "redux"

import typing from "./typing"

export default combineReducers({
    user,
    contacts,
    typing,
    activeUserId,
    messages
})