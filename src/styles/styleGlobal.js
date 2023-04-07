import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    :root {
        --azul: #1B1D39;
        --verde: #64BC9E;
        --white: #E6E6E6;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        background: var(--azul);
    }
`

export default GlobalStyle