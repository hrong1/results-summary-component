export interface CategoryData {
    category: string;
    score: number;
    icon: string;
    color: string;
}

const ResultLine = ({ data }: { data : CategoryData }) => {
    const baseColor = data.color.replaceAll(" ", "");
    const bgColorWithOpacity = baseColor.replace('hsl', 'hsla').replace(')', ', 0.10');
    const flexRowCenter = `flex flex-row items-center justify-between gap-2`;
    const BASE_PATH = import.meta.env.BASE_URL;
    const finalIconUrl = `${BASE_PATH}${data.icon}`;
    return (
        <div 
            style={{ backgroundColor: bgColorWithOpacity }} 
            className={`${flexRowCenter} rounded-xl p-2`}>
            <div className={`${flexRowCenter}`}>
                <img src={finalIconUrl} alt={data.category} />
                <h5
                    style={{ color: baseColor }}
                    className="font-bold text-sm"
                >{data.category}</h5>
            </div>
            <div className={`${flexRowCenter}`}>
                <span className="text-[hsl(224,30%,27%)] font-bold text-sm">{data.score}</span>
                <span className="text-gray-400 font-bold text-sm">/ 100</span>
            </div>
        </div>
    )
}

export default  ResultLine;