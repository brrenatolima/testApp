import { useContext } from "react";
import UserContext from "../../context/user";
import Home from "../Home";
import Login from "../Login";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Register from "../Register";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function Wrapper() {
    
    const userData = useContext(UserContext);
    const navigate = useNavigation();

    return (
        userData.user != null ? <Home /> 
        : 
        (
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login}/>
                <Tab.Screen name="Register" component={Register}/>
            </Tab.Navigator>
        )
        
    )
}