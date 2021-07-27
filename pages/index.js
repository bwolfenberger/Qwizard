import Head from 'next/head'
import QuestionList from '../components/QuestionList'
import Link from 'next/link'
// const quizApiKey = process.env.QUIZ_API_KEY

export default function Home(questions) {
  return (
    <div>
      <Head>
        <title>Benji</title>
        <meta name='keywords' content='web developement, programming' />
      </Head>
      
      <h3>Select your quiz category:</h3>
      <ul>
        <li>
            <Link href='/questions/HTML'>HTML</Link>
        </li>
        <li>
          <Link href='/questions/JavaScript'>JavaScript</Link>
        </li>
        <li>
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
