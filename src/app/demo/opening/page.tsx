import type { Metadata } from "next"; import { OpeningDemo } from "@/components/demos/DemoSites";
export const metadata:Metadata={title:"新規開業型整骨院デモ",robots:{index:false,follow:false}};
export default function Page(){return <OpeningDemo/>}
