import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";
const faqsData =  [
    {"question": "What is Web Design AI", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna."},
    {"question": "What is Web Design AI", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna."},
    {"question": "What is Web Design AI", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna."},
    {"question": "What is Web Design AI", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna."},
    {"question": "What is Web Design AI", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna."},
    
]

export default function Page() {
    return (
      <InnerPageContainer title="FAQs">
            <PageMetaTags title="Design FAQs" description={""} url="/faqs"/>
            {
                    faqsData.map((f,k) => {
                        return(
                            <div className="collapse bg-white md:mx-12  my-8 rounded-lg" key={k}>
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    {f.question}
                                </div>
                                <div className="collapse-content">
                                    <p>{f.answer}</p>
                                </div>
                            </div>
                        )
                    })
                }
            
      </InnerPageContainer>
    )
  }
  