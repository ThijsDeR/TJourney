import userEvent from "@testing-library/user-event";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, goBackIndicator, title } from '../../styling/StylingVariables.js';

export function SelectGoalCategory({ user, category, setCategory, setStepHandler }) {
    const handleCategorySelect = (name) => {
        setCategory(name)
        setStepHandler(2)
    }
    return (
        <>
            <div style={pageStyle(user.preferences.style)}>
                <div style={appContainer(user.preferences.style)}>

                    <div style={goBackIndicator(user.preferences.style)}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                        <span style={{ paddingLeft: '10px' }}>Go back</span>
                    </div>

                    <span style={{ ...title(user.preferences.style), ...{ paddingBottom: '20px' } }} >Choose a category</span>

                    <div className={"box"} style={{ backgroundColor: user.preferences.style.primaryColor, marginBottom: '10px' }} onClick={() => handleCategorySelect("excercise")}>
                        <article className="media">
                            <div className="media-content" style={{ overflow: "hidden" }}>
                                <div className="content">
                                    <p>
                                        <strong>Excercise</strong>
                                        <br />
                                        Goed voor de body, goed voor de mind
                                    </p>
                                </div>
                            </div>
                        </article>
                    </ div>

                    <div>
                        <div className={"box"} style={{ backgroundColor: user.preferences.style.primaryColor, marginBottom: '10px' }} onClick={() => handleCategorySelect("sleep")}>
                            <article className="media">
                                <div className="media-content" style={{ overflow: "hidden" }}>
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
                    </div>

                    <div>
                        <div className={"box"} style={{ backgroundColor: user.preferences.style.primaryColor, marginBottom: '10px' }} onClick={() => handleCategorySelect("food")}>
                            <article className="media">
                                <div className="media-content" style={{ overflow: "hidden" }}>
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

                </div>
            </div>
        </>
    );
}
