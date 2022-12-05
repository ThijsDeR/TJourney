import axios from "../api/axios.js";

export const register = (email, password, username) => {
    return axios.post("/v1/users", {
        email,
        password,
        username
    }).then((response) => {
        if (response.data.error) throw response.data.error
        
        if (response.data.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data.data;
    });
};

export const login = async (email, password) => {
    const response = await axios.post("/v1/users/login", {
        email: email,
        password: password,
    })

    if (response.data.error) throw response.data.error

    if (response.data.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
    }

    return response.data.data;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    if (localUser && localUser.accessToken) {
        const data = await axios.get("/v1/users/ownData", {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        })

        console.log("getCurrentUser", data)
    
        return data.data.data;
    }

    return null
};

