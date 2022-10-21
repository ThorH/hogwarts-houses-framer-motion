import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './VariablesStyle';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Cinzel', serif;
    }

    h1, h2, h3, h4, p {
        color: ${colors.white};
    }

    body {
        background-color: ${colors.blueDeepSpace};
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const BackgroundStars = styled.div`
    img {
        position: fixed;
        z-index:-3;
        animation: twinklingStars 7s ease-in-out infinite; 
            @keyframes twinklingStars {
                0%   { opacity:1; }
                25%  { opacity: 0.3;}
                50%  { opacity: 0.6; }
                75%  { opacity: 0.3; }
                100% { opacity:1; }
        }
    }
`;