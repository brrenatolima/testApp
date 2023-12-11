import React, { useContext, useState } from "react";
import UserContext from "../../context/user";
import {  Flex, Heading, Icon, Input, Link, Pressable } from "native-base";
import Button from "../../components/Button";
import axios from "axios";
import { Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Login() {

    const userData = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        console.log('Entrou no método login')
        axios.post("http://192.168.0.100:3000/user/login", {
            username: username,
            password: password,
          })
          .then(function (response) {
            console.log(response);
            userData.setUser({
              name: username,
              email: password,
              token: response.data.token
            });
            console.log(userData.user?.token)
          })
          .catch(function (error) {
            console.error("error", error);
            console.error(username);
            console.error(password);
            Alert.alert("Error", "usuário ou senha inválidos");
          });
    }
    // 
    const [show, setShow] = React.useState(false);

    return (
            <Flex p={8} flex={1} justifyContent='center' alignItems='center'>
                <Heading>Tela de Login</Heading>

                <Input 
                  mt={"1.5"}
                  w={{ base: "90%", md: "25%" }} 
                  InputLeftElement={<Icon as={Ionicons} name={'person'} size={5} ml="2" color="muted.400" />} 
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
                    <Button  content="Login" handleClick={handleLogin} />
                </Flex>

                <Link marginTop={"20%"} _text={{textDecoration:"none"}} onPress={()=> {console.log("clicou")}}>Não tem conta? Crie uma agora mesmo!</Link>
                
            </Flex>
    );
}