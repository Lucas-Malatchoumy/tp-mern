import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

function App() {
  const [messages, setMessages] = useState([])
  const baseUrl = process.env.REACT_APP_BASE_URL

  useEffect(() => {
    getMessages();
  }, []);

  function getMessages() {
    axios
      .get(`${baseUrl}:3001/messages`)
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
         setMessages(response.data)
        }
      });
  }
  return (
    <div >
      <h1>Liste des messages</h1>
      <Box marginLeft={8}>
      {messages.map((message, index) => {
        return (
          <Box sx={{
            marginTop: 2,
            borderStyle: 'solid',
            width: 200
          }} key={index}>
              <h3>Titre: {message.title}</h3>
              <span>Content: {message.content}</span>
          </Box>
        )
      })}
      </Box>
    </div>
  );
}

export default App;

