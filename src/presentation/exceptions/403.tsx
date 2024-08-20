const NotAuthorized = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">403</h1>
        <p className="mt-4 text-xl text-gray-600">Not Authorized</p>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-red-600 px-6 py-3 text-white"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotAuthorized;
