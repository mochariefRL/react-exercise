import Input from "./Input";
import Label from "./Label";
import { useState } from "react";

const Test2 = () => {
  const [userInput, setUserInput] = useState("")

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label text={userInput} onClick={() => { setUserInput(""); }} />
      </p>
      <Input onChange={(e) => { setUserInput(e.currentTarget.value); }} value={userInput} />
    </div>
  )
}

export default Test2;