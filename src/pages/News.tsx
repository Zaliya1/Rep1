import {FunctionComponent} from "react";
import { Button } from 'antd';
import {useEffect} from "react";

export type NewsProps = {
    message?: string;
}

const News: FunctionComponent<NewsProps> = ({message}) => {
    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
            )
    }, [])
    return (
        <>
            <p>Hello News</p>
            <Button>Кнопка</Button>
        </>
    );
};

export default News;
