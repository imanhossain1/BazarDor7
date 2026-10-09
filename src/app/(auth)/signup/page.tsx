"use client";

import Link from "next/link";
import {useState} from "react";
// import { signUp } from "../../../lib/auth-client";

import { authClient } from "../../../lib/auth-client";

function SignUpPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const password = String(formData.get("password") || "");
        const confirmPassword = String(formData.get("confirmPassword") || "");

        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("সব তথ্য পূরণ করুন।");
            return;
        }

        if (password.length < 8) {
            setError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
            return;
        }

        if (password !== confirmPassword) {
            setError("দুটি পাসওয়ার্ড মিলছে না।");
            return;
        }

        setIsLoading(true);

        // const { data, error } = await signUp.email({
        //     name:name,
        //     email: email,
        //     password: password
        //     callbackURL: "/",
        // });
        const {data, error} = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            callbackURL: "/",
        });
        console.log("Signup Success:", data);
        setIsLoading(false);

        if (error) {
            console.log("Signup Error:", error);
            setError(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।");
            return;
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-100 px-4 py-10">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-xl md:grid-cols-2">
                {/* বাজারদর পরিচিতি */}
                <section className="hidden flex-col justify-between bg-gradient-to-br from-green-800 via-green-700 to-emerald-500 p-10 text-white md:flex">
                    <Link href="/" className="text-3xl font-extrabold">
                        🛒 বাজারদর
                    </Link>

                    <div>
                        <p className="mb-4">🌱 স্মার্ট বাজার, সহজ জীবন</p>

                        <h1 className="text-4xl font-extrabold leading-tight">সঠিক দামে বাজার করুন!</h1>

                        <p className="mt-5 leading-7 text-green-50">
                            নিত্যপ্রয়োজনীয় পণ্যের দাম জানুন, বাজারদর তুলনা করুন এবং কেনাকাটার সঠিক সিদ্ধান্ত নিন।
                        </p>
                    </div>

                    <p className="text-sm text-green-100">🌾 আপনার প্রতিদিনের বাজারের সঙ্গী</p>
                </section>

                {/* Signup Form */}
                <section className="p-6 sm:p-10">
                    <div className="mx-auto max-w-md">
                        <div className="mb-6 text-center md:hidden">
                            <Link href="/" className="text-3xl font-bold text-primary">
                                🛒 বাজারদর
                            </Link>
                        </div>

                        <h2 className="text-3xl font-extrabold">অ্যাকাউন্ট তৈরি করুন</h2>

                        <p className="mb-6 mt-2 text-sm text-base-content/60">নিবন্ধন করতে নিচের তথ্যগুলো পূরণ করুন।</p>

                        {error && (
                            <div className="alert alert-error mb-4">
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleRegister} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="আপনার পূর্ণ নাম"
                                autoComplete="name"
                                className="input input-bordered w-full rounded-xl"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="ইমেইল ঠিকানা"
                                autoComplete="email"
                                className="input input-bordered w-full rounded-xl"
                                required
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)"
                                autoComplete="new-password"
                                minLength={8}
                                className="input input-bordered w-full rounded-xl"
                                required
                            />

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                                autoComplete="new-password"
                                className="input input-bordered w-full rounded-xl"
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-success w-full rounded-xl text-white"
                                // disabled={isLoading}
                            >
                                SignUp
                                {/* {isLoading ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        অ্যাকাউন্ট তৈরি হচ্ছে...
                                    </>
                                ) : (
                                    "অ্যাকাউন্ট তৈরি করুন"
                                )} */}
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm">
                            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
                            <Link href="/login" className="font-semibold text-primary hover:underline">
                                লগইন করুন
                            </Link>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default SignUpPage;
