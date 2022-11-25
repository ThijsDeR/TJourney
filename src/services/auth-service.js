import axios from "../api/axios.js";

export const signup = (email, password) => {
    return axios.post("/v1/users", {
        email,
        password,
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

export const login = (email, password) => {
    return axios.post("/v1/users/login", {
        email: email,
        password: password,
    }).then((response) => {
        console.log(response.data.data.accessToken)
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

