import { SelectGoalCategory } from "./../../../components/goals/SelectGoalCategory.js";
import { useEffect, useState } from "react";
import { SelectGoalPlan } from "../../../components/goals/SelectGoalPlan.js";
import { SelectPremadePlan } from "../../../components/goals/SelectPremadePlan.js";
import { SelectGoalOverzicht } from "../../../components/goals/SelectGoalOverzicht.js";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';
import { buttonStyling, navButtonContainer, selectedStyling } from "../../../components/navigation/NavStylingVariables";

export function GoalsCreateTutorial({ user, isLoading, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    const [step, setStep] = useState(1);
    const [category, setCategory] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [description, setDescription] = useState(undefined)
    const [startValue, setStartValue] = useState(undefined)
    const [endValue, setEndValue] = useState(undefined)
    const [startDate, setStartDate] = useState(undefined)
    const [endDate, setEndDate] = useState(undefined)
    const [done, setDone] = useState(false)

    const setStepHandler = (step) => {
        if (step >= 1 && step <= 4) {
            setStep(step);
            updateTutorialScreenPart();
        }
    }

    useEffect(() => {
        if (done) {
            setDone(false);
            updateTutorialScreenPart(10);
        }
    }, [done, name, description, startValue, endValue, startDate, endDate, category, updateTutorialScreenPart])

    const data = { user, name, setName, description, setDescription, startValue, setStartValue, endValue, setEndValue, startDate, setStartDate, endDate, setEndDate, category, setCategory, setStepHandler, done, setDone }
    return (
        <>
            <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black" }}>

                {((screenPart !== 1 && !(screenPart > 3)) || !(screenPart < 10)) &&
                    <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }} onClick={() => updateTutorialScreenPart()} />
                }

                <div style={{ zIndex: 30, width: "100%", position: "absolute" }}>
                    {screenPart === 0 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                            Here you can make new goals for yourself
                        </div>
                    }
                    {screenPart === 1 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                            Select a category you like
                        </div>
                    }
                    {screenPart === 2 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                            Now you can make a new plan or create your own
                        </div>
                    }
                    {screenPart === 3 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                            Or you can continue to journey and do this later
                        </div>
                    }
                    {screenPart >= 10 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                            Good, now let's go to journey
                        </div>
                    }
                </div>

                {step === 1 ? <SelectGoalCategory {...data} /> : ""}
                {step === 2 ? <SelectPremadePlan {...data} /> : ""}
                {step === 3 ? <SelectGoalPlan {...data} /> : ""}
                {step === 4 ? <SelectGoalOverzicht {...data} /> : ""}

                <div className="nav-bottom" style={screenPart >= 10 || screenPart === 3 ? { zIndex: 30 } : {}}>
                    <div style={navButtonContainer(user.preferences.style)} >
                        {user ?
                            <>
                                <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to="" style={{ ...buttonStyling(user.preferences.style), ...selectedStyling(user.preferences.style)}}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="" style={{ ...buttonStyling(user.preferences.style)}} onClick={screenPart >= 10 || screenPart >= 3 ? () => { updateTutorialPosition() } : () => {}}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUsers} /></Link>
                            </> :
                            <>
                                <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Login</Link>
                                <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Sign Up</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
