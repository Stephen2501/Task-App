import { SET_LINKS } from "../actionTypes/actionTypes";

const setLinks = links => ({
    type: SET_LINKS,
    payload: links
  });

export default setLinks