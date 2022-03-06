import { Button, Container, Row, ListGroup, Col } from 'react-bootstrap';

import CampaignForm from '../../components/CampaignForm';
import CampaignList from '../../components/CampaignList';

import { QUERY_CAMPAIGNS } from '../../utils/queries';

import { Navigate, useParams, Link } from 'react-router-dom';
import "./campaign.css";

import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';




const Campaign = () => {
    const { loading, data } = useQuery(QUERY_CAMPAIGNS);
    console.log(data);

    const campaigns = data?.getCampaigns || [];
    console.log(campaigns);

    return ( 
        // <h1>
        //     Campaign Page.
        // </h1>
        <Container className='my-campaign-container'>
        <Col>
            <h1 className="text-center">Campaigns</h1>
            {/* <div>
               {campaignText && campaigns.map((text) => (
                   <div key={campaigns._id} className="card">{campaigns}</div>
               ))}
                </div> */}
        </Col>
        <Col>
            <Row>
            </Row>
        </Col>
    
     <CampaignForm
     campaigns={campaigns}/>
      <h1 className="mb-3 mt-3 mx-3">My Campaigns</h1>
     <CampaignList
     campaigns={campaigns} />
        </Container>
    );
}


 
export default Campaign;