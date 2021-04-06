import { useState } from "react";
import { Link } from "react-router-dom";
import BrandButton from "../BrandButton/BrandButton";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

type IProps = {
  song: {
    id: number;
    title: string;
    lyrics: string;
    album: string;
  };
};

export default function Song(props: IProps) {
  const classes = useStyles();

  const { title, lyrics, id } = props.song;

  const [fullLen, setFullLen] = useState<boolean>(false);

  function handleLyricsLength() {
    setFullLen(!fullLen);
  }

  return (
    <Card className={classes.root} data-id={`song-${id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="queen album cover"
          className={classes.root}
          image={
            props.song.album === "Queen"
              ? "/queen.webp"
              : props.song.album === "Queen II"
              ? "/queen2.jpg"
              : "/queen3.jpg"
          }
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ textDecoration: "underline" }}
          >
            <Link to={`/${id}`}>{title}</Link>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            data-testid="lyrics"
          >
            {!fullLen ? lyrics.slice(0, 300) + "..." : lyrics}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BrandButton handleLyricsLength={handleLyricsLength} />
      </CardActions>
    </Card>
  );
}
