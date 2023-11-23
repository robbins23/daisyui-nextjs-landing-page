import Link from "next/link"


function Hero(){
    return(
        <div className="hero py-12 bg-gradient-to-t from-blue-500 to-purple-700">
            <div className="hero-content md:px-0 px-4 max-w-6xl flex-col lg:flex-row-reverse">
                <img src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3" className="max-w-sm  h-80 object-cover rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl text-slate-100 font-bold md:leading-none leading-tight md:mt-0 mt-10">Get your Website  <span className="md:block mt-4">designed by AI</span></h1>
                <p className="py-2 text-xl text-slate-100 mt-4 pr-12">Use our AI powered designed tool to get website<br /> in minutes.</p>
                <Link href="/start-designing"><button className="btn text-lg mt-16 px-12 btn-primary normal-case">Get Started</button></Link>
                </div>
            </div>
        </div>
    )    
}

export default Hero