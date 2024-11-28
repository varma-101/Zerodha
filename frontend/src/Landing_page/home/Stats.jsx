function Stats() {
    return ( 
        <div className="container p-4 pt-0">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Trust with confidence</h1>

                    <h4 className="fs-4">Customer-first always</h4>
                    <p className="fs-6 text-muted">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p> <br />

                    <h4 className="fs-4">No spam or gimmicks</h4>
                    <p className="fs-6 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p><br />

                    <h4 className="fs-4">The Zerodha universe</h4>
                    <p className="fs-6 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p><br />

                    <h4 className="fs-4">Do better with money</h4>
                    <p className="fs-6 text-muted">With initiatives like <span style={{color:"blue"}}>Nudge</span> and <span style={{color:"blue"}}>Kill Switch</span>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/ecosystem.png" style={{width:"110%"}}/> <br />
                    <div className="px-5 mx-5">
                        <a href="" className="px-3" style={{textDecoration:"none"}}>Explore our Products <i class="fa-solid fa-arrow-right-long"></i></a>&nbsp;&nbsp;&nbsp;
                        <a href="" style={{textDecoration:"none"}}>Try Kite <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;