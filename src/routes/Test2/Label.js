import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
    opacity: '0',
    cursor: 'pointer',
    ":hover":{
      opacity: '100'
    }
  }
})

const Label = (props) => {
  return (
    <span className={cssLabel}>
      {props.text ? props.text : "RENDER VALUE HERE"}
      <button type="button" onClick={props.onClick}>⊗</button>
    </span>
  )
}

export default Label;
