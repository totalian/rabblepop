import Action from "./Action"
import Button from "./Button"



const ActionList = ({actions, onAddOption}) => {
  return (
    <div>
      <div className="border-b border-gray-400 pb-2 flex justify-between">
        <p className="uppercase text-green-800">Actions</p>
        <Button
        text="Add Option"
        bgColor="green-800"
        clickHandler={onAddOption}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {actions.map((action,index) => <Action key={index} action={action} />)}
      </div>
    </div>
  )
}

export default ActionList
