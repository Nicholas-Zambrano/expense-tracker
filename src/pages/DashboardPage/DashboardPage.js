
function DashboardPage(){
    return(
        <div className="dashsboard">
            <h1>Dashboard</h1>
            <sections>
                <h2>Account Balance</h2>
                <h2 className="dashboard__balance"></h2>

                <div>
                    <div>
                        <h2>Income</h2>
                        <p>...</p>
                    </div>

                    <div>
                        <h2>Expenses</h2>
                        <p>...</p>
                    </div>
                    
                </div>

            </sections>


            <section>
                <h3>Spend frequency</h3>
            </section>


        </div>
    )
}


export default DashboardPage;