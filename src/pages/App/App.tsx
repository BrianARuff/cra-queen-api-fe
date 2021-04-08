import FilterSongs from "../../components/FilterSongs/FilterSongs";
import Song from "../../components/Song/Song";
import useSongs from "./useSongs";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useForm from "./useForm";
import "./App.css";
import Loader from "../../components/Loader/Loader";

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
      style={{ textAlign: "center", overflow: "hidden", minHeight: "100vh" }}
    >
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
                <Grid key={song.id} item>
                  <Song song={song} />
                </Grid>
              ))}
          </Grid>
        )}
      </section>
    </Paper>
  );
}
