import "normalize.css";
import "./style.css";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("No Root element detected!");
}
