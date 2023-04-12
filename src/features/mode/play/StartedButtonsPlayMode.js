import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Stack } from "@mui/material/";
import * as modeConst from "../../../features/mode/modeConst";
import * as offerDrawDialog from "../../../features/dialog/offerDrawDialogSlice";
import * as acceptResignDialog from "../../../features/dialog/acceptResignDialogSlice";
import * as offerTakebackDialog from "../../../features/dialog/offerTakebackDialogSlice";

const StartedButtonsPlayMode = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  if (state.mode.name === modeConst.PLAY) {
    if (state.mode.play.accepted) {
      if (
        !state.board.isMate &&
        !state.mode.play.draw &&
        !state.mode.play.resign &&
        !state.mode.play.leave &&
        !state.mode.play.timer.over
      ) {
        return (
          <Fragment>
            <Stack spacing={2} direction={row}>
              <Button
                sx={{ mr: 0.5, width: "50%" }}
                variant="contained"
                size="medium"
                aria-label="Game Buttons"
                fullWidth={false}
                onClick={() => dispatch(offerDrawDialog.open())}
              >
                Offer draw
              </Button>
              <Button
                sx={{ mr: 0.5, width: "50%" }}
                variant="contained"
                size="medium"
                aria-label="Game Buttons"
                fullWidth={false}
                onClick={() => dispatch(acceptResignDialog.open())}
              >
                Resign
              </Button>
            </Stack>
            <Button
              variant="contained"
              sx={{ mt: 1.5, width: "100%" }}
              size="medium"
              aria-label="Game Buttons"
              disabled={!state.board.movetext}
              onClick={() => dispatch(offerTakebackDialog.open())}
            >
              Propose a takeback
            </Button>
          </Fragment>
        );
      }
    }
  }

  return null;
};

export default StartedButtonsPlayMode;
