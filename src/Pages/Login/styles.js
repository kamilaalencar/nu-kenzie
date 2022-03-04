import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const apperFromRight = keyframes`
from{
    opacity:0;
    transform:translateX(50px)
}
to{
    opacity:1;
    transform:translateX(0px)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  border-radius: 4px;
  justify-content: center;
  background-color: var(--grey3);
  animation: ${apperFromRight} 1s;

  form {
    /* margin: 80px 0; */
    width: 340px;
    text-align: center;
  }

  h1 {
    font-size: 18px;
    margin: 22px 0px;
    color: var(--grey0);
  }
  span {
    color: var(--grey1);
    font-size: 12px;
    height: 22px;
  }
`;

// export const Container = styled.div`
//   height: 450px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const StyledForm = styled.form`
//   width: 295px;
//   min-height: 350px;
//   max-height: 400px;
//   padding: 20px;
//   background-color: var(--grey3);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   border-radius: 5px;
//   p {
//     color: var(--grey1);
//     font-size: 10px;
//     font-weight: 400;
//   }
//   span {
//     color: var(--grey1);
//     font-size: 10px;
//     font-weight: 400;
//   }
//   button {
//     margin-top: 10px;
//   }
// `;

// --primary-color:#FF577F;
// --primary-focus:#FF427F;
// --primary-dark:#59323F;
// --grey-4:#121214;
// --grey-3: #212529;
// --grey-2: #343B41 ;
// --grey-1: #868E96;
// --grey-0:#F8F9FA;
// --success:#3FE864;
// --negative:#E83F5B;
