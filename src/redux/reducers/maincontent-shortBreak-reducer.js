let defaultValueMinutes = 10;
let defaultValueSeconds = 60;


let initialState = {
    minutes: defaultValueMinutes,
    seconds: defaultValueSeconds,
    buttonText: 'START',
    buttonSkipStatus: 'none',
    isTimerStart: true,
    agreeToMinusMinutes: true
};

let mainContentFocusReducer = (state = initialState, action) => {
    if (action.type === 'CLEAR-STATE-FOCUS'){
        state.minutes = defaultValueMinutes;
        state.seconds = defaultValueSeconds;
        state.buttonText = 'START';
        state.buttonSkipStatus = 'none';
    } else if (action.type === 'TIMER-MINUS-SECONDS'){
        state.seconds--;
    } else if (action.type === 'TIMER-MINUS-MINUTES'){
        state.minutes--;
    } else if (action.type === 'TIMER-SET-DEFAULTVALUE-SECONDS'){
        state.seconds = 60;
    } else if (action.type === 'TIMER-CHANGE-BUTTON-START'){
        state.buttonText = 'STOP';
        state.buttonSkipStatus = 'block';
    } else if (action.type === 'TIMER-CHANGE-BUTTON-STOP'){
        state.buttonText = 'START';
        state.buttonSkipStatus = 'none';
    } else if (action.type === 'SET-TIMER-FALSE'){
        state.isTimerStart = false;
    } else if (action.type === 'SET-TIMER-TRUE'){
        state.isTimerStart = true;
    } else if (action.type === 'AGREE-SET-FALSE'){
        state.agreeToMinusMinutes = false;
    } else if (action.type === 'AGREE-SET-TRUE'){
        state.agreeToMinusMinutes = true;
    } else if (action.type === 'SET-DEFAULT-VALUES'){
        state.minutes = action.minutes;
        state.seconds = action.seconds;
        defaultValueMinutes = action.minutes;
        defaultValueSeconds = action.seconds;
    }

    return state
}

export default mainContentFocusReducer;
export let clearStateActionCreatorFocus = () => ({type: "CLEAR-STATE-FOCUS"});
export let timerStartActionCreatorFocus = () => ({type: "TIMER-MINUS-SECONDS"});
export let timerMinusMinutesActionCreatorFocus = () => ({type: "TIMER-MINUS-MINUTES"});
export let timerSetDefaultValueSecondsActionCreatorFocus = () => ({type: "TIMER-SET-DEFAULTVALUE-SECONDS"})
export let timerChangeButtonStartActionCreatorFocus = () => ({type: "TIMER-CHANGE-BUTTON-START"});
export let setTimerFalseActionCreatorFocus = () => ({type: "SET-TIMER-FALSE"});
export let setTimerTrueActionCreatorFocus = () => ({type: "SET-TIMER-TRUE"});
export let agreeSetFalseActionCreatorFocus = () => ({type: "AGREE-SET-FALSE"});
export let agreeSetTrueActionCreatorFocus = () => ({type: "AGREE-SET-TRUE"});
export let timerChangeButtonStopActionCreatorFocus = () => ({type: 'TIMER-CHANGE-BUTTON-STOP'});
export let setDefaultValuesActionCreatorFocus = (seconds, minutes) => ({type: "SET-DEFAULT-VALUES", seconds: seconds, minutes: minutes})
