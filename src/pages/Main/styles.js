import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
    flex: 1;
    border: 1px solid #ccc;
    border-right-color: transparent;
    padding: 10px 15px;
    border-radius: 9000px 0 0 9000px;
    font-size: 14px;
  }

  button {
    border-radius: 0 9000px 9000px 0;
    padding: 0 15px;
    border: 0;
    background-color: #9b66ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  font-size: 14px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    span {
      font-weight: 600;
    }
    a {
      text-decoration: none;
      color: #9b66ff;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
