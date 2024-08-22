import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ShopContext } from "../context/ShopContext.jsx";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [currentState, setCurrentState] = useState("Sign Up");
    const { setIsLoggedIn } = useContext(ShopContext); // Access setIsLoggedIn function
    const navigate = useNavigate();

    const onSubmitHAndel = async (event) => {
        event.preventDefault();

        if (currentState === "Login") {
            // Simulate checking user existence
            const userExists = true; // Replace with actual login logic

            if (!userExists) {
                toast.error("User doesn't exist", {
                    position: "top-center",
                });
            } else {
                setIsLoggedIn(true); // Set user as logged in
                toast.success("Successfully logged in!", {
                    position: "top-center",
                });
                setTimeout(() => {
                    navigate("/");
                }, 1000); // Navigate to home after 1 second
            }
        } else {
            // Sign up logic
            // Simulate successful signup
            setIsLoggedIn(true); // Set user as logged in
            toast.success("Successfully signed up!", {
                position: "top-center",
            });
            setTimeout(() => {
                navigate("/");
            }, 1000); // Navigate to home after 1 second
        }
    };

    return (
        <>
            <ToastContainer />
            <form
                onSubmit={onSubmitHAndel}
                className="flex flex-col items-center w-[90%] sm:max-w-[96] m-auto mt-14 gap-4 text-gray-800"
            >
                <div className="inline-flex items-center gap-2 mt-10">
                    <p className="prata-regular text-3xl">{currentState}</p>
                    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
                </div>
                {currentState === "Login" ? (
                    ""
                ) : (
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-800"
                        placeholder="Name"
                        required
                    />
                )}
                <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-800"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-800"
                    placeholder="password"
                    required
                />
                <div className="w-full flex justify-between text-sm mt-[-8px]">
                    <p className="cursor-pointer">Forget your password</p>
                    {currentState === "Login" ? (
                        <p
                            onClick={() => setCurrentState("Sign Up")}
                            className="cursor-pointer"
                        >
                            Create account
                        </p>
                    ) : (
                        <p
                            onClick={() => setCurrentState("Login")}
                            className="cursor-pointer"
                        >
                            Login Here
                        </p>
                    )}
                </div>
                <button className="bg-black text-white font-light px-8 py-2 mt-4">
                    {currentState === "Login" ? "Sign In" : "Sign Up"}
                </button>
            </form>
        </>
    );
};

export default Login;
