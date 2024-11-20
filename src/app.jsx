import { Route, Routes } from "react-router-dom"
import { ValidateToken,IsAuthenticated } from "./components/ProtectedRoutes"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserdEdit from "./pages/UserEdit"
import UserCreate from "./pages/UserCreate"

function App() {
    return (
        <Routes>
            <Route element={<IsAuthenticated />} >
                <Route path="/signIn" element={<SignIn />} />
            </Route>

            <Route
                element={<ValidateToken />}
            >
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/create" element={<UserCreate />} />
                <Route path="/users/:userId/edit" element={<UserdEdit />} />
            </Route>
        </Routes>
    )
}

export default App