import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import PaymentModal from './modal/PaymentModal';

const SearchSection = () => {
    return (
        <div className="form-inline">
            <div className="form-group mb-3">
                <div className="d-flex">
                    <label htmlFor="inputFrom" className="col-sm-2 col-form-label">From</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputFrom" placeholder="From" />
                    </div>
                </div>
                <div className="d-flex">
                    <label htmlFor="inputTo" className="col-sm-2 col-form-label">To</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputTo" placeholder="To" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="d-flex">
                    <label htmlFor="inputVendor" className="col-sm-2 col-form-label">Vendor</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputVendor" placeholder="Vendor" />
                    </div>
                </div>
                <div className="form-check d-flex">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">General Bill</label>
                </div>
                <div className="form-check d-flex ml-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Pan Bill</label>
                </div>
            </div>
            <div className="ml-3">
                <button type="submit" className="btn btn-primary mb-2">Search</button>
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
                <div className="mt-4">
                    <div className="">
                        <div className="box p-4">
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
                </div>
            )
        }

        return (
            <div>
                <div className="row col-12">
                    <div className="mx-auto">
                        <div className="box p-3">
                            <SearchSection />
                        </div>
                    </div>

                    <div className="col-6">
                        <h3>General Bills</h3>
                        < BillRecords />
                    </div>
                    <div className="col-6">
                        <h3>Pan Bills</h3>
                        < BillRecords />
                    </div>
                </div>
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