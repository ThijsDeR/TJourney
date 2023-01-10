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
                    <a href className="is-small is-size-1" style={{ color: props.user.preferences.style.primaryColor }} onClick={stepBackHandler}>&lt;</a>
                    <h1 className="is-size-1">Overview</h1>
                </div>
                <div className="container mx-3 " >
                    <div className="box" style={{ color: props.user.preferences.style.textColor }}>
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <ul>
                                        <li>Name: {props.name}</li>
                                        <li>Description: {props.description}</li>
                                        <li>startValue: {props.startValue}</li>
                                        <li>endValue: {props.endValue}</li>
                                        <li>startDate: {props.startDate}</li>
                                        <li>endDate: {props.endDate}</li>
                                        <li>category: {props.category}</li>
                                    </ul>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link" style={{ backgroundColor: "rgb(247, 105, 255)" }} onClick={submitHandler}>Submit</button>
                                        </div>
                                        <div className="control">
                                            <button className="button is-link is-light">Cancel</button>
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
