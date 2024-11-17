import Image from "next/image";
import busipoolLogo from "@/assets/images/svg/busipool-logo.svg";

const BusipoolLogoLarge = () => (
  <div className="relative w-full">
    <Image
      src={busipoolLogo}
      alt="BUSIPOOL"
      width={0}
      height={0}
      sizes="100%"
      priority={true}
    />
  </div>
);

export default BusipoolLogoLarge;
