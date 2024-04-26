import { dataArr } from "../../../constants/mock-data";
import Card from "../card/card";

export default function Cards() {
  return (
    <div className="bg-[#00c8c4] p-10">
      <h1 className="text-white">رستوران مک دونالد شعبه تهران</h1>
      <div className="grid grid-cols-2 gap-1">
        {dataArr.map((item) => {
          return (
            <div key={item.id}>
              <Card food={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
