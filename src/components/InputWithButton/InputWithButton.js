import React, {Component} from "react";
import PropTypes from "prop-types";
import "./InputWithButton.scss";
import Button from "../Button/Button";

class InputWithButton extends Component {

    render() {
        return (
            <div className={`input-field-button${!!this.props.className ? ` ${this.props.className}` : ""}`}>
                <input
                    className={this.props.transparent ? "transparent-input" : "filled-input"}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                />
                <Button className="enter-button">{this.props.buttonContent}</Button>
            </div>
        );
    }

}

InputWithButton.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    transparent: PropTypes.bool,
    buttonContent: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default InputWithButton;