const tagsElements = document.getElementById("tags");
const textarea = document.getElementById("textarea");

const createTags = (input) => {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsElements.innerHTML = "";
  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsElements.appendChild(tagElement);
  });
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => tag.classList.add("highlight");