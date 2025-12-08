import { useState } from 'react';
import { Input, Radio, Card, Tooltip } from 'antd';
import styles from './Question.module.sass'
export const Question = ({ question, answers, correctAnswer }) => {

  const [value, setValue] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [disabled, setDisabled] = useState(false);

  console.log(question, answers, correctAnswer);

  const onChange = (e) => {
    setValue(e.target.value);
    setCorrect(e.target.value === correctAnswer);
    setDisabled(true);
  };

  return (
    <>
      <Tooltip className={styles.tooltip}
        open={value !== null}
        title={correct ? "Правильно!" : "Неправильно"}
        color={correct ? "green" : "red"}
      >
        <Card
          className={styles.card}
          title={question}
          variant="borderless"
        >


          <Radio.Group
            vertical
            onChange={onChange}
            value={value}
            disabled={disabled} 
            options={answers.map((el, index) => ({
              label: el,
              value: index
            }))}
          />


        </Card>
      </Tooltip>
    </>
  )
}
