
const testimonialsData = [
    {text : "I wanted a website that truly represented my creative work and personality. Web Design AI perfectly captured my vision and designed a website that is not only beautiful but also unique. They were a pleasure to work with, and I'm proud to showcase my portfolio on the site they created for me.", name : "Emily, USA", profilePic : "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"},
    {text : "Web Design AI completely transformed my small business with their innovative approach. The AI-powered design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!", name : "Michael, USA", profilePic : "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"},
    {text : "Web Design AI has taken my e-commerce website to the next level. Their AI-driven design techniques have improved user experience and conversion rates. The team at Web Design AI is a game-changer in the web design industry", name : "David, Canada", profilePic : "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"},
    
]


function Testimonials(){


    return(
        <>
             <div className="grid place-items-center w-full ">
            <div className="max-w-6xl px-4 py-24 content-center justify-center">
                <h1 className="text-3xl  text-center font-bold">Testimonials</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    testimonialsData.map((t, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img className="mask w-20 h-20 mask-circle object-cover" src={t.profilePic} />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <p>{t.text}</p>
                                    <p className="text-slate-500">-{t.name}</p>
                                </div>
                                </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials