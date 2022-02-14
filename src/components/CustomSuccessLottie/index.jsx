import React from "react";
import Lottie from "react-lottie";
import SuccessImage from "../../assets/lotties/successful";

const SuccessLottie = () => {
  const lottieDefaultOptions = {
    loop: false,
    autoplay: true,
    animationData: SuccessImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={lottieDefaultOptions} height={130} width={130} />;
};
export default SuccessLottie;
