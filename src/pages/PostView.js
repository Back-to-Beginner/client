import React, {useEffect, useState} from 'react';
import {getPostByNo} from '../Data';
import './Post.css';
import axios from "axios";


const PostView = ({history, location, match}) => {
    const [data, setData] = useState({});

    const {no} = match.params;

    useEffect(() => {
        axios.get(`/api/v1/trips/${no}`)
            .then(res => {
                console.log(res.data);
                setData(res.data.data);
            })
        // setData(getPostByNo(no));
    }, []);

    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <div className="post-view-wrapper">
                {
                    data ? (
                        <>
                            <div className="post-view-row">
                                <label>게시글 번호</label>
                                <label>{data.id}</label>
                            </div>
                            <div className="post-view-row">
                                <label>제목</label>
                                <label>{data.title}</label>
                            </div>
                            <div className="post-view-row">
                                <label>시작일</label>
                                <label>{data.begin_date}</label>
                            </div>
                            <div className="post-view-row">
                                <label>종료일</label>
                                <label>{data.end_date}</label>
                            </div>
                            <div className="post-view-row">
                                <label>비용</label>
                                <div>
                                    {
                                        data.fullCost
                                    }
                                </div>
                            </div>
                        </>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
                <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
            </div>
        </>
    )
}

export default PostView;