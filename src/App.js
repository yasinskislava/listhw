import { useEffect, useState } from 'react';
import Statistics from './Statistics';
import Options from './Options';

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  let [positiveFeedback, setPositiveFeedback] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  
  useEffect(() => {
    setTotal(bad + good + neutral);
    setPositiveFeedback((good / total * 100).toFixed(2));
  }, [good, neutral, bad, total])

  return <>
    <Options good={handleGood} bad={handleBad} neutral={handleNeutral}></Options>
    <Statistics stat={{good, neutral, bad, total, positiveFeedback}}></Statistics>
  </>
}

export default App;
