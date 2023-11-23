import Link from 'next/link'
import InnerPageContainer from "@/components/common/InnerPageContainer";
import FaceFrownIcon  from '@heroicons/react/24/solid/FaceFrownIcon'

export default function Page() {
    return (
      <InnerPageContainer title="">
       <div className="hero h-4/5 ">
            <div className="hero-content text-accent text-center">
                <div className="max-w-md">
                <FaceFrownIcon className="h-36 w-36 inline-block"/>
                <h1 className="text-5xl mt-6 font-bold">404 - Not Found</h1>
                <Link href="/"><button className='btn btn-primary px-12 mt-12'>
                Go back home</button></Link>
                </div>
            </div>
        </div>
      </InnerPageContainer>
    )
  }
  