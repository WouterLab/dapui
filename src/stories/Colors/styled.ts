import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  font-family: "Kanit", sans-serif;
`;

export const Block = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid grey;
`;

export const Theme = styled.div`
  background-color: #2a343e;
  color: #fff;
  font-size: 36px;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Key = styled.div`
  font-weight: 700;
`;

export const Color = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;

export const View = styled.div`
  border-radius: 10px;
  width: 50%;
  height: 50px;
  border: 2px solid grey;
`;
