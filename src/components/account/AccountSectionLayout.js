import Link from "next/link"
import InnerPageContainer from "../common/InnerPageContainer"
import { useSelector } from "react-redux"
import { useRouter } from 'next/router'

const AccountSectionLayout = ({children}) => {

    const { name} = useSelector(state => state.user)
    const router = useRouter()

    console.log(router.pathname)

    return(
        <InnerPageContainer title="">
            <div className="flex flex-wrap gap-8">
                <div className="flex-none w-64 card bg-slate-200 shadow-xl">
                    <div className="card-body ">
                        <h3 className="font-medium text-xl">Hello, {name}</h3>
                        <ul className="menu w-full mt-2 rounded-box">
                        <li className="mt-2"><Link href="/account/my-profile" className={router.pathname.includes("my-profile") ? "active" : ""}>My Profile</Link></li>
                        <li className="mt-2"><Link href="/account/saved-websites" className={router.pathname.includes("saved-websites") ? "active" : ""}>Saved Websites</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="card w-full bg-base-100 shadow-xl ">
                        <div className="card-body ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </InnerPageContainer>
    )
}


export default AccountSectionLayout