 "use client"

const SignupComponent = () => {

    function handleonclick  (e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        console.log("inside handle on click")
    }
  return (
    <div className=" flex  flex-col p-12  justify-center items-center">
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="surname"/>
        <button onClick={handleonclick} className="border-4 ">Press to proceed</button>
    </div>
  )
}

export default SignupComponent