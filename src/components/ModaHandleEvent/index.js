import { Modal } from '@mui/material';

function ModalHandleEvent({ open, handleClose, children }) {
    return (
        <Modal open={open} onClose={handleClose}>
            {children}
        </Modal>
    );
}

export default ModalHandleEvent;
