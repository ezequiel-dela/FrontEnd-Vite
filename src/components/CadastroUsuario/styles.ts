import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-family: Poppins;;
`

export const TituloForm = styled.h1`
  font-family: Poppins;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  background-color: #e8f2fe;
  border-radius: 50px;
  box-shadow: 5px 7px 5px 0px rgba(0,0,0,0.39);
  font-family: Poppins;
`
export const Form = styled.form`
  display: flex;
  font-family: Poppins;
  flex-direction: column;
  width: 200px;
`

export const FormField = styled.div`
  margin-top: 5px;
`

export const Avisos = styled.p`
  color: red;
  font-size: 10px;
  margin: 0;
  font-weight: bold;
  font-family: Poppins;
`

export const SubmitButton = styled.button`
  background-color:#b9d7fc;
  margin-top: 15px;
  border-radius:23px;
  border:1px solid #29668f;
  display:inline-block;
  cursor:pointer;
  font-family:Poppins;
  font-size:17px;
  font-color: #A9A9A9;
  padding:7px 31px;
  text-decoration:none;
  text-shadow:0px -1px 0px #3d768a;
  &:hover {
    background-color: #a2cafb;
  }
`
