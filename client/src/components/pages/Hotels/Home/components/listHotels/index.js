import React, { Component, Fragment } from 'react';
import Item from './item';
import PropTypes from 'prop-types';
import './index.scss';

class listHotels extends Component {
    renderList = hotels => (
        <Fragment>
            {hotels.map(this.renderListItem)}
        </Fragment>
    );

    renderListItem = hotel => (
        <Fragment key={hotel._id}>
            <Item {...hotel} />
        </Fragment>
    );

    render() {
        return (
            <div className="items animated fadeIn">
                {this.renderList(this.props.hotels)}
            </div>
        );
    }
}

listHotels.propTypes = {
    hotels: PropTypes.array.isRequired
};

export default listHotels;

