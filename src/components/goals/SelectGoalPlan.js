export function SelectGoalPlan(props) {
    const stepBackHandler = () => {
        props.setStepHandler(2)
    }

    const submitHandler = () => {
        props.setStepHandler(4)
    }
    return (
        <>
            <div style={{ position: "fixed", top: "0", bottom: "100px", right: "0", left: "0", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
                    <a href className="is-small is-size-1" style={{ color: props.user.preferences.style.primaryColor }} onClick={stepBackHandler}>&lt;</a>
                    <h1 className="is-size-1">Plan</h1>
                </div>
                <div className="container mx-3" >
                    <div className="box" style={{ backgroundColor: props.user.preferences.style.textColor, color: props.user.preferences.style.secondaryColor }}>
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Goal Name" onInput={(e) => props.setName(e.target.value)} value={props.name} />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">Description</label>
                                        <div className="control">
                                            <textarea className="textarea" placeholder="Goal Description" onInput={(e) => props.setDescription(e.target.value)} value={props.description}></textarea>
                                        </div>
                                    </div>

                                    <div className="field">

                                    </div>

                                    <div className="field is-grouped">
                                        <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                            <label className="label has-text-centered">Start Value</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Start Value" style={{ width: "100%" }} onInput={(e) => props.setStartValue(e.target.value)} value={props.startValue} />
                                            </div>
                                        </div>
                                        <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                            <label className="label has-text-centered">End Value</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="End Value" onInput={(e) => props.setEndValue(e.target.value)} value={props.endValue} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="field is-grouped">
                                        <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                            <label className="label has-text-centered">Start Date</label>
                                            <div className="control">
                                                <input className="input" type="date" placeholder="Start Date" style={{ width: "100%" }} onInput={(e) => props.setStartDate(e.target.value)} value={props.startDate} />
                                            </div>
                                        </div>
                                        <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                            <label className="label has-text-centered">End Date</label>
                                            <div className="control">
                                                <input className="input" type="date" placeholder="End Date" onInput={(e) => props.setEndDate(e.target.value)} value={props.endDate} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link" style={{ backgroundColor: props.user.preferences.style.primaryColor }} onClick={submitHandler}>Submit</button>
                                        </div>
                                        <div className="control">
                                            <button onClick={stepBackHandler} className="button is-link is-light">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
