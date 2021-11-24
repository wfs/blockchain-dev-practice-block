/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require("crypto-js/sha256");

/**
 * Class with a constructor for block
 */
class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  /**
   * Step 1. Implement `generateHash()`
   * method that return the `self` block with the hash.
   *
   * Create a Promise that resolve with `self` after you create
   * the hash of the object and assigned to the hash property `self.hash = ...`
   */
  //
  // REFERENCES - https://web.dev/promises/
  //
  generateHash() {
    // Use this to create a temporary reference of the class object
    // By using let self = this;, you can access the this object inside the Promise code.
    let self = this;

    //Implement your code here
    return new Promise(function (resolve, reject) {
      let javascriptObject = SHA256(JSON.stringify(self)).toString();
      self.hash = javascriptObject;
      resolve(self);
    });
  }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;
