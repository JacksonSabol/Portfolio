import React from 'react';
import './index.css';
import { SubmitButton } from '../Button';

const Contact = (props) => {
    return (
        <div className="contact-wrap">
            <div className="contact-text">
                <div className="contact-container">
                    <span className="sp-sub-title">Jackson Sabol</span>
                    <h3 className="sp-title">Stay in touch</h3>
                    <p>Ready to start your next project with me? That's great! Send me a message and I will get back to you as soon as possible!</p>
                </div>
            </div>
            <div className="message-form-container">
                <div className="contact-form-offset">
                    <form className="contact-form">
                        <div className="inline-row">
                            <div className="contact-inline-elms">
                                <input type="text" name="name" placeholder="Your name" value={props.name} onChange={props.handleInputChange} />
                                {props.nameInputMsg && (
                                    <div className="auth-alert">
                                        <p className="form-validation-alert">{props.nameInputMsg}</p>
                                    </div>
                                )}
                            </div>
                            <div className="contact-inline-elms">
                                <input type="email" name="email" placeholder="E-mail" value={props.email} onChange={props.handleInputChange} />
                                {props.emailInputMsg && (
                                    <div className="auth-alert">
                                        <p className="form-validation-alert">{props.emailInputMsg}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="text" name="subject" id="subject-input" placeholder="Subject" data-invalid={props.subject} value={props.subject} onChange={props.handleInputChange} />
                            {props.subjectInputMsg && (
                                <div className="auth-alert">
                                    <p className="form-validation-alert">{props.subjectInputMsg}</p>
                                </div>
                            )}
                            <textarea name="message" placeholder="Message" value={props.message} onChange={props.handleInputChange} />
                            {props.messageInputMsg && (
                                <div className="auth-alert">
                                    <p className="form-validation-alert">{props.messageInputMsg}</p>
                                </div>
                            )}
                            <SubmitButton
                                type={'light'}
                                onClick={props.handleMessageSend}
                            >
                                Send
                                    </SubmitButton>
                        </div>
                        {props.emptyFields === true && (
                            <div className="auth-alert">
                                <p className="form-alert">Please fill out all fields.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;