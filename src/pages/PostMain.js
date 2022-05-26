import React from 'react';
import PostList from './PostList';
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { Grid } from "../elements";
import { withRouter } from 'react-router-dom';

const PostMain = () => {
  return (
    <>
      <h2 align="center">사람들의 다양한 여정</h2>
      <Grid is_flex padding="5px 0px" width="1024px" margin="auto"> 
       <Grid is_start maxwidth="700px">
        <Button2
              onClick={() => {
                history.push("/PostUp");
              }}
           >
              여정 작성하기
            </Button2>
            <InputWrap>
              <Grid is_flex>
                <Input placeholder="여행지, 관장지 등을 검색해보세요!">
                </Input>
              </Grid>
            </InputWrap>
          
       </Grid>
      </Grid>
      
      <PostList />
      
    </>
  )
}

export default PostMain;

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
  color 666;
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
const InputWrap = styled.div`
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  height: 40px;
  box-sizing: border-box;
  margin: 10px 20px;
`;
