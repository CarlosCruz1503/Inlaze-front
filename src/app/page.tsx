
import RootLayout from "@/app/layout";
import Nav from "@/app/components/nav";
import Header from "@/app/components/header";
import Catalog from "@/app/components/catalog"; 
import CardAuth from "./components/auth/cardAuth";
export default function Home(): JSX.Element {

  return (
    <RootLayout>
      
      <Nav></Nav>
      <Header></Header>
      <Catalog></Catalog>

    </RootLayout>
  );
}
