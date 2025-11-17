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
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white w-fit md:grid md:grid-cols-2 md:rounded-2xl md:max-w-2/4 md:shadow-xl md:gap-5">
                <WebHeader result={Math.round(average)}/>
                <main className="flex flex-col p-4 gap-4">
                    <h2 className="text-[hsl(224,30%,27%)] md:text-xl md:font-bold">Summary</h2>
                    <div className="flex flex-col gap-4">
                        {data.map((item) => {

                            return (
                                <ResultLine key={item.category} data={item}/>
                        )})}
                    </div>
                    <button className="text-white bg-[hsl(224,30%,27%)] rounded-2xl py-2 cursor-pointer hover:bg-linear-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]">Continue</button>
                </main>
            </div>
        </div>
  )
}

export default App
