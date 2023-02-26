const featuresData = [
    {title : "Expertise", description : "We have team of experienced software developers who are skilled in various programming languages, software development methodologies, and tools."},
    {title : "Custom software", description : "We develop custom software solutions based on the specific needs of its clients."},
    {title : "Maintenance & Support:", description : "We offer ongoing application maintenance and support services to its clients. This might include bug fixes, software updates, and technical support."},
    {title : "Quality assurance and testing", description : "A team of QA professionals who are responsible for ensuring that the software developed meets the highest quality standards. "},
    {title : "Agile development methodologies", description : "We use Agile development methodologies such as Scrum or Kanban to manage their software development projects. This allows for greater collaboration and flexibility throughout the development process."},
    {title : "Data security and privacy", description : "A strong focus on data security and privacy, and should implement appropriate measures to protect client data and ensure compliance with relevant regulations such as GDPR or CCPA."},
]

function Features(){
    return(
        <>
             <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Our Services</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    featuresData.map((i, k) => {
                        return(
                            <div key={k} className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
                                <div className="card-body mt-4 items-center text-center">
                                    <h2 className="card-title">{i.title}</h2>
                                    <p>{i.description}</p>
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

export default Features