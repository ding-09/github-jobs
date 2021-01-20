import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
        &:focus {
            outline: none;
        }
    }
    html { 
        height: 100%;
        font-size: 62.5%;
    }
    body {
        height: 100%;
        font-size: 1.6rem;
        line-height: 2.6rem;
        background: ${(props) =>
          props.mode === 'dark'
            ? props.theme.darkMode.background
            : props.theme.lightMode.background};
    }
    h1 {
        font-size: 2.8rem;
        line-height: 3.4rem;
    }
    h2 {
        font-size: 2.4rem; 
        line-height: 2.9rem;
    }
    h3 {
        font-size: 1.4rem;
        line-height: 1.8rem;
    }
    img {
        display: block;
        max-width: 100%;
    }
    button {
        display: inline-block;
        cursor: pointer;
    }
`;

export default GlobalStyle;
