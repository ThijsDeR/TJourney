export function SelectGoalCategory({ category, setCategory, setStepHandler }) {
    const handleCategorySelect = (name) => {
        setCategory(name)
        setStepHandler(2)
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 className="is-size-1 has-text-white">Category</h1>
            </div>
            <div className="container mx-3">
                <div className={"box"} onClick={() => handleCategorySelect("excercise")}>
                    <article class="media">
                        <div class="media-content" style={{overflow: "hidden"}}>
                            <div class="content">
                                <p>
                                    <strong>Excercise</strong>
                                    <br />
                                    Goed voor de body, goed voor de mind
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={"box"} onClick={() => handleCategorySelect("sleep")}>
                    <article class="media">
                        <div class="media-content" style={{overflow: "hidden"}}>
                            <div class="content">
                                <p>
                                    <strong>Sleep</strong>
                                    <br />
                                    Lekker slapen, zzzzzzzz
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div className={"box"} onClick={() => handleCategorySelect("food")}>
                    <article class="media">
                        <div class="media-content" style={{overflow: "hidden"}}>
                            <div class="content">
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
