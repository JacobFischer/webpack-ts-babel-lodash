console.log("Hello World!");

import { mapped } from "./stuff";

console.log("mapped", mapped);

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (const key of Object.keys(mapped)) {
    const li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = `${key}: ${mapped[Number(key)]}`;
}
