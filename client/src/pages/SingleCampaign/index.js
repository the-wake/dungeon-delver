import "./singleCampaign.css";
import { Container, Col, Row, Button } from "react-bootstrap";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


//this doesn't exist on the front-end yet
// import { QUERY_SINGLE_DUNGEON } from '../utils/queries';

const SingleCampaign = () => {
    // const { name } = useParams();

    // const { loading, data } = useQuery(QUERY_SINGLE_CAMPAIGN, {
    //     //have to pass state prop from campaignForm to 
    //     //retrieve new name
    //     variables: { name: props.name },
    // });

    // const campaign = data?.campaign || {};

    // if (loading) {
    //     return <div>
    //         <h3>Campaign loading...</h3>
    //     </div>
    // }

    return (
        <Container>
            <Col>
                <Row>
                    {/* <h1>{campaign}</h1> */}
                </Row>
            </Col>
            <Col>
                <Row>
                    <Button>
                        Edit Campaign
                    </Button>
                    <Button>
                        Create Dungeon
                    </Button>
                </Row>
            </Col>
            <Col>
                <Row>
                    <h1>Dungeons</h1>
                </Row>
            </Col>
        </Container>
    );
}

export default SingleCampaign;