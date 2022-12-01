import { logout } from "../../services/auth-service.js"

function Logout({setCurrentUser}) {

    const logoutHandler = async () => {
        await logout()
        setCurrentUser(undefined)
        window.location.href="/login"
    }

    logoutHandler()

}
export default Logout;