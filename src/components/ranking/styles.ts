import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

export const Card = styled.div`
  background: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  min-width: 330px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
`;

export const Name = styled.h4`
  margin: 8px 0;
  font-weight: 700;
  font-size: 16px;
  color: #0070f3;
`;

export const Info = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #333;
`;
