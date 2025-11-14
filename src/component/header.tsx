
const WebHeader = ({ result }: { result: number }) => {

    return (
        <header className='webHeader'>
            <h1>Your Result</h1>
            <div>
                <span> {result ?? 'N/A'}</span>
                <span>of 100</span>
            </div>
            <div>
                <span>Great</span>
                <p>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </header>
    )
}

export default  WebHeader;