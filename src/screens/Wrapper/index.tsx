import { useContext } from "react";
import UserContext from "../../context/user";
import AlbumContext from "../../context/album";
import Home from "../Home";
import Login from "../Login";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Register from "../Register";

const Tab = createMaterialTopTabNavigator();

export default function Wrapper() {
    
    const userData = useContext(UserContext);

    return (
        userData.user != null ?
        <AlbumContext.Provider value={null}>
            <Home /> 
        </AlbumContext.Provider> 
        : 
        (
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login}/>
                <Tab.Screen name="Register" component={Register}/>
            </Tab.Navigator>
        )
        
    )
}