import { useState, useEffect } from "react";
import type { Character } from "utils/types";

type ChampionProps = {
  updateChampionData: (a: Character[]) => void;
  championsData: Character[];
};

function Index(props: ChampionProps) {
  const [mobility, setMobility] = useState(0);
  const [technique, setTechnique] = useState(0);
  const [survivability, setSurvivability] = useState(0);
  const [power, setPower] = useState(0);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    props.championsData.forEach((item) => {
      item.abilities.forEach((item) => {
        if (item.abilityName === "Mobility") {
          setMobility(mobility + item.abilityScore);
        }
        if (item.abilityName === "Technique") {
          setTechnique(technique + item.abilityScore);
        }
        if (item.abilityName === "Survivability") {
          setSurvivability(survivability + item.abilityScore);
        }
        if (item.abilityName === "Power") {
          setPower(power + item.abilityScore);
        }
        if (item.abilityName === "Energy") {
          setEnergy(energy + item.abilityScore);
        }
      });
    });
  }, [props.championsData]);

  return (
    <div className="pt-40 flex flex-col items-center">
      <h1 className="text-2xl mb-4">
        {props.championsData.length > 0
          ? "Your champions!"
          : "Select your squad to defend earthrealm"}
      </h1>
      <div className="flex gap-3">
        {props.championsData.map((item) => (
          <div
            className="group h-20 w-20 rounded-full border border-blue-500 relative overflow-hidden"
            key={item.id}
          >
            <img src={item.image} alt="" />
            <button className="absolute inset-0 bg-lightBlue text-white text-sm hidden group-hover:block">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <div className="flex mt-5 gap-6 items-center">
          <div className="text-center">
            <h3 className="text-base mb-5 font-normal">Power</h3>
            <h1 className="text-2xl font-bold">{power || "-"}</h1>
          </div>
          <div className="text-center">
            <h3 className="text-base mb-5 font-normal">Mobility</h3>
            <h1 className="text-2xl font-bold">{mobility || "-"}</h1>
          </div>
          <div className="h-25 w-px bg-divider"></div>
          <div className="text-center">
            <h3 className="text-base mb-5 font-normal">Technique</h3>
            <h1 className="text-2xl font-bold">{technique || "-"}</h1>
          </div>
          <div className="h-25 w-px bg-divider"></div>
          <div className="text-center">
            <h3 className="text-base mb-5 font-normal">Survivability</h3>
            <h1 className="text-2xl font-bold">{survivability || "-"}</h1>
          </div>
          <div className="text-center">
            <h3 className="text-base mb-5 font-normal">Energy</h3>
            <h1 className="text-2xl font-bold">{energy || "-"}</h1>
          </div>
        </div>
        <p className="text-sm text-cgray-600 font-normal mt-2.5">
          * Totals as average for squad
        </p>
      </div>
    </div>
  );
}

export default Index;
