import React from 'react';

const styles = {
    year_filter : {
        margin: '5px',
        minWidth: '70px',
        backgroundColor: '#c5e09b',
        color: '#444',
    }
}

export default function SuccessFilter ({onLaunchChange, launchFlag}) {
    return (
        <div>
            <div className="text-center divider mb-3 border-bottom mt-3">Successful Launch</div>
            <button style={styles.year_filter} className={`btn btn-success year-filter ${launchFlag === true ? 'active' : ''}`} onClick={() => onLaunchChange(true)}> True </button>
            <button style={styles.year_filter} className={`btn btn-success year-filter ${launchFlag === false ? 'active' : ''}`} onClick={() => onLaunchChange(false)}> False </button>
        </div>
    );
}
