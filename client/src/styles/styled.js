import styled from 'styled-components';

export const Main = styled.main`
  grid-area: main;
  position: relative;
  width: 100%;
  & h1 {
    font-size: 2rem;
    margin: 1.2rem 0;
    position: relative;
  }
  & article {
    text-align: justify;
    /*Styles for Notes starts*/
    & span {
      color: red;
    }
    & h3, div {
      margin-bottom: 1rem;
    }
    & h3 {
      text-align: left;
    }
    & div {
      & p, code {
        margin-bottom: 1rem;
      }
      & code {
        display: block;
        & ul {
          padding-left: 1rem;
        }
      }
    }
    & .tagWrapper {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start
    }
    & .tags {
      margin-right: 1rem;
      padding: .2rem;
      background-color: rgb(220,220,220);
      border-radius: 2px;
    }
    /*Styles for Notes ends*/
  }
  & a:not([href*="mailto"]):not([href*="callto"]) {
    position: relative;
    display: inline-block;
    /* color: rgba(70, 130, 180); */
    &:after {
      content: '';
      position: absolute;
      /*background-color: rgba(70, 130, 180, 0.5);*/
      background-color: #46B29A;
      top: 60%;
      left: -0.1rem;
      right: -0.1rem;
      bottom: 0;
      z-index: -1;
      transition: top 200ms ease-in-out;
    }
    &:hover:after {
      top: 0%;
    }
  }
  /* & a:after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background: rgba(70, 130, 180);
    transition: 300ms;
      -webkit-transition: 300ms;
      -moz-transition: 300ms;
      -ms-transition: 300ms;
      -o-transition: 300ms;
  }
  & a:hover:after {
    width: 100%;
  } */
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  & form {
    margin-bottom: 1rem;
    & input:not([type = 'checkbox']), textarea {
      display: block;
      width: 100%;
      height: 2rem;
      margin: 0 0 1rem 0;
      border-radius: 5px 5px;
      border: 1px solid rgba( 220, 220, 220, 1 );
    }
    & textarea {
      height: 10rem;
    }
    & button {
      position: relative;
      padding: 1rem;
      background-color: transparent;
      height: 4rem;
      width: 6rem;
      border-radius: 5px 5px;
      border: 1px solid rgba( 47, 47, 47, 1 );
      text-transform: uppercase;
    }
    & button:hover {
      cursor: pointer;
      ${'' /* color: rgba(70, 130, 180); */}
      color: #46B29A;
      ${'' /* border: 1px solid rgba(70, 130, 180); */}
      border: 2px solid #46B29A;
    }
    & div {
      display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex
      align-itrems: center;
    }
  }
  & span {
    ${'' /* color: rgba(70, 130, 180) */}
    color: #46B29A;
  }
  & :nth-child(4) {
    align-items: center;
    display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex
    justify-content: flex-start;
    margin: 0 0 1rem 0;
    & label {
      display: block;
      position: relative;
      height: 1.2rem;
      min-width: 1.2rem;
      margin-right: 1rem;
      font-size: 1rem;
      border: 1px solid rgba( 47, 47, 47, 1 );
      cursor: pointer;
      user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
      & input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        cursor: pointer;
      }
      & input:checked ~ span:after {
        display: block;
      }
      & span:after {
        border: solid black;
        border-width: 0 3px 3px 0;
        content: "";
        display: none;
        height: 10px;
        left: 6px;
        position: absolute;
        top: 3px;
        transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
        width: 5px;
      }
    }
    & a {
      position: relative;
      display: inline-block;
      /* color: rgba(70, 130, 180); */
      &:after {
        content: '';
        position: absolute;
        background-color: rgba(70, 130, 180, 0.5);
        top: 60%;
        left: -0.1rem;
        right: -0.1rem;
        bottom: 0;
        z-index: -1;
        transition: top 200ms ease-in-out;
      }
      &:hover:after {
        top: 0%;
      }
    }
  }
`;
