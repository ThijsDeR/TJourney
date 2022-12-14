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
    
        return data.data.data;
    }

    return null
};

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