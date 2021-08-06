import Head from 'next/head'

interface MetaProps {
  title: string,
  keywords: string,
  description: string
}

// Function for SEO and header info
const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Qwizard',
  keywords: 'quiz, learning, web development, programming',
  description: 'Quizzes for learning web development',
}

export default Meta