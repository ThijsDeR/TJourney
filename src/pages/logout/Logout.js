import { logout } from "../../services/auth-service.js"

function Logout({reloadUserHandler}) {

    const logoutHandler = async () => {
        await logout()
        reloadUserHandler()
        window.location.href="/login"
    }

    logoutHandler()

}
export default Logout;