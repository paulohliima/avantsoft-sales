import styled from 'styled-components';

export const Container = styled.div`
  background: var(--grey-0);
  border-radius: 12px;
  box-shadow: var(--box-shadow-1);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  width: 100%;
  background-color: var(--grey-10);
`;

export const Avatar = styled.div`
  background-color: var(--color-profile-1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: var(--color-white);
  font-family: var(--lexend);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h4`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--grey-1);
  font-family: monospace;
  text-transform: capitalize;
`;

export const Info = styled.p`
  margin: 2px 0;
  font-size: 14px;
  color: var(--grey-2);
  font-family: var(--lexend);
  strong {
    font-weight: 500;
    color: var(--sucess-1);
  }
`;

export const DividerVertical = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--grey-3);
`;
