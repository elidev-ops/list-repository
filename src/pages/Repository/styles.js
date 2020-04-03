import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    width: 30px;
    height: 30px;
    border: 8px solid #1f1f19;
    border-top-color: #9b66ff;
    border-radius: 50%;
    animation: ${rotate} 2000ms linear infinite;
  }
`;
export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    padding-top: 5px;
    font-size: 14px;
    color: #333;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
  a {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #1f1f19;
    font-weight: 600;
    margin-bottom: 20px;
    text-decoration: none;
    &:hover {
      color: #9b66ff;
    }
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 4px solid #eee;
    }
    & + li {
      margin-top: 10px;
    }
    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        small {
          background-color: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 10px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
        a {
          text-decoration: none;
          color: #1f1f19;

          &:hover {
            color: #9b66ff;
          }
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
