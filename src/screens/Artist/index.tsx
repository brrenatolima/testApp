import React from "react";
import { Text, Image, Flex, Box, Heading } from "native-base";
import { Ionicons } from '@expo/vector-icons';

interface Props {
    route : any;
}

export default function Artist({route} : Props) {
    const {id, name, img} = route.params;
    return (
        <Flex safeAreaTop p={10} flex={1} alignItems='center' bg={"primary.100"}>

            <Box height={"10%"} alignSelf={"flex-start"} width={"100%"}>
                <Heading color={"secondary.100"} alignSelf={"center"} fontSize={"2xl"}>{name} </Heading>
            </Box>
            <Image source={{ uri: img }} borderRadius={200} alt={name} size="2xl" />

            <Box alignSelf={"flex-start"} mt={10}>
                <Text color={"secondary.100"}>Top Hits <Ionicons name="musical-note-sharp" size={20} /></Text>
            </Box>

        </Flex>

        
    );
}
