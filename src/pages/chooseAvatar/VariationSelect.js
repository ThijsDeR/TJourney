// Base for variation that currently unused

import React from 'react';
import { useState, useEffect } from "react";

function VariationSelect() {
    const [chosenAvatar, setChosenAvatar] = useState(undefined);

    return (
        <>
            {/* <Navigation /> */}
            <div className="pt-5 mt-5 mx-3">
                <div className="title text-center has-text-centered">
                    Avatar customization
                </div>

                <div>
                    {mapAvatarVariation()}
                </div>

            </div>
        </>
    );
}

function selectVariation(id) {
    console.log(id);
}

function mapAvatarVariation() {
    const avatarVariation = ["{INSERT AVATAR VARIATION CANVAS HERE}", 2, 3, 4, 5, 6, 7, "hello there", "haAAA", 27, -3];
    const mappedAvatarVariation = [];
    for (let i = 0; i < avatarVariation.length; i++) {
        mappedAvatarVariation.push(<>
            <div className="columns is-mobile is-centered">
                <div className="box my-3 mr-3 mr-3 mr-3 column is-5" onClick={() => selectVariation(i)}>
                    {avatarVariation[i]}
                </div>
                <div hidden>{i++}</div>
                {i >= avatarVariation.length ?
                    ""
                    :
                    <div className="box my-3 mr-3 mr-3 mr-3 column is-5" onClick={() => selectVariation(i + 1)}>
                        {avatarVariation[i]}
                    </div>
                }
            </div>
        </>);
    }
    return mappedAvatarVariation;
}

export default VariationSelect;