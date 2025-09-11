import ButtonsPack from "./components/ButtonsPack/ButtonsPack.jsx";
import './index.css'
import {useState, useRef, useEffect} from "react";

function App() {
  const [value, setValue] = useState('0')
  const spanContent = useRef(null)
  const [objectResult, setObjectResult] = useState({
    firstValue: null,
    operator: null,
    secondValue: null,
    indexOfOperator: 0,
  })

  useEffect(() => {
    if (spanContent.current) {
      spanContent.current.textContent = value;
    }
  }, [value]);

  function operatorAdd(event){
    if (spanContent.current.textContent[spanContent.current.textContent.length - 1] === '+' || spanContent.current.textContent[spanContent.current.textContent.length - 1] === '-' || spanContent.current.textContent[spanContent.current.textContent.length - 1] === '/' || spanContent.current.textContent[spanContent.current.textContent.length - 1] === 'X'){
      spanContent.current.textContent = spanContent.current.textContent.substring(0, spanContent.current.textContent.length - 1) + event.target.title;
      return
    }
    setValue(value + event.target.title)
    setObjectResult({
      firstValue: spanContent.current.textContent.substring(0, spanContent.current.textContent.length),
      operator: event.target.title,
      indexOfOperator: value.indexOf(objectResult.operator)
    })
  }

  function handleClick(event){
    if (spanContent.current.textContent.length >= 15) return

    switch(event.target.title){
      case 'C':
        setValue('0')
        break
      case '=':
        setObjectResult({
          ...objectResult,
          secondValue: spanContent.current.textContent.substring(objectResult.indexOfOperator, spanContent.current.textContent.length)})
        const {firstValue, secondValue} = objectResult
        switch(objectResult.operator){
          case '+':
            setValue(String(Number(firstValue) + Number(secondValue)))
            console.log(firstValue, secondValue, objectResult.operator, objectResult.indexOfOperator)
            break
          case '-':
            setValue(String(Number(firstValue) - Number(secondValue)))
            break
          case '/':
            setValue(String(Number(firstValue) / Number(secondValue)))
            break
          case 'X':
            setValue(String(Number(firstValue) * Number(secondValue)))
            break
          case '%':
            setValue(String(Number(firstValue) % Number(secondValue)))
            break
        }
        break
      case 'x':
        if (spanContent.current.textContent.length === 1) return
        setValue(value.substring(0, value.length - 1))
        break
      case '+':
        operatorAdd(event)
        break
      case '-':
        operatorAdd(event)
        break
      case '/':
        operatorAdd(event)
        break
      case 'X':
        operatorAdd(event)
        break
      default:
        if (spanContent.current.textContent.length === 1 && spanContent.current.textContent[0] === '0'){
          setValue(event.target.title)
          return
        }
        setValue(value + event.target.title)
        break
    }
  }
  return (
    <>
      <span ref={spanContent}>{value}</span>
      <ButtonsPack onClick={handleClick}/>
    </>
  )
}

export default App
