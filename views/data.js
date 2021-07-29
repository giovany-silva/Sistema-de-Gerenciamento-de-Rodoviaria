const languagesList = {
  ruby: "Ruby",
  javascript: "JavaScript",
  python: "Python",
  golang: "GoLang"
};
const passagemData = document.getElementById("passagemData");
for(language in languagesList) {
  option = new Option(languagesList[language], language);
  passagemData.options[passagemData.options.length] = option;
}
