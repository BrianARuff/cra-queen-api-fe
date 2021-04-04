import { Link } from "react-router-dom";

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
  return (
    <div
      style={{
        width: "300px",
        margin: "20px",
      }}
    >
      <h2 style={{ textDecoration: "underline" }}>
        <Link to={`/${id}`}>{title}</Link>
      </h2>
      <h3>{album}</h3>
      <p>{lyrics.slice(0, 300)}...</p>
    </div>
  );
}
