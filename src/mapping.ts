import { BigInt } from "@graphprotocol/graph-ts"
import {
  PancakePair,
  Swap,
} from "../generated/PancakePair/PancakePair"
import { SwapEntity } from "../generated/schema"


export function handleSwap(event: Swap): void {
  let swapEntity = SwapEntity.load(event.transaction.from.toHex())

  if(swapEntity == null) {
    swapEntity = new SwapEntity(event.transaction.from.toHex())
  }
  
  
  swapEntity.sender = event.params.sender;
  swapEntity.amount0In = event.params.amount0In;
  swapEntity.amount0Out = event.params.amount0Out;
  swapEntity.amount1In = event.params.amount1In;
  swapEntity.amount1Out = event.params.amount1Out;
  swapEntity.to = event.params.to;

  swapEntity.save();

}

