import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Team = ({
  id,
  teamname,
  leader,
  city,
  country,
  date,
  handleRemoveTeam
}) => {
    const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="team">
      <Card.Body>
        <Card.Title className="team-title">{teamname}</Card.Title>
        <div className="team-details">
          <div>Leader: {leader}</div>
          <div>city: {city} </div>
          <div>Country: {country} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveTeam(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Team;