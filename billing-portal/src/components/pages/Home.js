import React from 'react'

import VendorList from '../Vendors';
import { PendingBills, BillSummary } from '../Bills';


const Home = () => {
    return (
        <div>
            <div className="row ml-2 mr-0">
                <div className="col-8">
                    <PendingBills />
                    <div>
                        <h3>Vendors</h3>
                        <div className="fix-table-header">
                            <VendorList />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <BillSummary />
                </div>
            </div>
        </div>
    )
}
export default Home
