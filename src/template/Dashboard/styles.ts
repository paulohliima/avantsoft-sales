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
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RowButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 1024px) {
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
  }
`;

export const ContainerListCards = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ContainerTable = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const DividerRow = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grey-3);
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 650px;
  }

  @media (min-width: 1024px) {
    max-width: 950px;
  }
`;
