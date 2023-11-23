import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer title="Privacy Policy">
            <PageMetaTags title="Privacy Policy" description={""} url="/privacy-policy"/>
            <p className="mt-8">
            Web Design AI  is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our design services powered by AI (the design service).
            <br />
            <br />
           </p>
      </InnerPageContainer>
    )
  }
  