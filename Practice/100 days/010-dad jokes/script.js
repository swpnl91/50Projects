const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };
  

  // Fetching with .then()
  //   fetch("https://icanhazdadjoke.com/", config)
  //     .then((res) => res.json())
  //     .then((data) => (jokeEl.innerHTML = data.joke));
};