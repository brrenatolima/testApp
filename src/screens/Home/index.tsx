import { Box, Flex, Heading, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext, { DATA, artistStories } from "../../context/user";
import { Alert, FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import Storie from "../../components/Storie";


export default function Home() {

    
    const userData = useContext(UserContext);



    const [selectedAlbum, setSelectedAlbum] = useState("");

    useEffect(() => {
        // if (selectedAlbum == 'Owane'){
        //     Alert.alert('Parabéns', 'Você selecionou um ótimo álbum')
        // }
        console.log('Mudou o álbum, agora é o ', selectedAlbum)
    }, [selectedAlbum]);

    useEffect(() => {
        console.log('chamou o useEffect com array vazio - onCreate, ao iniciar a tela')
    }, [])

    return (
        <Flex safeAreaTop p={5} flex={1} justifyContent='center' alignItems='center' bg={"primary.100"}>

            <Box height={"25%"}>
               <Heading color={"secondary.100"} fontSize={"xl"} alignSelf={"flex-start"}>Olá, {/* {userData.user!.name}*/}</Heading>
            
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