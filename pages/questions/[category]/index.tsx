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
const questions = (questions: PageProps) => {
    // Declare states
    const [result, setResult] = useState<string>('');
    const [parentIndex, setParentIndex] = useState<number>(0);

    // Set states for current selected answer
    function showResult(question: Questions, i: number, parentI: number){
        setResult(Object.values(question.correct_answers)[i])
        setParentIndex(parentI)
    }

    return (
        <div>
            <h2 className={questionStyles.grid}>{questions.category} Questions</h2>
            
            {questions.questions.map((question, parentI) => (
                <div className={questionStyles.grid}>
                    <h3 className={questionStyles.title}>{question.question}</h3>
                    
                    {Object.values(question.answers).map((answers, i) => (
                        answers !== null &&
                            <button onClick={() => showResult(question, i, parentI)} className={questionStyles.button}>{answers}</button>
                    ))}

                    {/* check if selected answer is correct */}
                    {parentIndex == parentI &&
                        <div>
                            {result == 'true' &&
                                <div className={questionStyles.correct}>Correct!</div>}

                            {result == 'false' &&
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