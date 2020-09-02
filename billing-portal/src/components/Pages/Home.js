import React from 'react'

import VendorList from '../Vendors';
import { PendingBills, BillSummary } from '../Bills';


const Home = () => {
    return (
        <div>
            <div className="row ml-2">
                <div className="col-8">
                    <PendingBills />
                    <VendorList />
                </div>
                <div className="col-3">
                    <BillSummary />
                </div>
            </div>
        </div>
    )
}
export default Home
