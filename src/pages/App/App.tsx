import * as React from "react";
import FilterSongs from "../../components/FilterSongs/FilterSongs";
import Song from "../../components/Song/Song";
import "./App.css";

type ISongs = {
  id: number;
  title: string;
  lyrics: string;
  album: string;
}[];

type IError = {
  message: string;
};

type IFormData = {
  filter: string;
};

function App() {
  const [songs, setSongs] = React.useState<ISongs | null>(null);
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

  const [formData, setFormData] = React.useState<IFormData>({
    filter: "",
  });
  function handleFilterSongs(e: React.BaseSyntheticEvent) {
    setFormData(() => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Queen Songs</h1>
      <FilterSongs handleFilterSongs={handleFilterSongs} />
      <section
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {songError?.message ? (
          <p>Error loading songs...</p>
        ) : !songs ? (
          <p>Loading...</p>
        ) : (
          songs
            .filter(
              (song) =>
                song.title
                  .toLowerCase()
                  .includes(formData.filter.toLowerCase()) ||
                song.album
                  .toLowerCase()
                  .includes(formData.filter.toLowerCase()) ||
                song.lyrics
                  .toLowerCase()
                  .includes(formData.filter.toLowerCase())
            )
            .map((song) => <Song key={song.id} song={song} />)
        )}
      </section>
    </div>
  );
}

export default App;
