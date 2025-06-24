import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 1rem;
  border: 1px solid #ccc;
  max-width: 300px;
`;

export const ChartWrapper = styled.div`
  min-height: 300px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerRanking = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;
