export interface CategoryData {
    category: string;
    score: number;
    icon: string;
    color: string;
}


const ResultLine = ({ data }: { data : CategoryData }) => {
    const iconUrl = new URL("." + data.icon, import.meta.url).href;
    const baseColor = data.color.replaceAll(" ", "");
    const bgColorWithOpacity = baseColor.replace('hsl', 'hsla').replace(')', ', 0.10');
    const flexRowCenter = `flex flex-row items-center justify-between gap-2`;
    return (
        <div 
            style={{ backgroundColor: bgColorWithOpacity }} 
            className={`${flexRowCenter} rounded-xl p-2`}>
            <div className={`${flexRowCenter}`}>
                <img src={iconUrl} alt={data.category} />
                <h5
                    style={{ color: baseColor }} 
                >{data.category}</h5>
            </div>
            <div className={`${flexRowCenter}`}>
                <span className="text-[hsl(224,30%,27%)]">{data.score}</span>
                <span className="text-gray-400">/ 100</span>
            </div>
        </div>
    )
}

export default  ResultLine;