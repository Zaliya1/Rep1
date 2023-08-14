import {FunctionComponent} from "react";

export type InfoAboutNewsProps = {
    message?: string;
}

const InfoAboutNews: FunctionComponent<InfoAboutNewsProps> = ({message}) => {
    return (
        <>
            <p>Hello InfoAboutNews</p>
        </>
    );
};

export default InfoAboutNews;
