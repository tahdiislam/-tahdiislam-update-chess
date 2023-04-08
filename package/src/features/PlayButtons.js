import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, ButtonGroup, Grid, Stack } from "@mui/material";
import * as mainButtonsConst from "../features/mainButtonsConst";
import * as modeConst from "../features/mode/modeConst";
import Wording from "../common/Wording";
import PlayOnlineDialog from "./dialog/PlayOnlineDialog";
import * as playOnlineDialog from "../features/dialog/playOnlineDialogSlice";
import WsAction from "../features/ws/WsAction";
import PlayComputerDialog from "./dialog/PlayComputerDialog";

const PlayButtons = ({ props }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props?.playMethod?.online && !props?.playMethod?.computer) {
      dispatch(playOnlineDialog.open());
      WsAction.onlineGames(state);
    } else if (props?.playMethod?.computer && !props?.playMethod?.online) {
      dispatch(playComputerDialog.open());
    }
  }, [props?.playMethod]);

  /* const disabled = state.mode.name === modeConst.PLAY &&
    state.mode.play.accepted &&
    (!state.mode.play.draw || state.mode.play.draw === Wording.verb.PROPOSE.toLowerCase()) &&
    !state.mode.play.resign &&
    !state.mode.play.resign &&
    !state.mode.play.leave &&
    !state.mode.play.timer.over &&
    !state.board.isMate; */

  return (
    <Grid>
      {/* <Stack spacing={2}>
        <ButtonGroup
          size="large"
          orientation="vertical"
          aria-label="Play Online"
          fullWidth={true}
          disabled={disabled}
        >
          <Button
            startIcon={<LanguageIcon />}
            variant={state.mainButtons.name === mainButtonsConst.PLAY_ONLINE ? "contained" : "outlined"}
            onLoad={() => {
              dispatch(playOnlineDialog.open());
              WsAction.onlineGames(state);
            }}
          >
            Play Online
          </Button>
        </ButtonGroup>
      </Stack> */}
      <PlayOnlineDialog />
      <PlayComputerDialog />
    </Grid>
  );
};

export default PlayButtons;
