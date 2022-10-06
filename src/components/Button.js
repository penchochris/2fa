import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px 11px;
  border-radius: 4px;
  min-width: 228px;
  height: 74px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: white;
  border: none;
  text-decoration: none;
`;
