import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

const Mypage = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = React.useState("");
    const [pw, setPw] = React.useState("");
  
    const changeId = (e) => {
      console.log(e.target.value);
      setId(e.target.value);
    };
    return (
        <React.Fragment>
          
              <h1 align="center">마이페이지</h1>
              <Div>
              <P>닉네임 : </P>
              <P>생년월일 : </P>
              <P>아이디 : </P>
       
              </Div>
          
        </React.Fragment>
    )    
}
export default Mypage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  margin-top: 100px;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  padding: 70px 50px 70px 50px;
`;

const P = styled.p`
  font-size: 20px;
  color: #fda970;
  margin: 0px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;

const Button = styled.button`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: #ffd0b0;
  border: 0px solid #ffd0b0;
  border-radius: 5px;
`;
