import React from 'react'
import {graphql} from 'react-apollo'
import gpl from 'graphql-tag'
import Toolbar from './toolbar'
const query = gpl`{
  allUsers{
    username
  }
}`

const userItem = (user, key)=><li key={key}>{user.username}</li>
export default graphql(query)(
  ({data: {allUsers=[], loading}})=>
  <ul>
    <Toolbar/>
    {allUsers.map(userItem)}
  </ul>
)