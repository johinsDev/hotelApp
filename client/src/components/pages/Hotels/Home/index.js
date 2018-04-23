import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from './components/filters';
import ListHotels from './components/listHotels';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHotels } from '../../../state/actions/HotelsActions';
import { LoadingIndicator } from '../../../shared/LoadingIndicator/LoadingIndicator';
import './index.scss';

class Home extends Component {
    componentDidMount() {
        this.props.fetchHotels();
    }

    render() {
        return (
            <div className="home">
                <Filters />
                {
                    this.props.fetched && <ListHotels hotels={this.props.hotels} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
            </div>
        );
    }
}

Home.propTypes = {
    fetchHotels: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    hotels: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, hotels } = state.hotels;

    return { fetching, fetched, failed, hotels };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchHotels }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Home);

export default hoc;

