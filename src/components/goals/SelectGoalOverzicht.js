export function SelectGoalOverzicht(props) {
    const stepBackHandler = () => {
        props.setStepHandler(2)
    }

    const submitHandler = () => {
        props.setDone(true)
    }
    return (
        <>
            <div style={{ position: "fixed", top: "0", bottom: "100px", right: "0", left: "0", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
                    <a className="is-small is-size-1 has-text-white" onClick={stepBackHandler}>&lt;</a>
                    <h1 className="is-size-1 has-text-white">Overzicht</h1>
                </div>
                <div className="container mx-3 " >
                    <div className="box has-background-grey-light">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <ul>
                                        <li>Name: {props.name}</li>
                                        <li>Description: {props.description}</li>
                                        <li>startValue: {props.startValue}</li>
                                        <li>endValue: {props.endValue}</li>
                                        <li>startDate: {props.startDate}</li>
                                        <li>endDate: {props.endDate}</li>
                                        <li>category: {props.category}</li>
                                    </ul>
                                    <div class="field is-grouped">
                                        <div class="control">
                                            <button class="button is-link" style={{ backgroundColor: "rgb(247, 105, 255)" }} onClick={submitHandler}>Submit</button>
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
