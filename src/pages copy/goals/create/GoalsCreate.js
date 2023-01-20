import Navigation from "./../../../components/navigation/Navigation.js";
import Loading from "./../../../components/loading/Loading.js";
import { SelectGoalCategory } from "./../../../components/goals/SelectGoalCategory.js";
import { useEffect, useState } from "react";
import { SelectGoalPlan } from "../../../components/goals/SelectGoalPlan.js";
import { SelectPremadePlan } from "../../../components/goals/SelectPremadePlan.js";
import { SelectGoalOverzicht } from "../../../components/goals/SelectGoalOverzicht.js";
import { createGoal } from "../../../services/goal-service.js";
import { Navigate } from "react-router-dom";

export function GoalsCreate({ user }) {
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
        if (step >= 1 && step <= 4) setStep(step)
    }

    useEffect(() => {
        if (done) {
            setDone(false)
            createGoal(name, description, startValue, endValue, startDate, endDate, category)
        }
    }, [done])

    if (done) {
        return <Navigate to="/challenges" replace />;
    }

    const data = { user, name, setName, description, setDescription, startValue, setStartValue, endValue, setEndValue, startDate, setStartDate, endDate, setEndDate, category, setCategory, setStepHandler, done, setDone }

    return (
        <>
            <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: user?.preferences?.style?.backgroundColor ? user.preferences.style.backgroundColor : "121212", color: user?.preferences?.style?.textColor ? user.preferences.style.textColor : "#F7F7F7" }}>
                {step === 1 ? <SelectGoalCategory {...data} /> : ""}
                {step === 2 ? <SelectPremadePlan {...data} /> : ""}
                {step === 3 ? <SelectGoalPlan {...data} /> : ""}
                {step === 4 ? <SelectGoalOverzicht {...data} /> : ""}
            </div>
            <Navigation style={user.preferences.style} />
        </>
    );
}
