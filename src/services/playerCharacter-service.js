import MichelleIdle from "../assets/Michelle/Idle";
import MichelleWalking from "../assets/Michelle/Walking";
import DancingLeonard from "../assets/Leonard/DancingLeonard.jsx";
import WalkingLeonard from "../assets/Leonard/WalkingLeonard.jsx";
import { getCurrentUser } from "./auth-service";
import axios from "../api/axios.js";

const allCharacters = {
    idle: [<MichelleIdle />, <DancingLeonard />],
    walking: [<MichelleWalking />, <WalkingLeonard />]
}

export class activeCharacter {
    character;

    constructor(characterNumber) {
        this.character = [allCharacters.idle[characterNumber], allCharacters.walking[characterNumber]]
    }
}

export function loadCharacter(characterNumber) {
    activeCharacter.character = [allCharacters.idle[characterNumber], allCharacters.walking[characterNumber]];
}

export function getActiveCharacter() {
    return activeCharacter.character;
}

export function getAllCharacters() {
    return allCharacters;
}

export const editAvatar = async (avatar) => {
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localUser && localUser.accessToken) {
        return axios.put("/v1/users/", {
            updateQuery: {
                $set: {
                    "avatar": avatar
                }
            }
        }, {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        }).then((response) => {
            if (response.data.error) throw response.data.error

            return response.data.data;
        });
    }
}