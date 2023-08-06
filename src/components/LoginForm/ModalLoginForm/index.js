import { Modal } from '@mui/material';
import LoginForm from '~/components/LoginForm';

function ModalLoginForm({ open, handleClose }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <LoginForm handleClose={handleClose} />
        </Modal>
    );
}

export default ModalLoginForm;
