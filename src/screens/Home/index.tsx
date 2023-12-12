import { Box, Flex, Heading, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext, { DATA, artistStories, storage } from "../../context/user";
import { Alert, FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import Storie from "../../components/Storie";
import { getAlbums } from "../../services/album";


export default function Home() {

    const userData = useContext(UserContext);

    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [albums, setAlbums] = useState(DATA);

    useEffect(() => {
        console.log('Mudou o álbum, agora é o ', selectedAlbum)
    }, [selectedAlbum]);

    useEffect(() => {
        console.log(userData);
        // console.log('chamou o useEffect com array vazio - onCreate, ao iniciar a tela')
        if (userData && userData.user && userData.user.token) {
            getAlbums(userData.user.token).then(response => setAlbums(response.data)).catch(e => console.log("erro", e));

        }
    }, []);

    const logout = () => {
        const userDb = storage.getString("user");
        console.log(userDb);
        storage.delete("user");
        // Navegação para login
    }

    return (
        <Flex safeAreaTop p={5} flex={1} justifyContent='center' alignItems='center' bg={"primary.100"}>

            <Box height={"25%"}>
               <Heading color={"secondary.100"} fontSize={"xl"} alignSelf={"flex-start"}>Olá, {userData.user!.name}</Heading>
               <Heading color={"secondary.100"} fontSize={"sm"} alignSelf={"flex-end"} onPress={logout}>Logout</Heading>
            
               {/* Stories */}
               <FlatList style={{marginTop: "5%"}} horizontal={true} data={artistStories} renderItem={ ({item}) => <Storie name={item.name} img={item.image} /> } />
            </Box>
            <Text style={{color: "#FFF"}} fontSize={'xs'} alignSelf={"flex-start"}>Albuns mais ouvidos</Text>

            {/* Albuns */}
            <FlatList horizontal={true}
                data={DATA}
                renderItem={({ item }) => <Card album={item.album} setSelectedAlbum={setSelectedAlbum} id={item.id} music={item.music} img={item.img} />}
                keyExtractor={(item) => item.id}
            />
            {
                selectedAlbum !== "" ? (<Selected text={selectedAlbum} />) : <></>
            }
                
            

        </Flex>
    );
}