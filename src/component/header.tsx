
const WebHeader = ({ result }: { result: number }) => {
    const flexCenter = `flex text-center flex-col items-center justify-center`;
    return (
        <header 
            className={`
                ${flexCenter}
                w-full
                bg-linear-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]
                rounded-b-2xl 
                gap-4
                px-10 
                py-5`}>
            <h1 className="text-lg text-gray-400">Your Result</h1>
            <div className={`
                ${flexCenter}
                bg-linear-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] 
                rounded-full
                w-24 
                h-24`}>
                <span className="font-bold text-5xl text-white pt-2">{result ?? 'N/A'}</span>
                <span className="text-xs text-gray-400">of 100</span>
            </div>
            <div>
                <span className="font-bold text-xl text-white">Great</span>
                <p className="text-sm text-gray-400">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </header>
    )
}

export default  WebHeader;