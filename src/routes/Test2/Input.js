const Input = (props) => {
  return <input type="text" placeholder="input here" onChange={props.onChange} value={props.value} />
}

export default Input;
