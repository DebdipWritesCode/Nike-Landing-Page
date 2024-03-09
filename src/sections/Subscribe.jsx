import Button from "../components/Button"

function Subscribe() {
  return (
    <div className="max-container flex flex-1 flex-col items-center gap-8">
      <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h1>
      <div className="flex flex-1 border-2 border-slate-gray rounded-[40px] px-4 py-2 justify-between w-full max-w-[800px]">
        <input type="text" placeholder="subscribe@nike.com" className="outline-none w-[60%]" />
        <Button label="Sign Up" />
      </div>
    </div>
  )
}

export default Subscribe