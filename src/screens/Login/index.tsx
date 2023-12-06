import { useContext } from "react";
import UserContext from "../../context/user";
import { Flex, Heading, Input } from "native-base";
import Button from "../../components/Button";

export default function Login() {
    const userData = useContext(UserContext);
    return (
            <Flex p={5} flex={1} justifyContent='center' alignItems='center'>
                <Heading>Tela de Login</Heading>
                <Input mt={2}/>
                <Input mt={2}/>
                <Flex width={'100%'}>
                    <Button  content="Sign In" handleClick={() => userData.setUser({name : 'Renato Lima', email : 'renatomdd@gmail.com'})}/>
                </Flex>
                
            </Flex>
    );
}