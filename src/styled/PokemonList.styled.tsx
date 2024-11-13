import styled from "styled-components";
import { COLOUR, STYLE } from "../common/constants";

export const Container = styled.div`
  background-color: ${COLOUR.red};
  border-radius: ${STYLE.borderRadius};
  width: 34%;
  padding: ${STYLE.padding};
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: white;
  font-size: 25px;
  padding-left: 10px;
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 10px auto 10px auto;
  border-radius: 10px;
  background-color: ${COLOUR.red2};
`;

export const ListContainer = styled.div`
  background-color: white;
  height: 91%;
  max-height: 91%;
  border-radius: 20px;
  width: 98%;
  margin: auto;
  border: 10px solid ${COLOUR.red2};
  overflow-y: auto;
  padding-top: 5px;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
`;
