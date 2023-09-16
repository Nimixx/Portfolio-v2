const copyButtonLabel = "Copy Code";
let isCopyingAllowed = true;

// SVG icon for copying
const copySvgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2">
    <path stroke-linecap="round" d="M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.187 35h-4.67"/>
    <path d="M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.187V15.814A2.813 2.813 0 0 0 32.187 13Z"/>
  </g>
</svg>
`;

// SVG icon for success
const successSvgIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
`;

document.querySelectorAll("pre").forEach((codeBlock) => {
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";

  const copyButton = document.createElement("button");
  copyButton.className = "copy-code";
  copyButton.disabled = !isCopyingAllowed;

  copyButton.innerHTML = copySvgIcon;

  codeBlock.setAttribute("tabindex", "0");
  codeBlock.appendChild(copyButton);

  copyButton.addEventListener("click", () => copyCode(codeBlock, copyButton));

  if (codeBlock.parentNode) {
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);
  }
});

async function copyCode(block: HTMLElement, button: HTMLButtonElement) {
  if (!isCopyingAllowed) {
    return;
  }

  const code = block.querySelector("code");
  const text = code ? code.innerText : "";

  try {
    isCopyingAllowed = false;
    button.disabled = true;
    await navigator.clipboard.writeText(text);

    button.innerHTML = successSvgIcon;
  } catch (err) {
    console.error("Unable to copy code: ", err);
  }

  setTimeout(() => {
    button.innerHTML = copySvgIcon;
    isCopyingAllowed = true;
    button.disabled = !isCopyingAllowed;
  }, 3000);
}
