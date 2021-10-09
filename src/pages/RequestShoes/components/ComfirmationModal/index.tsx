import React from 'react';
import Modal from '@mui/material/Modal';

type ConfirmationModalProps = {
    visible: boolean;
    handleClose: () => void; 
}

const ConfirmationModal : React.FC<ConfirmationModalProps> = ({ visible, handleClose }) => {
    const handleCloseModal = () => {
        handleClose();
    };

    return (
        <Modal
            open={visible}
            onClose={handleCloseModal}
            closeAfterTransition
            aria-labelledby="modal-modal-request-shoes"
            aria-describedby="modal-modal-confirmation-form"
        >
            <div>

            </div>
        </Modal>
    )
}

export default ConfirmationModal; 