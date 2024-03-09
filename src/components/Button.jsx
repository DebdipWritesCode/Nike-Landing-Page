function Button({ label, iconURL }) {
  return (
    <button className=" mr-4 flex justify-center items-center gap-2 px-7 py-4 border font-monsterrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
        {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5" alt="arrow right icon" />}
    </button>
  )
}

export default Button