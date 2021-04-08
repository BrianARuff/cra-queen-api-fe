import { useState, useEffect } from "react";

type ISongs = {
    id: number;
    title: string;
    lyrics: string;
    album: string;
  }[];
  
  type IError = {
    message: string;
  };

export default function useSongs() {
    const [songs, setSongs] = useState<ISongs | null>(null);
    const [songError, setSongError] = useState<IError | null>(null);

    useEffect(() => {
      fetch("https://queen-songs.herokuapp.com/songs")
        .then(res => res.json())
        .then(songs => setSongs(songs))
        .catch(err => setSongError(err));
      }, []);
    
      return {songs, songError}
}