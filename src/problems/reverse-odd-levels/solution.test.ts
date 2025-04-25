import { describe, expect, it } from "vitest";
import type { TreeNode } from "../../types.ts";
import solution from "./solution.ts";

describe("reverse-odd-levels", () => {
  it("should return correct answer", () => {
    // === 1 === //

    let root: TreeNode = {
      val: 2,
      left: {
        val: 3,
        left: {
          val: 8,
          left: null,
          right: null
        },
        right: {
          val: 13,
          left: null,
          right: null
        }
      },
      right: {
        val: 5,
        left: {
          val: 21,
          left: null,
          right: null
        },
        right: {
          val: 34,
          left: null,
          right: null
        }
      }
    };

    let answer: TreeNode = {
      val: 2,
      left: {
        val: 5,
        left: {
          val: 8,
          left: null,
          right: null
        },
        right: {
          val: 13,
          left: null,
          right: null
        }
      },
      right: {
        val: 3,
        left: {
          val: 21,
          left: null,
          right: null
        },
        right: {
          val: 34,
          left: null,
          right: null
        }
      }
    };

    expect(solution(root)).toEqual(answer);

    // === 2 === //

    root = {
      val: 7,
      left: {
        val: 13,
        left: null,
        right: null
      },
      right: {
        val: 11,
        left: null,
        right: null
      }
    };

    answer = {
      val: 7,
      left: {
        val: 11,
        left: null,
        right: null
      },
      right: {
        val: 13,
        left: null,
        right: null
      }
    };

    expect(solution(root)).toEqual(answer);

    // === 3 === //

    root = {
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
          right: {
            val: 9,
            left: null,
            right: null
          }
        },
        right: {
          val: 5,
          left: {
            val: 10,
            left: null,
            right: null
          },
          right: {
            val: 11,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 3,
        left: {
          val: 6,
          left: {
            val: 12,
            left: null,
            right: null
          },
          right: {
            val: 13,
            left: null,
            right: null
          }
        },
        right: {
          val: 7,
          left: {
            val: 14,
            left: null,
            right: null
          },
          right: {
            val: 15,
            left: null,
            right: null
          }
        }
      }
    };

    answer = {
      val: 1,
      left: {
        val: 3,
        left: {
          val: 4,
          left: {
            val: 15,
            left: null,
            right: null
          },
          right: {
            val: 14,
            left: null,
            right: null
          }
        },
        right: {
          val: 5,
          left: {
            val: 13,
            left: null,
            right: null
          },
          right: {
            val: 12,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 2,
        left: {
          val: 6,
          left: {
            val: 11,
            left: null,
            right: null
          },
          right: {
            val: 10,
            left: null,
            right: null
          }
        },
        right: {
          val: 7,
          left: {
            val: 9,
            left: null,
            right: null
          },
          right: {
            val: 8,
            left: null,
            right: null
          }
        }
      }
    };

    expect(solution(root)).toEqual(answer);
  });
});
