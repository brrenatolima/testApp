import { createContext, useState } from "react";
import { getAlbums } from "../services/album";

export type IAlbum = {
    id: string;
    album : string;
    img : string;
}

type IAlbumContext = {
    album : IAlbum | null;
    setAlbum : (albumData : IAlbum | null) => void;
}

export const favAlbums = [];

export function addFavAlbum(id: string) {
    const fav = albumsContext.find((element:any) => element.id === id);
    favAlbums.push(fav);
}

export function removeFavAlbum(id: string) {
    const fav = albumsContext.find((element:any) => element.id === id);
    favAlbums.splice(favAlbums.indexOf(fav), 1);
}

export const albumsContext = [];

export const musicsDemo = [
    {id : '1', name : 'Musica 01'},
    {id : '2', name : 'Musica 02'},
    {id : '3', name : 'Musica 03'},
    {id : '4', name : 'Musica 04'},
]

const AlbumContext = createContext<IAlbumContext | null>({album : null, setAlbum : () => {}});

export default AlbumContext;