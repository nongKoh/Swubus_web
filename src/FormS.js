import React, { Component } from 'react';
import './Srinakharinwirot-Regular.ttf'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
//import DropdownButton from 'react-bootstrap/DropdownButton'
//import Dropdown from 'react-bootstrap/Dropdown'

class FormS extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.clearInput = this.clearInput.bind(this);
    //     //console.log(this.props.data.data)

    // }
    state = {
        formState: {
            station_name: "",
            latitude: "",
            longtitude: "",
            route_1: false,
            route_2: false,
            route_3: false,
            route_4: false,
            mode: "submit",
        },
        station: [
            {
                station_name: "ไฟท์",
                latitude: "",
                longtitude: "",
                route_1: true,
                route_2: true,
                route_3: true,
                route_4: true,
                updating: false
            }
        ]
    }

    // clearInput() {

    //     this.setState({
    //         formState: {
    //             station_id: '',
    //             station_name: "",
    //             latitude: "",
    //             longtitude: "",
    //             route_1: this.state.formState.route_1,
    //             route_2: this.state.formState.route_2,
    //             route_3: this.state.formState.route_3,
    //             route_4: this.state.formState.route_4
    //         }
    //     });
    // }


    onSubmit(e) {
        console.log(e)
    }
    

    render() {
        return (
            <div>

                <div className="Bodymain">
                    <div style={{ marginRight: '3%', marginTop: '1%', marginLeft: '3%', fontFamily: 'SWU' }}>
                        <Form>
                            <Form.Row style={{ alignItems: 'center' }}>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>Station name</Form.Label>
                                    <Form.Control name="station_name" type="text" placeholder="Enter station name" 
                                    defaultValue={this.props.data.data.station}
                                        onChange={event => {
                                            this.setState({
                                                formState: {
                                                    station_name: event.target.value,
                                                    latitude: this.state.formState.latitude,
                                                    longtitude: this.state.formState.longtitude,
                                                    route_1: this.state.formState.route_1,
                                                    route_2: this.state.formState.route_2,
                                                    route_3: this.state.formState.route_3,
                                                    route_4: this.state.formState.route_4
                                                }
                                            })
                                        }
                                        }
                                        // value={this.state.formState.station_name} 
                                        />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>Longtitude</Form.Label>
                                    <Form.Control name="longtitude" type="number" placeholder="Enter longtitude"
                                    defaultValue={this.props.data.data.longitude}
                                        onChange={event => {
                                            this.setState({
                                                formState: {
                                                    station_name: this.state.formState.station_name,
                                                    longtitude: event.target.value,
                                                    latitude: this.state.formState.latitude,
                                                    route_1: this.state.formState.route_1,
                                                    route_2: this.state.formState.route_2,
                                                    route_3: this.state.formState.route_3,
                                                    route_4: this.state.formState.route_4
                                                }
                                            })
                                        }
                                        }
                                        // value={this.state.formState.longtitude} 
                                        />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control name="latitude" type="number" placeholder="Enter latitude"
                                    defaultValue={this.props.data.data.latitude}
                                        onChange={event => {
                                            this.setState({
                                                formState: {
                                                    station_name: this.state.formState.station_name,
                                                    longtitude: this.state.formState.longtitude,
                                                    latitude: event.target.value,
                                                    route_1: this.state.formState.route_1,
                                                    route_2: this.state.formState.route_2,
                                                    route_3: this.state.formState.route_3,
                                                    route_4: this.state.formState.route_4


                                                }
                                            })
                                        }
                                        }
                                        // value={this.state.formState.latitude}
                                    />
                                </Form.Group>
                            </Form.Row>

                            {/* <Form.Row style={{justifyContent:"flex-end"}}>
                                <Button variant="primary" style={{ marginLeft: "1%", marginRight: "1%" }}
                                    onClick={this.clearInput}>
                                    Clear
                                </Button>
                            </Form.Row> */}

                            <Form.Group>
                                <Form.Label>สายที่ผ่าน</Form.Label>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check name="route_1" type="checkbox" label="สายที่ 1"
                                 defaultChecked={this.props.data.data.route1}
                                
                                    onChange={() => {
                                        this.setState({
                                            formState: {
                                                station_name: this.state.formState.station_name,
                                                longtitude: this.state.formState.longtitude,
                                                latitude: this.state.formState.latitude,
                                                route_1: !this.state.formState.route_1,
                                                route_2: this.state.formState.route_2,
                                                route_3: this.state.formState.route_3,
                                                route_4: this.state.formState.route_4
                                            }
                                        })
                                        
                                    }
                                    }

                                    // value={this.state.formState.route_1}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check name="route_2" type="checkbox" label="สายที่ 2"
                                 defaultChecked={this.props.data.data.route2}
                                    onChange={() => {
                                        this.setState({
                                            formState: {
                                                station_name: this.state.formState.station_name,
                                                longtitude: this.state.formState.longtitude,
                                                latitude: this.state.formState.latitude,
                                                route_1: this.state.formState.route_1,
                                                route_2: !this.state.formState.route_2,
                                                route_3: this.state.formState.route_3,
                                                route_4: this.state.formState.route_4
                                            }
                                        })
                                    }
                                    }
                                    // value={this.state.formState.route_2}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check name="route_3" type="checkbox" label="สายที่ 3"
                                     defaultChecked={this.props.data.data.route3}
                                    onChange={() => {
                                        this.setState({
                                            formState: {
                                                station_name: this.state.formState.station_name,
                                                longtitude: this.state.formState.longtitude,
                                                latitude: this.state.formState.latitude,
                                                route_1: this.state.formState.route_1,
                                                route_2: this.state.formState.route_2,
                                                route_3: !this.state.formState.route_3,
                                                route_4: this.state.formState.route_4
                                            }
                                        })
                                    }
                                    }
                                    // value={this.state.formState.route_3}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check name="route_4" type="checkbox" label="สายด่วน"
                                 defaultChecked={this.props.data.data.route4}
                                    onChange={() => {
                                        this.setState({
                                            formState: {
                                                station_name: this.state.formState.station_name,
                                                longtitude: this.state.formState.longtitude,
                                                latitude: this.state.formState.latitude,
                                                route_1: this.state.formState.route_1,
                                                route_2: this.state.formState.route_2,
                                                route_3: this.state.formState.route_3,
                                                route_4: !this.state.formState.route_4
                                            }
                                        })
                                    }}
                                    // value={this.state.formState.route_4}
                                />
                            </Form.Group>

                            <Button variant="primary" style={{ marginLeft: '1%' }}
                                onClick={() => { this.onSubmit(this.state.formState) }}>
                                Save
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormS;
