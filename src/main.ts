import "normalize.css";
import { swapPairs } from "./problems";
import { test1 } from "./problems/swap-nodes-in-pair/test-cases";
import "./style.css";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("No Root element detected!");
}

console.log(swapPairs(test1));
