import { AiFillHome, AiOutlineCompass, AiOutlineLike, AiOutlineClockCircle, AiOutlineHistory, AiOutlinePlaySquare } from "react-icons/ai";
import { BsCollectionPlay, BsPlay, BsPlusCircle, BsTrophy, BsBroadcast } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";

export default function Body() {

    const renderSidebarIcons = () => {
        return (
            <div>
            <div className="each-option">
                <AiFillHome className="sidebar-icon" />
                <span>Home</span>
            </div>
            <div className="each-option">
                <AiOutlineCompass className="sidebar-icon" />
                <span>Explore</span>
            </div>
            <div className="each-option">
                <BsPlay className="sidebar-icon" />
                <span>Shorts</span>
            </div>
            <div className="each-option">
                <BsCollectionPlay className="sidebar-icon" />
                <span>Subscriptions</span>
            </div>

            <div className="each-option">
                <BsCollectionPlay className="sidebar-icon" />
                <span>Library</span>
            </div>
            <div className="each-option">
                <AiOutlinePlaySquare className="sidebar-icon" />
                <span>Your videos</span>
            </div>
            <div className="each-option">
                <AiOutlineClockCircle className="sidebar-icon" />
                <span>Watch later</span>
            </div>
            <div className="each-option">
                <AiOutlineLike className="sidebar-icon" />
                <span>Liked videos</span>
            </div>

            <span className="sidebar-sub">Subscriptions</span>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Browse channel</span>
            </div>

            <span className="sidebar-sub">More from youtube</span>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <BsBroadcast className="sidebar-icon" />
                <span>Live</span>
            </div>
            <div className="each-option">
                <BsTrophy className="sidebar-icon" />
                <span>Sports</span>
            </div>

            <span className="sidebar-sub">Extra content</span>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <BsPlusCircle className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            </div>
        )
    }

    return (
        <div className="body">
            <div className="sidebar">
            {renderSidebarIcons()}
            </div>
            <div className="content"></div>
        </div>
    )
}