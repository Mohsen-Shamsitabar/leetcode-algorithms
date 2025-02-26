import type { ListNode } from "types";

export const test1: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}; // [2,1,4,3]

export const test2 = null; // null

export const test3: ListNode = {
  val: 1,
  next: null
}; // [1]

export const test4: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}; // [2,1,3]
