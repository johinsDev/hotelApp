import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchHotels, saveParams } from '../../../../../state/actions/HotelsActions';
import './index.scss';
import Stars from './stars';
import Button from '../../../../../button';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
            showsStars: false,
            showFilters: false
        };
        this.textInput = React.createRef();
    }

    displayFilter = type => this.setState({ [type]: !this.state[type] });

    search = () => {
        const { stars } = this.props;
        const value = this.textInput.current.value;
        this.props.saveParams({ name: value });
        this.props.fetchHotels({ name: value, stars });
    }

    render() {
        const classNameSearch = `${this.state.showSearch && 'hidden'} wrapperSearch`;
        const classNameStar = `${this.state.showStars && 'hidden'} wrapperStars`;
        const classNameStarIcon = `${this.state.showStars? 'fa-chevron-up' : 'fa-chevron-down'} fa`;
        const classNameSearchIcon = `${this.state.showSearch ? 'fa-chevron-up' : 'fa-chevron-down'} fa`;
        const classNameFiltersIcon = `${this.state.showFilters ? 'fa-chevron-up' : 'fa-chevron-down'} fa hidden-sm`;

        const classNameMobileSearch = `${!this.state.showFilters && 'hidden-xs'} search`;
        const classNameMobileStars = `${!this.state.showFilters && 'hidden-xs'} stars`;
        return (
            <div className="filters">
                <div className="title">
                    <h5>Filtros</h5>
                    <i className={classNameFiltersIcon}  onClick={() => this.displayFilter('showFilters')} />
                </div>
                <div className={classNameMobileSearch} >
                    <div className="searchTitle">
                        <div>
                            <i className="fa fa-search" />
                            <span>Nombre del hotel</span>
                        </div>
                        <div>
                            <i className={classNameSearchIcon}  onClick={() => this.displayFilter('showSearch')} />
                        </div>
                    </div>
                    <div className={classNameSearch}>
                        <input placeholder="ingrese el nombre del hotel" ref={this.textInput} />
                        <Button label="aceptar" onClick={this.search}/>
                    </div>
                </div>
                <div className={classNameMobileStars} >
                    <div className="searchTitle">
                        <div>
                            <i className="fa fa-star" />
                            <span>Estrellas</span>
                        </div>
                        <div>
                            <i className={classNameStarIcon} onClick={() => this.displayFilter('showStars')} />
                        </div>
                    </div>
                    <div className={classNameStar}>
                        <Stars />
                    </div>
                </div>
            </div>
        );
    }
}


Filters.propTypes = {
    stars: PropTypes.string,
    saveParams: PropTypes.func,
    fetchHotels: PropTypes.func
};

const mapStateToProps = state => {
    const { stars } = state.hotels;

    return { stars };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchHotels, saveParams }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default hoc;


