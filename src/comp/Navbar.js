import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="flex justify-between lg:px-40 px-8 bg-green-800 h-10 items-center">
            <div>
                <h1 className="font-bold text-white">Rabblepop</h1>
            </div>
            <div className="flex gap-6">
                <ul>
                    <li className="text-white">About</li>
                </ul>
                <Button text="Join" bgColor="white" textColor="red" />
            </div>
        </nav>
    )
}

export default Navbar
