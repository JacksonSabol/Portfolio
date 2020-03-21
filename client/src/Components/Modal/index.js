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
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <p>{currentItem.projectName}</p>
                    <div className="img-wrapper">
                        <img src={currentItem.thumb} className="modal-img" alt={currentItem.projectName} />
                    </div>
                    <p>{currentItem.projectCategory}</p>
                    {/* <p>{currentItem.projectDescription}</p> */}
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}
export default Modal;