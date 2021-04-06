import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

type IProps = {
  song: {
    id: number;
    title: string;
    lyrics: string;
    album: string;
  };
};

export default function Song(props: IProps) {
  const { title, album, lyrics, id } = props.song;
  const [fullLen, setFullLen] = useState<boolean>(false);
  function handleSwitchSongLength() {
    setFullLen(!fullLen);
  }
  return (
    <div
      style={{
        width: "18.75rem",
        margin: "1.25rem",
      }}
      data-id={`song-${id}`}
    >
      <h2 style={{ textDecoration: "underline" }}>
        <Link to={`/${id}`}>{title}</Link>
      </h2>
      <h3>{album}</h3>
      <p data-testid="lyrics">
        {!fullLen ? lyrics.slice(0, 300) + "..." : lyrics}
      </p>
      <Button
        variant="contained"
        color="primary"
        data-testid="button"
        onClick={handleSwitchSongLength}
      >
        Show More Lyrics
      </Button>
    </div>
  );
}
