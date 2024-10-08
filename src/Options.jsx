import styled from "styled-components";

const OptionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;
    button {
      width: 80px;
      height: 30px;
      padding: 2px 4px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.12);
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.12);
      }
    }
  }
`;


export default function Options(props) {
    return <OptionsBlock>
      <h2>Please leave a feedback</h2>
      <ul>
        <li><button onClick={props.good}>Good</button></li>
        <li><button onClick={props.neutral}>Neutral</button></li>
        <li><button onClick={props.bad}>Bad</button></li>
      </ul>
    </OptionsBlock>
}