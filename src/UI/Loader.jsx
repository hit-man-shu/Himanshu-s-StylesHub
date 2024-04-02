import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="loader">
        <RotateLoader
          color="#4361ee"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
