import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href={'/'}>
    <Image
      src={'/logo-minimalista.png'}
      width={80}
      height={80}
      alt="logo"
    />
  </Link>
);
