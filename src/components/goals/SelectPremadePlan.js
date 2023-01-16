import { userInfo } from "os";
import { useState } from "react";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, goBackIndicator, title, buttonStyle } from '../../styling/StylingVariables.js';


export function SelectPremadePlan(props) {
    const [time, setTime] = useState(undefined);
    const [indexSelect, setIndexSelect] = useState(undefined);

    const stepBackHandler = () => {
        props.setStepHandler(1)
    }

    function selectTime(time) {
        setTime(time);
    }

    const submitHandler = (step, goal) => {
        if (step === 4) {
            let date = new Date();
            date = date.toISOString().slice(0, 10);
            props.setStartDate(date);

            date = new Date();
            date = date.setDate(date.getDate() + time)
            date = new Date(date);
            date = date.toISOString().slice(0, 10)
            props.setEndDate(date);

            props.setName(goal.Name);
            props.setDescription(goal.Description);
            props.setStartValue(goal.Startvalue);
            props.setEndValue(goal.Endvalue);
        }
        props.setStepHandler(step)
    }

    const goalsExercise = [{
        Name: "exercise",
        Description: "Exercise loads",
        Startvalue: 100,
        Endvalue: 500
    },
    {
        Name: "exercise mooooooore",
        Description: "Exercise loadsssssssss",
        Startvalue: 10000,
        Endvalue: 50000
    }
    ]

    const goalsSleep = [{
        Name: "Sleep",
        Description: "I want to sleep enough",
        Startvalue: 6,
        Endvalue: 8
    },
    {
        Name: "Sleep",
        Description: "I want to sleep more",
        Startvalue: 5,
        Endvalue: 7,

    },
    {
        Name: "Sleepinh",
        Description: "I want to sleep ",
        Startvalue: 4,
        Endvalue: 8,
    }

    ]

    const goalsFood = [{
        Name: "Eat less than 1500 calories",
        Description: "I want to lose weight",
        Startvalue: 2500,
        Endvalue: 1500
    },
    {
        Name: "Eat more than a 1000 calories",
        Description: "I want to lose weight",
        Startvalue: 500,
        Endvalue: 1500,
    }
    ]

    return (
        <>
            <div style={pageStyle(props.user.preferences.style)}>
                <div style={appContainer(props.user.preferences.style)}>

                    <div style={goBackIndicator(props.user.preferences.style)}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                        <span style={{ paddingLeft: '10px', color: props.user.preferences.style.primaryColor }}>Go back</span>
                    </div>

                    <span style={{ ...title(props.user.preferences.style), ...{ paddingBottom: '20px' } }} >Select pre-made plan</span>

                    {props.category === "excercise" ?
                        goalsExercise.map((goal) => (
                            <div className="box" style={{ backgroundColor: props.user.preferences.style.secondaryColor, color: props.user.preferences.style.textColor, margin: 'unset', marginBottom: '20px' }}>
                                <div style={{ ...title(props.user.preferences.style), ...{ padding: 'unset', paddingBottom: '10px' } }}>{goal.Name}</div>
                                <div>Description: {goal.Description}</div>
                                <div>Start value: {goal.Startvalue}</div>
                                <div>End value: {goal.Endvalue}</div>
                                <div className="mt-2" style={{ paddingTop: '10px' }}>
                                    <button className={"button"} onClick={() => selectTime(3)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 3 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>3 days</button>
                                    <button className={"button"} onClick={() => selectTime(7)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 7 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>7 days</button>
                                    <button className={"button"} onClick={() => selectTime(14)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 14 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>14 days</button>
                                    <button className={"button"} onClick={() => selectTime(30)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 30 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>30 days</button>

                                    <button className="button" style={{ marginTop: '10px' }} onClick={() => submitHandler(4, goal)}>Select</button>
                                </div>
                            </div>
                        ))
                        :
                        ""}

                    {props.category === "sleep" ?
                        goalsSleep.map((goal) => (
                            <div className="box" style={{ backgroundColor: props.user.preferences.style.secondaryColor, color: props.user.preferences.style.textColor, margin: 'unset', marginBottom: '20px' }}>
                                <div style={{ ...title(props.user.preferences.style), ...{ padding: 'unset', paddingBottom: '10px' } }}>{goal.Name}</div>
                                <div>Description: {goal.Description}</div>
                                <div>Start value: {goal.Startvalue}</div>
                                <div>End value: {goal.Endvalue}</div>
                                <div className="mt-2" style={{ paddingTop: '10px' }}>
                                    <button className={"button"} onClick={() => selectTime(3)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 3 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>3 days</button>
                                    <button className={"button"} onClick={() => selectTime(7)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 7 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>7 days</button>
                                    <button className={"button"} onClick={() => selectTime(14)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 14 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>14 days</button>
                                    <button className={"button"} onClick={() => selectTime(30)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 30 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>30 days</button>

                                    <button className="button" style={{ marginTop: '10px' }} onClick={() => submitHandler(4, goal)}>Select</button>
                                </div>
                            </div>
                        ))
                        :
                        ""}

                    {props.category === "food" ?
                        goalsFood.map((goal) => (
                            <div className="box" style={{ backgroundColor: props.user.preferences.style.secondaryColor, color: props.user.preferences.style.textColor, margin: 'unset', marginBottom: '20px' }}>
                                <div style={{ ...title(props.user.preferences.style), ...{ padding: 'unset', paddingBottom: '10px' } }}>{goal.Name}</div>
                                <div>Description: {goal.Description}</div>
                                <div>Start value: {goal.Startvalue}</div>
                                <div>End value: {goal.Endvalue}</div>
                                <div className="mt-2" style={{ paddingTop: '10px' }}>
                                    <button className={"button"} onClick={() => selectTime(3)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 3 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>3 days</button>
                                    <button className={"button"} onClick={() => selectTime(7)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 7 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>7 days</button>
                                    <button className={"button"} onClick={() => selectTime(14)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 14 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>14 days</button>
                                    <button className={"button"} onClick={() => selectTime(30)} style={{ color: props.user.preferences.style.textColor, backgroundColor: time === 30 ? props.user.preferences.style.primaryColor : props.user.preferences.style.tertiaryColor }}>30 days</button>

                                    <button className="button" style={{ marginTop: '10px' }} onClick={() => submitHandler(4, goal)}>Select</button>
                                </div>
                            </div>
                        ))
                        :
                        ""}
                </div>
            </div>
        </>
    );
}
