const Button = ({text, bgColor = "black", textColor = "white"}) => {
  return (
    <button className={`text-${textColor} bg-${bgColor} px-2 rounded`}>{text}</button>
  )
}


export default Button
