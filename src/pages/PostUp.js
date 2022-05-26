import React, {useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
function PostUp() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <React.Fragment>
          <Div>
            <h1 align="center"> 여정 작성</h1>
            <P>제목</P>
            <Input
              onChange={onChange} value={text}/>
            <P>여행일자</P>
            <Input 
              onChange={onChange} value={text}/>
              <P>국가</P>
            <Input
              onChange={onChange} value={text}/>
              <P>여행지</P>
            <Input
              onChange={onChange} value={text}/>
              <P>여행경비</P>
            <Input
              onChange={onChange} value={text}/>
              <P>항공사</P>
            <Input
              onChange={onChange} value={text}/>
            <P>내용</P>
            <Input2
              onChange={onChange} value={text}/>
              <P>태그</P>
            <Input3
              onChange={onChange} value={text}/>
            <Button
              onClick={() => {
                alert("작성 완료!");
                history.push("/PostMain");
              }}
           >
              여정 작성하기
            </Button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              
            </div>
          </Div>
        </React.Fragment>
      );
}


export default PostUp;

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
  width: 250px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;
const Input2 = styled.input`
  width: 500px;
  height: 500px;
  margin: 0px 0px 10px 0px;
`;
const Input3 = styled.input`
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
