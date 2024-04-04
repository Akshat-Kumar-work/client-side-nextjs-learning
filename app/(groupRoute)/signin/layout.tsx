
const Signinlayout = ({children}:Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
        <div className=" flex justify-center items-center p-6">This line  is coming from sign in page layout</div>
        {children}
    </div>
  )
}

export default Signinlayout