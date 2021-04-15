(self.webpackChunkcsv_docs=self.webpackChunkcsv_docs||[]).push([[678],{2714:function(e,g,t){"use strict";t.r(g),t.d(g,{default:function(){return u}});t(7294);var N,D,a=t(5444),M=t(8718),c=t(9555),r=t(8414),n=t(8694),i=t.n(n)(),s=t(7719),I=t(8468);r.Z.registerLanguage("javascript",i);var j="\n// Import the package main module\nconst csv = require('csv')\n// Use the module\ncsv\n// Generate 20 records\n.generate({\n  delimiter: '|',\n  length: 20\n})\n// Parse the records\n.pipe(csv.parse({\n  delimiter: '|'\n}))\n// Transform each value into uppercase\n.pipe(csv.transform(function(record){\n   return record.map(function(value){\n     return value.toUpperCase()\n   });\n}))\n// Convert the object into a stream\n.pipe(csv.stringify({\n  quoted: true\n}))\n// Print the CSV stream to stdout\n.pipe(process.stdout)\n".trim(),o={convert:{display:"flex",flexDirection:"row-reverse",alignItems:"center",background:"#BF5E13",borderRadius:".6rem",padding:"1rem",marginBottom:"4%","& span":{display:"inline-block"},"& img":{margin:"0 1rem 0 0",width:"6rem",height:"6rem"},"& h1":{color:"#fff",margin:"0 0 .4rem 0"},"& p":{color:"#fff",margin:0}},projects:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},card:(N={borderRadius:".6rem",marginBottom:"4%",flex:"0 0 48%"},N[M.lN]={flex:"0 0 100%"},N.backgroundColor="rgba(255,255,255,.1)",N.padding="1rem 2rem",N.textAlign="center",N["& a"]={textDecoration:"none"},N["& h1, & img"]={marginTop:"0",marginBottom:".5rem"},N["& p"]={marginBottom:"0"},N),blog:{border:".2rem solid rgba(255,255,255,.1)",padding:".5rem 2rem",borderRadius:".6rem",marginBottom:"4%","& h1":{textAlign:"center"},"& h2":{margin:".5rem 0"},"& h2 a":{textDecoration:"none !important"},"& p":(D={},D[M.H6]={textAlign:"justify"},D)},blog_info:{fontSize:".9rem",fontColor:"rgba(255,255,255,.6)",margin:"0"},sample:{"& h1":{textAlign:"center"}}},u=function(){return I.createElement(c.Z,{intro:!0,page:{title:"Node.js CSV package",description:"CSV generation, parsing, transformation and serialization for Node.js",keywords:"csv, node.js, stream, parser, serializer, generation, transformation"}},I.createElement("section",{css:o.convert},I.createElement("div",null,I.createElement("h1",null,I.createElement(a.Link,{to:"/convert/"},I.createElement("span",null,"CSV & JSON")," ",I.createElement("span",null,"convertor tool"))),I.createElement("p",null,"This is a full-featured CSV parsing tool running entirely on your browser. No data leave your computer ! Use it also to learn how to use our packages and to test the various options interactively.")),I.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhLS0gR2VuZXJhdG9yOiBHcmF2aXQuaW8gLS0+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiIHZpZXdCb3g9Ijc4NC41IDUzMS41IDYxIDYwIiB3aWR0aD0iNjEiIGhlaWdodD0iNjAiPjxkZWZzPjxjbGlwUGF0aCBpZD0iX2NsaXBQYXRoX0dSYmNTRUtyS0YxOU84OHpkYVBEWktmdjhKYnBYWEppIj48cmVjdCB4PSI3ODQuNSIgeT0iNTMxLjUiIHdpZHRoPSI2MSIgaGVpZ2h0PSI2MCIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNfY2xpcFBhdGhfR1JiY1NFS3JLRjE5Tzg4emRhUERaS2Z2OEpicFhYSmkpIj48Zz48Zz48cGF0aCBkPSIgTSA4MjkuMzMzIDU4My4wODggTCA4MzMuNjY3IDU4My4wODggQyA4MzQuMjYzIDU4My4wODggODM0Ljc1IDU4Mi41NzggODM0Ljc1IDU4MS45NTggTCA4MzQuNzUgNTc2LjMwNiBDIDgzNC43NSA1NzUuNjg0IDgzNS4yMzcgNTc1LjE3NiA4MzUuODMzIDU3NS4xNzYgTCA4MzkuMDgzIDU3NS4xNzYgQyA4MzkuNjc5IDU3NS4xNzYgODM5Ljg0MyA1NzQuNzk1IDgzOS40NDcgNTc0LjMzMSBMIDgzMi4yMTkgNTY1Ljg0OCBDIDgzMS44MjQgNTY1LjM4NCA4MzEuMTc2IDU2NS4zODQgODMwLjc4MSA1NjUuODQ4IEwgODIzLjU1MyA1NzQuMzMxIEMgODIzLjE1NyA1NzQuNzk1IDgyMy4zMjEgNTc1LjE3NiA4MjMuOTE3IDU3NS4xNzYgTCA4MjcuMTY3IDU3NS4xNzYgQyA4MjcuNzYzIDU3NS4xNzYgODI4LjI1IDU3NS42ODQgODI4LjI1IDU3Ni4zMDYgTCA4MjguMjUgNTgxLjk1OCBDIDgyOC4yNSA1ODIuNTc4IDgyOC43MzcgNTgzLjA4OCA4MjkuMzMzIDU4My4wODggWiAiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiLz48cGF0aCBkPSIgTSA4NDMuNDE3IDU4Mi40NTggTCA4NDIuMzMzIDU4Mi40NTggQyA4NDEuNzM4IDU4Mi40NTggODQxLjI1IDU4Mi45NjcgODQxLjI1IDU4My41ODggTCA4NDEuMjUgNTg2Ljk3OSBDIDg0MS4yNSA1ODcuNjAxIDg0MC43NjIgNTg4LjEwOSA4NDAuMTY3IDU4OC4xMDkgTCA4MjIuODMzIDU4OC4xMDkgQyA4MjIuMjM4IDU4OC4xMDkgODIxLjc1IDU4Ny42MDEgODIxLjc1IDU4Ni45NzkgTCA4MjEuNzUgNTgzLjU4OCBDIDgyMS43NSA1ODIuOTY3IDgyMS4yNjIgNTgyLjQ1OCA4MjAuNjY3IDU4Mi40NTggTCA4MTkuNTgzIDU4Mi40NTggQyA4MTguOTg4IDU4Mi40NTggODE4LjUgNTgyLjk2NyA4MTguNSA1ODMuNTg4IEwgODE4LjUgNTkwLjM3IEMgODE4LjUgNTkwLjk5MSA4MTguOTg4IDU5MS41IDgxOS41ODMgNTkxLjUgTCA4NDMuNDE3IDU5MS41IEMgODQ0LjAxMiA1OTEuNSA4NDQuNSA1OTAuOTkxIDg0NC41IDU5MC4zNyBMIDg0NC41IDU4My41ODggQyA4NDQuNSA1ODIuOTY3IDg0NC4wMTIgNTgyLjQ1OCA4NDMuNDE3IDU4Mi40NTggWiAiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiLz48L2c+PGc+PHBhdGggZD0iIE0gODQ1LjUgNTUwLjA1MiBDIDgzNi44MzMgNTM4LjgyIDgyOC4xNjcgNTYxLjI4NCA4MTkuNSA1NTAuMDUyIEMgODE5LjUgNTQ2LjIzMSA4MTkuNSA1NDIuNDEgODE5LjUgNTM4LjU5IEMgODI4LjE2NyA1NDkuODIyIDgzNi44MzMgNTI3LjM1NyA4NDUuNSA1MzguNTkgQyA4NDUuNSA1NDIuNDEgODQ1LjUgNTQ2LjIzMSA4NDUuNSA1NTAuMDUyIFogIiBmaWxsPSJyZ2IoMjU1LDI1NSwyNTUpIi8+PHBhdGggZD0iIE0gODI2LjE3MiA1NDEuNTM4IEwgODI5LjkwNCA1MzUuMjA0IEwgODI3Ljc5IDUzNS4yMDQgTCA4MjcuNzkgNTMxLjUgTCA4MjQuNTYxIDUzMS41IEwgODI0LjU2MSA1MzUuMjA0IEwgODIyLjQ0IDUzNS4yMDQgTCA4MjYuMTcyIDU0MS41MzggWiAiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiLz48cGF0aCBkPSIgTSA4MzkuMDIgNTQ3LjQ0IEwgODM1LjI3OSA1NTMuNzg5IEwgODM3LjM5OCA1NTMuNzg5IEwgODM3LjM5OCA1NTcuNSBMIDg0MC42MzUgNTU3LjUgTCA4NDAuNjM1IDU1My43ODkgTCA4NDIuNzYxIDU1My43ODkgTCA4MzkuMDIgNTQ3LjQ0IFogIiBmaWxsPSJyZ2IoMjU1LDI1NSwyNTUpIi8+PC9nPjxnPjxwYXRoIGQ9IiBNIDgxMC41IDU4Mi4wNTggQyA4MTAuNSA1ODAuNDk4IDgwOS40NDYgNTc5LjE4NCA4MDcuOTgyIDU3OC42MzcgTCA4MDcuOTgyIDU2Ni44MTQgQyA4MDcuOTgyIDU2Ni4wNzUgODA3LjMzOCA1NjUuNSA4MDYuNTc3IDU2NS41IEMgODA1Ljc4NiA1NjUuNSA4MDUuMTcxIDU2Ni4xMDIgODA1LjE3MSA1NjYuODE0IEwgODA1LjE3MSA1NzguNjM3IEMgODAzLjcwNyA1NzkuMTU3IDgwMi42NTMgNTgwLjQ5OCA4MDIuNjUzIDU4Mi4wNTggQyA4MDIuNjUzIDU4My42MTggODAzLjcwNyA1ODQuOTMyIDgwNS4xNzEgNTg1LjQ3OSBMIDgwNS4xNzEgNTkwLjE4NiBDIDgwNS4xNzEgNTkwLjkyNSA4MDUuODE1IDU5MS41IDgwNi41NzcgNTkxLjUgQyA4MDcuMzY3IDU5MS41IDgwNy45ODIgNTkwLjg5OCA4MDcuOTgyIDU5MC4xODYgTCA4MDcuOTgyIDU4NS40NzkgQyA4MDkuNDc1IDU4NC45NTkgODEwLjUgNTgzLjYxOCA4MTAuNSA1ODIuMDU4IFogIE0gODA2LjU3NyA1ODMuMDcxIEMgODA1Ljk5MSA1ODMuMDcxIDgwNS40OTMgNTgyLjYwNSA4MDUuNDkzIDU4Mi4wNTggQyA4MDUuNDkzIDU4MS41MTEgODA1Ljk5MSA1ODEuMDQ1IDgwNi41NzcgNTgxLjA0NSBDIDgwNy4xNjIgNTgxLjA0NSA4MDcuNjYgNTgxLjUxMSA4MDcuNjYgNTgyLjA1OCBDIDgwNy42NiA1ODIuNjMzIDgwNy4xOTEgNTgzLjA3MSA4MDYuNTc3IDU4My4wNzEgWiAiIGZpbGw9InJnYigyNTUsMjU1LDI1NSkiLz48cGF0aCBkPSIgTSA3OTguOTA1IDU3MS41MjEgTCA3OTguOTA1IDU2Ni44MTQgQyA3OTguOTA1IDU2Ni4wNzUgNzk4LjI2MSA1NjUuNSA3OTcuNSA1NjUuNSBDIDc5Ni43MDkgNTY1LjUgNzk2LjA5NSA1NjYuMTAyIDc5Ni4wOTUgNTY2LjgxNCBMIDc5Ni4wOTUgNTcxLjUyMSBDIDc5NC42MzEgNTcyLjA0MSA3OTMuNTc3IDU3My4zODIgNzkzLjU3NyA1NzQuOTQyIEMgNzkzLjU3NyA1NzYuNTAyIDc5NC42MzEgNTc3LjgxNiA3OTYuMDk1IDU3OC4zNjMgTCA3OTYuMDk1IDU5MC4xODYgQyA3OTYuMDk1IDU5MC45MjUgNzk2LjczOSA1OTEuNSA3OTcuNSA1OTEuNSBDIDc5OC4yOTEgNTkxLjUgNzk4LjkwNSA1OTAuODk4IDc5OC45MDUgNTkwLjE4NiBMIDc5OC45MDUgNTc4LjM2MyBDIDgwMC4zNjkgNTc3Ljg0MyA4MDEuNDIzIDU3Ni41MDIgODAxLjQyMyA1NzQuOTQyIEMgODAxLjQyMyA1NzMuMzgyIDgwMC4zNjkgNTcyLjA2OCA3OTguOTA1IDU3MS41MjEgWiAgTSA3OTcuNSA1NzUuOTU1IEMgNzk2LjkxNCA1NzUuOTU1IDc5Ni40MTcgNTc1LjQ4OSA3OTYuNDE3IDU3NC45NDIgQyA3OTYuNDE3IDU3NC4zOTUgNzk2LjkxNCA1NzMuOTI5IDc5Ny41IDU3My45MjkgQyA3OTguMDg2IDU3My45MjkgNzk4LjU4MyA1NzQuMzk1IDc5OC41ODMgNTc0Ljk0MiBDIDc5OC41ODMgNTc1LjUxNyA3OTguMDg2IDU3NS45NTUgNzk3LjUgNTc1Ljk1NSBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjxwYXRoIGQ9IiBNIDc4OS44MjkgNTc4LjYzNyBMIDc4OS44MjkgNTY2LjgxNCBDIDc4OS44MjkgNTY2LjA3NSA3ODkuMTg1IDU2NS41IDc4OC40MjMgNTY1LjUgQyA3ODcuNjMzIDU2NS41IDc4Ny4wMTggNTY2LjEwMiA3ODcuMDE4IDU2Ni44MTQgTCA3ODcuMDE4IDU3OC42MzcgQyA3ODUuNTU0IDU3OS4xNTcgNzg0LjUgNTgwLjQ5OCA3ODQuNSA1ODIuMDU4IEMgNzg0LjUgNTgzLjYxOCA3ODUuNTU0IDU4NC45MzIgNzg3LjAxOCA1ODUuNDc5IEwgNzg3LjAxOCA1OTAuMTg2IEMgNzg3LjAxOCA1OTAuOTI1IDc4Ny42NjIgNTkxLjUgNzg4LjQyMyA1OTEuNSBDIDc4OS4yMTQgNTkxLjUgNzg5LjgyOSA1OTAuODk4IDc4OS44MjkgNTkwLjE4NiBMIDc4OS44MjkgNTg1LjQ3OSBDIDc5MS4yOTMgNTg0Ljk1OSA3OTIuMzQ3IDU4My42MTggNzkyLjM0NyA1ODIuMDU4IEMgNzkyLjM0NyA1ODAuNDk4IDc5MS4yOTMgNTc5LjE4NCA3ODkuODI5IDU3OC42MzcgWiAgTSA3ODguNDIzIDU4My4wNzEgQyA3ODcuODM4IDU4My4wNzEgNzg3LjM0IDU4Mi42MDUgNzg3LjM0IDU4Mi4wNTggQyA3ODcuMzQgNTgxLjUxMSA3ODcuODM4IDU4MS4wNDUgNzg4LjQyMyA1ODEuMDQ1IEMgNzg5LjAwOSA1ODEuMDQ1IDc4OS41MDcgNTgxLjUxMSA3ODkuNTA3IDU4Mi4wNTggQyA3ODkuNTA3IDU4Mi42MzMgNzg5LjAwOSA1ODMuMDcxIDc4OC40MjMgNTgzLjA3MSBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjwvZz48Zz48cGF0aCBkPSIgTSA3OTkuNjY3IDUzMS41IEwgNzk1LjMzMyA1MzEuNSBDIDc5NC43MzcgNTMxLjUgNzk0LjI1IDUzMi4wMSA3OTQuMjUgNTMyLjYzIEwgNzk0LjI1IDUzOC4yODEgQyA3OTQuMjUgNTM4LjkwNCA3OTMuNzYzIDUzOS40MTIgNzkzLjE2NyA1MzkuNDEyIEwgNzg5LjkxNyA1MzkuNDEyIEMgNzg5LjMyMSA1MzkuNDEyIDc4OS4xNTcgNTM5Ljc5MyA3ODkuNTUzIDU0MC4yNTcgTCA3OTYuNzgxIDU0OC43NCBDIDc5Ny4xNzYgNTQ5LjIwNCA3OTcuODI0IDU0OS4yMDQgNzk4LjIxOSA1NDguNzQgTCA4MDUuNDQ3IDU0MC4yNTcgQyA4MDUuODQzIDUzOS43OTMgODA1LjY3OSA1MzkuNDEyIDgwNS4wODMgNTM5LjQxMiBMIDgwMS44MzMgNTM5LjQxMiBDIDgwMS4yMzcgNTM5LjQxMiA4MDAuNzUgNTM4LjkwNCA4MDAuNzUgNTM4LjI4MSBMIDgwMC43NSA1MzIuNjMgQyA4MDAuNzUgNTMyLjAxIDgwMC4yNjMgNTMxLjUgNzk5LjY2NyA1MzEuNSBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjxwYXRoIGQ9IiBNIDgwOS40MTcgNTQ4LjQ1OCBMIDgwOC4zMzMgNTQ4LjQ1OCBDIDgwNy43MzggNTQ4LjQ1OCA4MDcuMjUgNTQ4Ljk2NyA4MDcuMjUgNTQ5LjU4OCBMIDgwNy4yNSA1NTIuOTc5IEMgODA3LjI1IDU1My42MDEgODA2Ljc2MiA1NTQuMTA5IDgwNi4xNjcgNTU0LjEwOSBMIDc4OC44MzMgNTU0LjEwOSBDIDc4OC4yMzggNTU0LjEwOSA3ODcuNzUgNTUzLjYwMSA3ODcuNzUgNTUyLjk3OSBMIDc4Ny43NSA1NDkuNTg4IEMgNzg3Ljc1IDU0OC45NjcgNzg3LjI2MiA1NDguNDU4IDc4Ni42NjcgNTQ4LjQ1OCBMIDc4NS41ODMgNTQ4LjQ1OCBDIDc4NC45ODggNTQ4LjQ1OCA3ODQuNSA1NDguOTY3IDc4NC41IDU0OS41ODggTCA3ODQuNSA1NTYuMzcgQyA3ODQuNSA1NTYuOTkxIDc4NC45ODggNTU3LjUgNzg1LjU4MyA1NTcuNSBMIDgwOS40MTcgNTU3LjUgQyA4MTAuMDEyIDU1Ny41IDgxMC41IDU1Ni45OTEgODEwLjUgNTU2LjM3IEwgODEwLjUgNTQ5LjU4OCBDIDgxMC41IDU0OC45NjcgODEwLjAxMiA1NDguNDU4IDgwOS40MTcgNTQ4LjQ1OCBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==",alt:"Convertor tool"})),I.createElement("section",{css:o.projects},I.createElement("div",{css:o.card},I.createElement("h1",null,I.createElement(a.Link,{to:"/generate/"},"csv-generate")),I.createElement("a",{href:"https://npmjs.org/package/csv-generate",title:"View this project on NPM"},I.createElement("img",{src:"https://img.shields.io/npm/v/csv-generate.svg",alt:"NPM version"}))," ",I.createElement("a",{href:"https://travis-ci.org/#!/adaltas/node-csv-generate",title:"View this project on Travis"},I.createElement("img",{src:"https://api.travis-ci.org/adaltas/node-csv-generate.svg",alt:"Travis build status"})),I.createElement("p",null,"Write random and user-defined strings, objects and arrays")),I.createElement("div",{css:o.card},I.createElement("h1",null,I.createElement(a.Link,{to:"/parse/"},"csv-parse")),I.createElement("a",{href:"https://npmjs.org/package/csv-parse",title:"View this project on NPM"},I.createElement("img",{src:"https://img.shields.io/npm/v/csv-parse.svg",alt:"NPM version"}))," ",I.createElement("a",{href:"https://travis-ci.org/#!/adaltas/node-csv-parse",title:"View this project on Travis"},I.createElement("img",{src:"https://api.travis-ci.org/adaltas/node-csv-parse.svg",alt:"Travis build status"})),I.createElement("p",null,"Read CSV strings and buffers and write object and arrays")),I.createElement("div",{css:o.card},I.createElement("h1",null,I.createElement(a.Link,{to:"/transform/"},"stream-transform")),I.createElement("a",{href:"https://npmjs.org/package/stream-transform",title:"View this project on NPM"},I.createElement("img",{src:"https://img.shields.io/npm/v/stream-transform.svg",alt:"NPM version"}))," ",I.createElement("a",{href:"https://travis-ci.org/#!/adaltas/node-stream-transform",title:"View this project on Travis"},I.createElement("img",{src:"https://api.travis-ci.org/adaltas/node-stream-transform.svg",alt:"Travis build status"})),I.createElement("p",null,"Read and write objects and arrays")),I.createElement("div",{css:o.card},I.createElement("h1",null,I.createElement(a.Link,{to:"/stringify/"},"csv-stringify")),I.createElement("a",{href:"https://npmjs.org/package/csv-stringify",title:"View this project on NPM"},I.createElement("img",{src:"https://img.shields.io/npm/v/csv-stringify.svg",alt:"NPM version"}))," ",I.createElement("a",{href:"https://travis-ci.org/#!/adaltas/node-csv-stringify",title:"View this project on Travis"},I.createElement("img",{src:"https://api.travis-ci.org/adaltas/node-csv-stringify.svg",alt:"Travis build status"})),I.createElement("p",null,"Read object and arrays and write CSV strings"))),I.createElement("section",{css:o.blog},I.createElement("h1",null,"Latest news"),I.createElement("article",null,I.createElement("h2",null,I.createElement(a.Link,{to:"/convert/"},"Try the new CSV & JSON conversion tool!")),I.createElement("p",{css:o.blog_info},"By ",I.createElement("a",{href:"https://www.adaltas.com/"},"wdavidw")," | January 15th, 2019"),I.createElement("p",null,"We just published a new conversion tool which takes a CSV input and convert it to JSON. Use it as a playground to learn how to use our packages, test your options interactively or as a full-featured CSV parsing tool.")),I.createElement("article",null,I.createElement("h2",null,I.createElement(a.Link,{to:"/stringify/changelog/"},"CSV Stringify 5.1.0")),I.createElement("p",{css:o.blog_info},"By ",I.createElement("a",{href:"https://github.com/wdavidw/"},"wdavidw")," | December 5th, 2018"),I.createElement("p",null,I.createElement(a.Link,{to:"/stringify/options/cast/"},"Casting user functions"),' are now called with a context object. The initial properties are "column", "header", "index", "records".')),I.createElement("article",null,I.createElement("h2",null,I.createElement(a.Link,{to:"/project/changelog/"},"CSV 5.0.0")),I.createElement("p",{css:o.blog_info},"By ",I.createElement("a",{href:"https://github.com/wdavidw/"},"wdavidw")," | November 21th, 2018"),I.createElement("p",null,"Version 5.0.0 includes the latest csv-parse and csv-stringify respectively with version 4.0.1 and 5.0.0.")),I.createElement("article",null,I.createElement("h2",null,I.createElement(a.Link,{to:"/stringify/changelog/"},"CSV Stringify 5.0.0")),I.createElement("p",{css:o.blog_info},"By ",I.createElement("a",{href:"https://github.com/wdavidw/"},"wdavidw")," | November 21th, 2018"),I.createElement("p",null,"Version 5.0.0 introduces the new ",I.createElement("code",{className:"language-text"},"quoted_match")," option and support options written both in the underscore and camelcase forms. Some options were renamed. Thus ",I.createElement("code",{className:"language-text"},"rowDelimiter")," is now ",I.createElement("code",{className:"language-text"},"record_delimiter")," and ",I.createElement("code",{className:"language-text"},"formatters")," is now ",I.createElement("code",{className:"language-text"},"cast"),". ",I.createElement(a.Link,{to:"/stringify/changelog/"},"Read the changelog!"))),I.createElement("article",null,I.createElement("h2",null,I.createElement("a",{href:"https://www.adaltas.com/en/2018/11/19/nodejs-csv-version-4-performance/"},"CSV Parse 4.0.0 - re-writing and performance")),I.createElement("p",{css:o.blog_info},"By ",I.createElement("a",{href:"https://github.com/wdavidw/"},"wdavidw")," | November 19th, 2018"),I.createElement("p",null,"Version 4.0.0 is a complete re-writing of the project focusing on performance. It also comes with new functionalities as well as some cleanup in the option properties and the exported information. The official website is updated and the ",I.createElement(a.Link,{to:"/parse/changelog/"},"changelog")," contains the list of changes for this major release. ",I.createElement("a",{href:"https://www.adaltas.com/en/2018/11/19/nodejs-csv-version-4-performance/"},"Learn more!")))),I.createElement("section",{css:o.sample},I.createElement("h1",null,"Quick Example"),I.createElement(r.Z,{language:"javascript",style:s.Z},j)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-84653eb4dfaa747e9a61.js.map