import * as React from "react";
import FilterSongs from "../../components/FilterSongs/FilterSongs";
import Song from "../../components/Song/Song";
import useSongs from "./useSongs";
import "./App.css";

type IFormData = {
  filter: string;
};

type ISong = {
  id: number;
  title: string;
  lyrics: string;
  album: string;
};

function App() {
  const [songs, songError] = useSongs();

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
        {songError ? (
          <p>Error loading songs...</p>
        ) : !songs ? (
          <p data-testid="loadingText">Loading...</p>
        ) : (
          songs
            // @ts-ignore
            .filter(
              (song: ISong) =>
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
            .map((song: ISong) => <Song key={song.id} song={song} />)
        )}
      </section>
    </div>
  );
}

export default App;
