import Link from "next/link";
import styles from "@/styles/Sidenav.module.css";
import { FaAsterisk, FaInstagram } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { PiBooksFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function SideNavElement({ children }) {
  const pathname = usePathname();

  const links = [
    {
      href: "/explore",
      Icon: IoMdHome,
      active: pathname === "/explore",
    },
    {
      href: "/explore/research",
      Icon: PiBooksFill,
      active: pathname.startsWith("/explore/research"),
    },
    {
      href: "/create",
      Icon: FiPlus,
      active: pathname === "/create",
    },
    {
      href: "/",
      Icon: FaInstagram,
      active: pathname === "/",
    },
  ];

  return (
    <section className={styles.menu}>
      <header className={styles.col_1}>
        <h2>
          <FaAsterisk size={21} />
        </h2>
        {links.map((elem, index) => (
          <Link
            href={elem.href}
            className={elem.active ? styles.activeLink : ""}
            key={index}
          >
            <elem.Icon size={21} />
          </Link>
        ))}
      </header>
      <section className={styles.col_2}>
        <input type="text" placeholder="Search anything..." />
        {children}
      </section>
    </section>
  );
}
