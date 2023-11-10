import React, { useState } from 'react';
import styled from 'styled-components';
import './Quadro.css';


interface QuadroProps {
  tamanhoInicial: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const PixelBoard = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  gap: 1px;
`;

const Pixel = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: #ddd;
  border: 1px solid #fff;
`;

const Quadro: React.FC<QuadroProps> = ({ tamanhoInicial }) => {
  const [boardSize, setBoardSize] = useState(tamanhoInicial);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setBoardSize(newSize || 1);
  };

  return (
    <Container>
      <label>
        Tamanho do quadro:
        <input type="number" value={boardSize} onChange={handleSizeChange} />
      </label>
      <PixelBoard size={boardSize}>
        {[...Array(boardSize * boardSize)].map((_, index) => (
          <Pixel key={index} size={500 / boardSize} />
        ))}
      </PixelBoard>
    </Container>
  );
};

export default Quadro;
