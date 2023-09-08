import { useRef } from "react";

const Test3 = () => {
  const inputFocus = useRef(null);
  
  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={() => { inputFocus.current.focus() }}>Focus Text Field</button>
      </p>
      <input type="text" placeholder="focus me" ref={inputFocus}/>
    </div>
  )
}

export default Test3;