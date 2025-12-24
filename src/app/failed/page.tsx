export default function FailedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-2xl font-bold mt-4 text-red-700">Payment Failed</h1>
        <p className="mt-2 text-gray-600">
          Oops! Something went wrong with your payment. Please try again.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded transition"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
