import NecklaceCollection from "./NecklaceCollection";
import RingCollection from "./RingCollection";

export default function ShopContent () {
    return (
        <div className="flex flex-col gap-20">
          <RingCollection />
          <NecklaceCollection />
        </div>
    )
}