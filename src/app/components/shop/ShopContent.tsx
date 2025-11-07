import NecklaceCollection from "./NecklaceCollection";
import RingCollection from "./RingCollection";
import EarringCollection from "./EarringCollection";
import BraceletsCollection from "./BraceletCollection";
import ShopFlowerDesign from "./ShopFlowerDesign";

export default function ShopContent () {
    return (
        <div className="flex flex-col gap-20 py-20 max-[900px]:gap-3">
          <ShopFlowerDesign />
          <RingCollection />
          <NecklaceCollection />
          <EarringCollection />
          <BraceletsCollection />
        </div>
    )
}