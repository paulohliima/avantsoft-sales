import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export const ContainerTitle = styled.div`
  height: 40px;
  display: flex;
  background-color: var(--color-profile-2);
  border-radius: 12px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    border-radius: 6px;
    height: 56px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 340px;
  height: 100px;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: var(--box-shadow-2);
  position: relative;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  font-family: var(--lexend);
`;

export const Name = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: #b71717;
  align-self: center;
  text-transform: uppercase;
`;

export const Info = styled.p`
  font-size: 14px;
  color: var(--sucess-1);
  font-weight: bold;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
`;

export const BadgeImgLeft = styled.img`
  width: 60px;
  position: absolute;
  height: 60px;
  top: 10;
  left: 10px;
`;

export const BadgeImgRight = styled.img`
  width: 60px;
  position: absolute;
  height: 60px;
  top: 10;
  right: 10px;
`;
