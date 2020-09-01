import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const PaymentModal = props => {
    //console.log(props); 
    const [displayNone, setDisplay] = useState("d-none");

    function paymentType(type) {
        //console.log(e.);
        (type === 1) ? setDisplay("d-none") : setDisplay("");
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <h4 className="modal-title">Bill Number : {props.id}<span id="billNumber"></span></h4>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td width="125">Payment Type</td>
                                <td>
                                    <select id="paymentType" className="w-100" onChange={e => paymentType(e.target.value)}>
                                        <option value="1">Cash</option>
                                        <option value="2">Cheque</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td> Paid Amount</td>
                                <td><input type="number" id="txtPaidAmount" /></td>
                            </tr>
                            <tr>
                                <td>Paid Date</td>
                                <td><input type="text" id="txtPaidDate" className="nepali-calendar" /></td>
                            </tr>
                            <tr className={`cheque ${displayNone}`}>
                                <td> Cheque Number </td>
                                <td><input type="text" id="txtChequeNumber" /></td>
                            </tr>
                            <tr className={`cheque ${displayNone}`}>
                                <td> Finance/Bank</td>
                                <td><input type="text" id="txtFinance" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Pay</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PaymentModal
