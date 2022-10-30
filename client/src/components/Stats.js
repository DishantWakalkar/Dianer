import React, {useEffect, useState} from "react";
import Team from "../assets/social.svg";
import Card from 'react-bootstrap/Card';

const Stats = () =>{

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
    fetch("/getUser").then(
        response => response.json()
    ).then(
        data => {
        setBackendData(data)
        }
    )
    }, []) 


    return (
    <div>
        <Card style={{ height: '150px', width:'250px', textAlign:'center'}}>
            <Card.Body>
            <Card.Title style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif', fontSize:'25px', marginTop:'10px'}}>Active Users</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text style={{ fontSize: '30px', marginTop:'15px'}}>
                <img src={Team} alt="Team" style={{width:'40px', marginRight:'10px'}}/>
                {backendData.map(d=>d.TotalUsers)}
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
    }

export default Stats;