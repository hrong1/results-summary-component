
export interface CategoryData {
    category: string;
    score: number;
    icon: string;
    color: string;
}


const ResultLine = ({ data }: { data : CategoryData }) => {
    const iconUrl = new URL("." + data.icon, import.meta.url).href;

    return (
        <div>
            <img src={iconUrl} alt={data.category} />
            <h5>{data.category}</h5>
            <div>
                <span>{data.score}</span>
                <span>/ 100</span>
            </div>
        </div>
    )
}

export default  ResultLine;