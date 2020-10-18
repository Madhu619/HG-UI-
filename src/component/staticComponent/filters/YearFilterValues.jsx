import React from 'react';
import Years from '../../yearsData';

const styles = {
    year_filter : {
        margin: '5px',
        minWidth: '70px',
        backgroundColor: '#c5e09b',
        color: '#444',
    }
}

const YearFilterValues = ({yearChange}) => {

    return (
        <>
            <div className="text-center divider mb-3 border-bottom">Launch Year</div>
            <div className='row'>
                {Years.map(year => <div class="col-sm-6 col-md-6 col-xs-6"><button style={styles.year_filter} className='btn btn-success year-filter'  key={year} onClick={() => yearChange(year)}> {year} </button></div>)} 
            </div>
        </>
    );

}

export default YearFilterValues;