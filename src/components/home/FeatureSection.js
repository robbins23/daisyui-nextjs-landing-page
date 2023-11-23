import Link from "next/link"
import FeatureImageContainer from "../common/FeatureImageContainer"



function FeatureSection({title, leftText, showHeading}){
    return(
        <>
        {showHeading && <h2 className="text-3xl mt-12 text-center font-bold">Unveiling Our Potential</h2>}
        <div className={`grid place-items-center w-full ${leftText ? "" : ""}`}>
            <div className="max-w-6xl px-4 py-12 content-center justify-center">
                <div className="grid  md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        !leftText && <FeatureImageContainer imageUrl="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"/>
                    }
                    
                    <div className="text-center py-24">
                        <h2 className="text-2xl  text-center leading-10 font-bold"> {title}</h2>
                        <Link href="/start-designing"><button className="btn btn-primary mt-8 px-8 normal-case">Get Started</button></Link>
                    </div>

                    {
                        leftText && <FeatureImageContainer imageUrl="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"/>
                    }
            </div>
            </div>
        </div>
        </>
    )
}

export default FeatureSection