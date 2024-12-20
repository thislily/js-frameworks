function LoadingBar() {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="relative w-48 h-8 bg-white rounded-full overflow-hidden border-2 border-blue-900">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-blue-900 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    );
  }
  
  export default LoadingBar;
  