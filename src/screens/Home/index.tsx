import { Flex, Heading, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext, { DATA } from "../../context/user";
import { Alert, FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";


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

    // console.log("user data", userData)
    return (
        <Flex safeAreaTop p={5} flex={1} justifyContent='center' alignItems='center' bg={"primary.100"}>
            <Heading color={"secondary.100"} fontSize={"4xl"}>Wellcome Back {userData.user!.name}</Heading>
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