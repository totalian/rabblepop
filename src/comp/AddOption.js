import Button from "./Button"
import { useState } from "react"

const AddOption = ({ hideModal, onAddOption }) => {

  const [actionTitle, setActionTitle] = useState("")
  const [actionOutcome, setActionOutcome] = useState("")

  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-40">
      <form action="" className="xl:w-3/6 lg:w-5/6 w-full mx-auto lg:mt-12 rounded lg:h-5/6 h-full bg-white flex flex-col items-center justify-evenly">

        <h2 className="text-lg font-bold">What happens next?</h2>

        <textarea value={actionTitle} onChange={e => setActionTitle(e.target.value)} placeholder="What do you do?" className="w-5/6 border border-gray-400 p-2"></textarea>
        <textarea value={actionOutcome} onChange={e => setActionOutcome(e.target.value)} placeholder="What happens next?" className="w-5/6 h-4/6 border border-gray-400 p-2"></textarea>

        <div className="flex gap-4 justify-end w-5/6">
          <Button text="Cancel" bgColor="red-800"
            clickHandler={e => {
              e.preventDefault()
              hideModal()
            }}
          />
          <Button text="Add Option" bgColor="green-800"
            clickHandler={e => {
              e.preventDefault()
              if (actionTitle && actionOutcome) {
                onAddOption({ text: actionTitle })
                hideModal()
              }
            }
            }
          />
        </div>
      </form>
    </div>
  )
}

export default AddOption
