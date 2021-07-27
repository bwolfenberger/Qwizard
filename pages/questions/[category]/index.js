import { useRouter } from 'next/router'
import questionStyles from '../../../styles/Questions.module.css'
const quizApiKey = process.env.QUIZ_API_KEY

const questions = (questions) => {
    // const router = useRouter()
    // const { category } = router.query
// console.log(questions)
// console.log(questions.questions[0].answers)
const ansArray = Object.values(questions.questions[0].correct_answers)
const correctAnsIndexes = ansArray.map((ans, idx) => ans == 'true' ? idx: '').filter(String)
correctAnsIndexes.map(index => {
    console.log(index + 1)
})

console.log(ansArray)
    return (
        <div>
            <h2>{questions.category} Questions</h2>
            {questions.questions.map((question) => (
                <div className={questionStyles.grid}>
                    <h3>{question.question}</h3>
                        {Object.values(question.answers).map((answers, i) => (
                            answers !== null &&
                                <a className={questionStyles.card}>{answers}</a>
                    ))}
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