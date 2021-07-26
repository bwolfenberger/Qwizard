import Head from 'next/head'
import QuestionList from '../components/QuestionList'
// import styles from '../styles/Home.module.css'

export default function Home(questions) {
  return (
    <div>
      <Head>
        <title>Benji</title>
        <meta name='keywords' content='web developement, programming' />
      </Head>
      
      <QuestionList questions={questions}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=NO9367LnqoEXNu5hv33VZJbtftSxXPxaEcF1vxGb&limit=10&tags=HTML`)
  const questions = await res.json()
  return {
    props: {
      questions
    }
  }
}
