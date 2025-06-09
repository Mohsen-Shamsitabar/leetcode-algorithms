class TrieNode {
  public children: (null | TrieNode)[];
  public isEndOfWord: boolean;

  constructor() {
    this.children = Array<null>(26).fill(null);

    // indicating that no word ends here yet
    this.isEndOfWord = false;
  }
}

class Trie {
  public root = new TrieNode();

  /**
   * @description inserts `key` into `root`.
   */
  public insert(key: string) {
    let curr = this.root;

    for (const c of key) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);

      if (curr.children[index] === null) {
        const newNode = new TrieNode();

        curr.children[index] = newNode;
      }

      curr = curr.children[index]!;
    }

    // Mark the end of the word
    curr.isEndOfWord = true;
  }

  /**
   * @returns `true` if `key` exists in `root`, and `false` otherwise.
   */
  public search(key: string) {
    let curr = this.root;

    for (const c of key) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);

      if (curr.children[index] === null) return false;

      curr = curr.children[index]!;
    }

    return curr.isEndOfWord;
  }

  /**
   * @returns `true` if `prefix` exists in `root`, and `false` otherwise.
   */
  public isPrefix(prefix: string) {
    let current = this.root;

    for (const c of prefix) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);

      // If character doesn't exist, return false
      if (current.children[index] === null) {
        return false;
      }

      current = current.children[index]!;
    }

    return true;
  }
}

export default Trie;
