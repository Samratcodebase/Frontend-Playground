
import styled from "styled-components";

function ScoreCard({ score }: { score: number }) {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Score>
  );
}

export default ScoreCard;

const Score = styled.div`
  max-width: 200px;
  text-align: center;
  margin-left: 20px;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
