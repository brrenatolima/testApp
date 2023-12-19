import { Box, Flex, Heading, Icon, IconButton, Image, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import {MaterialIcons} from '@expo/vector-icons'
import { getAlbums } from "../../services/album";
import user from "../../context/user";
import { Ionicons, AntDesign } from '@expo/vector-icons';

interface Props{
    route: any,
}

export default function Albums({route} : Props) {

    const {album} = route.params;

    return (
        <Flex  safeAreaTop p={10} flex={1}  alignItems='center' bg={"primary.100"}>
            <Box height={"10%"} alignSelf={"flex-start"} width={"100%"}>
               <Heading color={"secondary.100"} alignSelf={"center"} fontSize={"2xl"}>{album.album}</Heading>
            </Box>
            <Image source={{ uri: album.img }} borderRadius={200} alt={album.album} size="2xl"  />
            
            <Box alignSelf={"flex-start"} mt={10}>
                <Text color={"secondary.100"}>Top Músicas <Ionicons name="musical-note-sharp" size={20} /></Text>
            </Box>
            
        </Flex>
        
    );
}