import Link from 'next/link'
import categoryStyles from '../styles/Category.module.css'
// const quizApiKey = process.env.QUIZ_API_KEY

export default function Home(questions) {
  return (
    <div>      
      <h3>Select your quiz category:</h3>
      <ul>
        <li className={categoryStyles.category}>
          <Link href='/questions/HTML'>HTML</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/JavaScript'>JavaScript</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/MySQL'>MySQL</Link>
        </li>
    </ul>
      {/* <QuestionList questions={questions}/> */}
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${quizApiKey}&limit=10&tags=HTML`)
//   const questions = await res.json()
//   return {
//     props: {
//       questions
//     }
//   }
// }
