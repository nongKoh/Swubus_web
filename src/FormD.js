import React, { Component } from "react";
import "./Srinakharinwirot-Regular.ttf";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import env from "./config";
//import DropdownButton from 'react-bootstrap/DropdownButton'
//import Dropdown from 'react-bootstrap/Dropdown'

class FormD extends Component {
  constructor(props) {
    super();
    this.clearInput = this.clearInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    formState: {
      Driver_name: "",
      Driver_lastname: "",
      Username: "",
      Password: "",
      Age: "",
      Date: "",
      IDcard: "",
      Address: "",
      Sub_district: "",
      District: "",
      Province: "",
      Post: "",
      Mobile: "",
      E_mail: "",
      Disease: "",
      mode: "submit"
    },
    users: [
      {
        firstName: "ไฟท์",
        lastName: "โก๊ะบอก",
        username: "ให้ทำงาน",
        password: "123456",
        updating: false
      }
    ]
  };

  clearInput() {
    this.setState({
      formState: {
        Driver_name: "",
        Driver_lastname: "",
        Username: "",
        Password: "",
        Age: "",
        Date: "",
        IDcard: "",
        Address: "",
        Sub_district: "",
        District: "",
        Province: "",
        Post: "",
        Mobile: "",
        E_mail: "",
        Disease: ""
      }
    });
  }

  onSubmit = async e => {
    console.log(this.state.formState);
    let data = this.state.formState;
    axios
      .post(
        `${env.urltest}/driver/create`,
        {
          Driver_name: data.Driver_name,
          Driver_lastname: data.Driver_lastname,
          Username: data.Username,
          Password: data.Password,
          Age: data.Age,
          Date: data.Date,
          IDcard: data.IDcard,
          Address: data.Address,
          Sub_district: data.Sub_district,
          District: data.District,
          Province: data.Province,
          Post: data.Post,
          Mobile: data.Mobile,
          E_mail: data.E_mail,
          Disease: data.Disease
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(res => {
        if(res.status === 200){
            alert("Add สำเร็จ")
            // this.props.getapi()
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="Bodymain">
          <div
            style={{
              marginRight: "3%",
              marginTop: "1%",
              marginLeft: "3%",
              fontFamily: "SWU"
            }}
          >
            <Form>
              <Form.Row style={{ alignItems: "center" }}>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name (ชื่อ)</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    onChange={event => {
                      let value = event.target.value;
                      this.setState(prevState => {
                        return {
                          formState: {
                            ...prevState.formState,
                            Driver_name: value
                          }
                        };
                      });
                    }}
                    value={this.state.formState.Driver_name}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last name (นามสกุล)</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    onChange={event => {
                      let value = event.target.value;
                      this.setState(prevState => {
                        return {
                          formState: {
                            ...prevState.formState,
                            Driver_lastname: value
                          }
                        };
                      });
                    }}
                    value={this.state.formState.Driver_lastname}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username (ชื่อผู้ใช้งาน)</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={event => {
                      let value = event.target.value;
                      this.setState(prevState => {
                        return {
                          formState: {
                            ...prevState.formState,
                            Username: value
                          }
                        };
                      });
                    }}
                    value={this.state.formState.Username}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password (รหัสผ่าน)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="password"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Password: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Password}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAge">
                  <Form.Label>Age (อายุ)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="age"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Age: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Age}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBirth">
                  <Form.Label>
                    Date of birth (วัน/เดือน/ปี พ.ศ. ที่เกิด)
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="date"
                      type="date"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Date: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Date}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridID-Card">
                  <Form.Label>ID card (บัตรประชาชน/Passport)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="IDcard"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              IDcard: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.IDcard}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress">
                  <Form.Label>Address (ที่อยู่)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="address"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Address: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Address}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridSub-District">
                  <Form.Label>Sub-district/ Sub-area (ตำบล/แขวง)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="sub_district"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Sub_district: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Sub_district}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDistrict">
                  <Form.Label>District / Area (อำเภอ/เขต)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="District"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              District: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.District}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridProvince">
                  <Form.Label>Province (จังหวัด)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="province"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Province: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Province}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPost">
                  <Form.Label>Postal Code (รหัสไปรษณีย์)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="post"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Post: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Post}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridMoblie">
                  <Form.Label>Moblie (เบอร์มือถือ)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="Mobile"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Mobile: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Mobile}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="email"
                      type="email"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              E_mail: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.E_mail}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridDisease">
                  <Form.Label>Disease (โรคประจำตัว)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="disease"
                      type="text"
                      onChange={event => {
                        let value = event.target.value;
                        this.setState(prevState => {
                          return {
                            formState: {
                              ...prevState.formState,
                              Disease: value
                            }
                          };
                        });
                      }}
                      value={this.state.formState.Disease}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Button
                  variant="primary"
                  // type="button"
                  style={{ marginLeft: "1%" }}
                  onClick={() => {
                    this.onSubmit(this.state.formState);
                  }}
                >
                  Save
                </Button>

                <Button
                  variant="primary"
                  style={{ marginLeft: "1%", marginRight: "1%" }}
                  onClick={this.clearInput}
                >
                  Clear
                </Button>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default FormD;
