import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Input.scss";

class Input extends Component {

    render() {
        return (
            <div className={`input-field${!!this.props.className ? ` ${this.props.className}` : ""}`}>
                <input
                    className={this.props.transparent ? "transparent-input" : "filled-input"}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }

}

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    transparent: PropTypes.bool,
    className: PropTypes.string
}

export default Input;