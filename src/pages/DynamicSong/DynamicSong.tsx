import * as React from "react";
import useDynamicSong from "./useDynamicSong";
import Loader from "../../components/Loader/Loader";

export default function DynamicSong() {
  const [song, error] = useDynamicSong();
  return error ? (
    <p>Error loading song...</p>
  ) : !song ? (
    <p>
      <Loader />
    </p>
  ) : (
    <article
      style={{
        margin: "1rem",
      }}
    >
      <h2>{song.title}</h2>
      <h3>{song.album}</h3>
      <p>{song.lyrics}</p>
    </article>
  );
}
