import questionStyles from '../styles/Questions.module.css'
import Link from 'next/link'
const quizApiKey = process.env.QUIZ_API_KEY

const QuestionList = (questions) => {
    return(
        <Link href='/questions/[category]' as={`/questions/${questions.category}`}>
            <div className={questionStyles.grid}>
                {questions.questions.questions.map((question) => (
                    <div>
                        <h3>{question.question}</h3>
                        {Object.values(question.answers).map((answers, i) => (
                            <p>{i + 1}.{answers}</p>
                        ))}
                    </div>
                ))}
            </div>
        </Link>
    )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${quizApiKey}&limit=10&tags=HTML`)
  const questions = await res.json()
  return {
    props: {
      questions
    }
  }
}


// import questionStyles from '../styles/Questions.module.css'

// const QuestionList = (questions) => {
//     console.log(questions.questions)
//     return (
        // <div className={questionStyles.grid}>
        //     {questions.questions.questions.map((question) => (
        //         <div>
        //             <h3>{question.question}</h3>
        //             {Object.values(question.answers).map((answers, i) => (
        //                 <p>{i + 1}.{answers}</p>
        //             ))}
        //         </div>
        //     ))}
        // </div>
//     )
// }

// export default QuestionList