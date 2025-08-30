import  Footer from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
export function AppLayout (){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}