import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow-1);
  min-width: 300px;
  max-width: 350px;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--grey-10);
`;

export const Title = styled.h3`
  font-size: var(--font-size-18);
  font-family: var(--lexend);
  align-self: self-start;
`;
