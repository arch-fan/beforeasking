const $$codeBlocks = document.querySelectorAll("pre");

const copySVG = `<svg viewBox="0 0 24 24">
	<path fill="currentColor" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593c.734-.737 1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.601 3.601 0 0 0 15.24 2" />
	<path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847c.843.847.843 2.21.843 4.936v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z" />
</svg>`;

const checkSVG = `<svg viewBox="0 0 24 24">
	<path fill="lightgreen" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
</svg>`;

const createButton = (text: string) => {
  const copyButton = document.createElement("button");

  copyButton.innerHTML = copySVG;

  copyButton.classList.add(
    "absolute",
    "top-2",
    "right-2",
    "h-6",
    "w-6",
    "flex"
  );

  copyButton.setAttribute("aria-label", "Copy code to clipboard");

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(text);

    copyButton.innerHTML = checkSVG;

    setTimeout(() => {
      copyButton.innerHTML = copySVG;
    }, 2000);
  });

  return copyButton;
};

for (const $codeBlock of $$codeBlocks) {
  const text = $codeBlock.querySelector("code")?.textContent;
  $codeBlock.classList.add("relative");

  if (text) $codeBlock.appendChild(createButton(text));
}
