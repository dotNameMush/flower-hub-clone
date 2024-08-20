const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
