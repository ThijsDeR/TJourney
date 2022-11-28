import axios from "../api/axios.js";

export const register = (email, password, username) => {
    return axios.post("/v1/users", {
        email,
        password,
        username
    }).then((response) => {
        if (response.data.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data.data;
    });
};

export const login = (email, password) => {
    return axios.post("/v1/users/login", {
        email: email,
        password: password,
    }).then((response) => {
        if (response.data.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data.data;
    });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = async () => {
    const accessToken = JSON.parse(localStorage.getItem("user")).accessToken

    const data = await axios.get("/v1/users/ownData", {
        headers: { Authorization: `Bearer ${accessToken}` }
    })

    return data.data.data;

};

