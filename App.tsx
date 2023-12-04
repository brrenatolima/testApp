import { NativeBaseProvider,  StatusBar} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import THEME from './src/theme';
import Wrapper from './src/screens/Wrapper';
import { useState } from 'react';
import UserContext from './src/context/user';

export default function App() {

  const [user, setUser] = useState(null);
  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{ user, setUser}}>
        <StatusBar barStyle={"light-content"} />
        <Wrapper/>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
