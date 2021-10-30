const Button = ({ text, bgColor = "black", textColor = "white", clickHandler = (e) => e.preventDefault() }) => {
  return (
    <button onClick={clickHandler} className={`text-${textColor} bg-${bgColor} px-2 rounded`}>{text}</button>
  )
}


export default Button
