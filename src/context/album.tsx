import { createContext, useState } from "react";
import { getAlbums } from "../services/album";


export type IAlbum = {
    id: number;
    album : string;
    img : string;
}

type IAlbumContext = {
    album : IAlbum | null;
    setAlbum : (albumData : IAlbum | null) => void;
}



const AlbumContext = createContext<IAlbumContext | null>({album : null, setAlbum : () => {}});

export default AlbumContext;