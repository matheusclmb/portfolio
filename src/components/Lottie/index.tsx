import React from "react";
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

export default function LottieAnimation({
  animation,
  size,
}: {
  animation: object;
  size: number;
}) {
  return (
    <Lottie
      loop
      animationData={animation}
      play
      style={{ width: size, height: size }}
    />
  );
}
