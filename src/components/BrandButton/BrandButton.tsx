import * as React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import "./BrandButton.css";

const styles = {
  default: {
    borderRadius: 0,
    textTransForm: "none",
  },
};

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
      style={styles.default}
      className="brand-button"
      onClick={props.handleLyricsLength}
    >
      Show More Lyrics
    </Button>
  );
}

export default withStyles(styles)(BrandButton);
