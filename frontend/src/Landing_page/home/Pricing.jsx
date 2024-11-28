function Pricing() {
    return ( 
        <div className="container my-5 px-5">
            <div className="row px-5">
                <div className="col-5">
                    <h1>Unbeatable pricing</h1>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border p-4">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border p-4"><div className="col">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;