import { NativeBaseProvider,  StatusBar} from 'native-base';
import THEME from './src/theme';
import Wrapper from './src/screens/Wrapper';
import { useEffect, useState } from 'react';
import UserContext, { IUser, storage } from './src/context/user';



export default function App() {

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    console.log("user", user);
    if(user != null){
      storage.set("user", JSON.stringify(user))
    }
  }, [user]);

  useEffect(() => {
    const userDb = storage.getString('user');
    if (userDb) {
      setUser(JSON.parse(userDb));
    }
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <UserContext.Provider value={{ user, setUser}}>
        <StatusBar barStyle={"dark-content"} />
        <Wrapper/>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
