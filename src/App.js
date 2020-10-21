import * as React from 'react';
import $ from 'jquery'; 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './component/staticComponent/Loader';
import NoData from './component/staticComponent/NoData.png';
import Navbar from './component/navbar/Navbar';
import CreateDataView from './component/CreateDataView';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: [],
         isLoaded : false,
         url: 'https://api.spaceXdata.com/v3/launches?limit=100',
         year:2006,
         launchFlag: '',
         landFlag: '',
      }
   };
  
  onDataReceived = (data) => {
    this.setState({
      data: data,
      isLoaded: true,
    });
  }

  onYearChange = (year) => {
    let previousLaunchValue = new URL(this.state.url);
    if (previousLaunchValue.searchParams.get('launch_year') !== null) {
      previousLaunchValue.searchParams.set('launch_year', year);
      previousLaunchValue = previousLaunchValue.href;
    } else {
      previousLaunchValue = this.state.url + '&launch_year='+year;
    }
    this.setState({ isLoaded: false, url: previousLaunchValue, year: year});

    $.get(previousLaunchValue, function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }

  onLaunchChange = (flag) => {
    let previousLaunchValue = new URL(this.state.url);

    if (previousLaunchValue.searchParams.get('launch_success') !== null) {
      previousLaunchValue.searchParams.set('launch_success', flag);
      previousLaunchValue = previousLaunchValue.href;
    } else {
      previousLaunchValue = this.state.url+'&launch_success='+flag;
    }

    this.setState({ isLoaded: false, url: previousLaunchValue, launchFlag:flag });

    $.get(previousLaunchValue, function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }

  onLandChange = (flag) => {
    let previousLaunchValue = new URL(this.state.url);

    if (previousLaunchValue.searchParams.get('land_success') !== null) {
      previousLaunchValue.searchParams.set('land_success', flag);
      previousLaunchValue = previousLaunchValue.href;
    } else {
      previousLaunchValue = this.state.url+'&land_success='+flag;
    }

    this.setState({ isLoaded: false, url: previousLaunchValue, landFlag:flag});

    $.get(previousLaunchValue, function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }


  componentDidMount() {
    $.get(this.state.url, function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }

  render() {
    if(this.state.isLoaded) {
      return (
        <>
          <Container fluid>
            <Row>
              <h1 className='m-4'> SpacEx Launch Programs</h1>
            </Row>
            <Row className='text-center'>
              <Col md={4} sm={6}  className='mb-4 col-xs-12' ><Navbar year= {this.state.year} yearChange={this.onYearChange} onLaunchChange = {this.onLaunchChange} onLandChange = {this.onLandChange} launchFlag={this.state.launchFlag} landFlag={this.state.landFlag} /> </Col>

              {this.state.data.length > 0 && <Col md={8} sm={6}> <CreateDataView data = {this.state.data}/> </Col>}
              {this.state.data.length === 0 && <Col md={8} sm={6}>  <img width='100%' src={`${NoData}`} alt='No Data'></img> </Col> }
            </Row>
          </Container>
        </>
      )
    } else {
      return ( 
        <Loader />
      )
    }
  }
}

export default App;
