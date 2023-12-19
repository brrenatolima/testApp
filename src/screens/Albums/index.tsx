import { Box, Flex, Heading, IconButton, Image } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import {MaterialIcons} from '@expo/vector-icons'
import { getAlbums } from "../../services/album";
import user from "../../context/user";

interface Props{
    route: any,
}

export default function Albums({route} : Props) {

    const userData = useContext(UserContext);
    const {album} = route.params;

    const [albums, setAlbums] = useState();

    useEffect(() => {
        
    }, [])

    return (
        <Flex safeAreaTop p={5} flex={1}  alignItems='center' bg={"primary.100"}>
            <Box height={"10%"} alignSelf={"flex-start"} width={"100%"}>
               <Heading color={"secondary.100"} fontSize={"xl"}>{album.id} - {album.album}</Heading>
            </Box>
            <Image source={{ uri: album.img }} alt={album.album} size="xl" m={2} />
        </Flex>
    );
}