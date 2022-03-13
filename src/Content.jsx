import {memo} from "react";


const Content = ({lastSeen}) => {
    console.log('re-render')
    return <div>
        {lastSeen < 60 ? 'seconds ago' : 'minutes ago'}
    </div>
}
export default memo(Content, (prevP, nextP) => {
    if (nextP.lastSeen < 30 || !(nextP.lastSeen % 60)) {
        return false
    }
    else {
        return true
    }
})
