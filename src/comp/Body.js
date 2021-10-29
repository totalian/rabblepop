const Body = ({text}) => {
  return (
    <div className="flex gap-2 flex-col">
      {text.split("\n").map((line,index) => (<p key={index}>{line}</p>))}
    </div>
  )
}

export default Body
