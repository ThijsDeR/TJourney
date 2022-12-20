import React from 'react'
import styled from 'styled-components'
import Robot from "../../assets/robot.gif"
import './css/Welcome.css'

export default function Welcome({ currentUser }) {
  return (
    //Shows a welcome message when you open the page
    <div className='Welcomes'>
      <img src={Robot} alt="welcome" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start Messaging.</h3>

    </div>
  )
}