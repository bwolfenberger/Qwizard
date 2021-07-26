import questionStyles from '../styles/Questions.module.css'

const QuestionList = (questions) => {
    console.log(questions.questions)
    return (
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
    )
}

export default QuestionList