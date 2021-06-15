import "core-js/stable";
import "regenerator-runtime/runtime";

console.log(
  "An investement in knowledge pay always the best interest!"
);

const roles = [
  "Director of Technology",
  "Head of Engineering",
  "CTO",
  "Tech Lead",
];

// Thanks for inspiration https://codepen.io/FelixLuciano/pen/PoqdMKP
async function init() {
  const node = document.querySelector("#type-text");
  await sleep(1000);
  node.text = "Director of Technology";
  let counter = 0;
  await node.delete(roles[counter]);
  await sleep(2000);

  while (true) {
    counter++;
    if (counter === roles.length) {
      counter = 0;
    }
    await node.type(roles[counter]);
    await sleep(2000);
    await node.delete(roles[counter]);
  }
}

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

class TypeAsync extends HTMLSpanElement {
  get text() {
    return this.innerText;
  }
  set text(value) {
    return (this.innerHTML = value);
  }

  async type(text) {
    for (let character of text) {
      this.text += character;
      await sleep(100);
    }
  }

  async delete(text) {
    for (let character of text) {
      this.text = this.text.slice(0, this.text.length - 1);
      await sleep(100);
    }
  }
}

// If is not compatible :(
if (window.customElements) {
    customElements.define("type-async", TypeAsync, { extends: "span" });
    init();
} else {
    document.querySelector('#cursor').style.display = 'none';
}


