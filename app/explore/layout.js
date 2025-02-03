"use client";
import styles from "@/styles/Explore.module.css";
import Link from "next/link";
import { useState } from "react";
import { FaAsterisk, FaInstagram } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { PiBooksFill } from "react-icons/pi";

export default function Menu({ children }) {
  const links = [
    {
      href: "/create",
      Icon: FiPlus,
      active: false,
    },
    {
      href: "/explore/research",
      Icon: PiBooksFill,
      active: false,
    },
    {
      href: "/",
      Icon: FaInstagram,
      active: false,
    },
  ];
  const [elements, setElements] = useState(links);
  const handleClick = (id) => {
    const newArray = [...links];
    newArray[id].active = true;
    setElements(newArray);
  };
  return (
    <>
      <section className={styles.menu}>
        <header className={styles.col_1}>
          <h2>
            <FaAsterisk size={21} />
          </h2>
          {elements.map(({ href, Icon, active }, index) => {
            return (
              <Link
                href={href}
                key={index}
                style={{ background: active ? "#006fff" : "" }}
                onClick={() => handleClick(index)}
              >
                <Icon size={21} />
              </Link>
            );
          })}
        </header>
        <section className={styles.col_2}>
          <input type="text" placeholder="Search anything..." />
          {children}
        </section>
      </section>
    </>
  );
}
