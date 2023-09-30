import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {

  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => onDeleteQuestion(id))
  }

  const listOfQuestion = questions.map((question) =>
    <QuestionItem key={question.id} question={question} onDeleteClick={handleDeleteClick} onUpdateQuestion={onUpdateQuestion} />
  )

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listOfQuestion}</ul>
    </section>
  );
}

export default QuestionList;
