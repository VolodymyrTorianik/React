import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export function ContactForm() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            address: Yup.string().required("Required"),
            phone: Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            const order = {
              customer: values,
              items: cart,
              total: totalPrice,
            };
          
            console.log("Order JSON:", JSON.stringify(order, null, 2));
          
            alert("Thank you! Your order has been placed.");
            clearCart(); 
            navigate("/");
          }
    });

    return (
        <div className="checkout-page">
            <h2>Placing an order</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="order-summary">
                        {cart.map((item) => (
                            <li key={item.id} style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                                <img src={item.image} alt={item.title} width="50" height="50" />
                                <div>
                                    <div>{item.title}</div>
                                    <div>
                                        {item.quantity} × ${item.price} = <span style={{fontWeight: "bold"}}>${(item.price * item.quantity).toFixed(2)}</span> 
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}

            <form onSubmit={formik.handleSubmit} className="checkout-form">
                <label>
                    Name:
                    <input
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="error">{formik.errors.name}</div>
                    )}
                </label>

                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}
                </label>

                <label>
                    Address:
                    <input
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address && (
                        <div className="error">{formik.errors.address}</div>
                    )}
                </label>

                <label>
                    Phone:
                    <input
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                        <div className="error">{formik.errors.phone}</div>
                    )}
                </label>

                <button type="submit" disabled={cart.length === 0}>
                    Confirm order
                </button>
            </form>
        </div>
    );
}
