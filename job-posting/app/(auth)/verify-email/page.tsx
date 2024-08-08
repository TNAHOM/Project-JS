"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
  otp: string;
}

const VerifyEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Email verified:", result);
        router.push("/login");
      } else {
        const error = await response.json();
        setServerError(error.message || "Verification failed");
        console.error("Verification failed:", error);
      }
    } catch (error) {
      setServerError("An error occurred during email verification");
      console.error("An error occurred during email verification:", error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col gap-4 w-[480px]">
        <h2 className="text-[36px] font-black font-poppins">
          Verify Your Email
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="otp" className="input-label">
            OTP:
          </label>
          <input
            type="text"
            id="otp"
            {...register("otp", { required: "OTP is required" })}
            placeholder="Enter OTP"
          />
          {errors.otp && <p>{errors.otp.message}</p>}

          {serverError && <p className="text-red-500">{serverError}</p>}

          <input
            type="submit"
            value="Verify"
            className="bg-[#4640DE] px-6 py-3 rounded-[80px] text-white font-epilogue font-bold text-[12px]"
          />
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
