import React from "react";

import styled from "styled-components";
import banner2 from "../shared/Banner2.PNG";


const Banner2 = () => {
  return (
    <React.Fragment>
      {/* 배너 2 */}
      <div style={{ padding: "6rem 0" }}>
        <DIV>
          <Image></Image>

          <div style={{ flexDirection: "column", margin: "20px" }}>
            <H1>
              출발지, 도착지, 항공사 선택
              <br />
              항공편 가격 탐색
            </H1>
            <P>출발지, 도착지, 항공사를 선택하여 가격 정보를 알 수 있습니다</P>
            
          </div>
        </DIV>
      </div>
    </React.Fragment>
  );
};

export default Banner2;

const DIV = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner2});
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
  font-weight: 800;
`;

const P = styled.p`
  font-size: 17px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
  margin: 0px;
`;

const A = styled.a`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  margin: 0px 10px;
`;

const Button = styled.button`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  margin: 0px 10px;
`;
