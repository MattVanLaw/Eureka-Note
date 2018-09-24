import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = null, payload) {
  switch (payload.type) {
  case OPEN_MODAL:
    return payload;
  case CLOSE_MODAL:
    return null;
  default:
    return state;
  }
}
