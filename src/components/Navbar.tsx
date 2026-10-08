import Image from "next/image";
import CategoryNav from "./CategoryNav";
import PriceTicker from "./PriceTicker";

function Navbar() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-base-100 shadow-sm">

      {/* =========================
          Top Row: Logo + Auth
      ========================== */}
      <div className="navbar px-4 md:px-8">

        {/* Logo + Website Name + Date */}
        <div className="flex-1">
          <div className="flex items-center gap-3">

            <Image
              src="/bazar-hero.png"
              alt="বাজার দর লোগো"
              width={45}
              height={45}
            />

            <div>
              <h1 className="text-lg font-bold md:text-2xl">
                🛒 বাজার দর
              </h1>

              <p className="text-xs text-base-content/60 md:text-sm">
                {date}
              </p>
            </div>

          </div>
        </div>

        {/* Sign In + Sign Up */}
        <div className="flex items-center gap-2">

          <button className="btn btn-outline btn-sm md:btn-md">
            সাইন ইন
          </button>

          <button className="btn btn-primary btn-sm md:btn-md">
            সাইন আপ
          </button>

        </div>
      </div>


      {/* =========================
          Second Row: Categories
      ========================== */}
      <nav className="border-t border-base-200">

        {/* Category container */}
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 md:px-8">
          <CategoryNav />
        </div>

      </nav>


      {/* =========================
          Price Ticker: Full Width
      ========================== */}
      <div className="w-full border-t border-base-200">
        <PriceTicker />
      </div>

    </header>
  );
}

export default Navbar;