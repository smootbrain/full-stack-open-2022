import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.handleClick}</button> 
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <div>
        <button onClick={set}></button>
      </div>
    </>
  )
}