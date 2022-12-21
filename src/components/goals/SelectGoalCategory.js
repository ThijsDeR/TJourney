import userEvent from "@testing-library/user-event";

export function SelectGoalCategory({ user, category, setCategory, setStepHandler }) {
    const handleCategorySelect = (name) => {
        setCategory(name)
        setStepHandler(2)
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 className="is-size-1">Category</h1>
            </div>
            <div className="container mx-3">
                <div className={"box"} style={{ backgroundColor: user.preferences.style.primaryColor }} onClick={() => handleCategorySelect("excercise")}>
                    <article className="media">
                        <div className="media-content" style={{overflow: "hidden"}}>
                            <div className="content">
                                <p>
                                    <strong>Excercise</strong>
                                    <br />
                                    Goed voor de body, goed voor de mind
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={"box"} style={{ backgroundColor: user.preferences.style.primaryColor }} onClick={() => handleCategorySelect("sleep")}>
                    <article className="media">
                        <div className="media-content" style={{overflow: "hidden"}}>
                            <div className="content">
                                <p>
                                    <strong>Sleep</strong>
                                    <br />
                                    Lekker slapen, zzzzzzzz
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={"box"} style={{ backgroundColor: user.preferences.style.primaryColor }} onClick={() => handleCategorySelect("food")}>
                    <article className="media">
                        <div className="media-content" style={{overflow: "hidden"}}>
                            <div className="content">
                                <p>
                                    <strong>Food</strong>
                                    <br />
                                    Van goed eten word je groot en sterk
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
