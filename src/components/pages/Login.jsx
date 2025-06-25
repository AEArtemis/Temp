import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen w-full bg-[#f6f2f3] flex items-center justify-center p-4">
      <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full h-[500px]">
        {/* Left Side -> Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary">Welcome</h2>
          <p className="italic text-lg text-primary mb-4">to Planora</p>

          <p className="text-sm mb-4">
            Need new account?{" "}
            <span className="text-pink-700 font-semibold cursor-pointer">
              Sign Up
            </span>
          </p>

          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>

          <div className="mb-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="mt-1"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button
            className="w-full bg-primary text-primary-foreground text-white"
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center space-x-2"
          >
            <FcGoogle size={20} />
            <span>Sign in with Google</span>
          </Button>

          <p className="text-center text-xs text-gray-400 mt-6">© 2025</p>
        </div>

        {/* Right Side -> Image */}
        <div className="w-full md:w-1/2 bg-[#f6f2f3] flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/b0/a2/6b/b0a26b4fd03adfa98d9aff5952b582f7.jpg"
            alt="Planora Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
