export default function Card({ food }) {
  // const count = document.getElementById("count");
  return (
    <div className="bg-[#def3fd] rounded-lg flex gap-4 p-4 w-96">
      <div>
        <img src={require(`../../../assets/images/${food?.src}`)} alt="food-image" className="rounded-md"/>
      </div>
      <div className="w-full">
        <h2>{food?.name}</h2>
        <div>{food?.price} تومان</div>
        <div className="flex justify-between flex-row-reverse mt-4">
          <div className="">
            <p> 0 تومان</p>
          </div>
          <div>
            <button>+</button>
            <input type="text" id="count" className="w-8" />
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
