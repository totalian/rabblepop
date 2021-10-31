const Action = ({action, onSelectAction}) => {
  return (
    <div className="flex gap-2 hover:shadow hover:border-gray-400 py-2" onClick={() => onSelectAction(action.destination)}>
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={action.image} alt="" />
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-bold">{action.user}</p>
        <p className="text-sm">{action.text}</p>
      </div>
    </div>
  )
}

export default Action
