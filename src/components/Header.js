import React from "react";
import { Grid } from "../elements";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Header = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          position: "sticky",
          top: "0px",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid is_flex padding="5px 0px" width="1024px" margin="auto"> 
          <Grid is_start maxwidth="700px">
            
            <h1>
              My Trip Moments
            </h1>
           
          </Grid>
          <Button2
            onClick={() => {
              history.push("/");
            }}
          >
            메인화면
          </Button2>
  
          <Button2
            onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button2>
          <Button2
            onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button2>
          <Button2
            onClick={() => {
              history.push("/mypage");
            }}
          >
            마이페이지
          </Button2>
        </Grid>
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

const InputWrap = styled.div`
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  height: 40px;
  box-sizing: border-box;
  margin: 10px 20px;
`;

const Input = styled.input`
  border: hidden;
  margin: 0px;
  padding: 10px;
  width: 340px;
  font-size: 16px;
  font-weight: 500;
  margin: auto;
  -webkit-appearance: none;
  margin-top: 3px;
  background-color: transparent;
`;

const Image = styled.img`
  width: 120px;
`;

const Button = styled.div`
  display: inline-block;
  color: #495057;
  font-size: 14px;
  margin-left: 8px;
  font-weight: 700;
  vertical-align: middle;
`;

const Button2 = styled.button`
  width: 140px;
  border-radius: 5px;
  border: solid 1px #ffdcc5;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #666666;
`;
