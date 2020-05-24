const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const openModal = () => ({
  type: OPEN_MODAL,
  isOpen: true
});

const closeModal = () => ({
  type: CLOSE_MODAL,
  isOpen: false
});

export {
  OPEN_MODAL,
  CLOSE_MODAL,
  openModal,
  closeModal
}