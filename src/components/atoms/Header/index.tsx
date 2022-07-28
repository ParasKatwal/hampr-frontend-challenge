import dragonImg from "assets/img/Mortal-Kombat-Logo.png";

function index() {
  return (
    <div className="h-20 bg-black fixed w-full flex justify-center z-10">
      <img src={dragonImg} className="h-20 w-20 mt-9" />
    </div>
  );
}

export default index;
