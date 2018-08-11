const Block = require('./blockchain/block');
const block2 = new Block();
const block1 = new Block('foo', 'bar', 'zoo', 'baz');
//console.log(block1.toString());
//console.log(block2.toString());
console.log(Block.genesis().toString());
const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());