import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import questions from './questions';
import Button from 'react-bootstrap/Button';
import './RandomNumberGame.css'


const RandomNumberGame = () => {
    const [numbers, setNumbers] = useState([...Array(100)].map((_, index) => index + 1));
    const [currentNumber, setCurrentNumber] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState('');

    const getNextNumber = () => {
        if (numbers.length === 0) {
            setCurrentNumber(null);
            setCurrentQuestion('');
            return;
        }

        const randomIndex = Math.floor(Math.random() * numbers.length);
        const number = numbers[randomIndex];
        const updatedNumbers = [...numbers];
        updatedNumbers.splice(randomIndex, 1);

        setNumbers(updatedNumbers);
        setCurrentNumber(number);

        // Generate a random question based on the number
        const question = questions[number];
        setCurrentQuestion(question);

    };
    return (
        <>
            <div>
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <Button className='genarate-button' variant="dark" onClick={getNextNumber}>Generate Random Number</Button>
                        {currentNumber && (
                            <div className='d-flex justify-content-center'>
                                <Card className='cards' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="./images/ans.jpg" />
                                    <Card.Body>
                                        <Card.Title>Random Number: {currentNumber}</Card.Title>
                                        <Card.Text>
                                            {currentQuestion}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}
                        {!currentNumber &&
                            <div className='d-flex justify-content-center'><p>Game over! All numbers have been used.</p></div>
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default RandomNumberGame