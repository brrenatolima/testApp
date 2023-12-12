import React, { useContext, useState } from "react";
import UserContext from "../../context/user";
import {  Flex, Heading, Icon, Input, Link, Pressable } from "native-base";
import Button from "../../components/Button";
import { Alert  } from "react-native";


import { Ionicons, AntDesign } from '@expo/vector-icons';
import { login, register } from "../../services/auth";

export default function Login() {

    const userData = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isWaiting, setIsWaiting] = React.useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = () => {
      setUsername(username.toLocaleLowerCase());
      setIsWaiting(true);
     
      login({username, password})
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
       setIsWaiting(false);
    }

    const handleRegister = () => {
      setUsername(username.toLocaleLowerCase());
      setIsWaiting(true);
     
      register({username, password})
          .then(function (response) {
            console.log(response);
            handleLogin();
          })
          .catch(function (error) {
            console.error("error", error);
            console.error(username);
            console.error(password);
          });
       setIsWaiting(false);
    }
    
    const [show, setShow] = React.useState(false);

    return (
            <Flex p={8} flex={1} justifyContent='center' alignItems='center'>
        {
          isLogin ?
            <Heading>Login</Heading>
            :
            <Heading>Criar conta</Heading>
        }

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
                      <Icon as={Ionicons} name={show ? "eye" : "eye-off-outline"} size={5} mr="2" color="muted.400" />
                    </Pressable>
                  }
                  placeholder="Senha" 
                  value={password}  
                  onChangeText={setPassword}
                />

                <Flex width={'100%'}>
                  {
                    isLogin ?
                    <Button  content="Login" handleClick={handleLogin} icon={ isWaiting ? <Icon as={AntDesign} size={5} name={"loading"} mr="2" color="muted.400" /> : <Icon as={AntDesign} size={5} mr="2" color="muted.400" name={"login"} />} />
                    :
                    <Button  content="Registrar" handleClick={handleRegister} icon={ isWaiting ? <Icon as={AntDesign} size={5} name={"loading"} mr="2" color="muted.400" /> : <Icon as={AntDesign} size={5} mr="2" color="muted.400" name={"login"} />} />
                  }
                    
                </Flex>

                {
                  isLogin ?
                  <Link marginTop={"20%"} _text={{textDecoration:"none"}} onPress={()=> {setIsLogin(!isLogin)}}>Não tem conta? Crie uma agora mesmo!</Link>
                  :
                  <Link marginTop={"20%"} _text={{textDecoration:"none"}} onPress={()=> {setIsLogin(!isLogin)}}>Já tem conta? Faça login!</Link>
                
                }

                
            </Flex>
    );
}