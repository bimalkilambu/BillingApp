import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
//import VerticalModal from '../modal/VerticalModal';

// const Vendor = () => {
//     const [modalShown, setModalShown] = React.useState(false);
//     return (
//         <div>
//             <h1>Hello to Vendor</h1>
//             <Button variant="primary" onClick={() => setModalShown(true)}>
//                 Click me
//                     </Button>
//             <VerticalModal
//                 show={modalShown}
//                 onHide={() => setModalShown(false)}
//             />
//         </div>
//     )
// }



export class VendorList extends Component {

    render() {

        const vendorList = [{
            VendorId: 1,
            VendorName: "Mahile Sahu",
            VendorLocation: "Sallaghari",
            ContactNumber: 983234343,
            PanNumber: 12345678
        }, {
            VendorId: 2,
            VendorName: "Kanchha Sahu",
            VendorLocation: "Chundevi",
            ContactNumber: 9876543,
            PanNumber: ""
        }]

        const vendorListRow = vendorList.map(vendor => {
            return (
                <tr key={vendor.VendorId}>
                    <td>{vendor.VendorId}</td>
                    <td>{vendor.VendorName}</td>
                    <td>{vendor.VendorLocation}</td>
                    <td>{vendor.ContactNumber}</td>
                    <td>{vendor.PanNumber}</td>
                    <td><a href="/#">Edit</a></td>
                </tr>
            )
        })

        return (
            <div>
                <div className="d-flex">
                    <h2>Vendors</h2>
                    <Button variant="primary">Add</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Vendor name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Pan number</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{vendorListRow}</tbody>
                </Table>
            </div>
        )
    }
}

export default VendorList
