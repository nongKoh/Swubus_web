import React from 'react';
import './Srinakharinwirot-Regular.ttf'
import './Info.css';
import FormD from './FormD'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import env from "./config";
import { FiEdit } from "react-icons/fi";
import { ButtonGroup } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import Modal from 'react-bootstrap/Modal'
import FormDEdit from './FormDEdit';
import { IoIosAdd } from 'react-icons/io';
import { FaInfoCircle } from 'react-icons/fa';
import InfoDriver from './InfoDriver';


class ModalEdit extends React.Component {
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
                        Edit information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormDEdit data={this.props} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class ModalDelete extends React.Component {
    onDelete = async () => {
        // console.log(this.props.data.Driverid)
        let id = this.props.data.Driverid
        try {
        let res1  = await axios.delete(`${env.urltest}/driver/delete/${id}`)
        let res2 = await axios.delete(`${env.urltest}/track/delete/${id}`)
        if(res1.status === 200 && res2.status === 200){
            alert('ลบเรียบร้อย')
        }
        }
        catch (err) {
            console.log(err)
        }   
        // axios.delete(`${env.urltest}/driver/delete/${id}`)
        // .then(res => {
        //     alert('ลบเรียบร้อย')
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <Modal style={{ textAlign: "center" }}
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirm
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete this row ?
                <p>ต้องการลบข้อมูลนี้หรือไม่</p>
                    <Button
                        onClick={() => { 
                            this.onDelete()
                            }}>Delete</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class ModalAddPerson extends React.Component {
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
                        Add information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormD />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

class ModalInformation extends React.Component {
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
                        Information driver</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InfoDriver data={this.props} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}




class Info extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            modalEdShow: false,
            modalDeShow: false,
            modalAddPerson: false,
            modalinformation: false,
            person: [],
            data: {},
            setdatamodal: []
        }
    }
    componentDidMount() {
        this.getapi()
    }
    getapi = async () => {
       await axios.get(`${env.urltest}/driver`)
            .then(res => { 
                // console.log(res)
                this.setState({ person: res.data })
            })
           
    }
    getdata = () => {
        const person = this.state.person
        const data = person.map(data => {
            // console.log(data)
            return (
                
                <tr key={data.Driverid}>
                    <td>{data.Driverid}</td>
                    <td>{data.Driver_name}</td>
                    <td>{data.Driver_lastname}</td>
                    <td>{data.Username}</td>

                    <td><Button variant=""
                        onClick={() => {
                            this.setState({
                                modalinformation: true,
                                data: data,
                                setdatamodal: data
                            }) }}> 
                            <FaInfoCircle /></Button></td>

                    <td><ButtonGroup>
                        <Button variant="" onClick={() => {
                            this.setState({
                                modalEdShow: true,
                                data: data,
                                setdatamodal: data
                            })


                            //console.log(this.state.data)
                        }
                        }><FiEdit /></Button>

                        <Button variant="" onClick={() => {
                            this.setState({
                                modalDeShow: true,
                                setdatamodal: data
                            })

                        }
                        }><MdDelete /></Button>
                    </ButtonGroup></td>
                </tr>
                
            )
        })
        return data
    }

    render() {
        return (

            <div>
                <div>
                    {/* Search */}
                    <div className="Bar" style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                        <Button
                            style={{
                                margin: '0.6%'
                            }}
                            size="lg"
                            variant="info"
                            onClick={() => {
                                this.setState({
                                    modalAddPerson: true
                                })
                            }}>
                            <IoIosAdd /> Add driver</Button>
                    </div>
                    <div>
                        <div className="Intab" >
                            <Table style={{ textAlign: 'center', justifyContent: 'center', overflow: 'auto', maxWidth: '100%', }}>
                                <thead>
                                    <tr>
                                        <th>User_ID</th>
                                        <th>First name</th>
                                        <th>Last name</th>
                                        <th>Username</th>
                                        <th>Personal information</th>
                                        <th>Edit/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.getdata()}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <ModalEdit
                        data={this.state.setdatamodal}
                        show={this.state.modalEdShow}
                        onHide={() => {
                            this.setState({ modalEdShow: false })
                            this.getapi()
                        }}
                    />
                    <ModalDelete
                        data={this.state.setdatamodal}
                        show={this.state.modalDeShow}
                        onHide={() => {
                            this.setState({ modalDeShow: false })
                            this.getapi()
                        }}
                        
                    />
                    <ModalAddPerson
                        data={this.state.setdatamodal}
                        show={this.state.modalAddPerson}
                        onHide={() => {
                            this.setState({ modalAddPerson: false })
                            this.getapi()
                        }}
                    />
                    <ModalInformation
                        data={this.state.setdatamodal}
                        show={this.state.modalinformation}
                        onHide={() => this.setState({ modalinformation: false })}
                    />
                </div >
            </div>

        );
    }
}
export default Info;