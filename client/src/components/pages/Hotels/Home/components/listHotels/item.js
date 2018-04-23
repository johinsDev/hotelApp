import React, { Component } from 'react';
import './index.scss';
import Button from '../../../../../button';
import PropTypes from 'prop-types';

class Item extends Component {
    renderAmenities = (amenities) => {
        return amenities.map(amenitie => (<img src={amenitie.image} key={amenitie._id} />));
    };

    renderStars = (stars) => {
        const array = new Array(stars);
        const starsR = [];
        for(let x=0; x<array.length; x++){
            starsR.push(<i className="fa fa-star" key={x} />);
        }
        return starsR;
    };

    render() {
        console.log(this.props);
        const { name, currency, price, stars, image, amenities } = this.props;
        return (
            <div className="item">
                <img src={image} />
                <div className="info">
                    <h5>{name}</h5>
                    <div className="starsInfo">
                        {this.renderStars(stars)}
                    </div>
                    <div className="amenities">
                        {this.renderAmenities(amenities)}
                    </div>
                </div>
                <div className="wrapperPrice">
                    <h5>Precio por noche por habitacion</h5>
                    <div className="price">
                        <span>{currency}</span>
                        <span>{price}</span>
                    </div>
                    <Button label="Ver hotel" className="buttonHotel" />
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    amenities: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};

export default Item;

