import React, {useState} from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";


 const Postup = (props) => {
   const dispatch = useDispatch();
   const [Title, setTitle] = React.useState("");
   const [Region, setRegion] = React.useState("");
   const [beginDate, setbeginDate] = React.useState("");
   const [endDate, setendDate] = React.useState("");
   const [fullCost, setFullCost] = React.useState(""); 
  //  const [tNL, setTNL] = React.useState("");

   const changeTitle = (e) => { //제목
     console.log(e.target.value);
     setTitle(e.target.value);
   };

   const changeRegion = (e) => { //지역
    console.log(e.target.value);
    setRegion(e.target.value);
  };

   const changebeginDate = (e) => { // 여행시작날짜
     console.log(e.target.value);
     setbeginDate(e.target.value);
   };

   const changeendDate = (e) => { // 여행종료날짜
     console.log(e.target.value);
     setendDate(e.target.value);
   };

  //  const changetNL = (e) => {
  //    console.log(e.target.value);
  //    setTNL(e.target.value);
  //  };

   const changeFullCost = (e) => { // 여행 총 경비
     console.log(e.target.value);
     setFullCost(e.target.value);
   };


   const PostUp = () => { // 제목이 비어있을 경우
     if (Title=== "") {
       window.alert("제목이 비어있습니다.");
       return;
     }

     console.log(Title, Region, beginDate, endDate, fullCost);
     dispatch(postActions.getPostTripDB(Title, Region, beginDate, endDate, fullCost));
     console.log(localStorage.getItem("id"));
     console.log("등록 성공");
   };
 
   
    return (
        <React.Fragment>
          <Div>
            <h1 align="center"> 여정 작성</h1>
            
            
            {/* getPostTripDB */}
             <P>제목</P>
            <Input onChange={changeTitle}></Input>
            <P>국가(여행지역)</P>
            <Input onChange={changeRegion}></Input>
            <P>여행시작일자 <br></br>(ex : 2020-01-01)</P>
            <Input onChange={changebeginDate}></Input>
            <P>여행종료일자 <br></br>(ex : 2020-01-01)</P>
            <Input onChange={changeendDate}></Input>
            <P>총 경비 <br></br>(숫자로 입력해주세요)</P>
            <Input onChange={changeFullCost}></Input>

              <Button onClick={PostUp}>게시물 상세내용 등록하기</Button>
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
