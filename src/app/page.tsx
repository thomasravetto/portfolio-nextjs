import Header from "@/app/components/home/header";
import Portfolio from "@/app/components/portfolio/portfolio";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

 useEffect(() => {
    updatePrimaryColor();
  }, []);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Portfolio/>
      <About/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
