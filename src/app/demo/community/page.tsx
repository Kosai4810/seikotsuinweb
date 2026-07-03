import type { Metadata } from "next"; import { CommunityDemo } from "@/components/demos/DemoSites";
export const metadata:Metadata={title:"地域密着型整骨院デモ",robots:{index:false,follow:false}};
export default function Page(){return <CommunityDemo/>}
