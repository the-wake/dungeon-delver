import { Container, Col, Row, Button, Modal, Form } from "react-bootstrap";
import "./editCampaign.css";

import { EDIT_CAMPAIGN } from "../../utils/mutations";

import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditCampaign = (props) => {
    const [campaignText, setCampaignText] = useState('');
    const [onShow, setOnShow] = useState(false);

    const [editCampaign, { error, data }] = useMutation(EDIT_CAMPAIGN);

    const handleEditSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await editCampaign({
                variables: {
                    name: campaignText,
                    user: Auth.getProfile().data.username,
                },
            });
            setCampaignText('');

            window.location.reload();

        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'campaignText') {
            setCampaignText(value);
        }
    };


    return (
        <>
            {
                Auth.loggedIn() ? (
                    <Container>
                        <Modal show={onShow} onHide={() => setOnShow(false)} role="dialog">
                            <Form onSubmit={handleEditSubmit}>
                                <Modal.Header closeButton>
                                    <Modal.Title>New Campaign Name</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            autoFocus
                                            onChange={handleChange}
                                            value={campaignText.name}
                                            className="form-input"
                                            type="text"
                                            placeholder="Enter the name of your campaign"
                                            name="campaignText" />

                                        {error ? (
                                            <div>
                                                <p className="error-text">Please enter a campaign name.</p>
                                            </div>
                                        ) : null}
                                    </Form.Group>

                                </Modal.Body>
                            </Form>
                            <Modal.Footer>
                                <Button variant="primary">
                                    Submit</Button>
                            </Modal.Footer>
                        </Modal>
                        <Row>
                            <Col>
                                <Button onClick={() => setOnShow(!onShow)} className="mt-4 mb-5">
                                    Edit Campaign
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <p>
                        You need to be logged in. Please
                        <Link to="/login"> login</Link> or <Link to="/signup"> sign up</Link>
                    </p>
                )
            }
        </>

        // <Container>
        //     <Col>
        //         <Row>
        //             <h1>Update Campaign:
        //                 {/* {campaign} */}
        //             </h1>
        //         </Row>
        //     </Col>
        //     <Container>
        //         <Row>
        //             <Form>
        //                 <Form.Group className="mb-3" controlId="formBasicText">
        //                     <Form.Label></Form.Label>
        //                     <Form.Control
        //                         autoFocus
        //                         onChange={handleChange}
        //                         // value={campaignText}
        //                         // id="text"
        //                         className="form-input"
        //                         type="text"
        //                         placeholder="New campaign name"
        //                         name="text" />
        //                     {error ? (
        //                         <div>
        //                             <p className='error-text'>Please enter a new campaign name</p>
        //                         </div>
        //                     ) : null}
        //                 </Form.Group>
        //             </Form>
        //         </Row>
        //     </Container>
        //     <Container>

        //         <Button onClick={handleCampaignSubmit} className="mt-4">
        //             Submit
        //         </Button>
        //     </Container>
        // </Container>


    );
}

export default EditCampaign;