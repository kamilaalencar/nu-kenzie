import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}

:root{
    --colorPrimary: #ff577f;
    --colorPrimaryFocus: #ff427f;
    --colorPrimaryNegative: #59323f;
    --grey4: #121214;
    --grey3:#212529;
    --grey2:#343b41;
    --grey1:#868e96;
    --grey0:#f8f9fa;
    --negative:#E83F5B;
    --sucess:#3fe864;
}

body{
    font-family:'Inter', sans-serif;
    background-color: var(--grey4)

}
h1, h2 , h3, h4, h5, h6{
    font-weight: 700;
}
button{
    cursor: pointer;
}
a{
    text-decoration:none;
}

`;
