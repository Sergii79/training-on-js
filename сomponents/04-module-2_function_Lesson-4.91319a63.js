console.log("Lesson 4");console.log("-----");const o=function(o,n){return o>n?n:o};function n(o){return Math.max(...o)}console.log(o(2,5)),console.log(o(3,-1)),console.log(o(1,1)),console.log(o(4,4)),console.log("-----"),console.log("square = ",function(o){const n=o.split(" ");return n[0]*n[1]}("8 11")),console.log("-----"),function(o){for(let n=0;n<o.length;n+=1)console.log(`${n+1} - ${o[n]}`);for(let n of o){const l=o.indexOf(n);console.log(`${l+1} - ${n}`)}}(["🍎","🍇","🍑","🍌","🍋"]),console.log("-----"),console.log("-----"),console.log(n([2,17,94,1,23,37])),console.log(n([49,4,7,83,12])),console.log("-----"),console.log("-----");const l=function(o){const n=Math.floor(o/60),l=o%60;return`${String(n).padStart(2,"0")}:${String(l).padStart(2,"0")}`}(1440);console.log(l),console.log("--Example 9--");const s=["HTML","CSS","JavaScript","React","PostgreSQL"],e=s.length-1,c=s[e];function t(o){return s.indexOf(o)>-1?"Ви вже маєте такий курс":(s.push(o),"Курс додано")}console.log(e),console.log(c);let g=t("Express");console.log(s,g),g=t("Express"),console.log(s,g),g=function(o="deafult value"){const n=s.indexOf(o);if(-1===n)return"Такого курса нема";const l=`Курс ${s[n]} видалено`;return s.splice(n,1),l}(),console.log(s,g),g=function(o,n){const l=s.indexOf(o);if(-1===l)return"Такого курса нема";const e=`Курс ${o} оновлено на курс ${n}`;return s.splice(l,1,n),e}("Express","NestJS"),console.log(s,g),console.log("-----"),message="JavaScript is in my blood",pricePerWord=2;const r=function(o,n){let l,s=o.split(" ");return console.log(s),l=s.length*n,l}("JavaScript is in my blood",2);console.log(`Total price: ${r}`),console.log("-----");const i=["sdsdf dsvs sdf","sdf sdsdf","sdgs s sf sfsdggs sssf","dsv xs f"];console.log(i),function(o){let n="";for(let l=0;l<o.length;l++){const s=o[l];console.log(s),s.length>n.length&&(n=s)}console.log(n)}(i);
//# sourceMappingURL=04-module-2_function_Lesson-4.91319a63.js.map
