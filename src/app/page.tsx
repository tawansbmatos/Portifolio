/*
import '../components/feeds'; 
import '../components/sidebarLeft';
import '../components/sidebarRight';
// |^| ACIMA ESTÃO AS IMPORTAÇÕES DOS COMPONENTS, PARA DEPOIS CHAMÁ-LOS DENTRO DA HOME*
*/
"use client";
import SidebarLeft from "@/components/sidebarLeft/SideBarLeft";
import styles from "./page.module.css"; ///<= IMPORTAÇÃO DO ESTILO DA PÁGINA HOME*
import Feed from "@/components/feeds/feed";
import Menu from "@/components/menu/menu";
import SidebarRight from "@/components/sidebarRight/sidebarRight";
import Btntema from "@/components/btntema/btntema";

export default function Home() {
  return (
    <div className={styles.container}>
      <Menu />
     
      <main className={styles.content}>
        <SidebarLeft />
        <Feed />
        <SidebarRight />
      
      </main>
    </div>
  );
}
