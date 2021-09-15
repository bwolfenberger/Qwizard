// const NewQuiz = (props: String) => {

//     return(
//         <>  
//             <h4>Create your own quiz</h4>
//             <form>
//                 <label>Quiz Title </label>
//                 <input type="quizTitle" value={props.quizTitle} onChange={(e) => props.setQuizTitle(e.target.value)} placeholder="Quiz Title" />
//             </form>
//             <form>
//                 <label>Question 1</label>
//                 <input type="quizQuestion" value={props.quizQuestion} onChange={(e) => props.setQuizQuestion(e.target.value)} placeholder="Question" />
//             </form>
//             <form>
//                 <label>Answers </label>
//                 <input type="answer1" value={props.answer1} onChange={(e) => props.setAnswer(e.target.value)} placeholder="Answer 1"/>
//                 <input type="answer2" value={props.answer2} onChange={(e) => props.setAnswer(e.target.value)} placeholder="Answer 2"/>
//                 <input type='answer3' value={props.answer3} onChange={(e) => props.setAnswer(e.target.value)} placeholder="Answer 3"/>
//                 <input type='answer4' value={props.answer4} onChange={(e) => props.setAnswer(e.target.value)} placeholder="Answer 4"/>
//             </form>
//             <div className="create-btn">
//             <button id="createCard" onClick={() => props.handleJobCreate()}>Create Quiz</button>
//             </div>
//         </>
//     )
// }

// export default NewQuiz