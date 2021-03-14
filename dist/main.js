!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var a=()=>'\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="/">\n                    [Rick And Morty Api]\n                </a>\n            </h1>\n        </div>\n    </div>\n    ';const r="https://rickandmortyapi.com/api/character/";var i=async n=>{let e;e=n?`${r}${n}`:r;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch error",n)}};var s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=()=>'\n        <div class"Error404">\n            <h2>Error 404</h2>\n        </div>\n    ';var c=n=>{if(n.length<=3){let e=null;return e="/"===n?"/":"/:id",e}return"/"+n};const l={"/":async()=>`\n    <div class="Characters">\n        ${(await i()).results.map(n=>`\n                <article class="Character-item">\n                    <img src="${n.image}" alt="${n.name}">\n                    <h2>${n.name}</h2>\n                    <a href="#/${n.id}/">\n                        <button class="btn">Ver mas</button>\n                    </a>\n                </article>\n            `).join("")}\n    </div>\n    `,"/:id":async()=>{const n=s(),e=await i(n),t=`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${e.image}" alt="${e.name}" />\n            </article>\n            <article class="Characters-card--details">\n                <h2>${e.name}</h2>\n                <h3>    \n                    Episodes:\n                    <span>${e.episode.length}</span>\n                </h3>\n                <h3>\n                    Status:\n                    <span>${e.status}</span>\n                </h3>\n                <h3>\n                    Species:\n                    <span>${e.species}</span>\n                </h3>\n                <h3>\n                    Gender:\n                    <span>${e.gender}</span>\n                </h3>\n                <h3>\n                    Origin:\n                    <span>${e.origin.name}</span>\n                </h3>\n                <h3>\n                    Last Location:\n                    <span>${e.location.name}</span>\n                </h3>\n            </article>\n        </div>\n    `;return console.log(e),t},"/contact":"Contact"};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await a();let t=s(),r=await c(t),i=null;i=l[r]?l[r]:o,e.innerHTML=await i()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);