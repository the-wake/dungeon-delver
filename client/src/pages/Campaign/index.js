import { Button, Container, Row, ListGroup, Col } from 'react-bootstrap';

import CampaignForm from '../../components/CampaignForm';
import CampaignList from '../../components/CampaignList';

import { QUERY_CAMPAIGNS } from '../../utils/queries';
// import { useSessionContext } from '../../utils/SessionContext.js'

// import { Navigate, useParams, Link } from 'react-router-dom';
import "./campaign.css";

// import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';




const Campaign = () => {
    if (!Auth.loggedIn()) {
        window.location = `/login`
    }

    const { loading, data } = useQuery(QUERY_CAMPAIGNS);

    const campaigns = data?.getCampaigns || [];

    if (!loading) {
        console.log(campaigns)
    };

    return (
        <Container className='my-campaign-container'>
          <Row>  
            <Col>
                <img src={require("../../images/campaign-map.jpg")}
                alt="Landscape Map"
                style={{width: "650px", marginTop: "145px"}}
                />
                {/* <div>
               {campaignText && campaigns.map((text) => (
                   <div key={campaigns._id} className="card">{campaigns}</div>
               ))}
                </div> */}
            </Col>
            <Col>
              <CampaignForm
                campaigns={campaigns} />
                <h1 className="mb-3 mt-3 mx-3">My Campaigns</h1>
                {loading ? (
                <h2>
                    Retrieving Data...
                </h2>
            ) : (
                <CampaignList
                campaigns={campaigns} />
                )}
            </Col>
          </Row>  
        </Container>
    );
}



export default Campaign;