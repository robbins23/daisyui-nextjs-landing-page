import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const MyProfile = () => {

  const {token} = useSelector(state => state.user)


    useEffect(() => {
        if(token){
          loadProfileData()
        }
    }, [token])

    const [userData, setUserData] = useState({})

    const loadProfileData = async() => {
        // const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/profile')
        setUserData({name : "User"})
    }

    return(
       <>
            <h2 className="text-xl font-bold text-center">My Profile</h2>
            {!userData.name && <div className="mt-12 text-center"><span className="loading"></span></div>}
            {userData.name && <div className="overflow-x-auto">
  <table className="table table-zebra">
    <tbody>
      <tr>
        <td></td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Name</td>
        <td className="font-medium">{userData.name}</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <td>Registered Mail</td>
        <td className="font-medium">{userData.emailId}</td>
      </tr>
      <tr>
        <td>Credits</td>
        <td className="font-medium">{userData.credits}</td>
      </tr>
      <tr>
        <td>Subscription</td>
        <td className="font-medium">{userData.plan} Plan {userData.plan == "FREE" && <Link href="/pricing"><button className="btn normal-case ml-2 btn-primary btn-xs ">Subscribe Now</button></Link> }</td>
      </tr>
    </tbody>
  </table>
</div>}
       </>
    )
}

export default MyProfile