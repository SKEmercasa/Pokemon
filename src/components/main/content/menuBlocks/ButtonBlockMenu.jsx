import { NavLink } from "react-router-dom";

export const ButtonBlockMenu = () => {
    return (
        <div>
            <NavLink to='/editor'>Новый</NavLink>
            <NavLink to='/editor'>Обзор</NavLink>
        </div>
    )
}