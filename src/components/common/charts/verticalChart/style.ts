import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow-1);
  min-width: 280px;
  max-width: 1000px;
  padding: 20px 10px;
  border-radius: 12px;
  background-color: var(--grey-10);
`;

export const Title = styled.h3`
  font-size: var(--font-size-18);
  font-family: var(--lexend);
  align-self: self-start;
  padding-bottom: 10px;
`;

export const DateInputWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    padding: 6px 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;
