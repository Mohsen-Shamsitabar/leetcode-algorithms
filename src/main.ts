import "normalize.css";
import { levelOrderTraversal } from "./problems";
import "./style.css";
import { TreeNode } from "./types";

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("No Root element detected!");
}

const node: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 5,
      left: {
        val: 9,
        left: null,
        right: null
      },
      right: {
        val: 10,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: {
        val: 11,
        left: null,
        right: null
      }
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

console.log(levelOrderTraversal(node));
