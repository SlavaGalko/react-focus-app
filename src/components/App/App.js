import "./App.css";
import Header from "../Header/Header";
import Maincontent from "../Maincontent/Maincontent";
import {Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App(props) {
    const currentPath = useLocation().pathname;

    const setColorContainer = () => {
        if (currentPath === "/focus" || currentPath === '/') {
            return "container";
        } else if (currentPath === "/shortbreak") {
            return "container2";
        } else if (currentPath === "/longbreak") {
            return "container3";
        }
    };

    const checkWhatPathHeader = () => {
        if (currentPath === "/focus" || currentPath === '/') {
            return props.settings.focusSettings
        } else if (currentPath === "/shortbreak") {
            return props.settings.shortBreakSettings;
        } else if (currentPath === "/longbreak") {
            return props.settings.longBreakSettings;
        }
    }

    const returnStateWhatNeed = () => {
        if (currentPath === "/focus" || currentPath === '/') {
            return props.state.mainContentFocus;
        } else if (currentPath === "/shortbreak") {
            return props.state.mainContentShortBreak
        } else if (currentPath === "/longbreak") {
            return props.state.mainContentLongBreak;
        }
    };

    return (
        <div className={setColorContainer()}>
            <div className="wrapper">
                <Header settings={checkWhatPathHeader()}/>
                <Routes>
                    <Route path="/" element={<Maincontent minutes={props.state.mainContentFocus.minutes} seconds={props.state.mainContentFocus.seconds} settings={props.settings.focusSettings} state={returnStateWhatNeed()} dispatch={props.dispatch} path="/focus"/>} />
                    <Route path="/focus" element={<Maincontent minutes={props.state.mainContentFocus.minutes} seconds={props.state.mainContentFocus.seconds} settings={props.settings.focusSettings} state={returnStateWhatNeed()} dispatch={props.dispatch} path="/focus"/>} />
                    <Route path="/shortbreak" element={<Maincontent minutes={props.state.mainContentFocus.minutes} seconds={props.state.mainContentFocus.seconds} settings={props.settings.shortBreakSettings} state={returnStateWhatNeed()} dispatch={props.dispatch} path="/shortbreak"/>} />
                    <Route path="/longbreak" element={<Maincontent minutes={props.state.mainContentFocus.minutes} seconds={props.state.mainContentFocus.seconds} settings={props.settings.longBreakSettings} state={returnStateWhatNeed()} dispatch={props.dispatch} path="/longbreak"/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;