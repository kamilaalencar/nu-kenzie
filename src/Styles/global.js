import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}
:root{
    /* Cores Primarias */
    --ColorPrimary: #ff577f;
    --ColorPrimaryFocus: #ff427f;
    --ColorPrimaryNegative: #59323f
    /* Escala Grey  */
    --Grey4:#121214;
    --Grey3:#212529;
    --Grey2:#343b41;
    --Grey1:#868e96;
    --Grey0:#f8f9fa;
    --black: #000000
}

body{
    background-color: var(--Grey4)

}
h1, h2 , h3, h4, h5, h6{
    font-family:'Inter', sans-serif;
    font-weight: 700;
}
button{
    cursor: pointer;
}
a{
    text-decoration:none;
}

`;
