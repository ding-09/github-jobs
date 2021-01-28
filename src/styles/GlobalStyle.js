import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }
    html { 
        height: 100%;
        font-size: 62.5%;
    }
    body {
        height: 100%;
        font-size: 1.2rem;
        /* line-height: 2.6rem; */
        background: ${(props) =>
          props.mode === 'dark'
            ? props.theme.darkMode.background
            : props.theme.lightMode.background};
        position: relative;
    }
    h1 {
        font-size: 2.8rem;
        line-height: 3.4rem;
        color: ${(props) => props.theme.primaryColors.veryDarkBlue}; 
    }
    h2 {
        font-size: 2.4rem; 
        line-height: 2.9rem;
        color: ${(props) => props.theme.primaryColors.veryDarkBlue}; 

    }
    h3 {
        font-size: 2rem;
        line-height: 2rem;
        color: ${(props) => props.theme.primaryColors.veryDarkBlue}; 

    }
    h4 {
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${(props) => props.theme.primaryColors.veryDarkBlue}; 

    }
    img {
        display: block;
        max-width: 100%;
    }
    button {
        display: inline-block;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
    input {
        cursor: pointer;   
        &:focus {
            outline: none;
        }
    }
    .card-color {
        background: ${(props) =>
          props.mode === 'dark'
            ? props.theme.darkMode.cardColor
            : props.theme.lightMode.cardColor};
    }
    .job-title {
        a {
            text-decoration: none;
            color: ${(props) =>
              props.mode === 'dark'
                ? props.theme.darkMode.textColor
                : props.theme.lightMode.textColor};
            &:hover {
                color: ${(props) => props.theme.secondaryColors.darkGrey};
            }
        }
    }
    .loader {
        position: absolute;
        top: 50%;
        left: 48%;
    }
`;

export default GlobalStyle;
