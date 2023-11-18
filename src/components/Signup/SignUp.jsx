import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../signupAuth/config";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhone(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phone) => {
    const phoneNumberPattern = /^\s\d{10}$/;
  };

  const handleSignUp = async () => {
    try {
      // Reset previous errors
      setNameError("");
      setEmailError("");
      setPasswordError("");

      if (!email) {
        setEmailError("Please provide an email.");
        return;
      }

      if (!name) {
        setNameError("Please enter valid phone number.");
        return;
      }

      if (!password) {
        setPasswordError("Please provide a password.");
        return;
      }

      const result = await createUserWithEmailAndPassword.signInWithPhoneNumber(
        auth,
        email,
        password,
        phone
      );
      const user = result.user;

      console.log("User signed up", user);
    } catch (error) {
      console.log("Error signing up", error.message);
    }
  };
  return (
    <div className="w-full">
      <div className="container mx-auto lg:p-10 p-0 relative">
        <div className="w-full">
          <img
            src="/heroimg/heromain.png"
            alt=""
            className="w-full bg-[#5BBB3D] rounded-b-full"
          />
        </div>
        <div className="flex justify-between w-full items-center absolute top-[33%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* /// signup left image /// */}
          <div className="w-full lg:w-4/12">
            <img src="/signupimg/left1.png" alt="capsule" className="w-full" />
          </div>
          {/* /// signup form /// */}
          <div className="flex justify-center items-center 2xl:mt-0 xl:mt-0 lg:mt-[25%] md:mt-[25%] mt-[50%]">
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
              <div className="mb-10">
                <h1 className="text-5xl text-[#60BA38] font-bold text-center mb-4 cursor-pointer">
                  Sign Up
                </h1>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border font-semibold placeholder:text-black outline-none bg-[#E1E1E1]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <p className="text-red-500 text-sm">{nameError}</p>
                )}
                <input
                  type="text"
                  placeholder="Email Addres"
                  className="block text-sm py-3 px-4 rounded-lg w-full border font-semibold placeholder:text-black outline-none bg-[#E1E1E1]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  className="block text-sm py-3 px-4 rounded-lg w-full border font-semibold placeholder:text-black outline-none bg-[#E1E1E1]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
                <div className="flex flex-col gap-2 items-center ">
                  <div className="w-full ">
                    <PhoneInput
                      type="number"
                      country={"us"}
                      placeholder="+1 (XXX) XXX-XXXX"
                      className="bg-[#E1E1E1] block text-sm rounded-lg w-full border font-semibold placeholder:text-black "
                      value={phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {!valid && (
                    <p className="text-red-500 text-sm">
                      Please enter valid phone number.
                    </p>
                  )}
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="mb-4 text-2xl font-semibold">
                  Join for free-No charge!
                </p>
                <button
                  onClick={handleSignUp}
                  className="py-2 w-64 text-2xl font-semibold hover:translate-y-1 hover:text-black text-white bg-[#60BA38] rounded-full"
                >
                  Join Us Now
                </button>
              </div>
            </div>
          </div>
          {/* /// signup right side img /// */}
          <div className="w-full lg:w-4/12">
            <img src="/signupimg/right.png" alt="capsule" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
