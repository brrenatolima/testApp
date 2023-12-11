import { Flex, Heading, Icon, Input, Link, Pressable } from "native-base";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Button from "../../components/Button";

export default function Register() {
    const [show, setShow] = React.useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
            <Flex p={8} flex={1} justifyContent='center' alignItems='center'>
                <Heading>Crie sua conta</Heading>

                <Input 
                  mt={"1.5"}
                  w={{ base: "90%", md: "25%" }} 
                  InputLeftElement={<Icon as={Ionicons} name={'person'}  size={5} ml="2" color="muted.400" />} 
                  placeholder="Usuário" 
                  value={username}
                  onChangeText={setUsername}
                />

                <Input w={{ base: "90%", md: "25%" }}
                  mt={"1.5"}
                  type={show ? "text" : "password"} 
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon as={Ionicons} 
                      name={show ? "eye" : "eye-off-outline"} 
                      size={5} 
                      mr="2" 
                      color="muted.400"
                    />
                    </Pressable>
                  }
                  placeholder="Senha" 
                  value={password}  
                  onChangeText={setPassword}
                />

                <Flex width={'100%'}>
                    <Button  content="Login" handleClick={()=> {console.log("Criar conta")}}/>
                </Flex>

                <Link marginTop={"20%"} _text={{textDecoration:"none"}} onPress={()=> {console.log("clicou")}}>Não tem conta? Crie uma agora mesmo!</Link>
                
            </Flex>
    );
}