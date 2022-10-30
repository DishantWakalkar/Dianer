import React, {useEffect, useState} from "react";
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
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
             
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
    }

export default Stats;