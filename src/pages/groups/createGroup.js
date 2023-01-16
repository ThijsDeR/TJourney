import Loading from "../../components/loading/Loading.js";
import { SelectGoalCategory } from "../../components/goals/SelectGoalCategory.js";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CreateGroupForm } from "../../components/groups/groupsCreate.js";
import Navigation from "../../components/navigation/Navigation.js";

export function GroupCreate({ user }) {
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

    if (done) {
        return <Navigate to="/goals/index" replace />;
    }

    const data = { name, setName, description, setDescription, startValue, setStartValue, endValue, setEndValue, startDate, setStartDate, endDate, setEndDate, category, setCategory, setStepHandler, done, setDone }
    return (
        <>
            <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflow: "auto" }}>
                {<CreateGroupForm {...{...data, user}}  />}
            </div>
        </>
    );
}

