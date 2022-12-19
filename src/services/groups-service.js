import axios from "../api/axios";
import { getCurrentUser } from "./auth-service";

// export const getGroups = async () => {
//     const localUser = JSON.parse(localStorage.getItem("user"))

//     const result = await getCurrentUser()
//     console.log(result);
//     if (result) {
//         const promises = [];
//         console.log(result._id);
//         result.groups.forEach((group) => {
//             console.log(group)
//             promises.push(axios.get("/v1/groups"+ result.group.groupName, {
//                 headers: { Authorization: `Bearer ${localUser.accessToken}` }
//             }).then(async (response) => {
//                 if (response.data.error) throw response.data.error

//                 const user = await axios.get("/v1/groups"+ result.group.groupName, {
//                     headers: { Authorization: `Bearer ${localUser.accessToken}` }
//                 }).then((response) => {
                    
//                     if (response.data.error) throw response.data.error
                    
//                     return response.data.data;
//                 })


//                 return { user: user, gameSession: response.data.data };
//             }));
//         })

//         return await Promise.all(promises);
//     }

//     return null
// }

// export const addGroup = async (groupId) => {
//     const localUser = JSON.parse(localStorage.getItem("user"))

//     return await axios.put("/v1/users", {
//         updateQuery: {
//             $push: {
//                 groupID: groupId
//             }
//         },
//     }, {
//         headers: { Authorization: `Bearer ${localUser.accessToken}` }
//     }).then(async (response) => {
//         if (response.data.error) throw response.data.error

//         return response.data.data;
//     })

// }

// export const removeGroup = async (userId, name, groupImage) => {
//     const localUser = JSON.parse(localStorage.getItem("user"))

//     return await axios.put("/v1/users", {
//         updateQuery: {
//             $pull: {
//                 groupName: name,
//                 member: userId,
//                 image: groupImage
//             }
//         },
//     }, {
//         headers: { Authorization: `Bearer ${localUser.accessToken}` }
//     }).then(async (response) => {
//         if (response.data.error) throw response.data.error

//         return response.data.data;
//     })
// }

export const createGroups = (name, description, members, admin, image) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return axios.post("/v1/groups", {
        name,
        description,
        members,
        admin,
        image
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then((response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    });
};

export const getAllGroups = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const groups = await axios.get("/v1/groups/", {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    })

    return groups.data.data
}