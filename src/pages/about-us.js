import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer title="About Us">
            <PageMetaTags title="About Us" description={"Meta tags"} url="/about-us"/>
            <p className="mt-8">
            Welcome to Company Name, where innovation meets design! We are a cutting-edge company that is passionate about transforming design into a seamless, imaginative, and enjoyable experience for everyone. Our mission is to empower you with AI-driven ideas.
            </p>

            <h3 className="mt-8 font-bold text-xl">Our Story</h3>
            <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna.
            </p>
            <h3 className="mt-8 font-bold text-xl">What Sets Us Apart</h3>
<p className="mt-2">Sed sagittis convallis nibh. Morbi ullamcorper neque nec turpis ultricies congue. Sed eget erat non magna semper maximus nec vel eros. Aliquam erat volutpat. Nullam a nibh ut massa rutrum aliquam quis sed nibh. Morbi pretium elit mauris, dictum lacinia velit volutpat a. Curabitur congue nulla nibh, sed posuere lorem accumsan eu. Ut placerat orci lectus, eu bibendum dui egestas at. Duis magna arcu, pellentesque nec ante vel, tincidunt cursus justo. Aliquam erat volutpat. Sed eros erat, luctus quis quam vel, facilisis tempor enim. Donec vel augue ex.</p>
      </InnerPageContainer>
    )
  }
  