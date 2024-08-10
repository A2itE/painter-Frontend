const backendDomin = "http://localhost:2222"

const routingApi = {
    signUp: {
        url: `${backendDomin}/user/signUp`,
        method: "post"
    },
    login: {
        url: `${backendDomin}/user/login`,
        method: "post"
    },
    getAllUsers: {
        url: `${backendDomin}/user/getAllUsers`,
        method: "get"
    },
    getSingleUser: {
        url: `${backendDomin}/user/getSingleUser`,
        method: "get"
    },
    adminLogin: {
        url: `${backendDomin}/user/adminLogin`,
        method: "post"
    },
    contactUs: {
        url: `${backendDomin}/contactUs/createContactUs`,
        method: "post"
    },
    getAllContactUs: {
        url: `${backendDomin}/contactUs/getAllContactUs`,
        method: "get"
    },
}


export default routingApi;