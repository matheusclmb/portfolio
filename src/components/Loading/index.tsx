import LottieAnimation from "components/Lottie";
import ball from "components/icons/animations/ball.json";
import * as S from "./Loading.style";

export const Loading = () => {
  return (
    <S.LoadingWrapper>
      <LottieAnimation animation={ball} size={400} />
      <h1>Loading...</h1>
    </S.LoadingWrapper>
  );
};
