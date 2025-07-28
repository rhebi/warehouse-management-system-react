import React, { useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';

function CustomModal() {
    const { modalState, closeCustomModal } = useContext(DashboardContext);

    if (!modalState.isOpen) return null;

    const handleConfirm = () => {
        closeCustomModal(true);
    };

    const handleCancel = () => {
        closeCustomModal(false);
    };

    return (
        <div className="fixed inset-0 backdrop-blur-overlay z-50 flex items-center justify-center p-4 transition-all-smooth"
             role="dialog" aria-modal="true" aria-labelledby="custom-modal-title" aria-describedby="custom-modal-message">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm animate-slide-up">
                <h3 id="custom-modal-title" className="text-lg font-semibold text-wise-dark-gray mb-4">
                    {modalState.title}
                </h3>
                <p id="custom-modal-message" className="text-wise-gray mb-6">
                    {modalState.message}
                </p>
                <div className="flex justify-end space-x-3">
                    {modalState.isConfirm && (
                        <button
                            id="custom-modal-cancel-btn"
                            className="px-4 py-2 border border-wise-border rounded-lg text-wise-gray hover:bg-wise-light-gray transition-all-smooth active-press"
                            onClick={handleCancel}
                        >
                            Batal
                        </button>
                    )}
                    <button
                        id="custom-modal-ok-btn"
                        className="px-4 py-2 bg-wise-primary text-white rounded-lg hover:bg-blue-700 transition-all-smooth active-press"
                        onClick={handleConfirm}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CustomModal;