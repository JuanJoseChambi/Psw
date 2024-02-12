import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PALogo from "../../assets/PALogo.png"
function Nav() {
    const [hoverOption, setHoverOption] = useState<string | null>()

    const {pathname} = useLocation()

    const homeButton = pathname === "/about" || pathname === "/docs" || pathname === "/terms"

  return (
    <nav className="w-[90%] h-[70px] mx-auto flex justify-between  border-b border-neutral-500 items-center bg-greend-500">
        <Link to={"/"}>

            <picture className="w-[80px] h-[80px] flex justify-center items-center bg-redd-500 pointer-events-none select-none">
                <img src={PALogo} alt="PA" className="pointer-events-none select-none"/>
            </picture>

            {/* <h2 className="cursor-pointer textDegrade font-semibold text-3xl drop-shadow-[3px_3px_2.5px_gray]">PA</h2> */}
        </Link>
        <ul className="flex justify-center items-center space-x-10">
            {homeButton ? 
            <Link to={"/"}>
                <li className="cursor-pointer" onMouseEnter={() => setHoverOption("Home")} onMouseLeave={() => setHoverOption(null)}>Inicio
                <div className={`${hoverOption === "Home" ? "w-full" : "w-0"} h-[1px] bg-primaryColorViolet transition-[width] duration-500`}></div>
                </li>
            </Link> : null}
            <Link to={"/docs"}>
                <li className="cursor-pointer" onMouseEnter={() => setHoverOption("Docs")} onMouseLeave={() => setHoverOption(null)}>Docs
                <div className={`${hoverOption === "Docs" ? "w-full" : "w-0"} h-[1px] bg-primaryColorViolet transition-[width] duration-500`}></div>
                </li>
            </Link>
            <Link to={"/about"}>
                <li className="cursor-pointer" onMouseEnter={() => setHoverOption("About")} onMouseLeave={() => setHoverOption(null)}>Acerca de
                <div className={`${hoverOption === "About" ? "w-full" : "w-0"} h-[1px] bg-primaryColorViolet transition-[width] duration-500`}></div>
                </li>
            </Link>
            {/* {[{}]} */}
            
        </ul>
    </nav>
  );
}

export default Nav;
