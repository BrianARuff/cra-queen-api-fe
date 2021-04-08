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
    const [songError, setSongError] = useState<IError>({message: ""});

    useEffect(() => {
      const fetchSong = async () => {
        try {
          const data: any = await fetch("https://queen-songs.herokuapp.com/songs")
          .then(res => res.json());
          setSongs(data)
        } catch (error) {
          setSongError(error);
        }
      }
      fetchSong()
    }, []);
    
      return {songs, songError}
}