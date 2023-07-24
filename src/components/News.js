import React from 'react'
import './News.css'
import LOGO from './prev.png'

export default function News(props) {
  
  return (
      <>
      <div className="main">
        <img  src={LOGO}></img>
        <h3>{props.title}</h3>
        <p><strong>{props.description}</strong></p>
        
      </div>
      </>
  )
}

// a5af9b32319a49d487b845235138babd
News.defaultProps={
  title:"Some Headline",
  description: "This is the news article about something interesting.",
}
