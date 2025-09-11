import './ButtonsRow.css'
import Button from "../Button/Button.jsx";

export default function ButtonsRow(props){
  return (
    <div className="buttons-row">
      <Button title={props.itemTitles[0]} color={props.itemsColor} onClick={props.onClick}/>
      <Button title={props.itemTitles[1]} color={props.itemsColor} onClick={props.onClick}/>
      <Button title={props.itemTitles[2]} color={props.itemsColor} onClick={props.onClick}/>
      <Button title={props.itemTitles[3]} color="orange" onClick={props.onClick}/>
    </div>
  )
}