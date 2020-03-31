import React from 'react';
import './Srinakharinwirot-Regular.ttf'
import FormS from './FormS'
//import axios from 'axios'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import env from './config'
import { FiEdit } from "react-icons/fi";
import { ButtonGroup } from 'react-bootstrap';
// import { MdDelete } from "react-icons/md";
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios';

class ModalEditStation extends React.Component {
    
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Station
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormS data = {this.props} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

// class ModalDeleteStation extends React.Component {
//     render() {
//         return (
//             <Modal style={{ textAlign: "center" }}
//                 {...this.props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Confirm Station_ID:
//           </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Do you want to delete this station?
//                 <p>ต้องการลบสถานีนี้หรือไม่</p>
//                     <Button>Delete</Button>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={this.props.onHide}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         );
//     }
// }

class Station extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            modalEdShowStation: false,
            modalDeShowStation: false,
            station: [],
            data: {},
            setdatamodal: []

        }
    }
    componentDidMount() {
        Axios.get(`${env.urltest}/station/all`)
            .then(res => {
                // console.log(res.data)
                this.setState({ station: res.data })
            })
    }
    setdata = () => {
        const station = this.state.station
        const data = station.map(data => {
            // console.log(data)
            return (<tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.station_name}</td>
                <td>{data.latitude}</td>
                <td>{data.longitude}</td>
                <td>{data.route_1 === "1" ? "ผ่าน" : "ไม่ผ่าน"}</td>
                <td>{data.route_2 === "1" ? "ผ่าน" : "ไม่ผ่าน"}</td>
                <td>{data.route_3 === "1" ? "ผ่าน" : "ไม่ผ่าน"}</td>
                <td>{data.route_4 === "1" ? "ผ่าน" : "ไม่ผ่าน"}</td>
                <td><ButtonGroup>
                    {/* <Button variant="" onClick={() => {
                        this.setState({ modalEdShowStation: true })
                        this.setState({setdatamodal:data})
                    }}><FiEdit /></Button> */}
                    {/* <Button variant="" onClick={() => this.setState({ modalDeShowStation: true })}><MdDelete /></Button> */}
                </ButtonGroup></td>
            </tr>)

        })
        return data

    }
    render() {
        return (
            <div>
                {/* Search */}
                <div className="Bar" style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>

                    <InputGroup className="mb-3" style={{ marginTop: '16px', maxWidth: '750px', marginRight: "1%", marginLeft: "1%" }}>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2" 
                            disabled/>
                        <InputGroup.Append>
                            <Button variant="outline-secondary" disabled>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div>
                    <div className="Intab">
                        <Table responsive style={{ textAlign: 'center', justifyContent: 'center', alignItems:'center' }}>
                            <thead>
                                <tr>
                                    <th>Station_ID</th>
                                    <th>Station</th>
                                    <th>Latitude</th>
                                    <th>Logtitude</th>
                                    <th>Route 1</th>
                                    <th>Route 2</th>
                                    <th>Route 3</th>
                                    <th>Route 4</th>
                                    {/* <th>Edit</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {this.setdata()}
                            </tbody>
                        </Table>
                    </div>
                </div>
                {/* <ModalEditStation
                    data={this.state.setdatamodal}
                    show={this.state.modalEdShowStation}
                    onHide={() => this.setState({ modalEdShowStation: false })}
                /> */}
                {/* <ModalDeleteStation
                    show={this.state.modalDeShowStation}
                    onHide={() => this.setState({ modalEdShowStation: false })}
                /> */}
            </div>
        );
    }

}
export default Station;