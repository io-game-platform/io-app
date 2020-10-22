import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Button.scss";

class Button extends Component {

    render() {
        return (
            <button className={`default-button ${this.props.className}`}>{this.props.children}</button>
        );
    }

}

Button.propTypes = {
    className: PropTypes.string
}

export default Button;