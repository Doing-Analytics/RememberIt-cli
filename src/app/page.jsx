"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="text-xl"></main>;
}
