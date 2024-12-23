"use client";
import Image from "next/image";
import profileImageDefault from "@/assets/images/profileImageDefault.png";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { getProfile } from "../api/profile/profile";

const ProfilePageLayout = ({ children }) => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  const path = usePathname();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/sign-in");
    }
  }, [auth.isAuthenticated]);
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    getProfile(storedToken).then((res) => {
      setUser(res);
      localStorage.setItem("user", JSON.stringify(res));
      const roleName = res?.groups?.[0]?.name || "bussines"; // Default to "bussines" if undefined
      localStorage.setItem("role", roleName);
      setRole(roleName);
    });

    if (typeof window !== "undefined") {
      const storedRole = localStorage.getItem("role") || "bussines"; // Default to "bussines" if not set
      setRole(storedRole);
    }
  }, []);

  return (
    <section className="mb-[150px]">
      <div className="max-container sflex-row mb-[100px] mt-[130px] flex items-center justify-between gap-5 md:mt-[200px]">
        <div className="flex items-center gap-[20px] md:gap-[30px]">
          <Image
            src={user?.avatar || profileImageDefault}
            width={0}
            height={0}
            sizes="100%"
            objectFit="cover"
            className="size-[45px] rounded-full md:size-[60px]"
            alt="profile image"
          />
          <div>
            <h3 className="mb-[10px] text-base font-bold leading-none text-gray-dark md:mb-3 md:text-[24px]">
              {user?.username}
            </h3>
            <Link
              href="/profile/settings"
              className="text-[14px] font-light leading-[120%] text-primary underline md:text-base md:leading-[24px]"
            >
              Настройки
            </Link>
          </div>
        </div>

        <ul className="hidden flex-col items-center justify-between gap-4 gap-y-0 md:flex lg:flex-row">
          {role?.toLowerCase() === "business" &&
            path.includes("/profile/create") && (
              <li className="font-bold leading-[120%] text-gray-light">
                Созданные проекты
              </li>
            )}

          {path.includes("/profile/create") && (
            <li className="font-bold leading-[120%] text-gray-light">
              Поддержанные проекты
            </li>
          )}
          {path.includes("/profile/create") && (
            <li className="font-bold leading-[120%] text-gray-light">
              Вознаграждения и дивиденды
            </li>
          )}
        </ul>

        <div>
          <div className="mb-[10px] flex items-center justify-end gap-5 md:mb-3">
            <h3 className="text-base font-bold leading-none text-gray-dark md:text-[24px]">
              Баланс: 0 ₽
            </h3>
            <CiSquarePlus className="hidden text-[36px] md:block" />
          </div>
          <Link
            href="#"
            className="text-[14px] font-light leading-[120%] text-primary underline md:text-base md:leading-[24px]"
          >
            Управление балансом
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
};

export default ProfilePageLayout;
