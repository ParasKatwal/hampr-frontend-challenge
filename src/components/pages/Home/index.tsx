import { useState } from "react";

import Header from "components/atoms/Header";
import Champions from "components/organisms/Champions";
import Search from "components/atoms/Search";
import Table from "components/organisms/Table";
import jsonData from "constants/data/characters.json";
import type { Character } from "utils/types";

const Big_data: Character[] = jsonData as Character[];
const slice_data = Big_data.slice(0, 10);

function Index() {
  const [championsData, setChampionsData] = useState<Character[]>([]);
  const [searchedList, setSearchedList] = useState(slice_data);

  const updateChampionData = (data: Character[]) => {
    setChampionsData(data);
  };
  const updateData = (data: Character[]) => {
    setSearchedList(data);
  };

  return (
    <div className="bg-background pb-10">
      <Header />
      <Champions
        updateChampionData={updateChampionData}
        championsData={championsData}
      />
      <Search
        data={slice_data}
        searchedList={searchedList}
        updateData={updateData}
      />
      <Table
        updateChampionData={updateChampionData}
        championsData={championsData}
        data={searchedList}
      />
    </div>
  );
}

export default Index;
