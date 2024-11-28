function Education() {
    return ( 
        <div className="container my-5 py-5">
            <div className="row px-5">
                <div className="col-6">
                    <img src="/media/education.svg" alt="" />
                </div>
                <div className="col-6 pt-5">
                    <h1 className="pt-3 fs-2">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a> <br /> <br />
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;