import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineCompass, AiOutlineLike, AiOutlineClockCircle, AiOutlineHistory, AiOutlinePlaySquare, AiFillPlaySquare } from "react-icons/ai";
import { BsCollectionPlay, BsPlay, BsPlusCircle, BsTrophy, BsBroadcast } from "react-icons/bs";
import { GiConsoleController } from "react-icons/gi";
import { GoKebabVertical } from "react-icons/go";
import { data } from "../data";

export default function Body() {

    const [active, setActive] = useState(false);

    const toggleActive = (index) => {
        setActive(index);
    }

    const tags = [
        { name: "All" },
        { name: "Apex Legends" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Web 3.0" },
        { name: "Battle royal" },
        { name: "Performance" },
        { name: "Performance" },
        { name: "Performance" },
        { name: "Performance" },
        { name: "Performance" },
        { name: "Performance" },
    ];

    const sidebarOptions = [
        { component: <AiFillHome className="sidebar-icon" />, title: "Home" },
        { component: <AiOutlineCompass className="sidebar-icon" />, title: "Explore" },
        { component: <BsPlay className="sidebar-icon" />, title: "Shorts" },
        { component: <BsCollectionPlay className="sidebar-icon" />, title: "Subscriptions" },

        { component: <BsCollectionPlay className="sidebar-icon" />, title: "Library" },
        { component: <AiFillPlaySquare className="sidebar-icon" />, title: "Your videos" },
        { component: <AiOutlineClockCircle className="sidebar-icon" />, title: "Watch later" },
        { component: <AiOutlineLike className="sidebar-icon" />, title: "Liked videos" },
    ]


    const renderSidebarIcons = () => {
        return (
            <div>
            {sidebarOptions.map(({ component, title}, index) => (
                <div className={`each-option ${index === active ? "active" : ""}`}>
                    {component}
                    <span>{title}</span>
                 </div>
            ))}
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
                <GiConsoleController className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <GiConsoleController className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <GiConsoleController className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <GiConsoleController className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <GiConsoleController className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            <div className="each-option">
                <GiConsoleController className="sidebar-icon" />
                <span>Gaming</span>
            </div>
            </div>
        )
    };

    const renderSidebarIconsMobile = () => {
        return(
                <div className="sidebar-mobile">
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
                </div>
        )
    }
    
    return (
        <div className="body">
            {renderSidebarIconsMobile()}
            <div className="sidebar">
                {renderSidebarIcons()}
            </div>
            <div className="content">
                <div className="content-tags">
                    {tags.map(({ name }, index) => {
                        if(index > 9) return;
                        return (
                            <span className={`content-tag ${index === active ? "active" : ""}`} onClick={() => toggleActive(index)}>{name}</span>
                        )
                    })}
                </div>
                <div className="videos-container">
                    {data.map(({id, title, image, views, timeAgo, channelName}) => (
                        <div className="video" key={id}>
                            <img src={image} alt={title} className="video-image" />
                            <div className="video-info">
                                <div className="video-info-all">
                                    <span className="video-title">{title.length > 50 ? title.substring(0,60) + "..." : title}</span>
                                    <span className="video-channel-name">{channelName}</span>
                                    <div className="views-time">
                                        <span>{views}</span>
                                        <span>{timeAgo}</span>
                                    </div>
                                </div>
                                <GoKebabVertical className="option-dots" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}