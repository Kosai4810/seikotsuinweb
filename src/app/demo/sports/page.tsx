import type { Metadata } from "next"; import { SportsDemo } from "@/components/demos/DemoSites";
export const metadata:Metadata={title:"スポーツ施術型整骨院デモ",robots:{index:false,follow:false}};
export default function Page(){return <SportsDemo/>}
