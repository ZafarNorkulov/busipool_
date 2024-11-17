import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const BusipoolLogoSmall = () => {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src={logo}
        alt="Logo"
        height={0}
        width={0}
        sizes="100%"
        priority={true}
        className="h-[26px] w-[187px] sm:h-[30px] sm:w-[220px]"
      />
    </Link>
  );
};

export default BusipoolLogoSmall;
