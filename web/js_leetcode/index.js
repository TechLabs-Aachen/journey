
const assert = require('assert');
/**
 * Filter out the numbers in arr that are in filter_out.
 * E.g. filter([1, 2, 3, 4], [2, 4]) => [1, 3]
 * @param {number[]} arr
 * @param {number[]} filter_out
 * @return {number[]}
 */
function filter(arr, filter_out) {
  // TODO: Implement me!
  return [];
};

/**
  * Swap the key and value of an object. E.g. {a: 1, b: 2} => {1: 'a', 2: 'b'}
  * Only flat object are given (no nested object)
  * @param {Object} obj
  * @return {Object}
*/
function swapObjectKeyValue(obj) {
  // TODO: Implement me!
  return {};
}

/**
* Merge two objects to a new one e.g. ({a: 1}, {b: 2}) => {a: 1, b: 2}
* If Key conflict, use the value of the second object
* Note: You are not allowed to use any Object builtin functions such as Object.keys
* Note: Using Object builtin functions will crash the test cases :P
* @param {Object} obj1
* @param {Object} obj2
* @return {Object}
*/
function mergeObject(obj1, obj2) {
  // TODO: Implement me!
  return {};
}

/**
  * Sort the triplet of numbers in ascending order e.g. [3, 2, 1] => [1, 2, 3]
  * Note: all numbers are guaranteed to be distinct
  * Note: You are not allowed to use any Array builtin functions such as Array.sort
  * Note: You are not allowed to acces the array using index e.g. arr[0]
  * Note: Violating the above rules will crash the test cases :P
  * @param {number[]} triplets
  * @return {number[]}
*/
function sortTriplets(triplets) {
  // TODO: Implement me!
  return [];
}

