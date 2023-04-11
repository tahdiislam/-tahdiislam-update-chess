import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayOnlineDialog from "./dialog/PlayOnlineDialog";
import CreateInviteCodeDialog from "./dialog/CreateInviteCodeDialog";
import EnterInviteCodeDialog from "./dialog/EnterInviteCodeDialog";
import * as playOnlineDialog from "../features/dialog/playOnlineDialogSlice";
import WsAction from "../features/ws/WsAction";
import PlayComputerDialog from "./dialog/PlayComputerDialog";
import * as playComputerDialog from "../features/dialog/playComputerDialogSlice";
import * as createInviteCodeDialog from "../features/dialog/createInviteCodeDialogSlice";
import * as mode from "../features/mode/modeSlice";
import * as enterInviteCodeDialog from "../features/dialog/enterInviteCodeDialogSlice";

const PlayButtons = ({ props }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      props.playMethod.online &&
      !props.playMethod.computer &&
      !props.playMethod.enterCode &&
      !props.playMethod.playFriend
    ) {
      dispatch(playComputerDialog.close());
      dispatch(createInviteCodeDialog.close());
      dispatch(enterInviteCodeDialog.close());
      dispatch(playOnlineDialog.open());
      WsAction.onlineGames(state);
    } else if (
      props.playMethod.computer &&
      !props.playMethod.online &&
      !props.playMethod.enterCode &&
      !props.playMethod.playFriend
    ) {
      dispatch(playOnlineDialog.close());
      dispatch(createInviteCodeDialog.close());
      dispatch(enterInviteCodeDialog.close());
      dispatch(playComputerDialog.open());
    } else if (
      props.playMethod.playFriend &&
      !props.playMethod.online &&
      !props.playMethod.computer &&
      !props.playMethod.enterCode
    ) {
      dispatch(playOnlineDialog.close());
      dispatch(playComputerDialog.close());
      dispatch(enterInviteCodeDialog.close());
      dispatch(createInviteCodeDialog.open());
      dispatch(mode.startAnalysis());
    } else if (
      props.playMethod.enterCode &&
      !props.playMethod.playFriend &&
      !props.playMethod.online &&
      !props.playMethod.computer
    ) {
      dispatch(playOnlineDialog.close());
      dispatch(playComputerDialog.close());
      dispatch(createInviteCodeDialog.close())
      dispatch(enterInviteCodeDialog.open());
    } else {
      dispatch(playOnlineDialog.close());
      dispatch(playComputerDialog.close());
      dispatch(createInviteCodeDialog.close());
      dispatch(enterInviteCodeDialog.close());
    }
  }, [props.playMethod]);

  return (
    <Grid>
      <CreateInviteCodeDialog />
      <EnterInviteCodeDialog />
      <PlayOnlineDialog />
      <PlayComputerDialog />
    </Grid>
  );
};

export default PlayButtons;
