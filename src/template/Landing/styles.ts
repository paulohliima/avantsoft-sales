import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;

  // Imagem de fundo com filtro frio e desfoque
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/assets/images/background1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(6px);
    z-index: -20;
  }

  // Camada escura sobre o fundo
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); // controla o quanto escurece
    z-index: -1;
  }

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

export const ColumnDesktop = styled.div`
  display: flex;
  background-color: var(--grey-10);
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-family: var(--lexend);
  font-size: var(--font-size-18);
  font-weight: 500;
  color: var(--grey-10);
  line-height: 1.6;
  margin: 0;

  @media (min-width: 500px) {
    font-size: var(--font-size-24);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-20);
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-28);
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
    color: var(--grey-10);
    line-height: 1.6;
    margin: 0;
    text-align: center;

    @media (min-width: 500px) {
      font-size: var(--font-size-28);
    }
    @media (min-width: 768px) {
      font-size: var(--font-size-20);
    }
    @media (min-width: 1024px) {
      font-size: var(--font-size-32);
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
