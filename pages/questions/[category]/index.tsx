import { GetServerSidePropsContext } from 'next';
import { useState } from 'react'
import questionStyles from '../../../styles/Questions.module.css'

const quizApiKey = process.env.QUIZ_API_KEY

interface Questions {
    category: string,
    question: string,
    correct_answers: string[],
    answers: string[]
}

interface PageProps {
    questions: Questions[]
}

interface ResultProps {
    question: string,
    i: number,
    parentI: number
}

const questions = ({ questions }: PageProps) => {
    const [result, setResult] = useState(' ');
    const [parentIndex, setParentIndex] = useState('');

    function showResult({ question, i, parentI }: ResultProps){
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const category = context.params.category

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