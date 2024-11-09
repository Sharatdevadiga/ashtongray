// pages/investment-lifecycle.js
import FlipCard from "./FlipCard";
import steps from "@/app/_util/constants/licycleSteps";

const InvestmentLifecycle = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-4 pt-24">
      <div className="mb-12 max-w-[500px]">
        <p className="text-secondary">How it Works</p>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
          The Investment Lifecycle
        </h2>
        <p className="text-sm">
          We’ve got the heavy lifting covered for our investors! Just breeze
          through your KYC, make your investment, and watch your payouts roll
          into your bank account! Easy as that.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {steps.map((step) => (
          <FlipCard
            key={step.step}
            step={step.step}
            title={step.title}
            Icon={step.Icon}
            backContent={step.backContent}
            cardColor={step.cardColor}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestmentLifecycle;
