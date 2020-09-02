import React from 'react'

import VendorList from '../Vendors';
import { PendingBills } from '../Bills';


const Home = () => {
    return (
        <div>
            <PendingBills />
            <VendorList />
        </div>
    )
}
export default Home
