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
                <div className={(category === "excercise" ? "has-background-purple" : "") + " box"} onClick={() => handleCategorySelect("excercise")}>
                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Excercise</strong>
                                    <br />
                                    Goed voor de body, goed voor de mind
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item" aria-label="reply">
                                        <span class="icon is-small">
                                            <i class="fas fa-reply" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="retweet">
                                        <span class="icon is-small">
                                            <i class="fas fa-retweet" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="like">
                                        <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>

                <div className={"box " + (category === "sleep" ? "has-background-purple" : "")} onClick={() => handleCategorySelect("sleep")}>
                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Sleep</strong>
                                    <br />
                                    Lekker slapen, zzzzzzzz
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item" aria-label="reply">
                                        <span class="icon is-small">
                                            <i class="fas fa-reply" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="retweet">
                                        <span class="icon is-small">
                                            <i class="fas fa-retweet" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="like">
                                        <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>

                <div className={"box " + (category === "food" ? "has-background-purple" : "")} onClick={() => handleCategorySelect("food")}>
                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>Food</strong>
                                    <br />
                                    Van goed eten word je groot en sterk
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item" aria-label="reply">
                                        <span class="icon is-small">
                                            <i class="fas fa-reply" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="retweet">
                                        <span class="icon is-small">
                                            <i class="fas fa-retweet" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                    <a class="level-item" aria-label="like">
                                        <span class="icon is-small">
                                            <i class="fas fa-heart" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
