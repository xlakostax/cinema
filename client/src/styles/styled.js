import styled from 'styled-components';


export const HeaderTag = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  padding: 1.2rem 0;
  text-align: right;
  & a {
    cursor: pointer;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
    font-size: 2rem;
    margin: 1.2rem 0;
    position: relative;
    text-align: center;
  }
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  & button {
    position: relative;
    padding: 1rem;
    background-color: transparent;
    height: 4rem;
    width: 7rem;
    border-radius: 5px 5px;
    border: 1px solid #2F2F2F;
    text-transform: uppercase;
  }
  & button:hover {
    cursor: pointer;
    color: #46B29A;
    border: 2px solid #46B29A;
  }
  & form {
    margin-bottom: 1rem;
    & input {
      display: block;
      width: 100%;
      height: 2rem;
      margin: 0 0 1rem 0;
      border-radius: 5px 5px;
      border: 1px solid #DCDCDC;
    }
  }
  & .seats {
    align-items: center;
    display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
    flex-direction: column;
    & .seats-area {
      display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      & label {
        display: flex;
        align-items: center;
        position: relative;
        height: 1.2rem;
        min-width: 1.2rem;
        font-size: 1rem;
        padding: 1rem;
        border: 1px solid #46B29A;
        border-radius: 5px 5px;
        cursor: pointer;
        user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
        @media (max-width: 424px) {
          padding: 0.5rem;
          font-size: 0.8rem;
        }
        & input {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0;
          cursor: pointer;
        }
      }
    }
    & .screen {
      width: 100%;
      text-align: center;
      border: 1px solid #46B29A;
      border-radius: 5px 5px;
    }
  }
`;

export const FooterTag = styled.footer`
  grid-area: footer;
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 1.2em 0;
  text-align: center;
`;
