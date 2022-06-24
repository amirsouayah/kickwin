import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import TextField from "@material-ui/core/TextField";
// import Button from '@material-ui/core/Button';
import { Form, Button } from 'react-bootstrap';

const TeamForm = (props) => {
  const [team, setTeam] = useState({
    teamname: props.team ? props.team.teamname : '',
    leader: props.team ? props.team.leader : '',
    country: props.team ? props.team.country : '',
    city: props.team ? props.team.city : '',
    date: props.team ? props.team.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { teamname, leader, city, country } = team;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [teamname, leader, city, country];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const team = {
        id: uuidv4(),
        teamname,
        leader,
        city,
        country,
        date: new Date()
      };
      props.handleOnSubmit(team);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'country':
        if (value === '' || parseInt(value) === +value) {
          setTeam((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'city':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setTeam((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setTeam((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
       {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit} >
        <Form.Group controlId="name">
          <Form.Label>Team Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="teamname"
            value={teamname}
            placeholder="Enter name of team"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="leader">
          <Form.Label>Team Lead</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="leader"
            value={leader}
            placeholder="Enter name of leader"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="country"
            value={country}
            placeholder="Enter available country"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>team city</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="city"
            value={city}
            placeholder="Enter city of team"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
      
        {/* <TextField
            variant="outlined"
            margin="normal"
            required
            type="text"
            fullWidth
            label="name"
            // onChange={e => setEmail(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            type="text"
            fullWidth
            label="team lead"
            // onChange={e => setEmail(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            type="text"
            fullWidth
            id="email"
            label="Country"
            // onChange={e => setEmail(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            type="text"
            fullWidth
            id="email"
            label="city"
            // onChange={e => setEmail(e.target.value)}
          />

        <Button variant="contained">
          Submit
        </Button> */}
        
    </div>
  );
};

export default TeamForm;