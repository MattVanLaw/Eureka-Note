export const RECEIVE_VIEW = "RECEIVE_VIEW";

export const receiveView = viewId => {
  return {
    type: RECEIVE_VIEW,
    view: viewId,
  };
};
