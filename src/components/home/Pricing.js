import PricingPlans from "../common/PricingPlans"


function Pricing(){
    return(
        <>
             <div className="grid place-items-center bg-slate-50 w-full ">
            <div className="max-w-6xl w-full py-24 px-4 content-center justify-center">
                <h2 className="text-3xl  text-center font-bold">Flexible Pricing Plans</h2>
                <PricingPlans />
            </div>
        </div>
        </>
    )
}

export default Pricing