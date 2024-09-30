import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StudyPage() {
    const param = useParams();
    const [study, setStudy] = useState({
        id: 0,
        viewCount: 0,
        categoryName: '',
        titleKor: '',
        description: '',
        logoImageUrl:'',
        modifiedAt:'',
        createdAt:''
    });

    // useEffect(() => {
    //     fetch(`http://localhost:8090/api/test/${param.id}`)
    //     .then((res) => setStudy(res.data))
    //     // .then((data) => {
    //         // setStudy(data);
    //     // });
    // }, [param.id]);

    useEffect(() => {
        fetch(`http://localhost:8090/api/test/${param.id}`)
        .then((res) => res.json())
        .then((data) => {
            setStudy(data);
        });
    }, [param.id]);

return (
        <>
            <h1>게시판 상세 {param.id}</h1>
            <div>
                <div>조회수: {study.viewCount}</div>
                <div>번호: {study.id}</div>
                <div>카테고리: {study.categoryName}</div>
                <div>제목: {study.titleKor}</div>
                <div>내용: {study.description}</div>
                <div>
                    이미지: <img width={500} height={200} src={study.logoImageUrl} />
                </div>
                <div>생성일: {formatDateTime(study.createdAt)}</div>
                <div>수정일: {formatDateTime(study.modifiedAt)}</div>
            </div>
        </>
    );
}

const formatDateTime = (dateString) => {
    if (!dateString) {
        return "";
    }

    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined,options);
    return formattedDate;
};

export default StudyPage;