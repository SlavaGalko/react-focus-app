import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Header.module.css';

library.add(fas);

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.headerContent} style={{borderBottom: `2px solid ${props.settings.borderColorHeader}`}}>
                <div className={classes.headerContentLogo}>
                    <FontAwesomeIcon
                        icon="fa-solid fa-square-check"
                        size="xl"
                        style={{ color: "#ffffff" }}
                    />
                    <h2>X-Focus</h2>
                </div>

                <div className={classes.headerContentButtons}>
                    <div className={classes.headerContentButton} style={{backgroundColor: `${props.settings.headerButtonColors}`, color: `${props.settings.headerButtonTextColor}`}}>
                        <FontAwesomeIcon
                            icon="fa-solid fa-gear"
                            size="lg"
                            style={{ color: "#f8f7f7" }}
                        />
                        <h2>Settings</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
