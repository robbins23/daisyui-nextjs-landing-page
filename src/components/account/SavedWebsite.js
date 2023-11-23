import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import FeatureImageContainer from "../common/FeatureImageContainer"


const SavedImages = () => {

  const {token} = useSelector(state => state.user)

  const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(token){
            loadSavedImages()
        }
    }, [token])


    const [savedImages, setSavedImages] = useState([])

    const loadSavedImages = async() => {
        setIsLoading(true)
        // const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'/savedWebsite')
        setIsLoading(false)
        setSavedImages([])
    }

    return(
       <>
            <h2 className="text-xl font-bold text-center">Saved Websites</h2>
            {isLoading && <div className="mt-12 text-center"><span className="loading"></span></div>}

            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-2">
                {
                    savedImages.map((s, k) => {
                        return <div className="mt-4 relative" key={k}><FeatureImageContainer {...s}  /></div>
                        
                    })
                }
            </div>

       </>
    )
}

export default SavedImages