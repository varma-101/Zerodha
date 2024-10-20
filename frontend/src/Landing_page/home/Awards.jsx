function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col p-5">
                    <img src="/media/largestBroker.svg" alt="" />
                </div>
                <div className="col p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row pt-4">
                        <div className="col">
                            <ul>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                                <li>
                                    <p>Futures and options</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/pressLogos.png" alt="" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;