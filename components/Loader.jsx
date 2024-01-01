import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center h-screen mt-32">
        <div className="animate-spin h-20 w-20 border-b-2 border-white rounded-full"></div>
        <p className="mt-4 text-white font-bold text-lg">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
