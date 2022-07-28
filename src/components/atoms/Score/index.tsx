type ScoreProps = {
  ability_score: number;
};

function Index(props: ScoreProps) {
  return (
    <p
      className={`text-2xl font-bold text-center ${
        props.ability_score === 10 ? "text-red-500" : ""
      }`}
    >
      {props.ability_score}
    </p>
  );
}

export default Index;
