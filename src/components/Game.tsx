import React from "react";
import Grid from "@mui/material/Grid";

const Game: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={1} style={{ background: "red" }}>
        users
      </Grid>
      <Grid container direction="column" item xs={10} height="100vh">
        <Grid item xs={1} style={{ background: "green" }}>
          navigation
        </Grid>
        <Grid item xs={11} style={{ background: "green" }}>
          <iframe
            title="wikipedia-content"
            src="https://en.wikipedia.org/wiki/Software_engineering"
            style={{ height: "100%", width: "100%" }}
            frameBorder="0"
          />
        </Grid>
      </Grid>
      <Grid item xs={1} style={{ background: "red" }}>
        page history
      </Grid>
    </Grid>
  );
};

export default Game;
