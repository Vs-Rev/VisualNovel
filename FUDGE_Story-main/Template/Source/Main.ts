namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //Transitions
  export let transition = {
    clock: {
      duration: 1,
      alpha: "./Images/Transitions/circle.jpg",
      edge: 1,
    },
    transition2: {
      duration: 1,
      alpha: "",
      edge: 1,

    }
  };
  //Sounds
  export let sound = {
    //music 
    examplemusic: "",
    titletheme: "./Audio/TitleTheme.wav",
    //sounds
    examplesound: "",
    backgroundBuero: "./Audio/backgroundBuero.wav",
    //ambience
    darkwind: "./Audio/Ambience/darkwind.wav",
  };

  //Typewritersound
  function Typewritersound(){
  }
  //Backgrounds
  export let locations = {
    examplelocation: {
      name: "examplelocation",
      background: "", 
    },
    background1: {
      name: "background1",
      background: "./Images/Backgrounds/Background1.jpg"
    }
  };

  //Charakter benennen
  export let data = {
    protagonist: {
      name: "",
    },
    score: 0,
    state: {
      a: 1,
    },
  };

  //Charakters
  export let characters = {
    narrator: {
      name: "",
    },
    /*camille: {
      name: data.protagonist.name,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        happy: "", /*Beispielbild für die Pose
      },
    },*/
    whiteknight: {
      name: data.protagonist.name,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        standard: "./Images/Characters/whiteknight/whiteknight_standard.png",
      }
    },
    MainNarrator: {
      name: "",
    },
    Speechbox: {
      name:"",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "./Images/Speechbox.png",
      }
    }
  };
//Speechbox design
  
  //Animations
  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(15,100) },
      end: { translation: ƒS.positions.bottomright },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromlefterToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(75,100) },
      end: { translation: ƒS.positionPercent(100, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromCenterToCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
      end: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  //SaveGame preparation
  export let dataForSave = {
    //Hier Speicherbare Elemente eintragen
    points:0,
    gesprochen:{
      marie:false,
      james:false,
      violet:false,
      luna:false
    }
  };

  //Menü
  let inGameMenu = {
    save: "Save",
    load: "Load",
    credits: "Credits",
    volumeup: "+",
    volumedown: "-",
    inventar: "Inventar",
  };

  //Menüfunktionen
  export let gameMenu: ƒS.Menu;

  let volume: number = 5.0;

  //Sound lauter machen
  export function incrementSound(): void {
    if (volume >= 10) return;
    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  //Sound leiser machen
  export function decrementSound(): void {
    if (volume <= 0) return;
    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  //Credits anzeigen
  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print(
      "Die Visual Novel wurde mit FudgeStory erstellt." +
        "<br/>" +
        "Von Leonie Schwall" +
        "<br/>" +
        "Die Hintergründe, Charaktere und Items wurden selbst gezeichnet." +
        "<br/>" +
        "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurrde." +
        "<br/>" +
        "Die Soundelemente wurden mit einer Envato Elements Lizenz lizensiert heruntergeladen" +
        "<br/>" 
    );
  }

  //Buttonfunktionen
  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      //Speichern
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      //Laden
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      //Sound lauter
      case inGameMenu.volumeup:
        incrementSound();
        break;
      //Sound leiser
      case inGameMenu.volumedown:
        decrementSound();
        break;


      //Inventar für Items
      /*
      case inGameMenu.inventar:
        const selectedItems:string[] = await ƒS.Inventory.open();
        if(selectedItems && selectedItems.length > 0){
          selectedItems.forEach((s)=>{
            Object.keys(items).forEach((i)=>{
              const item = items[i];
              if(item.name === s){
                ƒS.Inventory.add(item);
              }
            })
          })
        }
        break;
        */


      //Credits
      case inGameMenu.credits:
        showCredits();
        break;
    }
  }

  //Menü standardmäßig an = true. Standardmäßig aus = false
  let menu: boolean = true;

  //Keine Ahnung
  export let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

  //Shortcuts fürs Menu
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
        if (menu) {
          console.log("Close");
          gameMenu.close();
          menu = false;
        } else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }

  console.log(1);
  window.addEventListener("load", start);
  function start(_event: Event): void {
    console.log(2);

    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    //Szenen aufrufen bezogen auf die .TS Datei
    let scenes: ƒS.Scenes = [
      { scene: Szene1, name: "Szene1" }
    ];
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    // ƒS.Progress.setData(data);
    ƒS.Progress.go(scenes);
  }
}


/*
  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
/*
namespace MurderMystery {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Template");

  //Items
  export let items = {
    key: {
      name: "Schlüssel",
      description: "Ein alter Schlüssel.",
      image: "./Images/Items/Schluessel.png",
    },
    labor: {
      name: "Laborbericht",
      description: "Todesursache Herzstillstand.",
      image: "./Images/Items/Laborbericht.png",
    },
    safe: {
      name: "Safe",
      description: "Safeinhalt ist unklar.",
      image: "./Images/Items/Safe.png",
    },
    book: {
      name: "Tagebuch",
      description: "James Taylor ist Grishams Sohn.",
      image: "./Images/Items/Tagebuch.png",
    },
    knife: {
      name: "Küchenmesser",
      description: "Keine Mordwaffe, denn das war Schweineblut.",
      image: "./Images/Items/Messer.png",
    },
    paper: {
      name: "Notizzettel",
      description: "James ist mein S",
      image: "./Images/Items/Notiz.png",
    },
    poison: {
      name: "Gift",
      description: "Mordwaffe",
      image: "./Images/Items/Gift.png",
    },
    money: {
      name: "Geldstapel",
      description: "Wer hat das Geld geschickt?",
      image: "./Images/Items/Geld.png",
    },
  };

    //Szenen aufrufen
    let scenes: ƒS.Scenes = [
      { id:"introduction",scene: Introduction, name: "Introduction", },
      { id:"scene1",scene: Scene1, name: "Scene1" },
      { id:"scene2",scene: Scene2, name: "Scene2" },
      { id:"scene3",scene: Scene3, name: "Scene3" },
      { id:"scene4",scene: Scene4, name: "Scene4" },
      { id:"scene5",scene: Scene5, name: "Scene5" },
      { id:"violet",scene: violet, name: "violet", next: "scene5" },
      { id:"james",scene: james, name: "james", next: "scene5" },
      { id:"luna",scene: luna, name: "luna", next: "scene5" },
      { id:"marie",scene: marie, name: "marie", next: "scene5" },
      { id:"scene6",scene: Scene6, name: "Scene6" },
      { id:"scene7",scene: Scene7, name: "Scene7" },
      { id:"GoodEnding",scene: GoodEnding, name: "GoodEnding", next:"End" },
      { id:"BadEnding",scene: BadEnding, name: "BadEnding", next:"End" },
      { id:"End",scene: End, name: "End" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    // ƒS.Progress.setData(data);
    ƒS.Progress.go(scenes);
  }
}
*/
