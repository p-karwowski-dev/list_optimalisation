import styled from "styled-components";
import { COLOUR, STYLE } from "../common/constants";

export const Container = styled.div`
  background-color: ${COLOUR.red};
  width: 64%;
  border-radius: ${STYLE.borderRadius};
  box-sizing: border-box;
  padding: ${STYLE.padding};
  gap: 15px;
  display: flex;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  background-color: ${COLOUR.red2};
  border-radius: 6px;
  height: 60px;
  display: flex;
  align-items: center;
  margin-top: 11px;
`;

export const Name = styled.h1`
  font-size: 40px;
  margin: 0 0 0 15px;
  text-transform: capitalize;
  color: white;
`;

export const ImageAndDataContainer = styled.div`
  display: flex;
  height: 450px;
  width: 100%;
  border-radius: 6px;
  flex-direction: row;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  background-color: ${COLOUR.red2};
  border-radius: 6px;
  height: 100%;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PkmImage = styled.img`
  background-color: white;
  border: 5px solid #d6d6d6;
  border-radius: 6px;
  width: 400px;
  image-rendering: pixelated;
`;

export const DetailsContainer = styled.div`
  background-color: ${COLOUR.red2};
  border-radius: 6px;
  height: 100%;
  width: 34%;
`;

export const FlavorTextContainer = styled.div`
  background-color: ${COLOUR.red2};
  height: 30%;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
`;

export const FlavorText = styled.span`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
`;
