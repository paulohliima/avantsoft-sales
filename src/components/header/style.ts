import styled from 'styled-components';

export const Container = styled.div<{ $isLogged: boolean; $isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: absolute;
  background-color: var(--color-brand-1);
  width: 100%;
  box-shadow: var(--box-shadow-2);

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 80px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
