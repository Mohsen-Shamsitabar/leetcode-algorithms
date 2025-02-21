import type { TreeNode } from "../../types";

export const test1: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
};

export const test2: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 8,
        left: null,
        right: null
      }
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
};
