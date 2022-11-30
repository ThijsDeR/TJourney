import React from 'react';
import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, OrbitControls, PresentationControls } from "@react-three/drei";

import Chopper from '../../assets/Chopper/Chopper';
import Shiba from '../../assets/Shiba/Shiba';
import RandomGuy from '../../assets/Random/Random';
import Dragon from '../../assets/Dragon/Dragon';

function VariationSelect() {
    const [chosenAvatar, setChosenAvatar] = useState(undefined);
    const [avatarVariation, setAvatarVariation] = useState([1, 2, 3, 4]);

    function selectVariation(id) {
        console.log(id);
    }

    return (
        <>
            <div className="pt-5 mt-5 mx-3">
                <div className="title text-center has-text-centered">
                    Avatar customization
                </div>

                {avatarVariation.map((variation, i) =>
                    <div className="columns is-mobile is-centered">
                        <div className="box my-3 mr-3 mr-3 mr-3 column is-5" onClick={() => selectVariation(i)}>
                            {"avatar variation " + variation}
                        </div>
                        <div className="box my-3 mr-3 mr-3 mr-3 column is-5" onClick={() => selectVariation(i)}>
                            {"avatar variation " + variation}
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default VariationSelect;