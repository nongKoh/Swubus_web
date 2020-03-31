import React, { Component } from 'react';
import './Srinakharinwirot-Regular.ttf'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import InputGroup from 'react-bootstrap/InputGroup'


class InfoDriver extends Component {
    // constructor() {
    //     super();
    //     this.clearInput = this.clearInput.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this)
    // }
    state = {
        formState: {
            id: '',
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            mode: "submit",
        },
    }

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
                                    <Form.Label>First name (ชื่อ)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Driver_name}
                                        name="firstName"
                                        type="text"
                                        disabled
                                    />

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last name (นามสกุล)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Driver_lastname}
                                        name="lastName"
                                        type="text"
                                        disabled
                                    />

                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>Username (ชื่อผู้ใช้งาน)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Username}
                                        name="username"
                                        type="text"
                                        disabled />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password (รหัสผ่าน)</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            defaultValue={this.props.data.data.Password}
                                            name="password"
                                            type="text"
                                            disabled />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAge">
                                    <Form.Label>Age (อายุ)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Age}
                                        name="age"
                                        type="number"
                                        disabled />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridBirth">
                                    <Form.Label>Date of birth (วัน/เดือน/ปี พ.ศ. ที่เกิด)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Date}
                                        disabled />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridID-Card">
                                    <Form.Label>ID card (บัตรประชาชน/Passport)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.IDcard}
                                        disabled />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress">
                                    <Form.Label>Address (ที่อยู่)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Address}
                                        disabled />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSub-District">
                                    <Form.Label>Sub-district/ Sub-area (ตำบล/แขวง)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Sub_district}
                                        disabled />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDistrict">
                                    <Form.Label>District / Area (อำเภอ/เขต)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.District}
                                        disabled />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridProvince">
                                    <Form.Label>Province (จังหวัด)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Province}
                                        disabled />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPost">
                                    <Form.Label>Postal Code (รหัสไปรษณีย์)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Post}
                                        disabled />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMoblie">
                                    <Form.Label>Moblie (เบอร์มือถือ)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Mobile}
                                        disabled />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.E_mail}
                                        disabled />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridDisease">
                                    <Form.Label>Disease (โรคประจำตัว)</Form.Label>
                                    <Form.Control
                                        defaultValue={this.props.data.data.Disease}
                                        disabled />
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default InfoDriver;
