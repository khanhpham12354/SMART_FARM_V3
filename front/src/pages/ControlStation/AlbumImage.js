import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "reactstrap";
import "./AlbumImage.css";
import { CustomImg } from "../../components/CustomTag";
import LightOff from "../../assets/img/photos/light_off.png";
import LightOn from "../../assets/img/photos/light_on.png";
import FantOff from "../../assets/img/photos/fan_off.png";
import FanOn from "../../assets/img/photos/fan_on.png";
const utils = require("../../utils/utils");
class AlbumImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            t: 0,
            p: 0,
            f: 0,
        };
    }

    render() {
        const { send } = this.props;
        return (
            <div className='div-album'>
                <Row>
                    <Col xs='4'>
                        <CustomImg
                            key={utils.randomString()}
                            src={this.state.t ? LightOn : LightOff}
                            alt='button'
                            className='img--user--square-4x control__item d-flex justify-content-center m-auto'
                        />

                        <div className='d-flex justify-content-center mt-3 '>
                            <Button
                                className='mr-3'
                                color='danger'
                                size='md'
                                onClick={() => {
                                    this.setState({ t: 0 });
                                    send("00");
                                }}>
                                Tắt đèn
                            </Button>
                            <Button
                                className=''
                                color='success'
                                size='md'
                                onClick={() => {
                                    this.setState({ t: 1 });
                                    send("01");
                                }}>
                                Bật đèn
                            </Button>
                        </div>
                    </Col>
                    <Col xs='4'>
                        <CustomImg
                            key={utils.randomString()}
                            src={this.state.p ? FanOn : FantOff}
                            alt='button'
                            className='img--user--square-4x  d-flex justify-content-center control__item m-auto'
                        />
                        <div className='d-flex justify-content-center mt-3 '>
                            <Button
                                className='mr-3'
                                color='danger'
                                size='md'
                                onClick={() => {
                                    this.setState({ p: 0 });
                                    send("10");
                                }}>
                                Tắt máy
                            </Button>
                            <Button
                                className=''
                                color='success'
                                size='md'
                                onClick={() => {
                                    this.setState({ p: 1 });
                                    send("11");
                                }}>
                                Bật máy
                            </Button>
                        </div>
                    </Col>
                    <Col xs='4'>
                        <CustomImg
                            key={utils.randomString()}
                            src={this.state.f ? FanOn : FantOff}
                            alt='button'
                            className='img--user--square-4x float-center d-flex justify-content-center control__item m-auto'
                        />
                        <div className='d-flex justify-content-center mt-3 '>
                            <Button
                                className='mr-3'
                                color='danger'
                                size='md'
                                onClick={() => {
                                    this.setState({ f: 0 });
                                    send("20");
                                }}>
                                Tắt quạt
                            </Button>
                            <Button
                                className=''
                                color='success'
                                size='md'
                                onClick={() => {
                                    this.setState({ f: 1 });
                                    send("21");
                                }}>
                                Bật quạt
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AlbumImage;
