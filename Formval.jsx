import { useState } from "react";

const FormValidation = () => {

    const [form, setForm] = useState({
        name: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        password: ""
    });

    const [users, setUsers] = useState([]);

    const errorStyle = {
        border: "1px solid red",
        outline: "none"
    };

    // Handle input change
    const handleChange = (e) => {
console.log(e.target,"----e.target");

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));

        // Remove error while typing
        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    // Validate form
    const validateForm = () => {

        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.password.trim()) {
            newErrors.password = "Password is required";
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit form
    const handleSubmit = (e) => {


        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) return;

        const newUser = {
            id: Date.now(),
            name: form.name,
            password: form.password
        };

        setUsers((prev) => [...prev, newUser]);

        // Reset form
        setForm({
            name: "",
            password: ""
        });

        setErrors({
            name: "",
            password: ""
        });
    };

    return (

        <div
            style={{
                width: "400px",
                margin: "20px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px"
            }}
        >

            <h2>React Form Validation</h2>

            <form onSubmit={handleSubmit}>

                {/* Name Input */}
                <div style={{ marginBottom: "15px" }}>

                    <label htmlFor="name">
                        Name
                    </label>

                    <br />

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        style={errors.name ? errorStyle : {}}
                    />

                    {errors.name && (
                        <p style={{ color: "red", margin: "5px 0" }}>
                            {errors.name}
                        </p>
                    )}

                </div>

                {/* Password Input */}
                <div style={{ marginBottom: "15px" }}>

                    <label htmlFor="password">
                        Password
                    </label>

                    <br />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handleChange}
                        style={errors.password ? errorStyle : {}}
                    />

                    {errors.password && (
                        <p style={{ color: "red", margin: "5px 0" }}>
                            {errors.password}
                        </p>
                    )}

                </div>

                <button type="submit">
                    Submit
                </button>

            </form>

            <hr />

            <h3>Submitted Users</h3>

            <ul>

                {users.map((user) => (

                    <li key={user.id}>
                        <strong>Name:</strong> {user.name}
                    </li>

                ))}

            </ul>

        </div>
    );
};

export default FormValidation;