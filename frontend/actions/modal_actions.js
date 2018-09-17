export const OPEN_MODAL  = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, notebook) => {
  return {
    type: OPEN_MODAL,
    modal,
    notebook,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
