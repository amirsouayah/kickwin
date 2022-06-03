import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


const TeamForm = (props) => {
  const [team, setTeam] = useState({
    teamname: props.team ? props.team.teamname : '',
    author: props.team ? props.team.author : '',
    quantity: props.team ? props.team.quantity : '',
    price: props.team ? props.team.price : '',
    date: props.team ? props.team.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { teamname, author, price, quantity } = team;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [teamname, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const team = {
        id: uuidv4(),
        teamname,
        author,
        price,
        quantity,
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
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setTeam((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
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
      {/* <Form onSubmit={handleOnSubmit}>
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
        <Form.Group controlId="author">
          <Form.Label>Team Lead</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>team Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of team"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form> */}
        <TextField
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
            label="Qantity"
            // onChange={e => setEmail(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            type="text"
            fullWidth
            id="email"
            label="price"
            // onChange={e => setEmail(e.target.value)}
          />

        <Button variant="contained">
          Submit
        </Button>
    </div>
  );
};

export default TeamForm;