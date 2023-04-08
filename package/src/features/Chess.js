import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
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
import HeuristicsBar from "./HeuristicsBar";
import PlayButtons from "./PlayButtons";
import WsAction from "../features/ws/WsAction";

const Chess = ({ props }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props?.online) {
      dispatch(playOnlineDialog.open());
      WsAction.onlineGames(state);
    }
  }, [props.online]);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <VariantBoard props={props} />
            <HeuristicsBar />
          </Grid>
          <Grid item xs={12} md={3}>
            <Game props={props} />
            <GameTable />
            <StartedButtonsAnalysisMode />
            <StartedButtonsGmMode />
            <InfoAlert />
          </Grid>
          <Grid item xs={12} md={2}>
            <PlayButtons />
          </Grid>
        </Grid>
        <CheckmateSkillsDialog />
        <EndgameSkillsDialog />
        <LoadFenDialog />
        <LoadPgnDialog />
        <OpeningsStatsDialog />
        <PlayersStatsDialog props={props} />
        <EventsStatsDialog props={props} />
        <ProgressDialog />
      </Provider>
    </ThemeProvider>
  );
};

export default Chess;
