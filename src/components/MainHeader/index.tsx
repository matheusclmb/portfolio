import { Cat } from "components/icons/cat";
import Link from "next/link";
import * as S from "./MainHeader.style";

export const Header = () => {
  return (
    <S.MainHeader>
      <div className="logo-info">
        <Cat size="40px" />
        <Link href="/" passHref>
          <a>
            <h2>CLMB .dev</h2>
          </a>
        </Link>
      </div>
    </S.MainHeader>
  );
};
