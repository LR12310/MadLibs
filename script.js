function createStory() {
  const story = `When ${name.value} was sitting in the ${object.value.toLowerCase()} on ${week.value} ${date.value} ${month.value}, the ${animal.value.toLowerCase()} ${verb.value.toLowerCase()} and ${country.value} came crashing down.`;
  console.log(story);
  output.innerHTML = story;
  form.style.display = 'none';
  again.style.display = 'initial';

}
const again = document.getElementById('again');
again.style.display = 'none';

const form = document.getElementById('form');
const name = document.getElementById('name');

const output = document.getElementById('output');
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", createStory);
again.addEventListener("click", reloadPage);

function reloadPage() {
  location.reload();
}
