import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import Categories from "../assets/Categories";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName ,fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);


    const navigate = useNavigate()
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
          setError(true);
      
          // Set a timeout to clear the error after 3 seconds
          setTimeout(() => {
            setError(false);
          }, 1000); // 3000 milliseconds = 3 seconds
          return;
        } else {
          setError(false);
          fetchQuestions(category, difficulty);
          navigate('/quiz');
        }
      };
      

 

    return (
        <div className="content">
        <div className="settings">
            <span style={{ fontSize: 30 }}>Quiz Setting</span>
            <div className="settings__select">
            {error && <ErrorMessage>Please Fill All the Fields</ErrorMessage>}
            <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                style={{ marginBottom: 30 }}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                select
                label="Select Category"
                variant="outlined"
                style={{ marginBottom: 30 }}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            >
                {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                    {cat.category}
                </MenuItem>
                ))}
            </TextField>

            <TextField
                select
                label="Select Difficulty"
                variant="outlined"
                style={{ marginBottom: 30 }}
                onChange={(e)=>setDifficulty(e.target.value)}
                value={difficulty}
            >
                <MenuItem key="easy" value="easy">
                Easy
                </MenuItem>
                <MenuItem key="medium" value="medium">
                Medium
                </MenuItem>
                <MenuItem key="difficult" value="difficult">
                Difficult
                </MenuItem>
            </TextField>

            <Button variant="contained" color="primary" size="large"
            onClick={handleSubmit}
            >
                Start Quizz
            </Button>
            </div>
        </div>
        <img src="./quiz.svg" className="banner" alt="" />
        </div>
    );
    };

export default Home;
