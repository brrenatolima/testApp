import { Container, Image } from "native-base";
import { Touchable, TouchableOpacity } from "react-native";

interface Props{
    id?: string,
    description?: string,
    music: string,
    album : string,
    img: string,
    setSelectedAlbum: (album : string) => void
}

export default function Card({img, music, id, album, setSelectedAlbum} : Props) {
    return (
       <TouchableOpacity onPress={() => setSelectedAlbum(album)}>
            <Image source={{
            uri: img
        }} alt="Alternate Text" size="xl" m={2} />
            </TouchableOpacity>
        
    )
}