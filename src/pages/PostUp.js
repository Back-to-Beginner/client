import React, {useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const Postup = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const [bd, setBd] = React.useState("");
  const [ed, setEd] = React.useState("");
  const [tNL, setTNL] = React.useState("");

  const [l_id, setlocation_id] = React.useState("");
  const [t_id, setTrip_id] = React.useState("");
  const [moment, setMoment] = React.useState("");
  const [ct, setCost] = React.useState("");

  const changeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const changeBd = (e) => {
    console.log(e.target.value);
    setBd(e.target.value);
  };

  const changeEd = (e) => {
    console.log(e.target.value);
    setEd(e.target.value);
  };

  const changetNL = (e) => {
    console.log(e.target.value);
    setTNL(e.target.value);
  };

  const changeLocation_id = (e) => {
    console.log(e.target.value);
    setlocation_id(e.target.value);
  };

  const changeTrip_id = (e) => {
    console.log(e.target.value);
    setTrip_id(e.target.value);
  };

  const changeMoment = (e) => {
    console.log(e.target.value);
    setMoment(e.target.value);
  };

  const changeCost = (e) => {
    console.log(e.target.value);
    setCost(e.target.value);
  };

  const postUp = () => {
    if (title=== "") {
      window.alert("제목이 비어있습니다.");
      return;
    }
    console.log(title, bd, ed, tNL);
    console.log(l_id, t_id, moment, ct);
    dispatch(postActions.getPostTripDB(title, bd, ed, tNL));
    dispatch(postActions.getPostMomentDB(l_id, t_id, moment, ct));
    console.log("등록 성공");
  };
 
        
    return (
        <React.Fragment>
          <Div>
            <h1 align="center"> 여정 작성</h1>
            <P>제목</P>
            <Input onChange={changeTitle}></Input>
            <P>여행시작일자</P>
            <Input onChange={changeBd}></Input>
            <P>여행종료일자</P>
            <Input onChange={changeEd}></Input>
            <P>경비</P>
            <Input onChange={changeCost}></Input>
            <P>본문</P>
            <Input2 onChange={changeMoment}></Input2>
             {/* <P>국가</P>
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
              onChange={onChange} value={text}/>  */}
              <P>태그</P>
              <Input3 onChange={changetNL}></Input3>
              <Button onClick={postUp}>등록하기</Button>
              <Button
            onClick={() => {
              history.push("/PostMain");
            }}
          >
            게시판으로 이동
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


export default Postup;

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
