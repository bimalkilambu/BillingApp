import React from 'react'

import Vendor from '../Vendor';
import { PendingBills } from '../Bills';


const Home = () => {
    return (
        <div>
            <PendingBills />
            <Vendor />
        </div>
    )
}
export default Home
