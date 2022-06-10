import { faGaugeSimpleMed, faSleigh } from "@fortawesome/free-solid-svg-icons";
import * as ActionTypes from "../ActionCreators/ActionTypes";

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const YtEmbed = (
  state = {
    ytEmbedId: "",
    ytEmbedLoading: false,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_YTEMBEDID:
      return { ...state, ytEmbedId: action.payload, ytEmbedLoading: false };
    case ActionTypes.YTEMBED_LOADING:
      return { ...state, ytEmbedId: "", ytEmbedLoading: true };
    case ActionTypes.REMOVE_YTEMBEDID:
      return {
        ...state,
        ytEmbedId: "",
        ytEmbedLoading: false,
      };
    default:
      return state;
  }
};
