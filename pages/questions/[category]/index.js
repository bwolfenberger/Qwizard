import { useRouter } from 'next/router'
import { useState } from 'react'

import questionStyles from '../../../styles/Questions.module.css'

const quizApiKey = process.env.QUIZ_API_KEY



const questions = (questions) => {

    const [showAnswer, setShowAnswer] = useState(false);
    const [result, setResult] = useState('');
    const [parentIndex, setParentIndex] = useState('');

    function toggle(){
      setShowAnswer(!showAnswer);
    }

    function showResult(question, i, parentI){
        setResult(Object.values(question.correct_answers)[i])
        setParentIndex(parentI)
    }
    console.log(result)

    // const router = useRouter()
    // const { category } = router.query
// console.log(questions)
// console.log(questions.questions[0].answers)
// const ansArray = Object.values(questions.questions[0].correct_answers)
// const correctAnsIndexes = ansArray.map((ans, idx) => ans === 'true' ? idx: '').filter(String)
// correctAnsIndexes.map(index => {
//     // console.log(index + 1)
// })

// console.log(ansArray)
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

                    {parentIndex == parentI &&
                    <div>
                        {result == 'true' &&
                        <div className={questionStyles.correct}>Correct!</div>}

                        {result == 'false' &&
                        <div className={questionStyles.incorrect}>Incorrect, try again 😢</div>}
                    </div>}

                    {/* <button className={questionStyles.button} onClick={toggle}>Show Answers</button>
                    <div style={{
                        display: showAnswer?"block":"none"
                    }}>
                        {Object.values(question.answers).map((answers, i) => (
                            i == (parseInt(Object.values(question.correct_answers).map((ans, idx) => ans === 'true' ? idx: '').filter(String))) &&
                                <>
                                    <a className={questionStyles.answer}>{answers}</a>
                                </>
                    ))}
                    </div> */}


                </div>
            ))}
        </div>
    )
}

export const getServerSideProps = async (context) => {
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