export const RECEIVE_VIEW = "RECEIVE_VIEW";

export const receiveView = viewId => ({
  type: RECEIVE_VIEW,
  view: viewId,
});
