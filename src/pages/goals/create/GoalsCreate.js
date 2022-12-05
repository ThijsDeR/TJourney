import Navigation from "./../../../components/navigation/Navigation.js";
import Loading from "./../../../components/loading/Loading.js";
import { SelectGoalCategory } from "./../../../components/goals/SelectGoalCategory.js";
import { useEffect, useState } from "react";
import { SelectGoalPlan } from "../../../components/goals/SelectGoalPlan";
import { SelectGoalOverzicht } from "../../../components/goals/SelectGoalOverzicht";
import { createGoal } from "../../../services/goal-service.js";
import { Navigate } from "react-router-dom";

export function GoalsCreate({ user, isLoading }) {
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
        if (step >= 1 && step <= 3) setStep(step)
    }

    useEffect(() => {
        if (done) {
            setDone(false)
            createGoal(name, description, startValue, endValue, startDate, endDate, category)
        }
    }, [done])

    if (done) {
        
        return <Navigate to="/goals/index" replace />;
    }

    const data = {name, setName, description, setDescription, startValue, setStartValue, endValue, setEndValue, startDate, setStartDate, endDate, setEndDate, category, setCategory, setStepHandler, done, setDone}
    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black" }}>
                            {step === 1 ? <SelectGoalCategory {...data} /> : ""}
                            {step === 2 ? <SelectGoalPlan {...data} /> : ""}
                            {step === 3 ? <SelectGoalOverzicht {...data} /> : ""}
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}

