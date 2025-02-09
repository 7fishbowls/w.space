import Link from "next/link";
import styles from "@/styles/Sidenav.module.css";
import { FaAsterisk, FaInstagram } from "react-icons/fa6";
import { AiFillFolderAdd } from "react-icons/ai";
import { PiBooksFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { usePathname } from "next/navigation";
import { CgAddR } from "react-icons/cg";
import { BsFillBookmarksFill } from "react-icons/bs";
import SearchComponent from "./SearchComponent";

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
      href: "/explore/saved",
      Icon: BsFillBookmarksFill,
      active: pathname.startsWith("/explore/saved"),
    },
    {
      href: "/create",
      Icon: AiFillFolderAdd,
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
        <SearchComponent styles={styles} />
        {children}
      </section>
    </section>
  );
}
