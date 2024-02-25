import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loadingAnimation.json";
export default function Loading() {
  return (
    <div className="loading position-fixed top-0 start-0 d-flex align-items-center justify-content-center">
      <Lottie animationData={loadingAnimation} />;
    </div>
  );
}
