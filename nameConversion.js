/** @format */
const fetchInput = document.querySelector("#text");
const convert = document.querySelector("#convert-btn");

//All events
const camelCaseEvent = document.querySelector("#camel-case");
const pascalCaseEvent = document.querySelector("#pascal-case");
const snakeCaseEvent = document.querySelector("#snake-case");
const screamingSnakeCaseEvent = document.querySelector("#screaming-snake-case");
const kebabCaseEvent = document.querySelector("#kebab-case");
const screamingKebabCaseEvent = document.querySelector("#screaming-kebab-case");

convert.addEventListener("click", () => {
  const textContent = fetchInput.value;
  //toCamelCase
  const camelCase = turnIntoCamelCase(textContent);
  camelCaseEvent.innerText = camelCase;
  //toPascalCase
  const PascalCase = TurnIntoPascalCase(textContent);
  pascalCaseEvent.innerText = PascalCase;
  //ToSnakeCase
  const SnakeCase = turn_into_snake_case(textContent);
  snakeCaseEvent.innerText = SnakeCase;
  //toScreamingSnakeCase
  const screamingSnakeCase = TURN_INTO_SNAKE_CASE(textContent);
  screamingSnakeCaseEvent.innerText = screamingSnakeCase;
  //function for Kebab Case
  const kababcase = turnIntoKababCase(textContent);
  kebabCaseEvent.innerText = kababcase;
  // function for screming Kebab Case
  const scremingkababcase = turnIntoScremingkababCase(textContent);
  screamingKebabCaseEvent.innerText = scremingkababcase;
});

// camel case function
const turnIntoCamelCase = (content) => {
  const inputValue = content.split(" ");
  console.log(inputValue);
  const modifiedArray = inputValue.map((item, index) => {
    if (index === 0) {
      return item.toLowerCase();
    } else {
      const fLetter = item.slice(0, 1).toUpperCase();
      //console.log(fLetter);
      const RLetter = item.slice(1).toLowerCase();
      //console.log(RLetter);
      return fLetter + RLetter;
    }
  });
  return modifiedArray.join("");
};

// pascal case function
const TurnIntoPascalCase = (content)=>{
  const inputValue = content.split(" ");
  const modifiedArray = inputValue.map((item)=>{
    return item.replace(item.charAt(0),item.charAt(0).toUpperCase());
  })
  return modifiedArray.join("")
}

// snake case function
const turn_into_snake_case = (content)=>{
  const inputValue = content.split(" ");
  const modifiedArray = inputValue.map((item)=>{
    return item.toLowerCase();
  })
  return modifiedArray.join("_")
}

// screaming snake case function
const TURN_INTO_SNAKE_CASE = (content)=>{
  const inputValue = content.split(" ");
  const modifiedArray = inputValue.map((item)=>{
    return item.toUpperCase();
  })
  return modifiedArray.join("_")
}


 // kebab case function
const turnIntoKababCase = (content)=>{
  const inputValue = content.split(" ");
  const modifiedArray = inputValue.map((item)=>{
    return item.toLowerCase();
  })
  return modifiedArray.join("-")
}

// screaming kebab case function
const turnIntoScremingkababCase = (content)=>{
  const inputValue = content.split(" ");
  const modifiedArray = inputValue.map((item)=>{
    return item.toUpperCase();
  })
  return modifiedArray.join("-")
}

