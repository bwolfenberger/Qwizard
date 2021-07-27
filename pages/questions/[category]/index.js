import { useRouter } from 'next/router'
const quizApiKey = process.env.QUIZ_API_KEY

const questions = (questions, category) => {
    // const router = useRouter()
    // const { category } = router.query

    return (
        <div>
            <h2>{questions.category} Questions</h2>
            {questions.questions.map((question) => (
                <div>
                    <h3>{question.question}</h3>
                    {Object.values(question.answers).map((answers, i) => (
                        <p>{i + 1}.{answers}</p>
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