import styled from "styled-components";

const StatisticsBlock = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export default function Statistics({ stat }) {
    return (
      <StatisticsBlock>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {stat.good}</li>
          <li>Neutral: {stat.neutral}</li>
          <li>Bad: {stat.bad}</li>
          <li>Total: {stat.total}</li>
          <li>
            Positive Feedback: {isNaN(stat.positiveFeedback) ? 0 : stat.positiveFeedback}%
          </li>
        </ul>
      </StatisticsBlock>
    );
}
