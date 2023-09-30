import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(questionData => setQuestions(questionData))
  }, [])

  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestionList = questions.map((question) => {
      if (updatedQuestion.id !== question.Id) {
        return question
      } else {
        return updatedQuestion
      }
    })
    setQuestions(updatedQuestionList)
  }

  function handleDeleteQuestion(id) {
    const deletedQuestionList = questions.filter((question) => question.id !== id)
    setQuestions(deletedQuestionList)
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form"
        ? <QuestionForm onAddQuestion={handleAddQuestion} />
        : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion} />}
    </main>
  );
}

export default App;
