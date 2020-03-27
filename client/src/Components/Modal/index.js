import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import externalLink from '../../img/external-link-icon.svg';

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
                    <h3>{currentItem.projectName}</h3>
                    <div className="img-wrapper">
                        <img src={currentItem.thumb} className="modal-img" alt={currentItem.projectName} />
                    </div>
                    <div className="project-details">
                        <p>{currentItem.projectCategory}</p>
                        <p>{currentItem.projectDescription}</p>
                        {currentItem.githubLink &&
                            <a href={currentItem.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repository <img src={externalLink} alt="->" className="link-icon"></img></a>
                        }
                        {currentItem.deployedLink &&
                            <a href={currentItem.deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">Demo Application <img src={externalLink} alt="->" className="link-icon"></img></a>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}
export default Modal;