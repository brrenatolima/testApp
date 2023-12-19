import { Container, Image, Card as CardNative } from "native-base";
import React, { useEffect, useState } from "react";
import { Touchable, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { IAlbum, addFavAlbum, favAlbums } from "../../context/album";


interface Props{
    id: string,
    description?: string,
    music?: string,
    album? : string,
    img?: string,
    setSelectedAlbum?: (album : string) => void,
    setSelectedId: (id : string) => void,
}

export default function Card({img, music, id, album, setSelectedAlbum, setSelectedId} : Props) {

    function addFav(id: string) {
        if (!isFavorite) {
            addFavAlbum(id);
            setIsFavorite(true);
        } else {
            setIsFavorite(false)
        }
    }

    const favoritesAlbums = favAlbums;
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if(favoritesAlbums.find((elem : IAlbum) => elem.id === id)){
            setIsFavorite(true);
        }
    } , [])

    return (<>
    <CardNative>
        <TouchableOpacity onPress={() => setSelectedId(id)}>
            <Image source={{ uri: img }} alt="Alternate Text" size="xl" m={2} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10}} onPress={() => addFav(id)}>
            {
            isFavorite?
            <Ionicons name="heart-dislike" color={"#FFF"} size={20} />:
            <Ionicons name="heart" color={"#FFF"} size={20} />
            }
        </TouchableOpacity>
    </CardNative>
    
    </>
       
        
    )
}