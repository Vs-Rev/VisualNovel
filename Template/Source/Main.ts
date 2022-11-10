namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");
  export let dataForSave = {
    nameProtagonist: ""
  }

    //Menu shortcuts
    let inGameMenuButtons = {
      save: "Spiel Speichern",
      load: "Laden",
      close: "Schließen"
      
    }

let gameMenu: ƒS.Menu;
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
      
  }
  
}


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

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