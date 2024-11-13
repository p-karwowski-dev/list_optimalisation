import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
  gap: 5px;
`;

export const DetailItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailItemLabel = styled.label`
  color: white;
  font-weight: bold;
`;

export const DetailItemContent = styled.div`
  background-color: white;
  width: 88%;
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 5px;
`;
