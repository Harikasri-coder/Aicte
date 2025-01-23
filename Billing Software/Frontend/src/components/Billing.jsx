import React, { useState } from 'react';
import '../App.css';

const Billing = () => {
    const [customerDetails, setCustomerDetails] = useState({
        username: '',
        mobile: '',
    });

    const [productDetails, setProductDetails] = useState({
        id: '',
        name: '',
        quantity: 0,
        price: 0,
    });

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [balance, setBalance] = useState(0);

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const addItem = () => {
        if (productDetails.id && productDetails.name && productDetails.quantity > 0 && productDetails.price > 0) {
            const itemTotal = productDetails.quantity * productDetails.price;
            setCart([...cart, { ...productDetails, itemTotal }]);
            setTotalAmount((prevTotal) => prevTotal + itemTotal);
            setProductDetails({ id: '', name: '', quantity: 0, price: 0 });
        } else {
            alert("Please fill all product details correctly.");
        }
    };

    const calculateBalance = () => {
        if (paidAmount >= totalAmount) {
            setBalance(paidAmount - totalAmount);
        } else {
            alert("Paid amount must be greater than or equal to total amount.");
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="billing-page">
            {/* Customer Details Section */}
            <section className="customer-details">
                <h2>Customer Details</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Customer Name"
                    value={customerDetails.username}
                    onChange={handleCustomerChange}
                />
                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={customerDetails.mobile}
                    onChange={handleCustomerChange}
                />
            </section>

            {/* Product Details Section */}
            <section className="product-details">
                <h2>Product Details</h2>
                <input
                    type="text"
                    name="id"
                    placeholder="Product ID"
                    value={productDetails.id}
                    onChange={handleProductChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={productDetails.name}
                    onChange={handleProductChange}
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={productDetails.quantity}
                    onChange={handleProductChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productDetails.price}
                    onChange={handleProductChange}
                />
                <button onClick={addItem} className="btn-primary">Add Item</button>
            </section>

            {/* Billing Section */}
            <section className="billing-section">
                <h2>Billing</h2>
                <div>
                    <h3>Cart</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.itemTotal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="billing-summary">
                    <p>Total Amount: ₹{totalAmount}</p>
                    <input
                        type="number"
                        placeholder="Customer Paid Amount"
                        value={paidAmount}
                        onChange={(e) => setPaidAmount(Number(e.target.value))}
                    />
                    <button onClick={calculateBalance} className="btn-primary">Calculate</button>
                    <p>Balance: ₹{balance}</p>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="billing-footer">
                <button onClick={handlePrint} className="btn-primary">Print</button>
            </footer>
        </div>
    );
};

export default Billing;
