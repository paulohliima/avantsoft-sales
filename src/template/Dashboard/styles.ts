import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-brand-1);
  padding-top: 100px;
  padding-bottom: 20px;
  min-height: 100vh;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
