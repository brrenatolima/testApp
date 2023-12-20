import { Box, Flex, HStack, Heading, IconButton, Image, Text } from "native-base";
import { useEffect, useState } from "react";
import { RootStackParamList } from "../../context/user";
import { Ionicons } from '@expo/vector-icons';
import { IAlbum, addFavAlbum, favAlbums, removeFavAlbum } from "../../context/album";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props{
    route: any,
}

export default function Albums({route} : Props) {

    const {album} = route.params;

    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if(favAlbums.find((elem : IAlbum) => elem.id === album.id)){
            setIsFavorite(true);
        }
    } , []);

    function addFav(id: string) {
        
        
        if (!isFavorite) {
            addFavAlbum(id);
            setIsFavorite(true);
        } else {
            removeFavAlbum(id);
            setIsFavorite(false);
        }
    }

    function navToHome() {
        navigation.navigate("Home")
    }

    return (
        <Flex safeAreaTop p={10} flex={1} alignItems='center' bg={"primary.100"}>


<HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                <HStack alignItems="center" alignSelf={"center"}>
                    <Text color="white" fontSize="20" fontWeight="bold">
                    </Text>
                </HStack>
                <HStack>
                    <IconButton alignSelf={"flex-end"} ml={4} style={{ backgroundColor: "#FFF", borderRadius: 100 }} onPress={() => {navToHome()}} _icon={{
                        as: Ionicons,
                        name: "home",
                        color: "primary.100"
                    }} />
                </HStack>
            </HStack>





            <Box height={"10%"} alignSelf={"flex-start"} width={"100%"}>
                <Heading color={"secondary.100"} alignSelf={"center"} fontSize={"2xl"}>{album.album} </Heading>
            </Box>
            <Image source={{ uri: album.img }} borderRadius={200} alt={album.album} size="2xl" />
            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => addFav(album.id)}>
                {
                    isFavorite ?
                        <Ionicons name="heart-dislike" color={"#FFF"} size={40} /> 
                        :
                        <Ionicons name="heart" color={"#FFF"} size={40} />
                }
            </TouchableOpacity>
            <Box alignSelf={"flex-start"} mt={10}>
                <Text color={"secondary.100"}>Top Músicas <Ionicons name="musical-note-sharp" size={20} /></Text>
            </Box>

        </Flex>
        
    );
}