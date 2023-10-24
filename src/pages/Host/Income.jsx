export default function Income() {
    return (
        <section className="income">
            <h2>Income</h2>

            <h5 className="">Last <span>30 days</span></h5>

            <h1 className="total-income">$2,260</h1>

            <div className="income-chart">
                <img src="/income-chart.png" alt="Income Chart" />
            </div>

            <div className="transactions-container">
                <h4 className="transactions-header">
                    Your transactions (3)
                    <span>Last <span>30 days</span></span>
                </h4>

                <div className="transactions-list">
                    <div className="transaction">
                        <h3 className="amount">$720</h3>
                        <h5 className="date">1/12/22</h5>
                    </div>

                    <div className="transaction">
                        <h3 className="amount">$560</h3>
                        <h5 className="date">10/11/22</h5>
                    </div>
                    
                    <div className="transaction">
                        <h3 className="amount">$980</h3>
                        <h5 className="date">23/11/22</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}