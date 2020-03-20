import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Modal = ({ isShowing, handleClose, currentItem }) => {
    const node = useRef();
    useEffect(() => {
        const handleClickOutside = e => {
            const inside = node.current.contains(e.target);
            if (inside) return;
            return handleClose();
        };
        if (isShowing) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div ref={node} className="modal">
                    <div className="modal-header">
                        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <img src={currentItem.thumb} class="modal-img" alt={currentItem.projectName} />
                    <p>{currentItem.projectName}</p>
                    <p>{currentItem.projectCategory}</p>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}
export default Modal;