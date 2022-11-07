import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 768px) {
    height: 700px;
  }
`

export const FormContainer = styled.form`
  width: 90%;
  background-color: ${props => props.formBgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const WebsiteLogo = styled.img`
  width: 165px;
  margin-top: 40px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  width: 100%;
`

export const LabelElement = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: ${props => props.labelColor};
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`

export const InputElement = styled.input`
  height: 50px;
  width: 100%;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  padding-left: 20px;
  margin-top: 8px;
  color: #64748b;
  border-radius: 7px;
  border: 1px solid #cbd5e1;

  @media screen and (min-width: 768px) {
    height: 35px;
    font-size: 14px;
  }
`

export const CheckboxElement = styled.input`
  height: 22px;
  width: 22px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    height: 18px;
    width: 18px;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.checkColor};
  align-self: center;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const SubmitButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  height: 55px;
  width: 100%;
  border-radius: 9px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  margin-top: 25px;

  @media screen and (min-width: 768px) {
    height: 44px;
  }
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.errorColor};
  font-weight: bold;
  align-self: flex-start;
  margin-top: 2px;
  text-align: left;
  margin-bottom: 40px;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`
