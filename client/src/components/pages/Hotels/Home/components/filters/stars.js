import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHotels, saveParams } from '../../../../../state/actions/HotelsActions';
import './index.scss';

class Stars extends Component {
    selectStar = (event) => {
        const { name } = this.props;
        const target = event.target;
        const stars = target.checked ? target.value : null;
        this.props.saveParams({ stars });
        this.props.fetchHotels({ stars, name });
    }
    renderStars = (stars) => {
        const renderer = [];
        for (let i = 0; i < stars; i++) {
            renderer.push(<i className="fa fa-star" key={i}/>);
        }
        return renderer;
    }

    renderLabels = () => {
        const stars = [5, 4, 3, 2, 1];
        return stars.map(s => {
            const checkKey = `check_${s}`;
            return (
                <label key={s}>
                    <input type="checkbox" value={s} onChange={this.selectStar} key={checkKey} />
                    {this.renderStars(s)}
                </label>
            );
        });
    }

    render() {
        return (
            <Fragment>
                <div className="filterStars">
                    <label>
                        <input type="checkbox" value='' onChange={this.selectStar} />
                        <span>Todas las estrellas</span>
                    </label>
                    {this.renderLabels()}
                </div>
            </Fragment>
        );
    }
}

Stars.propTypes = {
    name: PropTypes.string,
    saveParams: PropTypes.func,
    fetchHotels: PropTypes.func
};

const mapStateToProps = state => {
    const { name } = state.hotels;

    return { name };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchHotels, saveParams }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Stars);


export default hoc;

