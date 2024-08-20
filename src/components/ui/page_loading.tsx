import "@styles/svg_animations.less";
const PageLoading = () => {
  return (
    <div className="fixed z-40 h-screen w-full bg-slate-600 opacity-65">
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="aspect-square h-[20vh]">
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <circle
              className="spin"
              cx="400"
              cy="400"
              fill="none"
              r="175"
              stroke-width="75"
              stroke="#dbe4f7"
              stroke-dasharray="700 1400"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
