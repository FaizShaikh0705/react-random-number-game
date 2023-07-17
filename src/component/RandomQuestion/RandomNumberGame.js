import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import questions from './questions';
import convoQuestions from './convoQuestion';
import pastQuestions from './pastQuestion';
import Button from 'react-bootstrap/Button';
import './RandomNumberGame.css';

const RandomNumberGame = () => {
    const [dataType, setDataType] = useState('general');
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [remainingCounts, setRemainingCounts] = useState({
        general: questions.length,
        convo: convoQuestions.length,
        past: pastQuestions.length
    });

    const handleDataTypeChange = (event) => {
        setDataType(event.target.value);
    };

    const getRandomQuestion = () => {
        let selectedQuestions = [];

        if (dataType === 'general') {
            selectedQuestions = questions;
        } else if (dataType === 'convo') {
            selectedQuestions = convoQuestions;
        } else if (dataType === 'past') {
            selectedQuestions = pastQuestions;
        }

        if (selectedQuestions.length === 0) {
            setCurrentQuestion('');
            return;
        }

        const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
        const question = selectedQuestions[randomIndex];

        setCurrentQuestion(question);

        setRemainingCounts((prevCounts) => ({
            ...prevCounts,
            [dataType]: prevCounts[dataType] - 1
        }));
    };

    const remainingCount = remainingCounts[dataType] || 0;

    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <label htmlFor="data-type-select">Select Data Type:</label>
                    <select id="data-type-select" value={dataType} onChange={handleDataTypeChange}>
                        <option value="general">General</option>
                        <option value="convo">Conversation</option>
                        <option value="past">Past</option>
                    </select>
                    <Button className='generate-button mt-4' variant="dark" onClick={getRandomQuestion}>
                        Generate Random Question
                    </Button>
                    {currentQuestion && (
                        <div className='d-flex justify-content-center'>
                            <Card className='cards' style={{ width: '18rem' }}>
                                {/* Update the image URL below */}
                                <Card.Img variant="top" src="./images/ans.jpg" />
                                <Card.Body>
                                    <Card.Title>Random Question:</Card.Title>
                                    <Card.Text>{currentQuestion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                    {!currentQuestion && (
                        <div className='d-flex justify-content-center'>
                            <p>Game over! All questions have been used.</p>
                        </div>
                    )}
                    <div>
                        <p className='d-flex justify-content-center m-4'>Questions Left: {remainingCount}</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default RandomNumberGame;
