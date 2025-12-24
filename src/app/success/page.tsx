export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-2xl font-bold mt-4 text-green-700">
          Order Successful!
        </h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}
