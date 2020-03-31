import React, { Component } from 'react';
import './Srinakharinwirot-Regular.ttf'
import LogoSwu from './LogoSwu.png'
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import FormS from './FormS'
import Info from './Info'
import Station from './Station'
import Form from 'react-bootstrap/Form'
import { IoIosLogOut } from 'react-icons/io'
import Button from 'react-bootstrap/Button'
import { Redirect, Link } from 'react-router-dom'
class Main extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn,
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="BackHead">
                    <div className="HeadMain">
                        <img src={LogoSwu} alt="Logo" style={{ width: '160px', height: '160px' }} />
                        <div>
                            <div style={{ fontSize: 'xx-large', fontWeight: 'bolder' }}>Srinakharinwirot University</div>
                            มหาวิทยาลัยศรีนคริทรวิโรฒ
                            <div style={{ fontSize: 'xx-small' }}>SWU BUS M FOR ADMIN</div>
                        </div>
                    </div>
                    <div className="LoginHead">
                        <div style={{ marginRight: '3px' }}>
                            <div style={{ fontWeight: 'lighter' }}>Username: </div>
                            <div style={{ fontWeight: 'lighter' }}>(Admin) </div>
                        </div>
                        <Button variant="outline"
                            onClick={() => {
                                alert("ออกจากระบบ")
                                localStorage.removeItem("token")
                                }}>
                            <Link to="/">
                                <IoIosLogOut />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div style={{ marginRight: '3%', marginTop: '1%', marginLeft: '3%', fontFamily: 'SWU' }}>
                    <h1>Information</h1>
                    <h4>ข้อมูล</h4>
                </div>
                <div className="Bodymain">
                    <div style={{ marginRight: '3%', marginTop: '1%', marginLeft: '3%', marginBottom: '50px', fontFamily: 'SWU', borderRadius: '5px' }}>
                        <Tabs defaultActiveKey="Driver" id="uncontrolled-tab-example">
                            <Tab eventKey="Driver" title="Driver" >
                                <Info />
                            </Tab>
                            <Tab eventKey="Station" title="Station">
                                <Station />
                            </Tab>
                        </Tabs>
                    </div>
                    <div>
                        <div className="Credit">
                            <Form.Row style={{ alignItems: 'center' }}>
                                <img src={LogoSwu} alt="Logo" style={{ maxWidth: '24px', maxHeight: '24px' }} />
                                <div style={{ fontSize: '20px' }}>Srinakharinwirot University</div>
                            </Form.Row>
                            <div style={{ fontSize: '11px' }}>
                                <tb style={{ color: '#da2129' }}>SWU </tb>
                                <tb style={{ color: '#f4b1df' }}>BUS </tb>
                                <tb style={{ color: '#606265' }}>M </tb></div>
                            <div style={{ fontSize: '10px' }}>by</div>
                            <div style={{ fontSize: '11px', marginBottom: '0.5%' }}>Computer Engineering SWU</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
