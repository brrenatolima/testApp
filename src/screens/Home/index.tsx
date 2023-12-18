import { Flex, HStack, IconButton, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext, { storage } from "../../context/user";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import Storie from "../../components/Storie";
import { getAlbums, getStories } from "../../services/album";
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Wrapper: { id: number } | undefined;
    Home: { id: number } | undefined;
    Albums: { id: number } | undefined;
  };

  
export default function Home() {

    const userData = useContext(UserContext);
    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [albums, setAlbums] = useState();
    const [stories, setStories] = useState();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (selectedAlbum) {
            // console.log('Mudou o álbum, agora é o ', selectedAlbum)
            navigation.navigate("Albums");
        }
    }, [selectedAlbum]);

    useEffect(() => {
        console.log(userData);
        if (userData && userData.user && userData.user.token) {
            getAlbums(userData.user.token).then(response => setAlbums(response.data)).catch(e => console.log("erro", e));
            getStories(userData.user.token).then(response => setStories(response.data)).catch(e => console.log("erro", e));
        }
    }, []);

    const logout = () => {
        console.log('Clicou em logout');
        const userDb = storage.getString("user");
        console.log(userData);
        storage.delete("user");
        userData.setUser(null);
    }

    useEffect(() => {
        if(!userData || !userData.user || !userData.user.token){
            navigation.navigate('Wrapper');
        }
    }, [userData])


    return (
        <Flex safeAreaTop p={5} flex={1} justifyContent='center' alignItems='center' bg={"primary.100"}>
            <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
            <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold">
          Olá, {userData.user!.name}
          </Text>
        </HStack>
        <HStack>
        <IconButton alignSelf={"flex-end"} ml={4} style={{backgroundColor: "#FFF", borderRadius: 100}} onPress={logout} _icon={{
                as: MaterialIcons,
                name: "logout",
                color: "primary.100"
               }} />
                           </HStack>
            </HStack>

          

               {/* Stories */}
               <Text style={{color: "#FFF"}} fontSize={'xs'} alignSelf={"flex-start"}>Artistas mais ouvidos</Text>

               <FlatList style={{marginTop: "5%"}} horizontal={true} data={stories} renderItem={ ({item}) => <Storie name={item.name} img={item.image} /> } />
            
            <Text style={{color: "#FFF"}} fontSize={'xs'} alignSelf={"flex-start"}>Albuns mais ouvidos</Text>



            {/* Albuns */}
            <FlatList horizontal={true}
                data={albums}
                renderItem={({ item }) => <Card album={item.album} setSelectedAlbum={setSelectedAlbum} id={item.id} music={item.music} img={item.img} />}
                keyExtractor={(item) => item.id}
            />
            {
                selectedAlbum !== "" ? (<Selected text={selectedAlbum} />) : <></>
            }
        </Flex>
    );
}