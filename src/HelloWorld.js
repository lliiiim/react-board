import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    const [studys, setStudys] = useState([]);
        
    useEffect(() => {
        console.log('2')
        axios
        .get('http://localhost:8090/api/test')
        .then((response) => {
            console.log(response.data);
            setStudys(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);
    
    console.log('1')
    
    return (
        <>
            <h1 className="text-center">Hello World!</h1>
            <ul>
            번호 / 제목 / 카테고리 / 생성일
            {studys.map((study) => (
                <li key={study.id}>
                {study.id} /{" "}
                <Link to={`/studies/${study.id}`}>{study.titleKor}</Link> /{" "}
                {study.categoryName} / {formatDateTime(study.createdAt)}
                </li>
            ))}
            </ul>
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

export default HelloWorld;