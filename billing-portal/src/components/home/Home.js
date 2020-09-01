import React from 'react'

import Vendor from '../vendor/Vendor';
import { PendingBills } from '../Pages/Bills';


const Home = () => {
    return (
        <div>
            <PendingBills />
            <Vendor />
        </div>
    )
}
export default Home
