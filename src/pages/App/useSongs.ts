import * as React from "react";

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
    const [songs, setSongs] = React.useState<ISongs[] | null>(null);
    const [songError, setSongError] = React.useState<IError | null>(null);
  
    async function getSongs() {
      try {
        const songsData = await fetch("https://queen-songs.herokuapp.com/songs");
        const data = await songsData.json();
        setSongs(data);
      } catch (error) {
        setSongError(error);
      }
    }

    React.useEffect(() => {
        getSongs();
      }, []);
    
      return [songs, songError]
}