const _0x5b83c6=_0x1836;(function(_0x49549c,_0x43c495){const _0x4e8549=_0x1836,_0x14646f=_0x49549c();while(!![]){try{const _0x845c58=-parseInt(_0x4e8549(0xec))/0x1*(-parseInt(_0x4e8549(0xf4))/0x2)+parseInt(_0x4e8549(0xd5))/0x3*(parseInt(_0x4e8549(0xe9))/0x4)+parseInt(_0x4e8549(0xf2))/0x5+-parseInt(_0x4e8549(0xdb))/0x6+parseInt(_0x4e8549(0xcf))/0x7+-parseInt(_0x4e8549(0xe4))/0x8*(-parseInt(_0x4e8549(0xd1))/0x9)+-parseInt(_0x4e8549(0xe2))/0xa;if(_0x845c58===_0x43c495)break;else _0x14646f['push'](_0x14646f['shift']());}catch(_0x3c4a1a){_0x14646f['push'](_0x14646f['shift']());}}}(_0x16f3,0x30a8d));function filterTestCasesRun(){const _0x3e461e=_0x1836,_0x1c8011=[[[0x1,0x2,0x3,0x4],[0x2,0x4],[0x1,0x3]],[[0x1,0x2,0x3,0x4],[0x1,0x3],[0x2,0x4]],[[0x1,0x2,0x3,0x4],[0x1,0x2,0x3,0x4],[]],[[0x1,0x2,0x3,0x4],[0x5,0x6],[0x1,0x2,0x3,0x4]]];for(const _0x55bcb1 of _0x1c8011){const _0x32b9e1=_0x55bcb1[0x0],_0x2386fe=_0x55bcb1[0x1],_0x5b30ed=_0x55bcb1[0x2],_0x58b6c5=filter(_0x32b9e1,_0x2386fe);assert[_0x3e461e(0xe8)](_0x58b6c5,_0x5b30ed,'Filter:\x20arr:\x20'+_0x32b9e1+_0x3e461e(0xe7)+_0x2386fe+_0x3e461e(0xdf)+_0x5b30ed+_0x3e461e(0xd8)+_0x58b6c5);}console[_0x3e461e(0xda)](_0x3e461e(0xd9));};function testSwapObjectKeyValue(){const _0x1c7889=_0x1836,_0x373752=[[{'a':'y','b':'z'},{'y':'a','z':'b'}],[{'c':'c','a':'a','a':'a'},{'c':'c','a':'a','a':'a'}]];for(const _0x57a276 of _0x373752){const _0x41d808=_0x57a276[0x0],_0x301cbc=_0x57a276[0x1],_0x25b5c0=swapObjectKeyValue(_0x41d808);assert['deepEqual'](_0x25b5c0,_0x301cbc,_0x1c7889(0xe1)+_0x41d808+_0x1c7889(0xdf)+_0x301cbc+',\x20actual:\x20'+_0x25b5c0);}console[_0x1c7889(0xda)]('Swap:\x20All\x20tests\x20passed!');}function testMergeObject(){const _0x2d2a31=_0x1836,_0x18a737=[[{'a':0x1},{'b':0x2},{'a':0x1,'b':0x2}],[{'a':0x1,'b':0x2},{'b':0x2},{'a':0x1,'b':0x2}],[{'a':0x1,'b':0x2},{'b':0x3,'c':0x3},{'a':0x1,'b':0x3,'c':0x3}]];for(const _0x19bbc9 of _0x18a737){const _0x286387=_0x19bbc9[0x0],_0x634f5=_0x19bbc9[0x1],_0x2b5f3a=_0x19bbc9[0x2],_0x56d60f=Object;Object=null;const _0x28d96a=mergeObject(_0x286387,_0x634f5);Object=_0x56d60f,assert[_0x2d2a31(0xe8)](_0x28d96a,_0x2b5f3a,_0x2d2a31(0xd4)+_0x286387+',\x20obj2:\x20'+_0x634f5+_0x2d2a31(0xdf)+_0x2b5f3a+_0x2d2a31(0xd8)+_0x28d96a);}console[_0x2d2a31(0xda)](_0x2d2a31(0xdd));}function testSortTriplets(){const _0x5296ef=_0x1836,_0x4a5c91=[[[0x3,0x2,0x1],[0x1,0x2,0x3]],[[0x1,0x2,0x3],[0x1,0x2,0x3]],[[0x1,0x0,-0x1],[-0x1,0x0,0x1]]],_0x3f409b=/(\w+)\s*\[\s*(\d+)\s*\]/gs,_0x333c0e=sortTriplets['toString']();let _0x3c05f4,_0x1cc040=![];while((_0x3c05f4=_0x3f409b[_0x5296ef(0xf6)](_0x333c0e))!==null){const _0x2b1334=_0x3c05f4[0x1],_0x5ecf07=_0x3c05f4[0x2];_0x1cc040=!![],console[_0x5296ef(0xd3)](_0x5296ef(0xd7)+_0x2b1334+'['+_0x5ecf07+']');}_0x1cc040&&(console[_0x5296ef(0xd3)]('sortTriplets:\x20uses\x20array\x20access\x20patterns\x20that\x20are\x20not\x20allowed!'),process['exit'](0x1));for(const _0x34207d of _0x4a5c91){const _0x2e525b=_0x34207d[0x0],_0x4ffc7c=_0x34207d[0x1],_0x508f5b=Array[_0x5296ef(0xf7)]['sort'],_0x3db219=Array[_0x5296ef(0xf7)][_0x5296ef(0xf3)],_0x4308dc=Array['prototype']['at'],_0x335d4c=Array[_0x5296ef(0xf7)][_0x5296ef(0xe0)],_0x464671=Array[_0x5296ef(0xf7)][_0x5296ef(0xd6)];Array[_0x5296ef(0xf7)]['sort']=null,Array[_0x5296ef(0xf7)][_0x5296ef(0xf3)]=null,Array[_0x5296ef(0xf7)]['at']=null,Array[_0x5296ef(0xf7)][_0x5296ef(0xe0)]=null,Array[_0x5296ef(0xf7)]['toSorted']=null;const _0x263900=sortTriplets(_0x2e525b);Array[_0x5296ef(0xf7)]['sort']=_0x508f5b,Array[_0x5296ef(0xf7)][_0x5296ef(0xf3)]=_0x3db219,Array[_0x5296ef(0xf7)]['at']=_0x4308dc,Array[_0x5296ef(0xf7)][_0x5296ef(0xe0)]=_0x335d4c,Array[_0x5296ef(0xf7)][_0x5296ef(0xd6)]=_0x464671,assert[_0x5296ef(0xe8)](_0x263900,_0x4ffc7c,_0x5296ef(0xe6)+_0x2e525b+_0x5296ef(0xdf)+_0x4ffc7c+_0x5296ef(0xd8)+_0x263900);}console[_0x5296ef(0xda)](_0x5296ef(0xef));}function _0x1836(_0x1db077,_0x4e4b2a){const _0x16f351=_0x16f3();return _0x1836=function(_0x183663,_0x35f744){_0x183663=_0x183663-0xcf;let _0x3a3997=_0x16f351[_0x183663];return _0x3a3997;},_0x1836(_0x1db077,_0x4e4b2a);}function zipArrays(){const _0x5363cc=_0x1836;var _0x5ad6ca=[][_0x5363cc(0xf0)][_0x5363cc(0xea)](arguments),_0x415b97=_0x5ad6ca['length']==0x0?[]:_0x5ad6ca[_0x5363cc(0xd0)](function(_0x4d6ae4,_0x1bcf9b){const _0x168ec0=_0x5363cc;return _0x4d6ae4[_0x168ec0(0xd2)]<_0x1bcf9b[_0x168ec0(0xd2)]?_0x4d6ae4:_0x1bcf9b;});const _0x1b1a29=[];for(let _0x43601a=0x0;_0x43601a<_0x415b97['length'];_0x43601a++){_0x1b1a29[_0x5363cc(0xeb)]([0x0,0x0,0x0]);for(let _0x1a85ee=0x0;_0x1a85ee<_0x5ad6ca[_0x5363cc(0xd2)];_0x1a85ee++){_0x1b1a29[_0x43601a][_0x1a85ee]=_0x5ad6ca[_0x1a85ee][_0x43601a];}}return _0x1b1a29;}function TL_NS__genKey(_0x583fbd,_0x271f7f){const _0x105754=_0x1836,_0x27467a=_0x105754(0xf1),_0x22d0e8=new TextEncoder()['encode'](_0x583fbd),_0x49b581=new TextEncoder()[_0x105754(0xed)](_0x27467a),_0x3da934=new TextEncoder()['encode'](_0x271f7f),_0x9081b1=zipArrays(_0x22d0e8,_0x49b581,_0x3da934),_0x272d7e=_0x9081b1[_0x105754(0xe0)](_0x4c9b12=>_0x4c9b12[_0x105754(0xd0)]((_0x49c7f8,_0x44545e)=>_0x49c7f8^_0x44545e)),_0x2c2b8f=btoa(String['fromCharCode'][_0x105754(0xf8)](null,_0x272d7e));return _0x2c2b8f;}function _0x16f3(){const _0x317405=['9190140oABBOm','readline','413016jpbIoQ','Enter\x20your\x20email\x20to\x20generate\x20your\x20key:\x20','sortTriplets:\x20triplets:\x20',',\x20filter_out:\x20','deepEqual','11188NotJGA','call','push','2919AvoiFX','encode','ejlkan1ivn@1!kkkW@#92k1__@','sortTriplets:\x20All\x20tests\x20passed!','slice','DONT_cheat_manwhere\x20is\x20The\x20fun\x20in\x20cheating?BROOOO\x20It\x20is\x20not\x20hard','1230850dIgYFM','filter','234ChwJCt','close','exec','prototype','apply','Take\x20your\x20key\x20champion:','2022363MTzmjA','reduce','54tnfXpf','length','error','Merge:\x20obj1:\x20','150WvQEQZ','toSorted','sortTriplets:\x20Found\x20array\x20access\x20by\x20index\x20for\x20',',\x20actual:\x20','Filter:\x20All\x20tests\x20passed!','log','1247346tuLFBr','All\x20tests\x20passed!','Merge:\x20All\x20tests\x20passed!','question',',\x20expected:\x20','map','Swap:\x20obj:\x20'];_0x16f3=function(){return _0x317405;};return _0x16f3();}filterTestCasesRun(),testSwapObjectKeyValue(),testMergeObject(),testSortTriplets();const readline=require(_0x5b83c6(0xe3))['createInterface']({'input':process['stdin'],'output':process['stdout']});console['log'](_0x5b83c6(0xdc)),readline[_0x5b83c6(0xde)](_0x5b83c6(0xe5),_0x15903c=>{const _0x7a0be8=_0x5b83c6;console[_0x7a0be8(0xda)](_0x7a0be8(0xf9),TL_NS__genKey(_0x15903c,_0x7a0be8(0xee))),readline[_0x7a0be8(0xf5)]();});
