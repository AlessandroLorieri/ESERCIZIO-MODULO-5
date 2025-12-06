import { Outlet } from "react-router-dom";
import { useContext } from "react";

import MyNav from "../MyNav/MyNav"
import MyFooter from "../MyFooter/MyFooter"
import { ThemeContext } from "../ThemeContext/ThemeContext";

const AppLayout = ({ searchQuery, onSearchChange }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`app app-${theme}`}>

            <MyNav
                searchQuery={searchQuery}
                onSearchChange={onSearchChange}
            />

            <Outlet />

            <MyFooter />

        </div>
    )
}

export default AppLayout