fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    let factHTML = "";
    for (let fact of data) {
      factHTML += `
          <article>
            <h2>this fact is about ${fact.type}s</h2>
            <h2>${fact.text}</h2>
            <br>
          </article>

          `;

      console.log(fact);
    }

    console.log(data[0]);
    document.getElementById("text").innerHTML = factHTML;
  })
  .catch();

fetch("https://meowfacts.herokuapp.com")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    let randomfactHTML = `here is a random fact that is different with every visit: ${data.data[0]}`;
    console.log(data);
    console.log(data.data);
    console.log(randomfactHTML);
    document.getElementById("rdmFact").innerHTML = randomfactHTML;
  })
  .catch();
