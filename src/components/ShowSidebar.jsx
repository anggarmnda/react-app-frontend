import React, {useEffect, useState}from "react";
import { useLocation } from "react-router-dom";

const ShowSidebar =  ({childern}) => {

    const location = (useLocation);

    const [showSidebar, setShowSidebar] = useState(false)
    useEffect(() => {
        console.log ('This is Location:', location)
        if(location.pathname === '/login') {
            setShowSidebar(false)
        } else {
            setShowSidebar(true)
        }
    }, [location])
    return (
        <div>
                {showSidebar && childern}
        </div>
    )
}

export default ShowSidebar;