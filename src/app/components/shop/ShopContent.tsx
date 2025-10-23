import NecklaceCollection from "./NecklaceCollection";
import RingCollection from "./RingCollection";
import EarringCollection from "./EarringCollection";
import BraceletsCollection from "./BraceletCollection";

export default function ShopContent () {
    return (
        <div className="flex flex-col gap-20 max-[900px]:gap-3">
          <RingCollection />
          <NecklaceCollection />
          <EarringCollection />
          <BraceletsCollection />
        </div>
    )
}