import React from "react";
import styled from 'styled-components';
import img from '../Assets/gummy.jpg';


const CardContainer = styled.div`

border: 2px solid #29a299;
  border-radius: 8px;
  padding: 30px;
  margin: 20px;
  width: 250px;
  text-align: center;
  align-items: center; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
   margin-left: auto;
   margin-right: auto;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #636;
  margin: 0 0 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 20px 0;
`;

const BuyButton = styled.button`
  background-color: #29a299;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #636;
  }
`;


const ProductCard = ({ productName, productDescription, productImage }) => {
    return (
        <CardContainer>
            <ProductImage src={img} alt={productImage} />
            <ProductName>{productName}</ProductName>
            <ProductDescription>{productDescription}</ProductDescription>
            <BuyButton>Comprar</BuyButton>
        </CardContainer>
    );
};

export default ProductCard;
