import React from 'react';

const styles = {
    year_filter : {
        margin: '5px',
        minWidth: '70px',
        backgroundColor: '#c5e09b',
        color: '#444',
    }
}

export default function SuccessLanding ({onLandChange}) {
  
    return (
        <div>
            <div className="text-center divider mb-3 border-bottom mt-3">Successful Landing</div>
            <button style={styles.year_filter} className='btn btn-success year-filter'  onClick={() => onLandChange(true)}> True </button>
            <button style={styles.year_filter} className='btn btn-success year-filter'  onClick={() => onLandChange(false)}> False </button>
        </div>
    );
}