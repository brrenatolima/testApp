import { Flex, HStack, IconButton, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext, { RootStackParamList, storage } from "../../context/user";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import Selected from "../../components/Selected";
import Storie from "../../components/Storie";
import { getAlbums, getStories } from "../../services/album";
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function Home() {

    const userData = useContext(UserContext);
    const [selectedAlbum, setSelectedAlbum] = useState("");
    const [selectedId, setSelectedId] = useState("0");
    const [albums, setAlbums] = useState();
    const [stories, setStories] = useState();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    // useEffect(() => {
    //     if (selectedAlbum) {
    //         navigation.navigate("Albums", {id: selectedId});
    //     }
    // }, [selectedAlbum]);

    useEffect(() => {
        if (selectedId !== "0") {
            navigation.navigate("Albums", { id: selectedId });
        }
    }, [selectedId]);

    useEffect(() => {
        console.log(userData);
        if (userData && userData.user && userData.user.token) {
            getAlbums(userData.user.token).then(response => setAlbums(response.data)).catch(e => console.log("erro", e));
            getStories(userData.user.token).then(response => setStories(response.data)).catch(e => console.log("erro", e));
        }
    }, []);

    const logout = () => {
        const userDb = storage.getString("user");
        storage.delete("user");
        userData.setUser(null);
    }

    useEffect(() => {
        if (!userData || !userData.user || !userData.user.token) {
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
                    <IconButton alignSelf={"flex-end"} ml={4} style={{ backgroundColor: "#FFF", borderRadius: 100 }} onPress={logout} _icon={{
                        as: MaterialIcons,
                        name: "logout",
                        color: "primary.100"
                    }} />
                </HStack>
            </HStack>

            {/* Stories */}
            <Text style={{ color: "#FFF" }} fontSize={'xs'} alignSelf={"flex-start"}>Artistas mais ouvidos</Text>

            <FlatList style={{ marginTop: "5%" }} horizontal={true} data={stories} renderItem={({ item }) => <Storie name={item.name} img={item.image} />} />

            <Text style={{ color: "#FFF" }} fontSize={'xs'} alignSelf={"flex-start"}>Albuns mais ouvidos</Text>


            {/* Albuns */}
            <FlatList horizontal={true}
                data={albums}
                renderItem={({ item }) => <Card setSelectedId={setSelectedId} id={item.id} music={item.music} img={item.img} />}
                keyExtractor={(item) => item.id}
            />
            {
                selectedAlbum && selectedAlbum.toString() !== "" ? (<Selected text={selectedAlbum} />) : <></>
            }
        </Flex>
    );
}