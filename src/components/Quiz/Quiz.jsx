
import data from '../../db/data.json'
import { Question } from '../Question/Question';

export const Quiz = () => {
  return (
    <>
      {data.map(el => (
        <Question

          key={el.id}
          question={el.question}
          answers={el.answers}
          correctAnswer={el.correctAnswer}
          
        />
      ))}
    </>
  )
}
