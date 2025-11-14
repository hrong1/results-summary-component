import type { ReactElement } from "react";

export interface CategoryData {
    category: string;
    score: number;
    icon: ReactElement;
    color: string;
}

const ResultLine = ({ data }: { data : CategoryData }) => {

    return (
        <div>
            {data.icon}
            <h5>{data.category}</h5>
            <div>
                <span>{data.score}</span>
                <span>/ 100</span>
            </div>
        </div>
    )
}

export default  ResultLine;