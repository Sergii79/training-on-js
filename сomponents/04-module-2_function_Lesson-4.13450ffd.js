console.log("Lesson 4");console.log("-----");const o=function(o,l){return o>l?l:o};function l(o){return Math.max(...o)}console.log(o(2,5)),console.log(o(3,-1)),console.log(o(1,1)),console.log(o(4,4)),console.log("-----"),console.log("square = ",function(o){const l=o.split(" ");return l[0]*l[1]}("8 11")),console.log("-----"),function(o){for(let l=0;l<o.length;l+=1)console.log(`${l+1} - ${o[l]}`);for(let l of o){const n=o.indexOf(l);console.log(`${n+1} - ${l}`)}}(["🍎","🍇","🍑","🍌","🍋"]),console.log("-----"),console.log("-----"),console.log(l([2,17,94,1,23,37])),console.log(l([49,4,7,83,12])),console.log("-----"),console.log("-----");const n=function(o){const l=Math.floor(o/60),n=o%60;return`${String(l).padStart(2,"0")}:${String(n).padStart(2,"0")}`}(1440);console.log(n),console.log("--Example 9--");const s=["HTML","CSS","JavaScript","React","PostgreSQL"],e=s.length-1,t=s[e];function c(o){return s.indexOf(o)>-1?"Ви вже маєте такий курс":(s.push(o),"Курс додано")}console.log(e),console.log(t);let g=c("Express");console.log(s,g),g=c("Express"),console.log(s,g),g=function(o="deafult value"){const l=s.indexOf(o);if(-1===l)return"Такого курса нема";const n=`Курс ${s[l]} видалено`;return s.splice(l,1),n}(),console.log(s,g),g=function(o,l){const n=s.indexOf(o);if(-1===n)return"Такого курса нема";const e=`Курс ${o} оновлено на курс ${l}`;return s.splice(n,1,l),e}("Express","NestJS"),console.log(s,g),console.log("-----"),message="JavaScript is in my blood",pricePerWord=2;const r=function(o,l){let n,s=o.split(" ");return console.log(s),n=s.length*l,n}("JavaScript is in my blood",2);console.log(`Total price: ${r}`),console.log("-----");const f=["sdsdf dsvs sdf","sdf sdsdf","sdgs s sf sfsdggs sssf","dsv xs f"];console.log(f),function(o){let l="";for(let n=0;n<o.length;n++){const s=o[n];console.log(s),s.length>l.length&&(l=s)}console.log(l)}(f),console.log("-----");const i=["sdsdf dsvs sdf","sdf sdsdf","sdgs s sf sfsdggs sssf","dsv xs f"];console.log(i),function(o){let l="";for(let n=0;n<o.length;n++){const s=o[n].split(" ");console.log(s);for(let o=0;o<s.length;o++){const n=s[o];console.log(n),n.length>l.length&&(l=n)}}console.log(l)}(i),console.log("-----");!function(o,l){const n=[];for(let s=o;s<=l;s+=2)n.push(s);console.log(n)}(1,16),console.log("-----");!function(o,l){let n=[];for(let s=0;s<=o.length;s++)o[s]>l&&n.push(o[s]);console.log(n)}([1,2,3,4,5,6],3),console.log("-----");var u;["apple","plum","pear","orange"].includes(u="apple")?console.log(`${u} is in the array.`):console.log(`${u} is not in the array.`),console.log("-----");!function(o,l){let n=[];for(let s=0;s<o.length;s++)l.includes(o[s])&&n.push(o[s]);console.log(n)}([1,3,5],[0,8,5,3]),console.log("-----");!function(o,l){let n=[];for(let s=o;s<=l;s++)console.log(s),s%2==0&&n.push(s);console.log(n)}(1,10),console.log("-----");!function(o,l){for(let n of o)if(n===l)return console.log("true"),!0;console.log("false")}([1,2,3,4,5],5);
//# sourceMappingURL=04-module-2_function_Lesson-4.13450ffd.js.map
