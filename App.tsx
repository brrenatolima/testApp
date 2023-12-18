import { NativeBaseProvider,  StatusBar} from 'native-base';
import THEME from './src/theme';
import Wrapper from './src/screens/Wrapper';
import { useEffect, useState } from 'react';
import UserContext, { IUser, storage } from './src/context/user';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Albums from './src/screens/Albums';
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {

  const [user, setUser] = useState<IUser | null>(null);

  const Stack = createStackNavigator();

  useEffect(() => {
    console.log("user", user);
    if(user != null){
      storage.set("user", JSON.stringify(user))
    }
  }, [user]);

  useEffect(() => {
    const userDb = storage.getString("user");
    if (userDb) {
      setUser(JSON.parse(userDb));
      
    }
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{ user, setUser }}>
        <StatusBar barStyle={"dark-content"} />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Wrapper' screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Wrapper' component={Wrapper} />
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='Albums' component={Albums} options={{headerShown: true}} />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>

      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
