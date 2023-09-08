import { useState } from "react";

const Input = ({filterValue}) => {
  const [filterText, setFilterText] = useState("");
  const afterSubmission = (event) => {
    event.preventDefault();
    filterValue(filterText);
  };

  return (
    <form onSubmit={afterSubmission}>
      <input type="text" placeholder="search" onChange={(e) => { setFilterText(e.currentTarget.value) }} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
