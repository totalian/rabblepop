import Button from "./Button"

const AddOption = ({onCancelAddOption}) => {
  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full bg-black bg-opacity-40">
      <form action="" className="xl:w-3/6 lg:w-5/6 w-full mx-auto lg:mt-12 rounded lg:h-5/6 h-full bg-white flex flex-col items-center justify-evenly">

        <h2 className="text-lg font-bold">What happens next?</h2>

        <textarea placeholder="What do you do?" className="w-5/6 border border-gray-400 p-2"></textarea>
        <textarea placeholder="What happens next?" className="w-5/6 h-4/6 border border-gray-400 p-2"></textarea>

        <div className="flex gap-4 justify-end w-5/6">
          <Button text="Cancel" bgColor="red-800"
          clickHandler={onCancelAddOption}
          />
          <Button text="Add Option" bgColor="green-800" />
        </div>
      </form>
    </div>
  )
}

export default AddOption
