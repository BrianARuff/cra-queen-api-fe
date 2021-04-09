import React, { Suspense } from "react";
import FilterSongs from "../../components/FilterSongs/FilterSongs";
import useSongs from "./useSongs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useForm from "./useForm";
import "./App.css";
import Loader from "../../components/Loader/Loader";
// import Song from "../../components/Song/Song";
const Song = React.lazy(() => import("../../components/Song/Song"));

type ISong = {
  id: number;
  title: string;
  lyrics: string;
  album: string;
};

export default function App() {
  const { songs, songError } = useSongs();
  const { formData, handleFilterSongs } = useForm();

  return (
    <Paper
      elevation={5}
      style={{ textAlign: "center", overflow: "hidden", minHeight: "100vh" }}
    >
      <h1>Queen Songs</h1>
      {songs ? <FilterSongs handleFilterSongs={handleFilterSongs} /> : null}
      <section
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {songError.message.length ? (
          <p>Error loading songs...</p>
        ) : !songs ? (
          <>
            <p data-testid="loadingText">Loading...</p>
            <Loader />
          </>
        ) : (
          <Grid
            style={{ margin: "1.25rem" }}
            container
            spacing={3}
            justify="center"
            alignItems="baseline"
            data-testid="grid"
          >
            {songs
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
                    .split(" ")
                    .join(" ")
                    .includes(formData.filter.toLowerCase())
              )
              .map((song: ISong) => (
                <section key={song.id}>
                  <Suspense fallback={<Loader />}>
                    <Grid item>
                      <Song song={song} />
                    </Grid>
                  </Suspense>
                </section>
              ))}
          </Grid>
        )}
      </section>
    </Paper>
  );
}
