import React, {useContext} from 'react'
import { Context } from '../App'

const ComC = () => {
  const name = useContext(Context)
  return (
    <div>
        <h1>My Name is {name}</h1>
    </div>
  )
}

export default ComC