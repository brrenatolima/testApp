import { createContext } from "react";
import { MMKV } from "react-native-mmkv";


export type RootStackParamList = {
    Wrapper: { id: number } | undefined;
    Home: { id: number } | undefined;
    Albums: { id: number } | undefined;
  };
  
export type IUser = {
    name : string;
    email: string;
    token : string | null;
}
type IUserContext = {
    user: IUser | null
    setUser : (userData : IUser | null) => void 
}

export const storage = new MMKV({
    id: 'movieapp'
  });

const UserContext = createContext<IUserContext>({ user: null, setUser: () => {} });

export default UserContext
