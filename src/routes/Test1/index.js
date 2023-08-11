import { useState } from "react";

const Test1 = () => {
  const [userInput, setUserInput] = useState(null)

  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {userInput}
      </p>
      <input type="text" placeholder="input here" onChange={(e) => { setUserInput(e.currentTarget.value) }}/>
    </div>
  )
}

export default Test1;