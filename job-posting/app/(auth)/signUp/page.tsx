"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

const API_URL ="https://akil-backend.onrender.com";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleSignIn = async (provider: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await signIn(provider, { callbackUrl: "/" });
      if (result?.error) {
        setError(`${provider} sign-up error: ${result.error}`);
      }
    } catch (error) {
      setError(`An error occurred with ${provider} sign-up`);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);
      setError(null);

      // Sign up the user
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, role: "user" }),
      });
      console.log("Signup response:", response);

      if (response.ok) {
        router.push('/verify-email')
      } else {
        const errorData = await response.json();
        console.error("Signup error data:", errorData);
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex justify-center my-20">
      <div className="flex flex-col gap-4 w-[480px]">
        <h2 className="text-[36px] font-black font-poppins">Sign Up Today!</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="border rounded-md border-[#CCCCF5] border-3 rounded- px-10 py-3">
          <button
            onClick={() => handleSignIn("google")}
            className="flex gap-2 text-[#4640DE] font-epilogue font-semibold text-base w-[100%] justify-center"
            disabled={isLoading}
          >
            <GoogleIcon />
            {isLoading ? "Signing in..." : "Sign in with Google"}
          </button>
        </div>

        <div className="flex items-center mt-5 text-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500">Or Sign Up with Email</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
          noValidate
        >
          <label htmlFor="name" className="input-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Enter your full name"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter email address"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="input-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter password"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <label htmlFor="confirmPassword" className="input-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          <button
            type="submit"
            className="bg-[#4640DE] px-6 py-3 rounded-[80px] text-white font-epilogue font-bold text-[12px]"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
}
