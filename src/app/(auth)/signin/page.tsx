"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (password.length < 5) {
      setMessage("পাসওয়ার্ড কমপক্ষে ৫ অক্ষরের হতে হবে!");
      setLoading(false);
      return;
    }

    console.log("ইমেইল:", email);
    console.log("পাসওয়ার্ড:", password);

    setMessage("ফর্মের তথ্য সফলভাবে পাওয়া গেছে!");
    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-base-100 to-emerald-100 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-2xl md:grid-cols-2">

        {/* বাম পাশের পরিচিতি */}
        <section className="hidden flex-col justify-center bg-gradient-to-br from-green-700 to-emerald-500 p-10 text-white md:flex lg:p-14">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-3xl">
              🛒
            </div>
            <h1 className="text-3xl font-extrabold">বাজারদর</h1>
          </div>

          <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl">
            প্রতিদিনের বাজারদর
            <br />
            জানুন সহজেই!
          </h2>

          <p className="mt-5 leading-7 text-green-50">
            নিত্যপ্রয়োজনীয় পণ্যের দাম দেখুন, বাজারের সঙ্গে তুলনা করুন
            এবং সঠিক সিদ্ধান্ত নিন।
          </p>

          <div className="mt-10 space-y-4">
            <p>✅ পণ্যের সর্বনিম্ন ও সর্বোচ্চ দাম</p>
            <p>✅ সহজে পণ্যের দাম খুঁজে পাওয়া</p>
            <p>✅ বাজারদরের তথ্য এক জায়গায়</p>
          </div>
        </section>

        {/* লগইন ফর্ম */}
        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center md:text-left">
              <div className="mb-4 text-4xl md:hidden">🛒</div>

              <h2 className="text-3xl font-extrabold">
                আবার ফিরে আসায় স্বাগতম!
              </h2>

              <p className="mt-3 text-base-content/60">
                আপনার অ্যাকাউন্টে প্রবেশ করতে লগইন করুন।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block font-semibold">
                  ইমেইল ঠিকানা
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  className="input input-bordered h-12 w-full rounded-xl"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block font-semibold">
                  পাসওয়ার্ড
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  className="input input-bordered h-12 w-full rounded-xl"
                  autoComplete="current-password"
                  minLength={5}
                  required
                />
              </div>

              {message && (
                <p role="status" className="alert alert-error rounded-xl text-sm">
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary h-12 w-full rounded-xl text-base"
                disabled={loading}
              >
                {loading ? "যাচাই করা হচ্ছে..." : "লগইন করুন →"}
              </button>
            </form>

            <div className="divider my-6">অথবা</div>

            <button
              type="button"
              className="btn btn-outline h-12 w-full rounded-xl"
              onClick={() =>
                setMessage("Google দিয়ে লগইন করার সুবিধা পরে যুক্ত করা হবে।")
              }
            >
              <span className="text-lg font-bold">G</span>
              Google দিয়ে লগইন করুন
            </button>

            <p className="mt-7 text-center text-sm">
              আপনার অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/signup"
                className="font-bold text-primary hover:underline"
              >
                নতুন অ্যাকাউন্ট তৈরি করুন
              </Link>
            </p>

            <p className="mt-8 text-center text-xs text-base-content/50">
              © বাজারদর — আপনার প্রতিদিনের বাজারের সঙ্গী
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignIn;