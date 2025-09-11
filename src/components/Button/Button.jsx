import './Button.css'

export default function Button(props){
  return (
    <>
    <button className={props.color ? `${props.color} btn` : 'btn'} onClick={props.onClick} title={props.title}>{props.title}</button>
    </>
  )
}