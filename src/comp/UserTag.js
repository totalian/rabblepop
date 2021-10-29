const UserTag = ({img, userName}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src={img} alt="" />
      </div>
      <p className="text-sm">Added by <span className="font-bold">{userName}</span></p>
    </div>
  )
}

export default UserTag