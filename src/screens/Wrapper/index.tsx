import { useContext } from "react";
import {Text} from "react-native"
import UserContext from "../../context/user";
import Home from "../Home";
import Login from "../Login";

export default function Wrapper() {
    
    const userData = useContext(UserContext);

    return (
        userData.user != null ? <Home /> : <Login/>
    )
}