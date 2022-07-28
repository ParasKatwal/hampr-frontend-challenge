import type { Character } from "utils/types";
import User from "components/atoms/User";
import Tag from "components/atoms/Tag";
import Score from "components/atoms/Score";

type TableProps = {
  updateChampionData: (a: Character[]) => void;
  championsData: Character[];
  data: Character[];
};

function Index(props: TableProps) {
  let filtered = props.championsData;
  const { data } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: any = Number(e.target.value);
    if (e.target.checked) {
      filtered = [...filtered, ...data.filter((item) => item.id === value)];
    } else {
      filtered = [...filtered.filter((item) => item.id !== value)];
    }
    props.updateChampionData(filtered);
  };

  return (
    <div className="w-270 mx-auto mt-14">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-xl font-bold text-start pb-2.5">Character</th>
            <th className="text-xl font-bold text-start pb-2.5">Tags</th>
            <th className="text-xl font-bold text-start pb-2.5">Power</th>
            <th className="text-xl font-bold text-start pb-2.5">Mobility</th>
            <th className="text-xl font-bold text-start pb-2.5">Technique</th>
            <th className="text-xl font-bold text-start pb-2.5">
              Survivability
            </th>
            <th className="text-xl font-bold text-start pb-2.5">Energy</th>
          </tr>
        </thead>
        <tbody className="bg-white rounded-lg drop-shadow-md overflow-hidden">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-solid border-gray-100 last-of-type:border-none"
            >
              <td>
                <div className="flex gap-9 pl-5 py-6 items-center">
                  <input
                    onChange={(e) => handleChange(e)}
                    type="checkbox"
                    value={item.id}
                    className="h-6 w-6 border-2 border-primary rounded bg-white focus:ring-0 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={props.championsData.length === 6}
                  />
                  <User name={item.name} image={item.image} />
                </div>
              </td>
              <td>
                <div className="flex gap-4">
                  {item?.tags?.map((item) => (
                    <Tag tag_name={item.tag_name} key={item.slot} />
                  ))}
                </div>
              </td>
              <td>
                <Score ability_score={item.abilities[3].abilityScore} />
              </td>
              <td>
                <Score ability_score={item.abilities[0].abilityScore} />
              </td>
              <td>
                <Score ability_score={item.abilities[1].abilityScore} />
              </td>
              <td>
                <Score ability_score={item.abilities[2].abilityScore} />
              </td>
              <td>
                <Score ability_score={item.abilities[4].abilityScore} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
