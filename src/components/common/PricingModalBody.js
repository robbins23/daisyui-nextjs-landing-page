import {useState, useRef, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import PricingPlans from './PricingPlans'

function PricingModalBody({closeModal, extraObject}){

  

    const {isLoggedIn, message} = extraObject
    const dispatch = useDispatch()

    

    const [loading, setLoading] = useState(false)
 

    return(
        <div className='bg-slate-50'>
            <p className='text-center text-primary text-2xl mt-4'>{message}</p>
            <h2 className="text-3xl mt-4  text-center font-bold">Flexible Pricing Plans</h2>
            <PricingPlans />
        </div>
    )
}

export default PricingModalBody