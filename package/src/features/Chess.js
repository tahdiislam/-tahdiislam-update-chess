import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "../index.css";
import "../assets/css/fonts.css";
import store from "../app/store";
import theme from "../styles/theme.js";
import VariantBoard from "./board/VariantBoard";
import InfoAlert from "./alert/InfoAlert.js";
import CheckmateSkillsDialog from "./dialog/CheckmateSkillsDialog";
import EndgameSkillsDialog from "./dialog/EndgameSkillsDialog";
import EventsStatsDialog from "./dialog/EventsStatsDialog";
import LoadFenDialog from "./dialog/LoadFenDialog";
import LoadPgnDialog from "./dialog/LoadPgnDialog";
import OpeningsStatsDialog from "./dialog/OpeningsStatsDialog";
import PlayersStatsDialog from "./dialog/PlayersStatsDialog";
import ProgressDialog from "./dialog/ProgressDialog";
import StartedButtonsAnalysisMode from "./mode/analysis/StartedButtonsAnalysisMode";
import StartedButtonsGmMode from "./mode/gm//StartedButtonsGmMode";
import GameTable from "./table/GameTable";
import Game from "./Game";
import PlayButtons from "./PlayButtons";

const Chess = ({ props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <VariantBoard props={props} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Game props={props} />
            <GameTable />
            <StartedButtonsAnalysisMode />
            <StartedButtonsGmMode />
            <InfoAlert />
          </Grid>
          <Grid item xs={12} md={4}>
            <PlayButtons props={props} />
          </Grid>
        </Grid>
        <CheckmateSkillsDialog />
        <EndgameSkillsDialog />
        <LoadFenDialog />
        <LoadPgnDialog />
        <OpeningsStatsDialog />
        <PlayersStatsDialog props={props} />
        <EventsStatsDialog props={props} />
      </Provider>
    </ThemeProvider>
  );
};

export default Chess;
