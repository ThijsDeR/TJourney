export function SelectGoalPlan(props) {
    const stepBackHandler = () => {
        props.setStepHandler(1)
    }

    const submitHandler = () => {
        props.setStepHandler(3)
    }
    return (
        <>
            <div style={{ position: "fixed", top: "0", bottom: "100px", right: "0", left: "0", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
                    <a className="is-small is-size-1 has-text-white" onClick={stepBackHandler}>&lt;</a>
                    <h1 className="is-size-1 has-text-white">Plan</h1>
                </div>
                <div className="container mx-3" >
                    <div className="box has-background-grey-light">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <div class="field">
                                        <label class="label">Name</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Goal Name" onInput={(e) => props.setName(e.target.value)} value={props.name}/>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Description</label>
                                        <div class="control">
                                            <textarea class="textarea" placeholder="Goal Description" onInput={(e) => props.setDescription(e.target.value)} value={props.description}></textarea>
                                        </div>
                                    </div>

                                    <div class="field">

                                    </div>

                                    <div class="field is-grouped">
                                        <div style={{width: "50%", paddingRight: "5px", paddingLeft: "5px"}}>
                                            <label class="label has-text-centered">Start Value</label>
                                            <div class="control">
                                                <input class="input" type="text" placeholder="Start Value" style={{width: "100%"}} onInput={(e) => props.setStartValue(e.target.value)} value={props.startValue}/>
                                            </div>
                                        </div>
                                        <div style={{width: "50%", paddingRight: "5px", paddingLeft: "5px"}}>
                                            <label class="label has-text-centered">End Value</label>
                                            <div class="control">
                                                <input class="input" type="text" placeholder="End Value" onInput={(e) => props.setEndValue(e.target.value)} value={props.endValue}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field is-grouped">
                                        <div style={{width: "50%", paddingRight: "5px", paddingLeft: "5px"}}>
                                            <label class="label has-text-centered">Start Date</label>
                                            <div class="control">
                                                <input class="input" type="date" placeholder="Start Date" style={{width: "100%"}} onInput={(e) => props.setStartDate(e.target.value)} value={props.startDate}/>
                                            </div>
                                        </div>
                                        <div style={{width: "50%", paddingRight: "5px", paddingLeft: "5px"}}>
                                            <label class="label has-text-centered">End Date</label>
                                            <div class="control">
                                                <input class="input" type="date" placeholder="End Date" onInput={(e) => props.setEndDate(e.target.value)} value={props.endDate}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-link" style={{backgroundColor: "rgb(247, 105, 255)"}} onClick={submitHandler}>Submit</button>
                                        </div>
                                        <div class="control">
                                            <button class="button is-link is-light">Cancel</button>
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
