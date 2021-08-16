const NewQuiz = (props) => {

    return(
        <>  
            <h4>Create Card</h4>


                <form>
                    <label>Job Url</label>
                    <input type="jobUrl" value={props.jobURL} onChange={(e) => props.setJobURL(e.target.value)} placeholder="Job URL" />
                </form>
{/* 
            <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
                <Form.Label>Job Url</Form.Label>
                <Form.Control type="jobUrl" value={props.jobURL} onChange={(e) => props.setJobURL(e.target.value)} placeholder="Job URL" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="jobTiltle" value={props.title} onChange={(e) => props.setTitle(e.target.value)} placeholder="Job Title" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-2">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={props.description} onChange={(e) => props.setDescription(e.target.value)} placeholder="Job Description"/>
            </Form.Group>

             <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} value={props.notes} onChange={(e) => props.setNotes(e.target.value)} placeholder="Notes"/>
            </Form.Group>

            <div className="apply-date">
                <label className="mb-2 px-1"id="calendar" htmlFor="start">Applied on:</label>
                <input className="mb-2" type="date" id="start" name="trip-start"
                    value={props.dateApplied} onChange={(e) => props.setDateApplied(e.target.value)} 
                    min="2018-01-01" max="2035-12-31"/>  
            </div>        
            
            <Form.Group controlId="exampleForm.ControlSelect1" className="mb-3">
                <Form.Label>Priority:</Form.Label>
                <Form.Control as="select" value={props.priority} onChange={(e) => props.setPriority(e.target.value)}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1" className="mb-4">
                <Form.Label>Status:</Form.Label>
                <Form.Control as="select" value={props.status} onChange={(e) => props.setStatus(e.target.value)}>
                    <option>Applied</option>
                    <option>To Apply</option>
                    <option>Interviewed</option>
                    <option>Rejected</option>
                    <option>Archive</option>
                </Form.Control>
            </Form.Group>
            <div className="create-btn">
                <Button id="createCard" onClick={() => props.handleJobCreate()}>Submit</Button>
            </div> */}
        </>
    )



}

export default NewQuiz