import styled from 'styled-components';

export const S = {
  Container: styled.form`
    display: flex;
    flex-direction: column;
    max-width: 320px;
    height: max-content;
    align-self: center;
    align-items: center;
    padding: 24px;
    background: var(--grey-10);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  `,

  Title: styled.h2`
    font-family: var(--lexend);
    font-size: var(--font-size-24);
  `,

  FieldWrapper: styled.div``,

  Label: styled.label`
    display: block;
    font-weight: 500;
    margin-bottom: 4px;
    font-family: var(--lexend);
  `,

  Input: styled.input`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    &:disabled {
      background: #eee;
    }
  `,

  ErrorMessage: styled.p`
    color: red;
    font-size: 12px;
    min-height: 2em;
    display: block;
    margin-top: 4px;
  `,

  Button: styled.button`
    width: 100%;
    padding: 10px;
    background-color: var(--color-profile-1);
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s all;

    &:disabled {
      background-color: #999;
      cursor: not-allowed;
    }

    &:hover {
      background-color: var(--color-profile-2);
    }
  `,

  ContainerTitle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 16px;
    gap: 10px;
  `,
};
