window.addEventListener("DOMContentLoaded", () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} | view | page loaded`);
});

document.addEventListener("click", (event) => {
  const timestamp = new Date().toISOString();
  const eventType = "click";
  const target = event.target;
  let objectType = target.tagName.toLowerCase();

  // Identify object type
  if (objectType === "img") {
    objectType = "image";
  } else if (objectType === "a") {
    objectType = "link";
  } else if (objectType === "button") {
    objectType = "button";
  } else if (objectType.match(/^h[1-6]$/)) {
    objectType = "heading";
  } else if (objectType === "p") {
    objectType = "paragraph";
  } else if (objectType === "li") {
    objectType = "list item";
  } else if (objectType === "hr") {
    objectType = "horizontal rule";
  }

  console.log(`${timestamp} | ${eventType} | ${objectType}`);
});
