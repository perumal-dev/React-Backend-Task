import { Link, NavLink, useNavigate } from "react-router-dom"


const NavBar = () => {

    const navigate = useNavigate()

    const reDirect = ()=>{

        navigate("/login")

    }
  return (
    <>
    <div className="flex justify-between bg-blue-400 p-3 items-center">
            <h1 className="text-2xl mx-20 text-white font-bold font-mono">Perumal</h1>
        <div className="mx-15 flex gap-10 text-white">
            <Link to={"/"}>Home</Link>
            <NavLink className={({isActive})=>isActive && " bg-amber-200 w-20 py-1 rounded text-center" } to={"about"}>About</NavLink>
            {/* <Link to={"/about"}>About</Link> */}
            <Link to={"/task"}>Task</Link>
            <Link to={"/project"}>Project</Link>
            <button onClick={reDirect} className="bg-red-300 w-20 py-1 rounded">Login</button>
        </div>
    </div>
    
    </>
  )
}

export default NavBar