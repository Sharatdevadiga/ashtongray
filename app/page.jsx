import InvestmentLifecycle from "./_components/flipingCards/InvestmentLifecycle.jsx";
import Home from "./_components/home/Home.jsx";
import Navbar from "./_components/navbar/Navbar.jsx";

function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <InvestmentLifecycle />
    </div>
  );
}

export default page;
