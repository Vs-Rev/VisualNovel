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
  export let items = {
    pageVampire: {
      name: "Vampire Novel Notes",
      description: "Notes about the Vampire Novel to answer the officers questions",
      image: "Images/Items/VampirePage.png",
      static: true,
      exist: true
    },
    Kleidung: {
      name: "Klamotten",
      description: "Normale Klamotten. Nichts besonderes. Wirklich nicht",
      image: "./Images/Inventory/Clothes.png",
      static: true,
      exist: true,
    },
    Ticket: {
      name: "Ticket",
      description: "Die Eintrittskarte für die Theatershow der Schule mit dem Sitzplatz: 05C 01D",
      image: "Images/Items/Ticketpng",
      static: true,
      exist: true,
    }
  }

  //SaveGame preparation
  export let dataForSave = {
    //Hier Speicherbare Elemente eintragen
    protagonist: {
      name: "",
    },
    evil: 0,
    good: 0,
    entschuldigung: 0,
    Halisgefährteangenommen: true,
    Entscheidungsfrage1: 0,
    Entscheidungsfrage2: 0,
    Entscheidugnsfrage3: 0,
    Entscheidungsfrage4: 0,
  };

  export async function horizontalShake(): Promise<void> {
    let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];

    for (let i: number = 0; i < 15; i++) {
      if (i % 2 == 0) {
        scene.style.transform = `translateX(20px)`;
      }
      else {
        scene.style.transform = `translateX(-20px)`;
      }
      await new Promise(resolve => setTimeout(resolve, 40));
    }
    scene.style.transform = `translateX(0px)`;
  }


  // vertical Shaker
  export async function verticalShake(): Promise<void> {
    let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];

    for (let i: number = 0; i < 15; i++) {
      if (i % 2 == 0) {
        scene.style.transform = `translateY(20px)`;
      }
      else {
        scene.style.transform = `translateY(-20px)`;
      }
      await new Promise(resolve => setTimeout(resolve, 40));
    }
    scene.style.transform = `translateY(0px)`;
  }


  //Sounds
  export let sound = {
    //music 
    examplemusic: "",
    titletheme: "./Audio/TitleTheme.wav",
    introductiontheme: "./Audio/Ambience/Introduction.wav",
    MysteryManTheme: "./Audio/MysteryMan_Theme.wav",
    Bedroom: "./Audio/Themes/Bedroom.wav",
    Meadow: "./Audio/Themes/Meadow.wav",
    Halistheme: "./Audio/Themes/HalisTheme.wav",
    MainTheme: "./Audio/Themes/MainTheme.wav",
    //sounds
    examplesound: "",
    inventoryadd: "./Audio/Soundeffects/Inventoryaddsound.wav",
    blackscreen: "./Audio/Soundeffects/Retroeffect1.wav",
    chaptertransition: "./Audio/Soundeffects/Retroeffect2.wav",
    phonecallend: "./Audio/Soundeffects/Phonecall_End.wav",
    phonering: "./Audio/Soundeffects/Phonering.wav",
    dooropen: "./Audio/Soundeffects/Dooropen.wav",
    glitch: "./Audio/Soundeffects/Glitch.wav",
    backgroundBuero: "./Audio/backgroundBuero.wav",
    makelight: "./Audio/Soundeffects/Makelight.wav",
    buttonpress: "./Audio/Soundeffects/Buttonpress.wav",
    buttonhover: "./Audio/Soundeffects/Buttonhover.wav",
    clockticking: "./Audio/Soundeffects/clock_ticking.wav",
    alarmclock: "./Audio/Soundeffects/alarmclock.wav",
    impact: "./Audio/Soundeffects/Impact.wav",
    mouseclick: "./Audio/Soundeffects/Mouseclick.wav",
    train: "./Audio/Soundeffects/Train.wav",
    walking: "./Audio/Soundeffects/Walking.wav",
    bus: "./Audio/Soundeffects/Bus.wav",
    bicycle: "./Audio/Soundeffects/Bicycle.wav",
    snoring: "./Audio/Soundeffects/Snoring.wav",
    pianoharp: "./Audio/Soundeffects/PianoHarp.wav",
    slap: "./Audio/Soundeffects/Slap.wav",
    cough: "./Audio/Soundeffects/cough.wav",
    curtains: "./Audio/Soundeffects/curtains.wav",
    laughterold: "./Audio/Soundeffects/laughterold.wav",
    oldmagic: "./Audio/Soundeffects/oldmagic.wav",
    teleport: "./Audio/Soundeffects/teleport.wav",
    //ambience
    nightambience: "./Audio/Ambience/Nightambience.wav",
    darkwind: "./Audio/Ambience/darkwind.wav",
    forestnight: "./Audio/Ambience/Forestnight.wav",
    peopletalking: "./Audio/Ambience/People_talking.wav",
    deepdark: "./Audio/Ambience/Deepdark.wav",
    audience: "./Audio/Ambience/Audience.wav",
    thunder: "./Audio/Ambience/Thunder.wav",
    //Character Voices
    MainNarrator: "./Audio/Soundeffects/Speech.wav",
    Elo: "./Audio/Soundeffects/Voice_Elo.wav",
    Karten: "./Audio/Soundeffects/Voice_Karten.wav",
    School: "./Audio/Soundeffects/Voice_School.wav",
    Ticketkontrolleur: "./Audio/Soundeffects/Speech.wav",
    Halistrator: "./Audio/Soundeffects/Voice_Halistrator.wav",
    Leserin: "./Audio/Soundeffects/Voice_Lady.wav",
  };

  //Typewritersound

  //Backgrounds
  export let locations = {
    waldweg: {
      name: "waldweg",
      background: "./Images/Backgrounds/Moonsky.png",
    },
    meadow: {
      name: "meadow",
      background: "./Images/Backgrounds/Meadow/Meadow_Final.png",
    },
    examplelocation: {
      name: "examplelocation",
      background: "",
    },
    theaterfront: {
      name: "theaterfront",
      background: "./Images/Backgrounds/Theater/Theater_Front.png",
    },
    background1: {
      name: "background1",
      background: "./Images/Backgrounds/Background1.jpg",
    },
    startscreenbackground: {
      name: "startscreen",
      background: "./Images/Backgrounds/Darkcave.png",
    },
    blackbackground: {
      name: "black",
      background: "./Images/Backgrounds/Black.png",
    },
    homeroom: {
      name: "homeroom",
      background: "./Images/Backgrounds/Bedroom.png",
    },
    housefloor: {
      name: "housefloor",
      background: "./Images/Backgrounds/Housefloor.png",
    },
    walking01: {
      name: "walking01",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking01.png",
    },
    walking02: {
      name: "walking02",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking02.png",
    },
    walking03: {
      name: "walking03",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking03.png",
    },
    walking04: {
      name: "walking04",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking04.png",
    },
    walking05: {
      name: "walking05",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking05.png",
    },
    walking06: {
      name: "walking06",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking06.png",
    },
    walking07: {
      name: "walking07",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking07.png",
    },
    walking08: {
      name: "walking08",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking08.png",
    },
    walking09: {
      name: "walking09",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking09.png",
    },
    walking10: {
      name: "walking10",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking10.png",
    },
    walking11: {
      name: "walking11",
      background: "./Images/Backgrounds/Animationbackgrounds/Walking11.png",
    },
    white: {
      name: "white",
      background: "./Images/Backgrounds/White.png",
    },
    theaterindoor1: {
      name: "theaterin1",
      background: "./Images/Backgrounds/Theater_Indoor/Theater1.png",
    },
    theaterindoor2: {
      name: "theaterin2",
      background: "./Images/Backgrounds/Theater_Indoor/Theater2.png",
    },
    theaterindoor3: {
      name: "theaterin3",
      background: "./Images/Backgrounds/Theater_Indoor/Theater3.png",
    },
    theaterindoor4: {
      name: "theaterin4",
      background: "./Images/Backgrounds/Theater_Indoor/Theater4.png",
    },
    theaterindoor5: {
      name: "theaterin5",
      background: "./Images/Backgrounds/Theater_Indoor/Theater5.png",
    },
    theaterindoor6: {
      name: "theaterin6",
      background: "./Images/Backgrounds/Theater_Indoor/Theater6.png",
    },
    theaterindoor7: {
      name: "theaterin7",
      background: "./Images/Backgrounds/Theater_Indoor/Theater7.png",
    },
    theaterindoor8: {
      name: "theaterin8",
      background: "./Images/Backgrounds/Theater_Indoor/Theater8.png",
    },
    theaterindoor9: {
      name: "theaterin9",
      background: "./Images/Backgrounds/Theater_Indoor/Theater9.png",
    },
    prolog: {
      name: "prolog",
      background: "./Images/Chapters/Prolog.png",
    },
    chapter1: {
      name: "chapter1",
      background: "./Images/Chapters/Chapter1.png",
    },
    tipp1: {
      name: "tipp1",
      background: "./Images/Tipps/Tipp1.png",
    },
    tipp2: {
      name: "tipp2",
      background: "./Images/Tipps/Tipp2.png",
    },
    tipp3: {
      name: "tipp3",
      background: "./Images/Tipps/Tipp3.png",
    },
    tipp4: {
      name: "tipp4",
      background: "./Images/Tipps/Tipp5.png",
    }
  };

  export async function animationwalking() {
    await ƒS.Location.show(locations.walking01);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking02);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking03);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking04);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking05);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking06);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking07);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking08);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking09);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking10);
    await ƒS.update(1);
    await ƒS.Location.show(locations.walking11);
    await ƒS.update(1);
    await ƒS.Location.show(locations.blackbackground);
    await ƒS.update(5);
  }


  //Charakter benennen
  /*export let data = {
    protagonist: {
      name: "",
    },
    entschuldigung: 0,
    score: 0,
    state: {
      a: 1,
    },
  };*/

  //Charakters
  export let characters = {
    narrator: {
      name: "narrator",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        standard: "./Images/Characters/Mysteryman/Mysteryman.png",
        eyesonly: "./Images/Characters/Mysteryman/Mysteryman_Eyesonly.png"
      }
    },
    Leserin: {
      name: ""
    },
    Publikum: {
      name: "Publikum",
    },
    Elo: {
      name: "Elo",
    },
    Ticketkontrolleur: {
      name: "Ticketkontrolleur",
    },
    Halistrator: {
      name: "Halistrator",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        standard: "./Images/Characters/Halistrator/Halistrator.png",
        sauer: "./Images/Characters/Halistrator/halistrator_sauer.png",
        surprised: "./Images/Characters/Halistrator/halistrator_verblüfft.png",
        cute: "./Images/Characters/Halistrator/halistrator_süß.png",
      }
    },
    /*camille: {
      name: data.protagonist.name,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        happy: "", /*Beispielbild für die Pose
      },
    },*/
    whiteknight: {
      name: dataForSave.protagonist.name,
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        standard: "./Images/Characters/whiteknight/whiteknight_standard.png",
      }
    },
    MainNarrator: {
      name: "",
    },
    Speechbox: {
      name: "speechbox",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        standard: "./Images/Speechbox.png",
        newversion: "./Images/Speechbox_v2.png",
        grayedout: "./Images/Speechbox_grayed.png",
      }
    }
  };
  //Speechbox design
  //Animations
  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(15, 100) },
      end: { translation: ƒS.positions.bottomright },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromLeftToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(75, 100) },
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
  export function fromCenterToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(40, 80) },
      end: { translation: ƒS.positionPercent(10, 80) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromLeftToCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(10, 80) },
      end: { translation: ƒS.positionPercent(40, 80) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromCenterToRight_Halistrator(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 48) },
      end: { translation: ƒS.positionPercent(80, 48) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromRightToCenter_Halistrator(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 48) },
      end: { translation: ƒS.positionPercent(50, 48) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  /*export function fromRightToCenter_Halistrator(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 48) },
      end: { translation: ƒS.positionPercent(20, 48)  },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }*/


  //Kampfsystem

  //Menü
  let inGameMenu = {
    save: "Speichern",
    load: "Laden",
    credits: "Credits",
    volumeup: "+",
    volumedown: "-",
    inventar: "Inventar",
    steuerung: "Steuerung",
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
      "The Tale of a Knight - by Vasilii Gurev" +
      "<br/>" +
      "-------------" + "<br/>" +
      "Die Transitions wurden sowohl aus dem FreeTransitions Ordner verwendet als auch selbst erstellt." +
      "<br/>" +
      "-------------" + "<br/>" +
      "Jegliche visuelle Inhalte wie Gegenstände, Charaktere und Hintergründe wurden selbst erstellt." +
      "<br/>" +
      "-------------" + "<br/>" +
      "Der Großteil der Geräuschkulisse wurde selbst erstellt und zum Teil von Freesound.org mit einer Royalty Free Lizenz verwendet." +
      "<br/>"
    );
  }

  export function showSteuerung(): void {
    ƒS.Text.addClass("steuerung");
    ƒS.Text.print(
      "<h2>Steuerungsübersicht</h2>" +
      "<br/>" +
      "-------------" + "<br/>" +
      "<h1>[Entscheidungen]</h1>" +
      "<br/>" +
      "In diesem Spiel triffst du die Entscheidungen. Jede Entscheidung die du triffst beeinflusst deinen Spielverlauf. Wähle weise." +
      "<br/>" +
      "-------------" + "<br/>" +
      "<h1>[Überspringen]</h1>" +
      "<br/>" +
      "Mit dem Klicken auf den Bildschirm kannst du den Text überspringen. Mit dem ersten Klicken lässt du dir den gesamten Text anzeigen. Beim zweiten Mal springst du direkt zum nächsten Textfeld" +
      "<br/>"+
      "-------------" + "<br/>" +
      "<h1>[Kämpfen]</h1>"+ "<br/>"+
      "In dieser Visual Novel wird es viele Herausforderungen geben, die jedoch nicht mit Kämpfen gelöst werden. In der Welt von Verdantia steht jeder auf Musik. Gewinne im GrooveWettbewerb indem deine Groove Leiste gefüllt wird. Eine Niederlage erfolgt, sobald du 3 Mal bei einer Leeren Anzeige einen Minusgroove erhältst.",
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
      case inGameMenu.inventar:
        await ƒS.Inventory.open();
        await ƒS.update();
        /*const selectedItems:string[] = await ƒS.Inventory.open();
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
        break;*/
        break;
      //Credits
      case inGameMenu.credits:
        showCredits();
        break;
      case inGameMenu.steuerung:
        showSteuerung();
        break;
    }
  }
  //Allgemeiner Timer Funktion
  export async function timer(skipable: number, länge: number) {
    let t: number;
    for (t = 0; t < länge; t++) {
      if (skipable == 1) {
        document.addEventListener("mousedown", hndMousePress);
        async function hndMousePress(_event: MouseEvent): Promise<void> {
          console.log(MouseEvent);
          t = länge;
          document.removeEventListener("mousedown", hndMousePress);
        }
      }
      else {
        console.log(t);
        await signaldelay();
      }
    }
  }
  export let signaldelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
  //Buttonfunktion
  export async function buttonpress(buttonart: string, lautstärke: number) {
    ƒS.Sound.play(buttonart, lautstärke, false);
    await timer(0, 2);
  }
  //Satzbaufunktion
  export async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number, voicetype: string, skiplänge: number) {
    let speechlength = text.length / 4;
    ƒS.Speech.setTickerDelays(textgeschwindigkeit);
    console.log(speechlength);
    let doonce: boolean = true;
    let istdurch: number = 0;
    let geskipped: number = 0;
    console.log(istdurch.valueOf())
    //SpeechAudiofunktion
    let t: number = 0;
    //-- Check input key. Wenn pressed wird audioausgabe nicht berücksichtigt bzw abgebrochen
    for (t = 0; t < speechlength; t++) { //Text wird in der Schleife nur einmal ausgegeben
      if (doonce == true) {
        ƒS.Speech.tell(Sprecher, text, waitfornext);
        doonce = false;
      }
      document.addEventListener("mousedown", hndMousePress);
      async function hndMousePress(_event: MouseEvent): Promise<void> {
        ƒS.Sound.play(sound.mouseclick, .2, false);
        console.log(MouseEvent);
        t = text.length;
        geskipped = 1;
        document.removeEventListener("mousedown", hndMousePress);
      }
      document.addEventListener("keydown", hndKeyPress);
      async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
          case ƒ.KEYBOARD_CODE.SPACE:
            console.log(KeyboardEvent);
            t = text.length;
            geskipped = 1;
            break;
        }
        document.removeEventListener("keydown", hndKeyPress);
      }
      if (geskipped == 1) {
        console.log("Text geskipped");
      }
      else {
        ƒS.Sound.play(voicetype, .01, false); //Der Sound der in Main.ts definiert wurde
        await ƒS.update(.2);
      }
    }

    for (t = 0; t < pausenlänge; t++) {
      document.addEventListener("mousedown", hndMousePress);
      async function hndMousePress(_event: MouseEvent): Promise<void> {
        ƒS.Sound.play(sound.mouseclick, .2, false);
        console.log(MouseEvent);
        t = pausenlänge;
        document.removeEventListener("mousedown", hndMousePress);
      }
      document.addEventListener("keydown", hndKeyPress);
      async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
          case ƒ.KEYBOARD_CODE.SPACE:
            console.log(KeyboardEvent);
            t = text.length;
            geskipped = 1;
            break;
        }
        document.removeEventListener("keydown", hndKeyPress);
      }
      console.log(t);
      await signaldelay();
    }
  }

  //Menü standardmäßig an = true. Standardmäßig aus = false
  let menu: boolean = false;

  //Keine Ahnung
  export let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

  //Shortcuts fürs Menu
  document.addEventListener("keydown", hndKeyPress);
  export async function hndKeyPress(_event: KeyboardEvent): Promise<any> {
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
      case ƒ.KEYBOARD_CODE.SPACE:
        console.log("Space gedrückt");
        let b: number = 5;
        return b;
    }
  }
  //Items
  // export let items = {
  //   key: {
  //     name: "Schlüssel",
  //     description: "Ein alter Schlüssel.",
  //     image: "./Images/Background1.png",
  //   },
  // };





  console.log(1);
  window.addEventListener("load", start);
  function start(_event: Event): void {
    console.log(2);

    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    //Szenen aufrufen bezogen auf die .TS Datei
    let scenes: ƒS.Scenes = [
      { id: "Szene0_1", scene: Szene0_1, name: "Szene0_1" },
      { id: "Szene1_1", scene: Szene1_1, name: "Szene1_1" },
      { id: "Szene1_2", scene: Szene1_2, name: "Szene1_2" },
      { id: "Szene1_3", scene: Szene1_3, name: "Szene1_3" },
      { id: "Szene1_4", scene: Szene1_4, name: "Szene1_4" },
      { id: "Szene1_5", scene: Szene1_5, name: "Szene1_5" },
      { id: "Szene1_6", scene: Szene1_6, name: "Szene1_6" },
      { id: "Szene4_1", scene: Szene4_1, name: "Szene4_1" },
      //{ id:"Szene5_Entscheidung",scene: Szene5_Entscheidung, name: "Szene5_Entscheidung" },
      //{ scene: Szene2, name: "Szene2" },
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
