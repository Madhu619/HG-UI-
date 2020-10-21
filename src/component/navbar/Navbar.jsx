import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import YearFilterValues from '../staticComponent/filters/YearFilterValues';
import SuccessLaunch from '../staticComponent/filters/SuccessLaunch';
import SuccessLanding from '../staticComponent/filters/SuccessLanding';

const CreateDataView = ({ yearChange , onLaunchChange, onLandChange, year, launchFlag, landFlag}) => {
    const styles = {
        nav_wrapper: {
            background:' #fff',
            margin: '0 15px',
        }
    }
	return (
        <div style={styles.nav_wrapper} className='p-2'>
            <h1>Filters </h1>
                <YearFilterValues yearChange= {yearChange} selectedYear={year}/>
                <SuccessLaunch onLaunchChange= {onLaunchChange} launchFlag= {launchFlag}/>
                <SuccessLanding onLandChange= {onLandChange} landFlag={landFlag}/>
        </div>
	);
};

export default CreateDataView;