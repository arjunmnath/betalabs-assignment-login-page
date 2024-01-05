import Image from "next/image";
import google from "@/public/google.svg";
import vector from "@/public/vector.svg";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="flex flex-col lg:xl:flex-row text-[#525252]">
        <div className="portrait:hidden w-screen lg:xl:w-[60vw] flex-1 ">
            <img className="object-cover h-full w-full" loading='lazy' src="/thumbnail.png" alt="alternate" />
        </div>
        <div className="actions lg:xl:w-[40vw] w-screen portrait:w-[100vw] flex-1">
          {/* frame-14 */}
          <div className="m-16">
            <Image className="my-4" src={vector} alt="" />
            {/* frame-13 */}
            <div className="flex flex-col gap-[2rem]">
              <div className="frame-1">
                {/* 36px bold */}
                <h2 className="text-[2.25rem] font-bold ">
                  Login to your Account
                </h2>

                {/* 16px */}
                <h3 className="text-base text-[#525252]">
                  See what is going on with your business
                </h3>
              </div>
              <button className="frame-1 flex w-full justify-center p-2 border border-solid border-[#E8E8E8]  rounded-[.3rem] flex-row text-[#828282]">
                <Image className="mx-2" src={google} alt="" />
                Continue with Google
              </button>
            </div>
            <div className="relative py-[1.5rem]">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#a1a1a1]"></span>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-[#a1a1a1]">
                  or Sign in with Email
                </span>
              </div>
            </div>

            {/* frame-12 */}
            <div className="frame-12">
              {/* frame-11 */}
              <div className="frame-11 flex gap-7 flex-col">
                {/* frame-5 */}
                <div className="frame-5 ">
                  {/* 14px */}
                  <h4 className="text-[#828282]">Email</h4>
                  <input
                    className="border border-solid border-[#e8e8e8] w-full rounded-[.3rem] p-2 placeholder:text-[#e0e0e0]"
                    type="text"
                    placeholder="mail@abc.com"
                  />
                </div>
                <div className="frame-9 ">
                  <div className="frame-6">
                    {/* 14px */}
                    <h4 className="text-[#828282]">Password</h4>
                    <input
                      className="border border-solid border-[#e8e8e8] w-full rounded-[.3rem] p-2 placeholder:text-[#e0e0e0] placeholder:align-middle "
                      type="password"
                      placeholder="••••••••••••"
                    />
                  </div>
                  <div className="frame-8 mt-[0.625rem] flex flex-row justify-between">
                    <div className="remember items-center flex">
                      <input
                        className="mx-1 h-[1em] w-[1em] accent-[#7F265B]"
                        type="checkbox"
                        name="rme"
                        id="rme"
                      />
                      <label className="text-[#a1a1a1]" htmlFor="rme">
                        Remember Me{" "}
                      </label>
                    </div>
                    <Link href="#" className="text-[#7F265B] font-semibold">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
              <button className="frame-7 mt-[2rem] bg-[#7F265B] text-white text-center w-full font-bold py-3 rounded-md">
                Login
              </button>
            </div>
          </div>
          <p className="text-center relative top-1">
            Not Registered Yet?{" "}
            <Link href="#" className="text-[#7F265B] font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
