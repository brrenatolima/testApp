import { Box, Flex, Heading, IconButton } from "native-base";
import { useContext } from "react";
import UserContext from "../../context/user";
import {MaterialIcons} from '@expo/vector-icons'

export default function Albums() {

    const userData = useContext(UserContext);


    return (
        <Flex safeAreaTop p={5} flex={1}  alignItems='center' bg={"primary.100"}>

            <Box height={"10%"} alignSelf={"flex-start"} width={"100%"}>
               <Heading color={"secondary.100"} fontSize={"xl"}>Nome do Álbum</Heading>
               {/* <Heading color={"secondary.100"} fontSize={"sm"} alignSelf={"flex-end"} onPress={logout}>Logout</Heading> */}
              
            </Box>
              
            

        </Flex>
    );
}