import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  const listOfQuestion = questions.map((question) => (
    <QuestionItem key={question.id} question={question} />
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* display QuestionItem components in the <ul> element after fetching */}
      <ul>{listOfQuestion}</ul>
    </section>
  );
}

export default QuestionList;
