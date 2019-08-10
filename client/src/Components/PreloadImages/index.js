import React, { Component } from "react";

class PreloadImages extends Component {
    render() {
        return (
            <div style={{ 'visibility': 'hidden', 'width': 0, 'height': 0, 'overflow': 'hidden' }}>
                {this.props.images.map((preloadImage, i) => {
                    return (
                        <img src={preloadImage} alt={`preload img${i}`} key={i}/>
                    );
                })}
            </div>
        );
    }
}
export default PreloadImages;