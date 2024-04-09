const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
const defaultTheme = 0;

console.log("hw")

const themes=["night","greenWhite","orangeWhite","blackPink","blody"]
let selectedThemeId=0

const applyTheme = (x) => {
  document.documentElement.setAttribute("data-selected-theme", themes[x]);
};

const handleThemeSelection = (theme) => {   
    selectedThemeId=theme
    applyTheme(theme);
    localStorage.setItem('selected-theme', theme);
}

const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('selected-theme');
  console.log(savedTheme)
  if(savedTheme!=null){
    handleThemeSelection(savedTheme)
  }else{
    handleThemeSelection(0)
  }
  
};

const imClick = () => {
    selectedThemeId+=1
    if(selectedThemeId>=themes.length){
        selectedThemeId=0
    }
    handleThemeSelection(selectedThemeId)
    console.log(selectedThemeId)
};

setInitialTheme();
