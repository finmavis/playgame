import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  /* 576px */
  @media (min-width: 36em) {
    max-width: 54rem;
  }

  /* 768px */
  @media (min-width: 48em) {
    max-width: 72rem;
  }

  /* 992px */
  @media (min-width: 62em) {
    max-width: 96rem;
  }

  /* 1200px */
  @media (min-width: 75em) {
    max-width: 114rem;
  }
`;
