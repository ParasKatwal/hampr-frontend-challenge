type UserProps = {
  name: string;
  image: string;
};

function Index(props: UserProps) {
  return (
    <div className="flex gap-6 items-center">
      <img
        src={props.image}
        alt=""
        className="h-10 w-10 border border-solid border-primary rounded-full"
      />
      <p className="text-xl font-bold">{props.name}</p>
    </div>
  );
}

export default Index;
