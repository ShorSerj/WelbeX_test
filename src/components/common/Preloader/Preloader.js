import React from 'react'
import preloader from '../../../assets/images/loader.gif'

let Preloader = React.memo(props => {
    return <div style={{width: 100 + 'vw', display: 'flex', justifyContent: 'center'}}>
            <img src={preloader} />
        </div>
    
})
export default Preloader