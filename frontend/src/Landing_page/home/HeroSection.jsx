function HeroSection() {
    return ( 
        <div className="container p-5">
            <div className="row text-center px-5">
                <img src="media/homeHero.png" alt="Hero image" className="mb-5"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary text-lg fs-5 mb-3" style={{width:"15%",margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default HeroSection;