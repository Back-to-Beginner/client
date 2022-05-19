import React from "react";
import styled from "styled-components";
import banner3 from "../shared/Banner3.PNG";
import { history } from "../redux/configureStore";

const Banner3 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          padding: "6rem 0",
          backgroundColor: "#E6F3E6",
          display: "block",
        }}
      >
        <Div>
          <Image></Image>
          <div>
            <H1>
              사람들의 <br /> 다양한 여정 구경하기
            </H1>
            <P>사람들의 다양한 여정을 구경하면서<br />
            나만의 여행계획을 세워보세요</P>
            <Button
             onClick={() => {
              history.push("/PostList");
            }}
            >
            <h2>사람들의 다양한 여정 구경하기<br />
            클릭해주세요!</h2>
          </Button>
          </div>
        </Div>
      </div>
    </React.Fragment>
  );
};

export default Banner3;

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner3});
  background-size: 546px 740px;
  width: 546px;
  height: 740px;
  display: inline-block;
`;

const H1 = styled.div`
  font-size: 2.5rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
  font-weight: 800;
`;

const P = styled.p`
  font-size: 17px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
`;

const Button = styled.div`
  display: inline-block;
  color: #495057;
  font-size: 14px;
  margin-left: 8px;
  font-weight: 700;
  vertical-align: middle;
`;
