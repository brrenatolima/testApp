import { Text, Image, Flex } from "native-base";
import { TouchableOpacity } from "react-native";

interface Props {
    name: string,
    img : string,
    setArtist? : (name:string) => void
}

export default function Storie({ name, img }: Props) {
    return (
        <TouchableOpacity >
            <Image source={{ uri: img }} borderColor={"primary.200"} borderWidth={"4"} borderRadius={100} alt="Alternate Text" size="md" m={2} />
            <Flex alignItems={"center"}>
                <Text color={"green.400"}>{name}</Text>
            </Flex>
        </TouchableOpacity>
    );
}