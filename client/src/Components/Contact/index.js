import React from 'react';
import './index.css';
import { SiteButton } from '../Button';

const Contact = (props) => {
    return (
        <div className="contact-wrap">
            <div className="contact-text">
                <div className="container p-0">
                    <span className="sp-sub-title">Jackson Sabol</span>
                    <h3 className="sp-title">Stay in touch</h3>
                    <p>Ready to start your next project with me? That's great! Send me a message and
						I will get back to you as soon as possible!</p>

                    <ul className="con-info">
                        <li><i className="flaticon-phone-call"></i>+1 415-777-4287</li>
                        <li><i className="flaticon-envelope"></i>contact@a-t-s.com</li>
                        <li><i className="flaticon-placeholder"></i>5 3rd Street Suite 1010 San Francisco, CA 94103</li>
                    </ul>
                </div>
            </div>
            <div className="container p-0">
                <div className="row">
                    <div className="col-xl-8 offset-xl-4">
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="name" placeholder="Your name" value={props.name} onChange={props.handleInputChange}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" name="email" placeholder="E-mail" value={props.email} onChange={props.handleInputChange}/>
                                </div>
                                <div className="col-md-12">
                                    <input type="text" name="subject" placeholder="Subject" value={props.subject} onChange={props.handleInputChange}/>
                                    <textarea name="message" placeholder="Message" value={props.message} onChange={props.handleInputChange} />
                                    <SiteButton
                                        onClick={() => props.handleMessageSend()}
                                    >
                                        Send
                                    </SiteButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;