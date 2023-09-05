import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ValidationTextFields() {
    const [data, setData] = useState({title: "", content: ""})
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL

    function handleChange(e) {
        setData(values => ({...values, [e.target.name]: e.target.value}))

    }

    function handleSubmit(e) {
        e.preventDefault()
        const message = {
          title: data.title,
          content: data.content
        }
        axios.post(`${baseUrl}:3001/messages`, message)
        .then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
          } else {
            return navigate("/");
          }
        })

    }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div >
        <TextField
          required
          name='title'
          value={data.title}
          id="outlined-required"
          label="Title"
          onChange={handleChange}
        />
        <TextField
          required
          name='content'
          value={data.content}
          id="outlined-disabled"
          label="Content"
          onChange={handleChange}
        />
        <Button type='submit' value='submit' variant="contained" >Submit</Button>
      </div>
    </Box>
  );
}
