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

const YearFilterValues = ({yearChange, selectedYear}) => {

    return (
        <>
            <div className="text-center divider mb-3 border-bottom">Launch Year</div>
            <div className='row'>
                {Years.map(year => <div class="col-sm-6 col-md-6 col-6"><button class style={styles.year_filter} className={`btn btn-success year-filter  ${selectedYear === year ? 'active' : ''}`}  key={year} onClick={() => yearChange(year)}> {year} </button></div>)} 
            </div>
        </>
    );

}

export default YearFilterValues;
//${selectedYear === year ? styles.activeTab : ''}