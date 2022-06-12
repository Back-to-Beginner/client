import React, {useEffect, useState} from 'react';
import './Post.css';
import axios from "axios";


const PostView = ({history, location, match}) => {
    const [data, setData] = useState(null);

    const {no: id} = match.params;

    useEffect(() => {
        axios.get(`/api/v1/posts/${id}`)
            .then(res => {
                    console.log(res.data);
                    setData(res.data.data);
                }
            ).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <div className="post-view-wrapper">
                {
                    data !== null ? (
                        <>
                            <div className="post-view-row">
                                <label>제목</label>
                                <label>{data.trip.title}</label>
                            </div>
                            <div className="post-view-row">
                                <label>시작일</label>
                                <label>{data.trip.begin_date}</label>
                            </div>
                            <div className="post-view-row">
                                <label>종료일</label>
                                <label>{data.trip.end_date}</label>
                            </div>
                            <div className="post-view-row">
                                <label>총 경비</label>
                                <label>{data.trip.full_cost}만 원</label>
                            </div>
                            {data.moments.map((moment, index) => {
                                return (
                                    <>
                                        <hr/>
                                        <div className="post-view-row">
                                            <label>지역</label>
                                            <label>{moment.location.region}</label>
                                        </div>
                                        <div className="post-view-row">
                                            <label>도시</label>
                                            <label>{moment.location.name}</label>
                                        </div>
                                        <div className="post-view-row">
                                            <label>후기</label>
                                            <label>{moment.content}</label>
                                        </div>
                                        <div className="post-view-row">
                                            <label>경비</label>
                                            <label>{moment.cost}만 원</label>
                                        </div>
                                    </>
                                );
                            })
                            }


                        </>
                    ) : '해당 게시글을 찾을 수 없습니다.'
                }
                <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
            </div>
        </>
    )
}

export default PostView;