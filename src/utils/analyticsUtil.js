import mixpanel from 'mixpanel-browser'


const analyticsUtil = {
    trackEvents : ({eventName, properties}) => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {

        }else{
            mixpanel.track(eventName, properties)
        }
    },

    identifyUser: ({name, userId, isPro, credits, emailId}) => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {

        }else{
            mixpanel.identify(userId)
            mixpanel.people.set({ $name : name, $email : emailId, credits});
        }
    }
}

export default analyticsUtil