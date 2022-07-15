import * as S from "./FavStack.style";
import Image from "next/image";

export const FavStack = () => {
  return (
    <S.FavStack>
      <h1>Favorites</h1>
      <div className="icons">
        <Image src="/imgs/python.svg" width="80px" height="80px"></Image>
        <Image src="/imgs/django.svg" width="80px" height="80px"></Image>
        <Image src="/imgs/postgresql.svg" width="80px" height="80px"></Image>
        <Image src="/imgs/heroku.svg" width="80px" height="80px"></Image>
      </div>
    </S.FavStack>
  );
};
