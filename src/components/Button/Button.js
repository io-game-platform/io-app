import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import {Link} from "react-router-dom";

class Button extends Component {

    render() {
        return (
            !this.props.link ?
                (<button
                    className={`default-button${!!this.props.className ? ` ${this.props.className}` : ""}`}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </button>) :
                (<Link
                    className={`button-link${!!this.props.className ? ` ${this.props.className}` : ""}`}
                    to={this.props.link}>
                    <button
                        className={`default-button`}
                        onClick={this.props.onClick}
                    >
                        {this.props.children}
                    </button>
                </Link>)
        );
    }

}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    link: PropTypes.string
}

export default Button;