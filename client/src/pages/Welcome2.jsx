import React, {Component, useState} from "react";

function Welcome() {
  return (
<section class="gradient-form h-full bg-neutral-200 dark:bg-gradient-to-r from-indigo-900 via-sky-950 to-gray-900">
  
  <div class="container h-full p-10">
    
    <div
      class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div class="w-full">
        <div
          class="block rounded-lg bg-white shadow-lg dark:bg-gradient-to-r from-indigo-800 to-fuchsia-800">
          <div class="g-0 lg:flex lg:flex-wrap">
            <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6 md:p-12">
                <div class="text-center">
                <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                    Welcome to your AI Asisstant
                  </h4>
                  <img
                    class="mx-auto w-48"
                    src="\src\images\AvatarW.png"
                    alt="Avatar" />
                </div>
                <form>
                  <p class="mb-4">Please login to your account</p>
                  <div class="relative rounded-md mb-4 border border-red-200/25" data-te-input-wrapper-init>
                    <input
                      type="text" required
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      for="exampleFormControlInput1"
                      class="pointer-events-none absolute left-3 top-0 mb-4 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Username
                    </label>
                  </div>

                  <div class="relative rounded-md mb-4 border border-red-200/25" data-te-input-wrapper-init>
                    <input
                      type="password"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password" />
                    <label
                      for="exampleFormControlInput11" 
                      class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary "
                      >Password
                    </label>
                  </div>
                  <div class="mb-1 pb-1 pt-1">
                    <button
                      class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-pink-400 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-900 dark:hover:bg-opacity-10"
                      type="button">
                          <p> <a href="/SignIn">Log in</a></p>
                    </button>
                  </div>
                  <div>
                  <a href="/ResetPassword">Forgot password?</a>
                  </div>
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button
                      class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-pink-400 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-900 dark:hover:bg-opacity-10"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                          <p> <a href="/SignUp"> Sign up </a></p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none     background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 class="mb-6 text-2xl font-semibold">
                  Ai Assistant is more than just a web app 
                </h4>
                <p class="text-m">Ask Anything, Anytime.</p><br></br>
                <p class="text-m">Dive into Your Professor's Mind.</p><br></br>
                <p class="text-m">Challenge Yourself, Master Topics.</p><br></br>
                <p class="text-m">Connect with Your Professors.</p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
export default Welcome;