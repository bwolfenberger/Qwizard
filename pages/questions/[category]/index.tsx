import { useState } from 'react'
import questionStyles from '../../../styles/Questions.module.css'

// bring in private API key from .env.local
const quizApiKey = process.env.QUIZ_API_KEY

//<-- Declare interfaces for defining structure and types -->
    interface Questions {
        category: string,
        question: string,
        correct_answers: string[],
        answers: string[]
    }

    interface PageProps {
        questions: Questions[],
        category: string
    }

    interface ContextProps {
        params: Params
    }

    interface Params {
        category: string,
    }
// <-- Main Function -->
// Questions prop object brought in from external quiz source
const questions = (questions: PageProps) => {
    // Declare states
    const [correctAnswer, setCorrectAnswer] = useState<string>('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    // Set states based on click data
    function showResult(question: Questions, i: number, questionIndex: number){
        // Set CorrectAnswer to either true or false
        setCorrectAnswer(Object.values(question.correct_answers)[i])
        // Set CurrentQuestionIndex to the clicked on question index
        setCurrentQuestionIndex(questionIndex)
    }

// <-- Main Return for displaying list of questions -->
    return (
        <div>
            <h2 className={questionStyles.grid}>{questions.category} Questions</h2>
            {/* First questions is question object brought through as prop */}
            {/* second questions is the list of questions stated by the API */}
            {questions.questions.map((question, questionIndex) => (
                <div className={questionStyles.grid}>
                    {/* question.question needed to display individual questions */}
                    <h3 className={questionStyles.title}>{question.question}</h3>
                    {/* Object.values returns array from object */}
                    {Object.values(question.answers).map((answers, i) => (
                        // Check to only display when answers has a value
                        answers !== null &&
                            // Display button with onClick event which runs showResult function
                            <button onClick={() => showResult(question, i, questionIndex)} className={questionStyles.button}>{answers}ddasd</button>
                    ))}

                    {/* check if selected answer is correct */}
                    {currentQuestionIndex == questionIndex &&
                        <div>
                            {correctAnswer == 'true' &&
                                <div className={questionStyles.correct}>Correct!</div>}

                            {correctAnswer == 'false' &&
                                <div className={questionStyles.incorrect}>Incorrect, try again 😢</div>}
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export const getServerSideProps = async (context: ContextProps) => {
    const category: string = context.params.category

    const res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${quizApiKey}&limit=10&tags=${context.params.category}`)
    const questions = await res.json()

    return {
        props: {
            questions,
            category
        }
    }
}

export default questions