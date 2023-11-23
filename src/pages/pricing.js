
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PricingPlans from "@/components/common/PricingPlans";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer title="Affordable Pricing with Free Plan">
            <PageMetaTags title="" description={""} url="/pricing"/>
            <PricingPlans />
      </InnerPageContainer>
    )
  }
  