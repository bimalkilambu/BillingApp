import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import PaymentModal from './modal/PaymentModal';

const SearchSection = () => {
    return(
        <div className="form-inline">
             <div className="form-group mb-3">
                 <div className="d-flex">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                     <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                 </div>
                 <div className="d-flex">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                 </div>
            </div>
            <div className="form-group">
                <div className="d-flex">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                    </div>
                 <div className="form-check d-flex">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            </div>
            <div className="ml-4">
            <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
            </div>
        </div>
    )
}

export default class Bills extends Component {
    render() {

        const billLists = [{
            BillId: 1,
            BillDate: "02-07-2020",
            VendorName: "Bimal Kilambu",
            BillAmount: 10000
        }, {
            BillId: 2,
            BillDate: "02-07-2020",
            VendorName: "Bimal Kilambu",
            BillAmount: 10000
        }]

        const billListRows = billLists.map(bill => {
            return (
                <tr key={bill.BillId}>
                    <td>{bill.BillId}</td>
                    <td>{bill.BillDate}</td>
                    <td>{bill.VendorName}</td>
                    <td>{bill.BillAmount}</td>
                    <td><a href="/#">View</a></td>
                </tr>
            )
        })

        const BillRecords = () => {
            return (
                <div className="">
                    <div>
                        <div className="buttonBar m-4">
                            <button class="btn btn-info" className="ml-2" > Create Bill</button>
                            <button class="btn btn-warning" className="ml-2"> View Pending Bills</button>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="mb-3">
                        <div className="d-flex">
                            <div className="ml-2">
                                <label>From</label>
                                <input type="text" />
                            </div>
                            <div className="ml-2">
                                <label>To</label>
                                <input type="text" />
                            </div>
                            <div className="ml-2">
                                <label>Vendor</label>
                                <input type="text" />
                            </div>
                            <div className="ml-2">
                                <button class="btn btn-info" id="create"> Search</button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>


                    <div className="col-6">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Bill no.</th>
                                    <th>Bill date</th>
                                    <th>Vendor name</th>
                                    <th>Bill amt.</th>
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {billListRows}
                            </tbody>


                        </Table>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="col-6">
                    <SearchSection />
                </div>
                
                < BillRecords />
            </div>
        )
    }
}

class PendingBills extends Component {
    constructor(props) {
        super(props);
        this.state = { modalShow: false, id: 0 }
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false, id: 0 })

        const pendingBillList = [{
            BillId: 1,
            BillDate: "02-07-2020",
            VendorName: "Bimal Kilambu",
            BillAmount: 10000,
            PaidAmount: 1000
        }, {
            BillId: 2,
            BillDate: "02-07-2020",
            VendorName: "Bimal Kilambu",
            BillAmount: 10000,
            PaidAmount: 1000
        }]

        const sumValue = () => pendingBillList.reduce((
            total, bill) => total + (bill.BillAmount - bill.PaidAmount), 0
        )

        const pendingListRows = pendingBillList.map(bill => {
            return (
                <tr key={bill.BillId}>
                    <td>{bill.BillId}</td>
                    <td>{bill.BillDate}</td>
                    <td>{bill.VendorName}</td>
                    <td>{bill.BillAmount}</td>
                    <td>{bill.PaidAmount}</td>
                    <td>{bill.BillAmount - bill.PaidAmount}</td>
                    <td><a href="/#" onClick={() => clickHandle(bill)}>Edit</a></td>
                </tr>
            )
        })

        const TotalRow = () => {
            return (
                <tbody>
                    {pendingListRows}
                    <tr>
                        <td colSpan="5" align="right"><strong>Total Pending amt.</strong> </td>
                        <td colSpan="2">{sumValue()}</td>
                    </tr>
                </tbody>
            )
        }

        const clickHandle = (param) => {
            console.log(param);
            if (param.BillId) {
                this.setState({
                    modalShow: true,
                    id: param.BillId
                })
            }
        }

        const PendingBillRecords = () => {
            return (
                <div>
                    <h3>Pending bills</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Bill no.</th>
                                <th>Bill date</th>
                                <th>Vendor name</th>
                                <th>Bill amt.</th>
                                <th>Paid amt.</th>
                                <th>Pending amt.</th>
                                <th></th>
                            </tr>
                        </thead>

                        <TotalRow />

                    </Table>

                    <PaymentModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                        id={this.state.id}
                    />
                </div>
            )
        }

        return (
            <div>
                <PendingBillRecords />
            </div>
        )
    }
}

const PanBills = () => {
    return (
        <div>PanBills</div>
    )
}

const BillSummary = () => {
    return (
        <div>
            <h3> Fiscal year: 2077/2078</h3>
            <div className="card bg-light mb-3">
                <div className="card-header"><b>General bill summary</b></div>
                <div className="card-body">
                    <div className="card-info">
                        Bill count: 12 <br />
                        Total bill amount: Rs. 1120890 <br />
                        Pending bill amount: Rs. 1020890 <br />
                    </div>
                </div>
            </div>

            <div className="card bg-light mb-3">
                <div className="card-header"><b> Bimal store</b></div>
                <div className="card-body">
                    <div className="card-info">
                        Pan bill count: 12 <br />
                        Total transaction amt.: Rs. 1120890 <br />
                    </div>
                </div>
            </div>

            <div className="card bg-light mb-3">
                <div className="card-header"> <b>The Ratna swori store</b></div>
                <div className="card-body">
                    <div className="card-info">
                        Pan bill count: 12 <br />
                        Total transaction amt. : Rs. 1120890 <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PendingBills, PanBills, BillSummary }