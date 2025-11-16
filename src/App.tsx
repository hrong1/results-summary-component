import WebHeader from "./component/header";
import ResultLine, { type CategoryData } from "./component/result-line";
import jsonData from './assets/data.json';
const data: CategoryData[] = jsonData;

function App() {
    const totalSum = data.reduce((sum, currentItem) => {
        return sum + currentItem.score;
    }, 0);
    const average = data.length > 0 ? totalSum / data.length : 0;
    return (
        <div className="lg:flex lg:min-h-screen lg:w-1/3">
            <WebHeader result={Math.round(average)}/>
            <main className="flex flex-col p-4 gap-4">
                <h2 className="text-[hsl(224,30%,27%)]">Summary</h2>
                <div className="flex flex-col gap-4">
                    {data.map((item) => (
                        <ResultLine key={item.category} data={item}/>
                    ))}
                </div>
                <button className="text-white bg-[hsl(224,30%,27%)] rounded-2xl py-2 cursor-pointer hover:bg-linear-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]">Continue</button>
            </main>
        </div>
  )
}

export default App
