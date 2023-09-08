import classes from "./Tabs.module.css";
import { NavLink } from "react-router-dom";

const Tabs = (props) => {
    return (
        <div className={props.class} onClick={props.onClickFunc} >
            <NavLink count={props.count} to={props.path}>{props.text}</NavLink>
        </div>
    );
};

export default Tabs;
