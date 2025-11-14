import WebHeader from "./component/header";
import ResultLine, { type CategoryData } from "./component/result-line";
import jsonData from './assets/data.json';
//const data: CategoryData[] = jsonData;

function App() {

  return (
    <>
        <WebHeader result={76}/>
        <main>
            <h2>Summary</h2>
            <div></div>
            <button>Continue</button>
        </main>
    </>
  )
}

export default App
