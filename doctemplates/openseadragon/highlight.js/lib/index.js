var Highlight = require('./highlight');
var hljs = new Highlight();
//hljs.registerLanguage('1c', require('./languages/1c.js'));
//hljs.registerLanguage('actionscript', require('./languages/actionscript.js'));
//hljs.registerLanguage('apache', require('./languages/apache.js'));
//hljs.registerLanguage('applescript', require('./languages/applescript.js'));
hljs.registerLanguage('xml', require('./languages/xml.js'));
//hljs.registerLanguage('asciidoc', require('./languages/asciidoc.js'));
//hljs.registerLanguage('autohotkey', require('./languages/autohotkey.js'));
//hljs.registerLanguage('avrasm', require('./languages/avrasm.js'));
//hljs.registerLanguage('axapta', require('./languages/axapta.js'));
//hljs.registerLanguage('bash', require('./languages/bash.js'));
//hljs.registerLanguage('brainfuck', require('./languages/brainfuck.js'));
//hljs.registerLanguage('clojure', require('./languages/clojure.js'));
//hljs.registerLanguage('cmake', require('./languages/cmake.js'));
hljs.registerLanguage('coffeescript', require('./languages/coffeescript.js'));
//hljs.registerLanguage('cpp', require('./languages/cpp.js'));
//hljs.registerLanguage('cs', require('./languages/cs.js'));
//hljs.registerLanguage('css', require('./languages/css.js'));
//hljs.registerLanguage('d', require('./languages/d.js'));
//hljs.registerLanguage('delphi', require('./languages/delphi.js'));
//hljs.registerLanguage('diff', require('./languages/diff.js'));
//hljs.registerLanguage('django', require('./languages/django.js'));
//hljs.registerLanguage('dos', require('./languages/dos.js'));
//hljs.registerLanguage('erlang-repl', require('./languages/erlang-repl.js'));
//hljs.registerLanguage('erlang', require('./languages/erlang.js'));
//hljs.registerLanguage('fix', require('./languages/fix.js'));
//hljs.registerLanguage('fsharp', require('./languages/fsharp.js'));
//hljs.registerLanguage('glsl', require('./languages/glsl.js'));
//hljs.registerLanguage('go', require('./languages/go.js'));
//hljs.registerLanguage('ruby', require('./languages/ruby.js'));
//hljs.registerLanguage('haml', require('./languages/haml.js'));
//hljs.registerLanguage('handlebars', require('./languages/handlebars.js'));
//hljs.registerLanguage('haskell', require('./languages/haskell.js'));
//hljs.registerLanguage('http', require('./languages/http.js'));
//hljs.registerLanguage('ini', require('./languages/ini.js'));
//hljs.registerLanguage('java', require('./languages/java.js'));
hljs.registerLanguage('javascript', require('./languages/javascript.js'));
hljs.registerLanguage('json', require('./languages/json.js'));
//hljs.registerLanguage('lasso', require('./languages/lasso.js'));
//hljs.registerLanguage('lisp', require('./languages/lisp.js'));
//hljs.registerLanguage('livecodeserver', require('./languages/livecodeserver.js'));
//hljs.registerLanguage('lua', require('./languages/lua.js'));
//hljs.registerLanguage('makefile', require('./languages/makefile.js'));
//hljs.registerLanguage('markdown', require('./languages/markdown.js'));
//hljs.registerLanguage('mathematica', require('./languages/mathematica.js'));
//hljs.registerLanguage('matlab', require('./languages/matlab.js'));
//hljs.registerLanguage('mel', require('./languages/mel.js'));
//hljs.registerLanguage('mizar', require('./languages/mizar.js'));
//hljs.registerLanguage('nginx', require('./languages/nginx.js'));
//hljs.registerLanguage('objectivec', require('./languages/objectivec.js'));
//hljs.registerLanguage('ocaml', require('./languages/ocaml.js'));
//hljs.registerLanguage('oxygene', require('./languages/oxygene.js'));
//hljs.registerLanguage('parser3', require('./languages/parser3.js'));
//hljs.registerLanguage('perl', require('./languages/perl.js'));
//hljs.registerLanguage('php', require('./languages/php.js'));
//hljs.registerLanguage('profile', require('./languages/profile.js'));
//hljs.registerLanguage('python', require('./languages/python.js'));
//hljs.registerLanguage('r', require('./languages/r.js'));
//hljs.registerLanguage('rib', require('./languages/rib.js'));
//hljs.registerLanguage('rsl', require('./languages/rsl.js'));
//hljs.registerLanguage('ruleslanguage', require('./languages/ruleslanguage.js'));
//hljs.registerLanguage('rust', require('./languages/rust.js'));
//hljs.registerLanguage('scala', require('./languages/scala.js'));
//hljs.registerLanguage('scilab', require('./languages/scilab.js'));
//hljs.registerLanguage('scss', require('./languages/scss.js'));
//hljs.registerLanguage('smalltalk', require('./languages/smalltalk.js'));
//hljs.registerLanguage('sql', require('./languages/sql.js'));
//hljs.registerLanguage('tex', require('./languages/tex.js'));
//hljs.registerLanguage('vala', require('./languages/vala.js'));
//hljs.registerLanguage('vbnet', require('./languages/vbnet.js'));
//hljs.registerLanguage('vbscript', require('./languages/vbscript.js'));
//hljs.registerLanguage('vhdl', require('./languages/vhdl.js'));
module.exports = hljs;