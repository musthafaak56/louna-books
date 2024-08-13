import React from "react";
import { Button } from "./ui/MovingBorders";
import { workExperience } from "@/data";
import { FaCheckCircle } from "react-icons/fa";

const ChoosePlan = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Our <span className="text-purple">Plans</span>
      </h1>

      <div className="w-full mt-12 flex flex-wrap justify-center gap-12">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
              height: "auto", // Adjust height to fit content
              width: "300px", // Increased width for better content accommodation
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center p-4 gap-4 h-full">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-32 h-32 object-cover" // Fixed image size
              />
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold">{card.title}</h1>
                <p className="text-white-100 mt-3 font-semibold">{card.desc}</p>
                <ul className="mt-4 list-none space-y-2 text-left">
                  {(card.plans || []).map((plan, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaCheckCircle
                        className="text-green-400"
                        style={{ fontSize: "1.5rem" }}
                      />
                      <span className="flex-1">{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChoosePlan;
