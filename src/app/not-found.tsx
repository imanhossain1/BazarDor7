
import Link from "next/link"

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="card bg-base-200 w-full max-w-md shadow-xl">
        <div className="card-body items-center text-center">

          <h1 className="text-7xl font-bold text-primary">
            404
          </h1>

          <h2 className="card-title text-2xl">
            পেজটি পাওয়া যায়নি
          </h2>

          <p className="text-base-content/70">
            দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি এখানে নেই।
          </p>

          <div className="card-actions mt-4">
            <Link href="/" className="btn btn-primary">
              হোম পেজে ফিরে যান
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}

export default NotFound
