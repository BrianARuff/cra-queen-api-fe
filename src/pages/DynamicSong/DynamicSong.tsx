import * as React from "react";
import useDynamicSong from "./useDynamicSong";

export default function DynamicSong() {
  const [song, error] = useDynamicSong();
  return error ? (
    <p>Error loading song...</p>
  ) : !song ? (
    <p>Loading...</p>
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
