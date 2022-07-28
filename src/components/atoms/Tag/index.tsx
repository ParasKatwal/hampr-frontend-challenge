type TagProps = {
  tag_name: string;
};

function Index(props: TagProps) {
  return (
    <p className="text-lg text-primary py-2.5 px-3 border border-primary rounded-full inline-block">
      {props.tag_name}
    </p>
  );
}

export default Index;
