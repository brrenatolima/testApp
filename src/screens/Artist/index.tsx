import React from "react";
import { Text, Image, Flex, Box, Heading, FlatList, HStack, VStack, Spacer } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { musicsDemo } from "../../context/album";

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

            <Box alignSelf={"flex-start"} p={5} mt={10} bg={"#0F2167"}>
            <Text color={"secondary.100"} style={{fontSize: 18}}>{name} - História</Text>
            <Text color={"secondary.100"}>Podemos já vislumbrar o modo pelo qual a determinação clara de objetivos auxilia a preparação e a composição dos métodos utilizados na avaliação de resultados.
 (Gerador de Lero Lero)</Text>
            
            </Box>
            
            <Box alignSelf={"flex-start"} mt={10}>
                <Text color={"secondary.100"}>Top Hits <Ionicons name="musical-note-sharp" size={20} /></Text>
            </Box>

            <FlatList mt={5} width={"100%"} data={musicsDemo} renderItem={({item}) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" >
            <HStack justifyContent="space-between">
              
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.name}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.id}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{ color: "secondary.100" }} color="secondary.100" alignSelf="flex-start">
               
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
   

   

        </Flex>

        
    );
}
