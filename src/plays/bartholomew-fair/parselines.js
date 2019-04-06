var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

// if ( typeof String.prototype.startsWith != 'function' ) {
//   String.prototype.startsWith = function( str ) {
//     return this.substring( 0, str.length ) === str;
//   }
// };

const play = require('./playlines.txt');

counts = {}
totalCount = 0;
play.split('\n').forEach(element => {
  // console.log(element);
  if(element.startsWith('<name>')) {
    let name = element.split('</name>')[0];
    name = name.replace('<name>','');
    if( !counts[name] ) {
      counts[name] = 0;
    }
    let lines = element.split('</name')[1];
    counts[name]+= lines.split(' ').length;
    totalCount += lines.split(' ').length;
    if (name === 'Winw.') {
      console.log(lines, lines.split(' ').length, counts[name]);
    }
  }
});

console.log(counts);
console.log(totalCount);
