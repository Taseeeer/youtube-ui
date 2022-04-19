import { AiFillYoutube, AiOutlineMenu, AiOutlineSearch, AiOutlineVideoCameraAdd, AiOutlineAppstore, AiOutlineBell } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import taseer from "../assets/cap.jpeg";

export default function Header({ theme, setTheme }) {
    return(
        <header>
            <div className="header-first">
                <AiOutlineMenu />
                <div className="logo">
                    <AiFillYoutube className="y-logo" onClick={() => setTheme(!theme)} /> 
                    <span className="youtube-written">Youtube</span>
                    <span className="pk-written">PK</span>
                </div>
            </div>
            <div className="header-second">
                <form>
                    <div className="input-background">
                        <input placeholder="Search" />
                    </div>
                    <AiOutlineSearch className="header-search" />
                    <BsFillMicFill className="header-mic" />
                </form>
            </div>
            <div className="header-third">
                <AiOutlineVideoCameraAdd />
                <AiOutlineAppstore />
                <AiOutlineBell />
                <img className="user-image" src={taseer}  />
            </div>
        </header>
    )
}