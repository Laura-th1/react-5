import React from 'react';

//Ejercicio 1
import ProfileCard from "./Components/ProfileCard";

const App = () => {
  const user = {
    name: "Laura Tarquino",
    description: "Analista y Desarrolladora de Software"
  };


  return (

    <div className='app'>
      <h1>  &nbsp; Taller React 5 </h1>
      <h2>  1. Uso de CSS y className en React</h2>
      <ProfileCard name={user.name} description={user.description} />
    </div>
  );
};
export default App;

//Ejercicio 2

// import ProductCard from './Components/ProductCard';
// import styled from 'styled-components';

// const Cardcont = styled.div`

// border: 2px solid #29a299;
//   border-radius: 8px;
//   padding: 70px;
//   margin: 20px;
//   width: 350px;
//   text-align: center;
//   align-items: center; 
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//    margin-left: auto;
//    margin-right: auto;
// `;

// const App = () => {
//   return (
//     <Cardcont>
//       <h1> &nbsp; Taller React 5</h1>
//       <h2> &nbsp; 2. Styled-components </h2>
//       <ProductCard
//         productName="Gomitas"
//         productDescription="Deliciosas y coloridas gomitas en forma de osito."
//         productImage="./Assets/gummy.jpg"
//       />
//     </Cardcont>
//   );
// };
// export default App;

//Ejercicio 3
// import Card from './Components/Card';

// function App() {
//   return (
//     <div>
//       <Card
//         title="MacBook Pro 16"
//         description="La laptop Mac más avanzada, para flujos de trabajo muy exigentes.."
//       />
//     </div>
//   );
// };

// export default App;
