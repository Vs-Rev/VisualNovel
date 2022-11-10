namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");
  export let dataForSave = {
    nameProtagonist: ""
  }

    //Menu shortcuts
    let inGameMenuButtons = {
      save: "Save",
      load: "Load",
      close: "Close"
      
    }

let gameMenu: ƒS.Menu;

// open entspricht Menü ist offen und false ist zu
let menuIsOpen: boolean = true;
async function buttonFunctionalities(_option:string): Promise<void> {
  console.log(_option);
  switch(_option){
    case inGameMenuButtons.save:
      await ƒS.Progress.save();
      break;
    case inGameMenuButtons.load:  
      await ƒS.Progress.load();
    case inGameMenuButtons.close:
      gameMenu.close();
      menuIsOpen = false;
      break;
  }
}

// Menu shortcuts
document.addEventListener("keydown", hndKeyPress);
async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
  switch (_event.code) {
    case ƒ.KEYBOARD_CODE.F8:
    console.log("Save");
    await ƒS.Progress.save();
    break;
    case ƒ.KEYBOARD_CODE.F9:
      console.log("Load");
      await ƒS.Progress.load();
      break;
    case ƒ.KEYBOARD_CODE.M:
      if (menuIsOpen){
        console.log("Close")
        gameMenu.close();
        menuIsOpen = false;
      }
      else {
        console.log("Open");
        gameMenu.open();
        menuIsOpen = true;

      }


  }
  
}


  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
    buttonFunctionalities("Close");

    //Scenes Hierarchy
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]")
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }


  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  }
  export let locations = {
    beachDay: {
      name: "Beach Day",
      background: "Tutorial_SS22/Images/Backgrounds/Bathroom_Foggy.png"
    }
  }

  export let sound = {
    drop: "Audio/drop.mp3"
  };

  export let characters = {
    narrator: {
      name: ""

    },
    protagonist: {
      name: ""
    },
    Lucor: {
      name: "Lucor",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {

      }
    }
  }
}