import * as React from "react";
import Button from "@material-ui/core/Button";
import "./BrandButton.css";

type IProps = {
  handleLyricsLength: () => void;
};

function BrandButton(props: IProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      data-testid="button"
      className="brand-button"
      onClick={props.handleLyricsLength}
    >
      Show More Lyrics
    </Button>
  );
}

export default BrandButton;
