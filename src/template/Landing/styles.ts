import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0px 20px 0 20px;
  background-color: var(--color-brand-1);
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-family: var(--lexend);
  font-size: var(--font-size-18);
  font-weight: 500;
  color: var(--color-profile-2);
  line-height: 1.6;
  margin: 0;

  @media (min-width: 500px) {
    font-size: var(--font-size-24);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-20);
  }
  @media (min-width: 1300px) {
    font-size: var(--font-size-24);
  }
`;

export const TypeWritter = styled.div`
  display: flex;
  gap: 2px;
  justify-content: space-between;

  .Typewriter {
    @media (min-width: 500px) {
      width: 200px;
    }
    @media (min-width: 768px) {
      width: 150px;
    }
    @media (min-width: 1300px) {
      width: 200px;
    }
  }

  .Typewriter__wrapper {
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--font-size-24);
    font-family: var(--lexend-exa);
    font-weight: bold;
    color: var(--color-profile-2);
    line-height: 1.6;
    margin: 0;
    text-align: center;

    @media (min-width: 500px) {
      font-size: var(--font-size-28);
    }
    @media (min-width: 768px) {
      font-size: var(--font-size-20);
    }
    @media (min-width: 1300px) {
      font-size: var(--font-size-28);
    }
  }
`;

export const ImageLanding = styled.img`
  width: 100%;
  min-width: 350px;
  max-width: 400px;

  @media (min-width: 500px) {
    padding: 0;
  }
  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;
