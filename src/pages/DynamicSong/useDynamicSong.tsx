import * as React from "react";

type ISong = {
  id: number;
  title: string;
  lyrics: string;
  album: string;
};

export default function useDynamicSong() {
  const [song, setSong] = React.useState<ISong | null>(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const locationSplit = global.location.href.split("/");
    const id = global.location.href.split("/").length - 1;
    console.log(locationSplit, id, locationSplit[id]);
    fetch("https://queen-songs.herokuapp.com/songs/" + locationSplit[id])
      .then((res) => res.json())
      .then((song) => setSong(song))
      .catch((err) => setError(err));
  }, []);
  return [song, error];
}
