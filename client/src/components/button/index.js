import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class Button extends Component {
    static propTypes = {
        label: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func
    }
    static defaultProps = {
        label: 'Continuar',
        className: '',
        onClick: () => {}
    }
    render() {
        const className = `${this.props.className} button`;
        return (
            <Fragment>
                <button className={className} onClick={this.props.onClick}>{this.props.label}</button>
            </Fragment>
        );
    }
}

export default Button;

