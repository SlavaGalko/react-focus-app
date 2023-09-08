import classes from "./Maincontent.module.css";
import Tabs from "./Tabs/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import soundClick from '../../sounds/soundClick.mp3'; 
import soundFinish from '../../sounds/soundFinish.mp3'
import { clearStateActionCreatorFocus, timerChangeButtonStartActionCreatorFocus, timerMinusMinutesActionCreatorFocus, timerSetDefaultValueSecondsActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";
import { timerStartActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";
import { setTimerFalseActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";
import { setTimerTrueActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";
import { agreeSetFalseActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";
import { timerChangeButtonStopActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";
import { agreeSetTrueActionCreatorFocus } from "../../redux/reducers/maincontent-focus-reducer";

const Maincontent = (props) => {
    const audioClick = new Audio(soundClick);
    const audioFinish = new Audio(soundFinish)
    let timerId;

    const checkWhatPath = () => {
        if (props.path === '/focus'){
            return classes.infoWrapperCol + " " + classes.infoWrapperActive;
        } else {
            return classes.infoWrapperCol;
        }
    };

    const checkWhatPath2 = () => {
        if (props.path === '/shortbreak'){
            return classes.infoWrapperCol + " " + classes.infoWrapperActive2;
        } else {
            return classes.infoWrapperCol;
        }
    }

    const checkWhatPath3 = () => {
        if (props.path === '/longbreak'){
            return classes.infoWrapperCol + " " + classes.infoWrapperActive3;
        } else {
            return classes.infoWrapperCol;
        }
    }

const startTimer = () => {
        audioClick.play();

        if (props.state.isTimerStart){
            if (props.state.agreeToMinusMinutes){
                props.dispatch(timerMinusMinutesActionCreatorFocus());
                props.dispatch(timerStartActionCreatorFocus())
            }

            props.dispatch(agreeSetFalseActionCreatorFocus());
            props.dispatch(timerChangeButtonStartActionCreatorFocus());
            props.dispatch(setTimerFalseActionCreatorFocus())

            setInterval(() => {
                if (props.state.isTimerStart === true){
                    clearInterval(timerId);
                } 
            }, 100);

            timerId = setInterval(() => {
                if (props.state.isTimerStart === true){
                    clearInterval(timerId);
                } else {
                    if (props.path === '/focus'){
                        if (props.state.minutes === 0 && props.state.seconds === 0){
                            audioFinish.play();
                            clearInterval(timerId);
                            props.dispatch(clearStateActionCreatorFocus());
                            props.dispatch(agreeSetTrueActionCreatorFocus());
                            props.dispatch(setTimerTrueActionCreatorFocus());
                        } else {
                            if (props.state.seconds === 0){
                                props.dispatch(timerMinusMinutesActionCreatorFocus());
                                props.dispatch(timerSetDefaultValueSecondsActionCreatorFocus());
                            } else {
                                props.dispatch(timerStartActionCreatorFocus());
                            }
                        }
            
                    } 
                    
                    else if (props.path === '/shortbreak'){
                        if (props.state.minutes === 0 && props.state.seconds === 0){
                            audioFinish.play();
                            clearInterval(timerId);
                            props.dispatch(clearStateActionCreatorFocus());
                            props.dispatch(agreeSetTrueActionCreatorFocus());
                            props.dispatch(setTimerTrueActionCreatorFocus());
                        } else {
                            if (props.state.seconds === 0){
                                props.dispatch(timerMinusMinutesActionCreatorFocus());
                                props.dispatch(timerSetDefaultValueSecondsActionCreatorFocus());
                            } else {
                                props.dispatch(timerStartActionCreatorFocus());
                            }
                        }
                    } 
                    
                    else if (props.path === '/longbreak'){
                        if (props.state.minutes === 0 && props.state.seconds === 0){
                            audioFinish.play();
                            clearInterval(timerId);
                            props.dispatch(clearStateActionCreatorFocus());
                            props.dispatch(agreeSetTrueActionCreatorFocus());
                            props.dispatch(setTimerTrueActionCreatorFocus());
                        } else {
                            if (props.state.seconds === 0){
                                props.dispatch(timerMinusMinutesActionCreatorFocus());
                                props.dispatch(timerSetDefaultValueSecondsActionCreatorFocus());
                            } else {
                                props.dispatch(timerStartActionCreatorFocus());
                            }
                        }
                    }
                    document.title = `${props.state.minutes}:${props.state.seconds} - Time to focus!`;
                }
        },1000);
            
        } else {
            clearInterval(timerId);
            props.dispatch(setTimerTrueActionCreatorFocus());
            props.dispatch(timerChangeButtonStopActionCreatorFocus());
        }
    
    };

    const resetButtonFunc = () => {
        props.dispatch(clearStateActionCreatorFocus())
        props.dispatch(setTimerTrueActionCreatorFocus());
        props.dispatch(agreeSetTrueActionCreatorFocus());
        document.title = 'Focus App';
    };

    const resetValuesTabs = () => {
        props.dispatch(clearStateActionCreatorFocus())
        props.dispatch(setTimerTrueActionCreatorFocus());
        props.dispatch(agreeSetTrueActionCreatorFocus());
        document.title = 'Focus App'
    };

    return (
        <div className={classes.mainContent}>
            <div className={classes.mainContentInfo} style={{backgroundColor: `${props.settings.wrapperColor}`}}>
                <div className={classes.mainContentInfoWrapper}>
                    <div className={classes.mainContentInfoWrapperBlock1}></div>

                    <div className={classes.mainContentInfoWrapperBlock2} >
                        <Tabs
                            class={checkWhatPath()}
                            text="Focus"
                            path="/focus"
                            count='1'
                            onClickFunc={() => {
                                resetValuesTabs()   
                            }}
                        />
                        <Tabs
                            class={checkWhatPath2()}
                            text="Short Break"
                            path="/shortbreak"
                            count='2'
                            onClickFunc={() => {
                                resetValuesTabs()   
                            }}
                        />
                        <Tabs
                            class={checkWhatPath3()}
                            text="Long Break"
                            path="/longbreak"
                            count='3'
                            onClickFunc={() => {
                                resetValuesTabs()   
                            }}
                        />
                    </div>

                    <div className={classes.mainContentInfoWrapperBlock3}>
                         <h2>{props.state.minutes}:{props.state.seconds === 60 ? '00' : (props.state.seconds <= 9 ? `0${props.state.seconds}` : props.state.seconds)}</h2>
                    </div>

                    <div className={classes.mainContentInfoWrapperBlock4}>
                        <button onClick={startTimer} style={{color: `${props.settings.mainContentButtonTextColor}`}}>{props.state.buttonText}</button>
                        <div className={`${classes.buttonContinue}`} onClick={resetButtonFunc} style={{display: `${props.state.buttonSkipStatus}`, backgroundColor: `${props.settings.wrapperColor}`}}>
                                <FontAwesomeIcon icon="fa-solid fa-backward-step" size="2xl" style={{color: "#f9efef",}} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Maincontent;

