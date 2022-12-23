"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //Transitions
    Template.transition = {
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
    Template.sound = {
        //music 
        examplemusic: "",
        titletheme: "./Audio/TitleTheme.wav",
        introductiontheme: "./Audio/Ambience/Introduction.wav",
        MysteryManTheme: "./Audio/MysteryMan_Theme.wav",
        Bedroom: "./Audio/Themes/Bedroom.wav",
        //sounds
        examplesound: "",
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
        //ambience
        nightambience: "./Audio/Ambience/Nightambience.wav",
        darkwind: "./Audio/Ambience/darkwind.wav",
        forestnight: "./Audio/Ambience/Forestnight.wav",
        peopletalking: "./Audio/Ambience/People_talking.wav",
        //Character Voices
        MainNarrator: "./Audio/Soundeffects/Speech.wav",
        Elo: "./Audio/Soundeffects/Voice_Elo.wav",
        Karten: "./Audio/Soundeffects/Voice_Karten.wav",
        School: "./Audio/Soundeffects/Voice_School.wav",
        Ticketkontrolleur: "./Audio/Soundeffects/Speech.wav",
    };
    //Typewritersound
    //Backgrounds
    Template.locations = {
        waldweg: {
            name: "waldweg",
            background: "./Images/Backgrounds/Moonsky.png",
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
            background: "./Images/Backgrounds/Background1.jpg"
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
    };
    async function animationwalking() {
        await Template.ƒS.Location.show(Template.locations.walking01);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking02);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking03);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking04);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking05);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking06);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking07);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking08);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking09);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking10);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.walking11);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(5);
    }
    Template.animationwalking = animationwalking;
    //Charakter benennen
    Template.data = {
        protagonist: {
            name: "",
        },
        entschuldigung: 0,
        score: 0,
        state: {
            a: 1,
        },
    };
    //Charakters
    Template.characters = {
        narrator: {
            name: "narrator",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Images/Characters/Mysteryman/Mysteryman.png",
                eyesonly: "./Images/Characters/Mysteryman/Mysteryman_Eyesonly.png"
            }
        },
        Elo: {
            name: "Elo",
        },
        Ticketkontrolleur: {
            name: "Ticketkontrolleur",
        },
        /*camille: {
          name: data.protagonist.name,
          origin: ƒS.ORIGIN.BOTTOMLEFT,
          pose: {
            happy: "", /*Beispielbild für die Pose
          },
        },*/
        whiteknight: {
            name: Template.data.protagonist.name,
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                standard: "./Images/Characters/whiteknight/whiteknight_standard.png",
            }
        },
        MainNarrator: {
            name: "",
        },
        Speechbox: {
            name: "speechbox",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "./Images/Speechbox.png",
                newversion: "./Images/Speechbox_v2.png",
                grayedout: "./Images/Speechbox_grayed.png",
            }
        }
    };
    //Speechbox design
    //Animations
    function fromLeftToRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(15, 100) },
            end: { translation: Template.ƒS.positions.bottomright },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    function fromlefterToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(75, 100) },
            end: { translation: Template.ƒS.positionPercent(100, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromlefterToLeft = fromlefterToLeft;
    function fromCenterToCenter() {
        return {
            start: { translation: Template.ƒS.positions.center, scaling: new Template.ƒS.Position(0.5, 0.5) },
            end: { translation: Template.ƒS.positions.center, scaling: new Template.ƒS.Position(0.5, 0.5) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToCenter = fromCenterToCenter;
    function fromCenterToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(40, 80) },
            end: { translation: Template.ƒS.positionPercent(10, 80) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToLeft = fromCenterToLeft;
    function fromLeftToCenter() {
        return {
            start: { translation: Template.ƒS.positionPercent(10, 80) },
            end: { translation: Template.ƒS.positionPercent(40, 80) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromLeftToCenter = fromLeftToCenter;
    //SaveGame preparation
    Template.dataForSave = {
        //Hier Speicherbare Elemente eintragen
        points: 0,
        gesprochen: {
            marie: false,
            james: false,
            violet: false,
            luna: false
        },
        beispielwert: 0,
        beispielbool: false,
        evil: 0,
        good: 0,
        crazy: 0,
        calm: 0,
    };
    //Kampfsystem
    //Menü
    let inGameMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-",
        inventar: "Inventar",
    };
    let volume = 5.0;
    //Sound lauter machen
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    //Sound leiser machen
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    //Credits anzeigen
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("Die Visual Novel wurde mit FudgeStory erstellt." +
            "<br/>" +
            "Von Leonie Schwall" +
            "<br/>" +
            "Die Hintergründe, Charaktere und Items wurden selbst gezeichnet." +
            "<br/>" +
            "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurrde." +
            "<br/>" +
            "Die Soundelemente wurden mit einer Envato Elements Lizenz lizensiert heruntergeladen" +
            "<br/>");
    }
    Template.showCredits = showCredits;
    //Buttonfunktionen
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            //Speichern
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            //Laden
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            //Sound lauter
            case inGameMenu.volumeup:
                incrementSound();
                break;
            //Sound leiser
            case inGameMenu.volumedown:
                decrementSound();
                break;
            // case inGameMenu.inventar:
            //     const selectedItems:string[] = await ƒS.Inventory.open();
            //     if(selectedItems && selectedItems.length > 0){
            //       selectedItems.forEach((s)=>{
            //         Object.keys(items).forEach((i)=>{
            //           const item = items[i];
            //           if(item.name === s){
            //             ƒS.Inventory.add(item);
            //           }
            //         })
            //       })
            //     }
            //     break;
            //Credits
            case inGameMenu.credits:
                showCredits();
                break;
        }
    }
    //Allgemeiner Timer Funktion
    async function timer(skipable, länge) {
        let t;
        for (t = 0; t < länge; t++) {
            if (skipable == 1) {
                document.addEventListener("mousedown", hndMousePress);
                async function hndMousePress(_event) {
                    console.log(MouseEvent);
                    t = länge;
                    document.removeEventListener("mousedown", hndMousePress);
                }
            }
            else {
                console.log(t);
                await Template.signaldelay();
            }
        }
    }
    Template.timer = timer;
    Template.signaldelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(1)]);
    //Buttonfunktion
    async function buttonpress(buttonart, lautstärke) {
        Template.ƒS.Sound.play(buttonart, lautstärke, false);
        await timer(0, 2);
    }
    Template.buttonpress = buttonpress;
    //Satzbaufunktion
    async function satzbau(Sprecher, text, waitfornext, skipbar, pausenlänge, textgeschwindigkeit, voicetype, skiplänge) {
        let speechlength = text.length / 4;
        Template.ƒS.Speech.setTickerDelays(textgeschwindigkeit);
        console.log(speechlength);
        let doonce = true;
        let istdurch = 0;
        let geskipped = 0;
        console.log(istdurch.valueOf());
        //SpeechAudiofunktion
        let t = 0;
        //-- Check input key. Wenn pressed wird audioausgabe nicht berücksichtigt bzw abgebrochen
        for (t = 0; t < speechlength; t++) { //Text wird in der Schleife nur einmal ausgegeben
            if (doonce == true) {
                Template.ƒS.Speech.tell(Sprecher, text, waitfornext);
                doonce = false;
            }
            document.addEventListener("mousedown", hndMousePress);
            async function hndMousePress(_event) {
                Template.ƒS.Sound.play(Template.sound.mouseclick, .2, false);
                console.log(MouseEvent);
                t = text.length;
                geskipped = 1;
                document.removeEventListener("mousedown", hndMousePress);
            }
            document.addEventListener("keydown", hndKeyPress);
            async function hndKeyPress(_event) {
                switch (_event.code) {
                    case Template.ƒ.KEYBOARD_CODE.SPACE:
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
                Template.ƒS.Sound.play(voicetype, .01, false); //Der Sound der in Main.ts definiert wurde
                await Template.ƒS.update(.2);
            }
        }
        for (t = 0; t < pausenlänge; t++) {
            document.addEventListener("mousedown", hndMousePress);
            async function hndMousePress(_event) {
                Template.ƒS.Sound.play(Template.sound.mouseclick, .2, false);
                console.log(MouseEvent);
                t = pausenlänge;
                document.removeEventListener("mousedown", hndMousePress);
            }
            document.addEventListener("keydown", hndKeyPress);
            async function hndKeyPress(_event) {
                switch (_event.code) {
                    case Template.ƒ.KEYBOARD_CODE.SPACE:
                        console.log(KeyboardEvent);
                        t = text.length;
                        geskipped = 1;
                        break;
                }
                document.removeEventListener("keydown", hndKeyPress);
            }
            console.log(t);
            await Template.signaldelay();
        }
    }
    Template.satzbau = satzbau;
    //Menü standardmäßig an = true. Standardmäßig aus = false
    let menu = false;
    //Keine Ahnung
    Template.delay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
    //Shortcuts fürs Menu
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    Template.gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    menu = true;
                }
                break;
            case Template.ƒ.KEYBOARD_CODE.SPACE:
                console.log("Space gedrückt");
                let b = 5;
                return b;
        }
    }
    Template.hndKeyPress = hndKeyPress;
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
    function start(_event) {
        console.log(2);
        //Menu
        Template.gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen aufrufen bezogen auf die .TS Datei
        let scenes = [
            //{ id:"szene1",scene: Szene1, name: "Szene1" },
            { id: "szene2", scene: Template.Szene2, name: "Szene2" },
            //{ id:"zufuß",scene: zufuß, name: "zufuß" },
            // { id:"szene3",scene: Szene3, name: "Szene3" },
            //{ scene: Szene2, name: "Szene2" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        // ƒS.Progress.setData(data);
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
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
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        //Gesprochener Text
        let text = {
            Character1: {
                T0000: "Beispieltext1",
                T0001: "Beispieltext2",
            },
            Character2: {
                T0000: "Beispieltext1",
                T0001: "Beispieltext2",
            },
        };
        //Szenenablauf
        Template.ƒS.Sound.fade(Template.sound.examplemusic, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        await Template.ƒS.Location.show(Template.locations.examplelocation); //Location initialisieren die in Main.ts definiert wurden
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge); //Ein Beispiel-Übergang der in Main.ts definiert wurde
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(15, 100)); //Charaktere mit deren Posen anzeigen die in Main.ts definiert wurden
        await Template.ƒS.update(1); //Update funktion? Idk warum ehrlich gesagt
        await Template.ƒS.Speech.tell(Template.characters.camille, text.Character1.T0000); //Sprechtext wird eingeleitet
        await Template.ƒS.Speech.tell(Template.characters.camille, text.Character1.T0001); //Sprechtext 2 wird eingeleitet
        /*ƒS.Sound.play(sound.money, 0.3, false);*/ //Itemsound
        /*await ƒS.Character.animate(characters.geld, characters.geld.pose.normal, fromCenterToCenter()); */ //Animation des Charakters (in diesem Fall ein Item "Geld") wird gespielt
        await Template.ƒS.Speech.tell(Template.characters.camille, text.Character2.T0000); //Sprechertext wird eingeleitet
        await Template.ƒS.Speech.tell(Template.characters.camille, text.Character2.T0001); //Sprechertext 2 wird eingeleitet
        // Novel Page 
        // Keine Ahnung was Novel Page ist amk
        // Kann sein dass das die Novel Page also quasi die aktuelle Stelle in der Handlung definiert und es als Text ausgibt. Entweder als Anzeige auf dem Bildschirm oder nur fürs Programm relevant  
        Template.ƒS.Text.setClass("novel-page");
        Template.ƒS.Text.print("34 Worlington Street");
        //Inventory Funktion
        /*ƒS.Inventory.add(items.money);
        await ƒS.Character.hide(characters.geld);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.camille, text.camille.T0004);
        */
        /*ƒS.Sound.play(sound.handy, 0.5, false);*/ //Weiterer Sound
        //Zeitliche Delay Funktion wird erwartet (bis Delay zuende ist?)
        await Template.delay();
        //Entscheidungsoptionen
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren" //Passiert b
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
        switch (firstDialogueElement) { //Wenn Auswahl "Anruf annehmen"
            case firstDialogueElementOptions.iSayYes:
            /*
             await ƒS.Speech.tell(characters.camille, text.camille.T0005);
             await ƒS.Speech.tell(characters.smith, text.smith.T0000);
             await ƒS.Speech.tell(characters.camille, text.camille.T0006);
             await ƒS.Speech.tell(characters.smith, text.smith.T0001);
             await ƒS.Speech.tell(characters.camille, text.camille.T0007);
             await ƒS.Speech.tell(characters.smith, text.smith.T0002);
             await ƒS.Speech.tell(characters.camille, text.camille.T0008);
             await ƒS.Speech.tell(characters.smith, text.smith.T0003);
             await ƒS.Speech.tell(characters.camille, text.camille.T0009);
             await ƒS.Speech.tell(characters.smith, text.smith.T0004);
             await ƒS.Speech.tell(characters.camille, text.camille.T0010);
             await ƒS.Speech.tell(characters.smith, text.smith.T0005);
             await ƒS.Speech.tell(characters.camille, text.camille.T0011);
             await ƒS.Speech.tell(characters.smith, text.smith.T0006);
             await ƒS.Speech.tell(characters.camille, text.camille.T0012);
             
             break;*/
            case firstDialogueElementOptions.iSayNo: //Wenn Auswahl "Anruf ablehnen"
            /*
              await ƒS.Speech.tell(characters.camille, text.camille.T0013);
              await ƒS.Speech.tell(characters.camille, text.camille.T0014);
              await ƒS.Speech.tell(characters.camille, text.camille.T0015);
              break;
              */
        }
        //Weitere CharakterAnimation
        /*await ƒS.Character.animate(characters.camille, characters.camille.pose.happy, fromLeftToRight());
  
        await ƒS.Character.hide(characters.camille);*/
        //Sound wird gespielt
        /*
        ƒS.Sound.fade(sound.backgroundBuero, 0, 0.2, true);
        */
        //Erwartet update 1? Immernoch keine Ahnung was das ist. Möglicherweise der letzte Schritt bis in die nächste Szene? Oder ein Mausklick? KEINE AHNUNG MAAN
        await Template.ƒS.update(1);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1() {
        console.log("FudgeStory Template Scene1 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T0000: ". . .",
                T0001: ". . .",
                T0002: "Oh",
                T0003: "Verzeih mir doch bitte meine Unachtsamkeit. . .",
                T0004: "Ich bin wohl in meinen Gedanken versunken. . .",
                T0005: "Kannst du mich sehen? ",
                T1005: "Ich dich zumindest nicht. ",
                T1006: "Wärst du wohl so freundlich und könntest mich",
                T1007: ". . . erleuchten?",
                T0006: "Es ist besser ein Licht anzuzünden, als die gesamte Dunkelheit zu verfluchen, findest du nicht?",
                T0007: "Da wir uns gerade besser kennenlernen, möchtest du deinen Namen mit mir teilen?",
                T0008: "Das ist sehr lieb von dir!",
                T0009: ". . .",
                T0010: "Spann mich nicht so auf die Folter. Sag schon, wie ist dein Name?",
                T0011: ". . . gewöhnlicher Name",
                T0012: "Dein Name ist also",
                T0013: ". . .",
                T0014: "Ablehnen?",
                T0015: "Sorry. Der Name ist bereits vergeben",
                T0016: "An deiner Stelle hätte ich mir sowieso einen besseren Namen ausgedacht",
                T0017: "Also. Wie heißt du wirklich?",
                T0018: "Nun gut, dann übernehme ich die Entscheidung für dich. . .",
                T0019: "Also. . . dein Name ist: ",
                T0020: "Ahja bevor ich es vergesse. . .",
                T0021: "Dich erwartet nun eine heldenhafte Reise in ein längst vergessenes Königreich voller Herausforderungen, Tücken und Gefahren.",
                T0022: "Bevor ich dir diese Geschichte also zumute, muss ich wissen. . .",
                T0023: "Bist du der Herausforderung gewachsen?",
                T0024: "Wunderbar!!!",
                T0025: " war definitiv nicht bereit, doch ",
                T1026: " hatte leider keine andere Wahl",
                //Lichtan
                L0001: "Super!",
                L0002: "Es gibt übrigens keinen Lichtschalter. . .",
                L0003: "Aber der Wille zählt. Warte, lass mich das übernehmen",
                //Lichtaus
                L0004: "Willst du wirklich weiter so vor einem dunklen Bildschirm sitzen?",
                L0005: "Lass mich mal ran",
                //Tutorial
                TT001: ", heute ist dein Glückstag!",
                TT002: "Du steckst hier nun wohl auch fest. Aber dafür mit mir!",
                TT003: "Wir werden SO VIEL Spaß zusammen haben!",
                TT004: "Wie wärs mit einer kleinen Tour?",
                TT005: "Oder möchtest du etwas trinken?",
                TT006: "Ich habs! Wir könnten auch einfach Schweigen und nichts tun.",
                //Trinken
                TT007: "Gerne, was darf es sein?",
                TT008: "Oh, moment mal. . .",
                TT009: "Ich habe leider garnichts da.",
                //Tour
                TT010: "Wunderbar!",
                TT011: "Hm. . .",
                TT012: "Ich habe hier leider nicht viel zu zeigen. . .",
                TT013: "Doch! Dieses Leuchten da vorne. Es ist so. . .",
                TT014: ". . .Erleuchtend",
                //Beenden
                TT015: "Spiel wird beendet. . .",
                TT016: "Bitte warten. . .",
                TT017: "Speicherstände werden erstellt. . .",
                TT018: "Beenden fehlgeschlagen",
                TT019: "Tja gibt wohl keinen Ausweg heh",
                T0026: "Mir ist gerade etwas eingefallen!",
                T0027: "Weißt du, die Leute LIEBEN meine Geschichten",
                T0028: "Von denen habe ich definitiv genug auf Lager",
                T0029: "Möchtest du eine hören",
                //Geschichte erzählen
                G0014: "Das ist schön!",
                G0015: "Es hat schon lange keiner mehr meinen Geschichten zugehört",
                G0016: "Diese Geschichte hat es jedoch in sich.",
                G0017: "Du solltest dich mental darauf vorbereiten",
                G0018: "Möchtest du, dass ich dir dabei helfe?",
                //Nach dem Herrn fragen
                G0001: "Ich freue mich dass du dich für mich interessierst",
                G0002: "Leider. . .",
                G0003: "Kann ich mich nicht mehr an meinen Namen erinnern. . .",
                G0004: "Genau so wenig weiß ich, wie ich hier gelandet bin",
                G0005: "Ich weiß nur, dass ich hier schon eine Ewigkeit festsitze",
                G0006: "Wenn du rausgefunden hast, wie man von diesem Ort entkommen kann. . .",
                G0007: "Sei so gut und lass es mich bitte wissen, ja?",
                //Nach der Umgebung fragen
                G0008: "Wo wir sind?",
                G0009: "Ich bin mir nicht ganz sicher",
                G0010: "Alles scheint vertraut zu sein, verhält sich jedoch sehr seltsam",
                G0011: "Je länger du dich hier aufhältst, desto mehr Erinnerungen verschwinden aus deinem Gedächtnis",
                G0012: ". . .",
                G0013: "Was habe ich gerade gesagt?",
                //Tutorial Spielen
                T0030: "Alles klar. . .",
                T0031: "Moment. . .",
                T0032: "Mir fällt gerade auf, dass es noch gar kein Tutorial gibt. . .",
                T0033: "Ich bin mir sicher, du kommst auch so zurecht",
                //Tutorial nicht spielen
                T0034: "Ah. . . Du bist also eher die taffe Persönlichkeit?",
                T0035: "Aber sag nicht ich hätte dich nicht gewarnt",
                T0036: "Die Haftung meinerseits, für körperliche oder geistige Schäden wird hiermit ausgeschlossen. . . heh",
                T0037: "Jetzt lehn dich zurück und hör gut zu. . .",
            }
        };
        //Szenenablauf
        Template.ƒS.Sound.setMasterVolume(11);
        await Template.ƒS.Sound.fade(Template.sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        console.log("audio is being played");
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.newversion, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0001, /*waitfornext*/ false, /*skipbar*/ false, /*pausenlänge*/ 3, /*geschwindigkeit*/ 50, /*Stimme*/ Template.sound.MainNarrator, /*skiplänge*/ 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0001, /*waitfornext*/ true, /*skipbar*/ true, /*pausenlänge*/ 3, /*geschwindigkeit*/ 50, /*Stimme*/ Template.sound.MainNarrator, /*skiplänge*/ 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0002, /*waitfornext*/ true, /*skipbar*/ true, /*pausenlänge*/ 3, /*geschwindigkeit*/ 50, /*Stimme*/ Template.sound.MainNarrator, /*skiplänge*/ 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0003, /*waitfornext*/ true, /*skipbar*/ true, /*pausenlänge*/ 5, /*geschwindigkeit*/ 50, /*Stimme*/ Template.sound.MainNarrator, /*skiplänge*/ 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0004, /*waitfornext*/ true, /*skipbar*/ true, /*pausenlänge*/ 3, /*geschwindigkeit*/ 50, /*Stimme*/ Template.sound.MainNarrator, /*skiplänge*/ 2);
        await Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.eyesonly, Template.ƒS.positionPercent(40, 80));
        await Template.ƒS.update(3);
        //Licht anschalten Text
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0005 + text.MainNarrator.T1005 + text.MainNarrator.T1006, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T1007, false, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let lichtanschalten = {
            lichtan: "Licht anschalten",
            lichtaus: "Nichts tun"
        };
        let lichtanschaltenelement = await Template.ƒS.Menu.getInput(lichtanschalten, "auswahl");
        switch (lichtanschaltenelement) {
            case lichtanschalten.lichtan:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.L0001, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.L0002, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.L0003, false, false, 2, 50, Template.sound.MainNarrator, 2);
                await Template.ƒS.Character.animate(Template.characters.narrator, Template.characters.narrator.pose.eyesonly, Template.fromCenterToLeft());
                await Template.ƒS.Character.hide(Template.characters.narrator);
                await Template.ƒS.update(2);
                Template.ƒS.Sound.play(Template.sound.makelight, 0.3, false);
                await Template.signaldelay();
                Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.ƒS.positionPercent(10, 80));
                Template.ƒS.Location.show(Template.locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
                console.log("Background is being displayed");
                await Template.ƒS.update(1);
                break;
            case lichtanschalten.lichtaus:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.L0004, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.L0005, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.ƒS.Character.animate(Template.characters.narrator, Template.characters.narrator.pose.eyesonly, Template.fromCenterToLeft());
                await Template.ƒS.Character.hide(Template.characters.narrator);
                await Template.ƒS.update(2);
                Template.ƒS.Sound.play(Template.sound.makelight, 0.3, false);
                await Template.signaldelay();
                Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.ƒS.positionPercent(10, 80));
                Template.ƒS.Location.show(Template.locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
                console.log("Background is being displayed");
                await Template.ƒS.update(1);
                break;
        }
        await Template.ƒS.update(3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0006, true, true, 8, 50, Template.sound.MainNarrator, 4);
        //stimme(text.MainNarrator.T0007);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0007, true, true, 3, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        //Namen sagen
        let entscheidung1 = {
            iSayYes: "Namen sagen",
            iSayNo: "Ablehnen" //Passiert b
        };
        let erstesdialogelement = await Template.ƒS.Menu.getInput(entscheidung1, "auswahl");
        //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
        switch (erstesdialogelement) { //Wenn Auswahl "Namen eingben"
            case entscheidung1.iSayYes:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0008, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0009, true, true, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0010 + " ", false, false, 4, 50, Template.sound.MainNarrator, 2);
                //ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
                Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.data.protagonist.name;
                await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + " also?", true, true, 4, 50, Template.sound.MainNarrator, 2);
                //stimme("Ein sehr. . .");
                await Template.satzbau(Template.characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, Template.sound.MainNarrator, 2);
                console.log(Template.data.protagonist.name);
                break;
            case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0013, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0014, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0015, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0016, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0017, false, false, 3, 50, Template.sound.MainNarrator, 2);
                Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.data.protagonist.name;
                await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + " also?", true, true, 4, 50, Template.sound.MainNarrator, 2);
                //stimme("Ein sehr. . .");
                await Template.satzbau(Template.characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, Template.sound.MainNarrator, 2);
                console.log(Template.data.protagonist.name);
                break;
        }
        await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.TT001, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT002, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT003, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT004, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT005, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT006, false, false, 4, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        //FUNKTION FÜR SWITCH CASE MIT ALLEN MÖGLICHKEITEN
        let tutorial = ["Tour annehmen", "Trinken annehmen", "Konversation beenden"];
        let i = 0;
        while (i < 3) {
            let tutorialauswahl = await Template.ƒS.Menu.getInput(tutorial, "auswahl");
            console.log(tutorial.length);
            //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
            switch (tutorialauswahl) { //Wenn Auswahl "Namen eingben"
                case tutorial[0]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT010, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT011, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT012, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT013, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT014, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    tutorial.splice(0, 1, "");
                    break;
                case tutorial[1]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT007, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT008, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT009, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
                    tutorial.splice(1, 1, "");
                    break;
                case tutorial[2]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.Sound.fade(Template.sound.darkwind, 0, 0.2, true);
                    Template.ƒS.Character.hide(Template.characters.narrator);
                    await Template.ƒS.update(1);
                    Template.ƒS.Location.show(Template.locations.blackbackground);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT015, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT016, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT017, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.ƒS.Sound.play(Template.sound.glitch, 0.05);
                    await Template.ƒS.update(4);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT018, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT019, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.ƒS.Location.show(Template.locations.startscreenbackground);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.ƒS.positionPercent(10, 80));
                    Template.ƒS.Sound.fade(Template.sound.darkwind, 0.07, 0.1, true);
                    await Template.ƒS.update(3);
                    tutorial.splice(2, 1, "");
                    break;
            }
            i++;
        }
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0026, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0027, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0028, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0029 + " " + Template.data.protagonist.name + "?", false, false, 4, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        //FUNKTION FÜR SWITCH CASE MIT BEENDEN
        //Entscheidung mithilfe von Array (wieder zurückkehren in switch funktion)
        //let b: number = 0
        let geschichten = ["Geschichte anhören", "Nach der Umgebung fragen", "Nach dem Herrn fragen"];
        function mam(b) {
            x = b;
            return b;
        }
        let x = 0;
        while (mam(x) < 3) {
            let geschichtenauswahl = await Template.ƒS.Menu.getInput(geschichten, "auswahl");
            console.log(geschichten.length);
            //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
            switch (geschichtenauswahl) { //Wenn Auswahl "Namen eingben"
                case geschichten[0]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.Sound.fade(Template.sound.MysteryManTheme, 0.05, 0.1, true); //Der Sound der in Main.ts definiert wurde
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0014, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0015, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0016, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0017, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0018, false, false, 4, 50, Template.sound.MainNarrator, 2);
                    geschichten.splice(0, 1, "");
                    mam(5);
                    break;
                case geschichten[1]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    ;
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0008, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0009, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0010, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0011, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0012, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0013, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
                    geschichten.splice(1, 1, "");
                    break;
                case geschichten[2]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0001, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0002, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0003, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0004, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0005, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0006, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.G0007, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    geschichten.splice(2, 1, "");
                    break;
            }
            x++;
            console.log(mam(x));
        }
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let tutorialspielen = {
            ja: "Tutorial spielen",
            nein: "Ich brauche keine Einweisung",
        };
        let tutorialspielement = await Template.ƒS.Menu.getInput(tutorialspielen, "auswahl");
        switch (tutorialspielement) {
            case tutorialspielen.ja:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0030, true, true, 7, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0031, true, true, 7, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0032, true, true, 7, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0033, true, true, 7, 50, Template.sound.MainNarrator, 3);
                break;
            case tutorialspielen.nein:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0034, true, true, 7, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0035, true, true, 7, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0036, true, true, 7, 50, Template.sound.MainNarrator, 3);
                break;
        }
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0020, true, true, 7, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0021, true, true, 8, 50, Template.sound.MainNarrator, 4);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0022, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0023, false, false, 4, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let herausforderung = {
            iSayYes: "Auf jeden Fall",
            iSayNo: "Ich glaube eher nicht" //Passiert b
        };
        let herausforderungselement = await Template.ƒS.Menu.getInput(herausforderung, "auswahl");
        switch (herausforderungselement) {
            case herausforderung.iSayYes:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0024, true, true, 7, 50, Template.sound.MainNarrator, 3);
                break;
            case herausforderung.iSayNo:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.T0025 + Template.data.protagonist.name + text.MainNarrator.T1026, true, true, 10, 50, Template.sound.MainNarrator, 5);
                break;
        }
        await Template.ƒS.Character.animate(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.fromLeftToCenter());
        await Template.ƒS.Character.hide(Template.characters.narrator);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0037, true, true, 3, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.darkwind, 0, 0.8, true);
        Template.ƒS.Sound.fade(Template.sound.MysteryManTheme, 0, 0.8, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
    }
    Template.Szene1 = Szene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene2() {
        console.log("FudgeStory Template Scene2 starting");
        //Gesprochener Text
        let text = {
            MainNarrator: {
                M0000: "Wach auf",
                //Aufwachen ja
                M0001: ", hast du nicht etwas wichtiges vergessen?",
                M0002: "Etwas SEHR wichtiges?",
                M1003: "Naja, deine Eltern sind für 2 Wochen im Urlaub",
                M1004: "Du musst also alleine auf das Haus und auf deine Schwester aufpassen",
                M1005: "Sie ist heute länger in der Schule, da heute Geschichtserzähltag ist. Du solltest sie abholen, es ist schon dunkel geworden!",
                M1006: "Das ist etwas. . .",
                M1007: "Das man nicht vergessen sollte",
                M1008: "Doch",
                M1009: "Doch!",
                M1010: "DOCH",
                M0003: "",
                M0004: "schaffte es letztendlich aufzustehen",
                //Aufwachen nein
                M0005: " blieb liegen und verschlief alles spannende",
                M0006: "Ende",
                M0007: "Wie fandest du die Geschichte?",
                M2008: "Blöd?",
                M2009: "Kann ich mir vorstellen, ist ja noch nicht viel passiert",
                M2010: "Also steh jetzt auf und verschwende keine Zeit!",
                M0008: ", kein Grund gleich so wütend zu werden",
                M0009: "Heb dir deine Energie lieber für später auf",
                M0010: ", gute Einstellung. Es ist auch besser sich nicht zu wehren.",
                M0011: "Doch ich glaube. . .",
                M0012: "dir ist nicht klar, was noch alles vor dir liegt",
                M0013: "Schweigen ist auch eine Antwort. . .",
                M0014: "wenn auch keine Gute",
                M0015: "Wie dem auch sei. . .",
                M0020: "Zimmer verlassen",
                M0021: "Gute Idee! Du solltest dich ordentlich kleiden, bevor du aus dem Haus gehst",
                M0022: "Kleidung wurde hinzugefügt",
                M0023: "Du tust. . .",
                M0024: "also nichts. . .",
                M0025: "Wie einfallsreich. . .",
                M0026: "Warte mal!",
                M0027: "Mir gefällt deine - mit dem Kopf durch die Wand - Einstellung, aber du solltest nicht in Schlafsachen zur Schule deiner Schwester gehen",
                M0028: "Warte, lass mich dir helfen. . .",
                M0029: "Gerngeschehen!",
                M0030: "Du solltest dich wirklich langsam auf den Weg machen",
                M0031: "Sonst wartet deine Schwester ganz alleine auf dich",
                M0032: "Oder Schlimmeres. . .",
                M0033: "Mit dem Fahrrad?",
                M0034: "Motivation scheint dir nicht zu fehlen. . .",
                M0035: "Dann tret mal in die Pedale!",
                M0036: "Zu Fuß?",
                M0037: "Sportlich. . .",
                M0038: "Nur nicht gerade vorteilhaft wenn du sowieso spät dran bist. . .",
                //M0035
                M0039: "Mit dem Bus?",
                M0040: "Bescheiden. . .",
                M0041: "Aber beeil dich!",
                M0042: "Mit der Bahn?",
                M0043: "Scheint wohl die schnellste Lösung zu sein",
                M0044: "Dann nichts wie weg mit dir!",
            },
            whiteknight: {},
        };
        await Template.ƒS.Sound.fade(Template.sound.clockticking, 0.05, 2, true);
        await Template.ƒS.update(2);
        await Template.timer(0, 5);
        await Template.ƒS.Sound.fade(Template.sound.clockticking, 0, 2, false);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.play(Template.sound.alarmclock, 0.07, false);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.grayedout, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(2);
        //ƒS.Sound.play(sound.impact, 1, false);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0000, /*waitfornext*/ true, /*skipbar*/ true, /*pausenlänge*/ 5, /*geschwindigkeit*/ 50, /*Stimme*/ Template.sound.MainNarrator, /*skiplänge*/ 1);
        await Template.ƒS.update(3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let aufwachen = {
            aufstehen: "Aufstehen",
            liegenbleiben: "Liegen bleiben",
        };
        let verhalten = 0;
        let aufwachentscheidung = await Template.ƒS.Menu.getInput(aufwachen, "auswahl");
        switch (aufwachentscheidung) {
            case aufwachen.aufstehen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Sound.fade(Template.sound.Bedroom, 0.05, 4, true);
                await Template.ƒS.update(1);
                await Template.ƒS.Location.show(Template.locations.homeroom);
                await Template.ƒS.update(5);
                await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                break;
            case aufwachen.liegenbleiben:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.Speech.hide();
                console.log(Template.dataForSave);
                Template.dataForSave.calm + 1;
                console.log(Template.dataForSave.calm);
                await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0005, true, true, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0006, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0007, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M2008, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M2009, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M2010, false, false, 5, 50, Template.sound.MainNarrator, 1);
                await Template.ƒS.Sound.fade(Template.sound.Bedroom, 0.05, 4, true);
                await Template.ƒS.update(1);
                await Template.ƒS.Location.show(Template.locations.homeroom);
                await Template.ƒS.update(5);
                verhalten = 1;
                await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
                break;
        }
        if (verhalten == 1) {
            let Benehmen = {
                ruhig: "Ruhe bewahren",
                wütend: "Wütend reagieren",
                nichts: "Nichts sagen",
            };
            let benehmensentscheidung = await Template.ƒS.Menu.getInput(Benehmen, "auswahl");
            switch (benehmensentscheidung) {
                case Benehmen.ruhig:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.dataForSave.calm + 1;
                    await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0010, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0011, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0012, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    break;
                case Benehmen.wütend:
                    Template.dataForSave.evil + 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0008, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0009, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    break;
                case Benehmen.nichts:
                    Template.dataForSave.calm + 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0013, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0014, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0015, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    break;
            }
        }
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let vergessen = {
            ja: "Was denn?",
            nein: "Nein",
        };
        let nein = {
            nein: "Nein",
        };
        let wasdenn = {
            was: "Was denn?",
        };
        let vergessenentscheidung = await Template.ƒS.Menu.getInput(vergessen, "auswahl");
        switch (vergessenentscheidung) {
            case vergessen.ja:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1003, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1004, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1005, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1006, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1007, true, true, 5, 50, Template.sound.MainNarrator, 1);
                break;
            case vergessen.nein:
                Template.dataForSave.evil + 1;
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1008, false, false, 5, 50, Template.sound.MainNarrator, 1);
                await Template.ƒS.Menu.getInput(nein, "auswahl");
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1009, false, false, 5, 50, Template.sound.MainNarrator, 1);
                await Template.ƒS.Menu.getInput(nein, "auswahl");
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1010, false, false, 5, 50, Template.sound.MainNarrator, 1);
                await Template.ƒS.Menu.getInput(wasdenn, "auswahl");
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1003, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1004, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1005, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1006, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M1007, true, true, 5, 50, Template.sound.MainNarrator, 1);
                break;
            //Szenenablauf
        }
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let gekleidet = 0;
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(2);
        let Aktion01 = ["Zimmer verlassen", "Kleidung anziehen", "Nichts tun"];
        function mam(b) {
            x = b;
            return b;
        }
        let x = 0;
        while (mam(x) < 3) {
            let Aktion01Progress = await Template.ƒS.Menu.getInput(Aktion01, "auswahl");
            switch (Aktion01Progress) {
                case Aktion01[0]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0020, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    if (gekleidet != 3) {
                        gekleidet = 1;
                    }
                    Aktion01.splice(0, 1, "");
                    mam(5);
                    break;
                case Aktion01[1]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0021, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0022, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    gekleidet = 3;
                    Aktion01.splice(1, 1, "");
                    break;
                case Aktion01[2]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.dataForSave.calm + 1;
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0023, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0024, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0025, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    Aktion01.splice(2, 1, "");
                    break;
            }
        }
        if (gekleidet == 1) {
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0026, true, true, 5, 50, Template.sound.MainNarrator, 1);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0027, true, true, 5, 50, Template.sound.MainNarrator, 1);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0028, true, true, 5, 50, Template.sound.MainNarrator, 1);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0022, true, true, 5, 50, Template.sound.MainNarrator, 1);
        }
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(1);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.play(Template.sound.dooropen, 0.08, false);
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.locations.housefloor);
        await Template.ƒS.update(2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0030, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0031, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0032, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let transportmethode = 0;
        //Fahrrad = 1,
        //Bus = 2,
        //Bahn = 3,
        //Fuß = 4,
        let transport = {
            Fahrrad: "Fahrrad nehmen",
            Bus: "Bus fahren",
            Bahn: "Bahn fahren",
            Fuß: "Zu Fuß laufen",
        };
        let transportelement = await Template.ƒS.Menu.getInput(transport, "auswahl");
        switch (transportelement) {
            case transport.Fahrrad:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0033, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0034, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0035, true, true, 5, 50, Template.sound.MainNarrator, 1);
                transportmethode = 1;
                break;
            case transport.Bus:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0039, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0040, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0041, true, true, 5, 50, Template.sound.MainNarrator, 1);
                transportmethode = 2;
                break;
            case transport.Bahn:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0042, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0044, true, true, 5, 50, Template.sound.MainNarrator, 1);
                transportmethode = 3;
                break;
            case transport.Fuß:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0036, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0037, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0038, true, true, 5, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0035, true, true, 5, 50, Template.sound.MainNarrator, 1);
                transportmethode = 4;
                break;
        }
        Template.ƒS.Speech.clear();
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Bedroom, 0, 4, true);
        await Template.ƒS.update(1);
        if (transportmethode == 1) {
            await Template.ƒS.Sound.fade(Template.sound.bicycle, 0.05, 3, false);
            await Template.ƒS.Sound.fade(Template.sound.bicycle, 0.05, 3, false);
        }
        if (transportmethode == 2) {
            await Template.ƒS.Sound.fade(Template.sound.bus, 0.05, 3, false);
            await Template.ƒS.Sound.fade(Template.sound.bus, 0.05, 3, false);
        }
        if (transportmethode == 3) {
            await Template.ƒS.Sound.fade(Template.sound.train, 0.05, 3, false);
            await Template.ƒS.Sound.fade(Template.sound.train, 0.05, 3, false);
        }
        if (transportmethode == 4) {
            await Template.ƒS.Sound.fade(Template.sound.walking, 0.05, 3, false);
            await Template.animationwalking();
            await Template.ƒS.Sound.fade(Template.sound.walking, 0.05, 3, false);
            return "zufuß";
        }
    }
    Template.Szene2 = Szene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene3() {
        console.log("FudgeStory Template Scene3 starting");
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T0000: "Endlich sind wir da",
                T0001: "Wir können schon reingehen, die Show scheint aber anscheinend noch nicht vorbeizusein. . .",
                T0002: "Deine Entscheidung",
                //Reingehen
                T0003: "Nun gut, dann lass uns rein.",
                T0004: "Wir sollten schauen dass wir einen Sitzplatz bekommen",
                T0005: "Karte hinzugefügt",
                //Wenn Entschuldigung abgelehnt (entschuldigung : 0):
                T0006: "Wir brauchen dafür übrigens eine Karte",
                T0007: "Und da geht sie",
                T0008: "Hm. . . scheint hier wohl nicht viele zu geben die du fragen könntest",
                T0009: "Vielleicht sollten wir uns. . .",
                T0010: "Reinschleichen?",
                T0011: "Warum möchtest du dich reinschleichen wenn du doch gerade eine Sitzgelegenheit bekommen hast?",
                T0012: "Ich verstehe, du brauchst den Nervenkitzel",
                T0013: "Na dann. . .",
                T0014: "Was denn?",
                T0015: "Dich aufhalten? Nein wieso denn?",
                T0016: "Das macht das Ganze doch spannender",
                T0017: "Sehr gut. Dann lass uns beeilen bevor die Vorstellung beginnt",
                T0018: "Sehr gewagt. Doch wer nicht wagt, der nicht gewinnt",
                T0019: "Nicht wahr?",
                T0020: "So, das überlasse ich jetzt ganz dir",
            },
            School: {
                S0000: "ERINNERUNG",
                S0001: "LETZTE VORFÜHRUNG BEGINNT IN KÜRZE",
                S0002: "BITTE BEGEBEN SIE SICH AUF IHRE PLÄTZE",
                S0003: "ACHTUNG ACHTUNG",
                S0004: "LETZTER AUFRUF",
                S0005: "BITTE BEGEBEN SIE SICH NUN AUF IHRE PLÄTZE",
                S0006: "DIE LETZTE VORFÜHRUNG BEGINNT IN KÜRZE",
            },
            Elo: {
                //Wenn Entschuldigung angenommen (entschuldigung: 1):
                E0000: "Hey! Du bist ja ausnahmsweise mal früh dran",
                E0001: "Langsam wirst du zu einem besseren Menschen",
                E0002: "Sag mal, hast du überhaupt einen Sitzplatz reserviert?",
                E0003: "Die ganze Halle ist voll und alle Plätze belegt.",
                E0004: "Ich habe extra einen Platz dazugebucht, damit ich nicht neben jemand Fremdes sitzen muss",
                E0005: "DU bist niemand. . . Fremdes",
                E0006: "Wenn du magst, kannst du dich neben mich setzen und warten bis die Show zu ende ist",
                //Wenn Nebensetzen
                E0007: "Das freut mich! Ich hole uns noch etwas zu trinken. Geh schonmal vor. Hier die Karte für dich!",
                //Wenn Anruf ignoriert (entschuldigung : 2):
                E0008: "Oh Hey! Ich habe versucht dich zu erreichen, vermutlich warst du zu beschäftigt. . .",
                E0009: "Hör zu. . .",
                E0010: "Eigentlich wollte ich mich. . .",
                E0011: "Oh. . . egal",
                E0012: "Das hat auch später Zeit. Wir sollten jetzt los.",
                E0013: "Ich möchte die letzte Vorführung nicht verpassen. Ich LIEBE Geschichten",
                //Wenn setzen ablehenn
                E0014: "Ich verstehe. . .",
            },
            Ticketkontrolleur: {
                T0000: "Schönen Abend!",
                T0001: "Moment, an ihr Gesicht kann ich mich nicht erinnern",
                T0002: "Und ich kann mir jedes Gesicht merken",
                T0003: "Wirklich JEDES",
                T0004: "Das ist meine ganz persönliche Superkraft",
                T0005: "Deshalb bin ich Ticketkontrolleur geworden weißt du",
                T0006: "Wo war ich. . .",
                T0007: "Ahja richtig",
                T0008: "Zeig mir einfach dein Ticket dann lass ich dich rein",
                T0009: "Dein Gesicht merk ich mir TROTZDEM",
                T0010: "He he",
                //Drohen
                T0011: "Ah so ist das also",
                T0012: "Glaubst du du kannst mich einfach so einschüchtern?",
                T0013: "MICH",
                T0014: "DEN Ticketkontrolleur",
                T0015: "Lächerlich, ich habe mich natürlich auf so eine Situation vorbereitet",
                T0016: "Auch wenn ich das an einer Grundschule nicht erwartet hätte",
                T0017: "Dann zeig mal was du drauf hast",
                T0018: "Heh heh",
                //beleidigen
                T0019: "Was hast du gerade gesagt?",
                T0020: "Oha",
                T0021: "Das ist aber nicht so nett. . .",
                T0022: "So einen Rüpel wie dich lasse ich ganz sicher nicht einfach so rein!",
                //lügen
                T0023: "Du hast eine Erklärung?",
                T0024: "Wenn das so ist",
                T0025: "Hier, dein Ticket. Viel Spaß",
                T0026: "HA",
                T0027: "Der Ticketkontrolleur hat mal wieder einen Rüpel ausgestrickst!!!",
                T0028: "Habe ICH das nicht TOLL gemacht?",
                T0029: ". . .",
                T0030: "Okay. Ich bin verpflichtet mir das anzuhören, also schieß los",
                //Normal betreten
                T0031: "Schönen guten Abend",
                T0032: "I-Ich bin der einzig WAHRE",
                T0033: "Der einzig Wahre TICKETKONTROLLEUR",
                //Ticket geben
                T0034: "Oh. . .",
                T0035: "Ich hätte gedacht dass wir eine längere Konversation führen würden",
                T0036: "Vielleicht in einem anderen Leben",
                T0037: "Wie auch immer. . .",
                T0038: "Dein Ticket ist gültig. Ich wünsche viel Spaß für die restlichen 10 Minuten",
                T0039: "Also echt. . .",
                T0040: "Komm das nächste mal etwas früher ja?"
            }
        };
        let umsehen = 0;
        let ticketbekommen = 0;
        let sneaken = 0;
        let überreden = 0;
        let lügen = 0;
        await Template.ƒS.Sound.fade(Template.sound.peopletalking, 0.05, 3, true);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.locations.theaterfront);
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.grayedout, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0000, true, true, 5, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0001, true, true, 5, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0002, false, false, 5, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let reingehen = {
            reingehen: "Saal betreten",
            umsehen: "Umsehen",
        };
        let reingehelement = await Template.ƒS.Menu.getInput(reingehen, "auswahl");
        switch (reingehelement) {
            case reingehen.reingehen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0003, true, true, 5, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0004, true, true, 5, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0006, true, true, 5, 50, Template.sound.MainNarrator, 2);
                break;
            case reingehen.umsehen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0000, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0001, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0002, true, true, 5, 50, Template.sound.School, 2);
                umsehen = 1;
                break;
        }
        if (umsehen == 1) {
            //entschuldigung = angenommen
            if (Template.data.entschuldigung == 1) {
                await Template.satzbau(Template.characters.Elo, text.Elo.E0000, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0001, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0002, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0003, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0004, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0005, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0006, false, false, 5, 50, Template.sound.Elo, 2);
                await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
                let setzen = {
                    setzen: "Sitzgelegenheit annehmen",
                    ablehnen: "Ablehnen",
                };
                let setzelement = await Template.ƒS.Menu.getInput(setzen, "auswahl");
                switch (setzelement) {
                    case setzen.setzen:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        Template.dataForSave.good + 1;
                        await Template.satzbau(Template.characters.Elo, text.Elo.E0007, true, true, 5, 50, Template.sound.Elo, 2);
                        ticketbekommen = 1;
                        break;
                    case setzen.ablehnen:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        Template.dataForSave.evil + 1;
                        await Template.satzbau(Template.characters.Elo, text.Elo.E0014, true, true, 5, 50, Template.sound.Elo, 2);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0007, true, true, 5, 50, Template.sound.MainNarrator, 2);
                        break;
                }
            }
            //entschuldigung = Anruf abgelehnt
            if (Template.data.entschuldigung == 2) {
                await Template.satzbau(Template.characters.Elo, text.Elo.E0008, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0009, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0010, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0003, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0004, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0005, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0006, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0011, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0012, true, true, 5, 50, Template.sound.Elo, 2);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0013, false, false, 5, 50, Template.sound.Elo, 2);
            }
            //Entschuldigung abgelehnt
            if (Template.data.entschuldigung == 3) {
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0008, true, true, 5, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0009, true, true, 5, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0010, false, false, 5, 50, Template.sound.MainNarrator, 2);
                ticketbekommen == 2;
            }
        }
        //Ticket erhalten
        if (ticketbekommen == 1) {
            let saalbetreten = {
                rein: "Saal betreten",
                reinschleich: "Reinschleichen",
            };
            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            let ticketelement = await Template.ƒS.Menu.getInput(saalbetreten, "auswahl");
            switch (ticketelement) {
                case saalbetreten.rein:
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0017, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    break;
                case saalbetreten.reinschleich:
                    Template.dataForSave.crazy + 1;
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0013, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0014, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0015, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0016, false, false, 5, 50, Template.sound.MainNarrator, 2);
                    sneaken = 1;
                    break;
            }
        }
        if (ticketbekommen == 2) {
            let saalbetreten = {
                überzeugen: "Ticketkontrolleur überreden",
                schleichen: "Reinschleichen",
            };
            let ticketelement = await Template.ƒS.Menu.getInput(saalbetreten, "auswahl");
            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            switch (ticketelement) {
                case saalbetreten.überzeugen:
                    Template.dataForSave.crazy + 1;
                    überreden = 1;
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    break;
                case saalbetreten.schleichen:
                    Template.dataForSave.crazy + 1;
                    Template.dataForSave.evil + 1;
                    sneaken = 1;
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    break;
            }
        }
        //Überzeugen
        if (überreden == 1) {
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0000, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0001, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0002, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0003, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0004, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0005, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0006, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0007, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0008, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0009, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0010, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0020, false, false, 5, 50, Template.sound.MainNarrator, 2);
            let ticketgespräch = {
                schwester: "Ticketkontrolleur überreden",
                drohen: "Reinschleichen",
                beleidigen: "",
                lügen: "",
            };
            let überredenelement = await Template.ƒS.Menu.getInput(ticketgespräch, "auswahl");
            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            switch (überredenelement) {
                case ticketgespräch.schwester:
                    break;
                case ticketgespräch.drohen:
                    Template.dataForSave.evil + 1;
                    Template.dataForSave.crazy + 1;
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0011, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0012, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0013, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0014, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0015, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0016, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0017, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0018, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    break;
                case ticketgespräch.beleidigen:
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0019, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0020, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0021, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0022, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    Template.dataForSave.evil + 1;
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0017, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0018, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                    break;
                case ticketgespräch.lügen:
                    Template.dataForSave.evil + 1;
                    Template.dataForSave.calm + 1;
                    lügen = 1;
                    break;
            }
        }
        if (lügen == 1) {
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0023, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0024, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0025, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0026, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0027, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0028, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0029, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0030, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        }
        //Im Saal
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0031, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0032, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0033, false, false, 5, 50, Template.sound.Ticketkontrolleur, 2);
        let ticketgeben = {
            geben: "Ticket vorzeigen",
        };
        let gebenelement = await Template.ƒS.Menu.getInput(ticketgeben, "auswahl");
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        switch (gebenelement) {
            case ticketgeben.geben:
                Template.dataForSave.good + 1;
                break;
        }
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0034, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0035, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0036, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0037, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0038, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0039, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0040, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
        //Reinschleichen
        if (sneaken == 1) {
        }
    }
    Template.Szene3 = Szene3;
})(Template || (Template = {}));
// async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number, voicetype: string, skiplänge: number) {
//   let speechlength = text.length / 4;
//   ƒS.Speech.setTickerDelays(textgeschwindigkeit);
//   console.log(speechlength);
//   let doonce: boolean = true;
//   let geskipped = false;
//   //SpeechAudiofunktion
//   let t: number = 0;
//   let b: number = 0;
//   //-- Check input key. Wenn pressed wird audioausgabe nicht berücksichtigt bzw abgebrochen
//   for (t = 0; t < speechlength; t++) { //Text wird in der Schleife nur einmal ausgegeben
//     if (doonce == true) {
//       ƒS.Speech.tell(Sprecher, text, waitfornext);
//       doonce = false;
//       // document.addEventListener("keydown", hndKeyPress);
//       // async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
//       //   switch (_event.code) {
//       //     case ƒ.KEYBOARD_CODE.SPACE:
//       //       t = speechlength;
//       //       textgeschwindigkeit = 0;
//       //       geskipped = true;
//       //       //pausenlänge = 1;
//       //       await ƒS.update(skiplänge);
//       //       console.log(pausenlänge);
//       //       console.log("update abgewartet");
//       //       removeEventListener("keydown", hndKeyPress);
//       //       break;
//       //     case ƒ.KEYBOARD_CODE.A:
//       //       t = speechlength;
//       //       removeEventListener("keydown", hndKeyPress);
//       //       break;
//       //   }
//       // }
//       //document.removeEventListener("keydown", hndKeyPress);
//     }
//     if (skipbar == true) {
//       //Wenn SPACE/Mausbutton gedrückt wird, skippt es die rede
//       //Mausabfrage
//       /*document.addEventListener("mousedown", hndMousePress);
//       async function hndMousePress(_event: MouseEvent): Promise<void> {
//         console.log(MouseEvent);
//     }*/
//     }
//     ƒS.Sound.play(voicetype, .2, false); //Der Sound der in Main.ts definiert wurde
//     await ƒS.update(.2);
//   }
//   for (b = 0; b < pausenlänge; b++) {
//     if(pausenlänge == 3){
//     console.log(b);
//     console.log(pausenlänge);
//     await signaldelay();
//     console.log("es geht in if");
//     document.addEventListener("keydown", ConfirmKey);
//     async function ConfirmKey(_event: KeyboardEvent): Promise<void> {
//     switch (_event.code) {
//       case ƒ.KEYBOARD_CODE.SPACE:
//         console.log("Space gedrückt");
//         b = 10;
//         console.log(b);
//         break;
//     }
//   }
// }
//   else{
//     pausenlänge = 0;
//     await signaldelay();
//     console.log("es ist nicht mehr in if");
//   }
//await ƒS.update(pausenlänge);
//await signaldelay();
//await ƒS.Progress.defineSignal;
//let signal: ƒS.Signal = ƒS.Progress.defineSignal([ƒS.EVENT.KEYDOWN, () => ƒS.Progress,delay()]);
//await signal();
//   function timer (){
//   let timer: ƒ.Timer;
//   console.log(timer);
// }
//await signal();
// await signaldelay();
// }
// function satzbau(Sprecher: string, text: string, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number){}
// //Skippen
// async function skippen(r: string, ausführzeit: number): Promise <boolean>{
//   let sprechertext = r;
//   let skip: boolean = false;
//   await ƒS.update(2);
//   let i: number = 0;
//   console.log(ausführzeit);
//   console.log(i);
//   for (i = 0; i < ausführzeit; i++) {
//     document.addEventListener("keydown", hndKeyPressing);
//     async function hndKeyPressing(_event: KeyboardEvent): Promise<void> {
//       switch (_event.code) {
//         case ƒ.KEYBOARD_CODE.SPACE:
//           console.log("Space is pressed");
//           i = ausführzeit;
//           console.log("gedrückt");
//           console.log(i);
//       }
//       await ƒS.update(ausführzeit);
//     }
//     if (i = ausführzeit){
//       skip = true;
//       break;
//     }
//   }
//   console.log("skip");
//   stimme(sprechertext, skip);
//   return skip;
// }
// async function stimme(r: string, b: boolean): Promise<number>{
// let skip = b;
// let speechlength = r.length/4;
// console.log(speechlength);
// let i: number = 0;
// for (i=0; i<speechlength; i++){
//   await ƒS.Sound.play(sound.speech, .2, false); //Der Sound der in Main.ts definiert wurde
//   await ƒS.update(.2);
//   console.log(i);
// }
// return speechlength;
// };
/*async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number){
    let speechlength = text.length/4;
    console.log(speechlength);
    let t: number = 0;
    for (t=0; t<speechlength; t++){
      await ƒS.Sound.play(sound.speech, .2, false); //Der Sound der in Main.ts definiert wurde
      await ƒS.update(.2);
      console.log(t);
    ƒS.Speech.tell(Sprecher, text, waitfornext);
  };
}*/ 
var Template;
(function (Template) {
    async function zufuß() {
        console.log("FudgeStory Template zufuß starting");
        //Gesprochener Text
        let text = {
            MainNarrator: {
                M0000: "Es ist eine dieser schönen Nächte findest du nicht?",
                M0001: "Die Ruhe vor dem Sturm heh",
                M0002: "Lass uns einfach mal für einen Moment nichts tun und schweigen",
                M0003: "Nur einen Moment, erfüllt von Stille. . .",
                M0004: ". . .",
                M0005: "Muss das sein?",
                M0006: "Na los, geh schon ran",
                M0007: "",
                //Entschuldigung Annehmen
                M0008: ". . .",
                M0009: "Ich lass das mal deine Sorge sein",
                //Telefonat ablehnen
                M0010: "Danke. Okay, fahren wir mit der Geschichte fort. . .",
                M0011: "Jetzt solltest du dich beeilen, es wird schon spät!",
            },
            Elo: {
                E0000: "Hey, ",
                E0001: "Hör zu. . .",
                E0002: "Ich wollte mich nur entschuldigen. . . für mein gestriges Verhalten. . .",
                E0003: "Ich hätte nicht so eine Szene machen sollen",
                E0004: "Es kam alles nur so plötzlich und ohne Vorwarnung. . .",
                E0005: "Kannst du mir verzeihen?",
                //Entschuldigung Annehmen
                E0006: "Das ist schön. . .",
                E0007: "Das beruhigt mich. . . Danke",
                E0008: "Ich hoffe wir können uns bald wieder sehen",
                E0009: "Ahja und vergiss nicht deine Schwester abzuholen",
                E0010: "Ich weiß wie vergesslich du sein kannst!!!",
                E0011: "Byeee",
                //Entschuldigung Ablehnen
                E0012: "Ich wusste du würdest es nicht verstehen. . .",
                //Was meinst du
                E0013: "Ah. . .",
                E0014: "Verstehe schon, wir reden nicht darüber",
                E0015: "Danke dir",
            },
        };
        //await ƒS.Sound.fade(sound.introductiontheme, 0.3, 3, true);
        //data.protagonist.name = "Halis";
        //characters.whiteknight.name = data.protagonist.name;
        await Template.ƒS.Location.show(Template.locations.waldweg);
        await Template.ƒS.Sound.fade(Template.sound.nightambience, 0.2, 4, true);
        await Template.ƒS.update(5);
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.grayedout, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0000, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0001, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0003, true, true, 5, 50, Template.sound.MainNarrator, 1);
        Template.ƒS.Sound.play(Template.sound.phonering, .3, false);
        Template.ƒS.update(3);
        Template.ƒS.Speech.hide;
        await Template.ƒS.update(1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0004, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0005, true, true, 5, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0006, false, false, 5, 50, Template.sound.MainNarrator, 1);
        Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let rangehen = {
            rangehen: "Nachsehen",
            ablehnen: "Ignorieren",
        };
        let rangegangen = 0;
        let handyentscheidung = await Template.ƒS.Menu.getInput(rangehen, "auswahl");
        switch (handyentscheidung) {
            case rangehen.rangehen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.good + 1;
                await Template.ƒS.update(1);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0000 + Template.data.protagonist.name, true, true, 5, 50, Template.sound.Elo, 1);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0001, true, true, 5, 50, Template.sound.Elo, 1);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0002, true, true, 5, 50, Template.sound.Elo, 1);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0003, true, true, 5, 50, Template.sound.Elo, 1);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0004, true, true, 5, 50, Template.sound.Elo, 1);
                await Template.satzbau(Template.characters.Elo, text.Elo.E0005, false, false, 5, 50, Template.sound.Elo, 1);
                rangegangen = 1;
                break;
            case rangehen.ablehnen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.evil + 1;
                await Template.ƒS.update(1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0010, true, true, 5, 50, Template.sound.MainNarrator, 1);
                Template.data.entschuldigung = 2;
                break;
        }
        if (rangegangen == 1) {
            let entschuldigung = {
                annehmen: "Entschuldigung annehmen",
                ablehnen: "Entschuldigung ablehnen",
                waspassiert: "Was meinst du?",
            };
            Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            let entschuldigungsentscheidung = await Template.ƒS.Menu.getInput(entschuldigung, "auswahl");
            switch (entschuldigungsentscheidung) {
                case entschuldigung.annehmen:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.dataForSave.good + 1;
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0006, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0007, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0008, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0009, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0010, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0011, true, true, 5, 50, Template.sound.Elo, 1);
                    Template.ƒS.Sound.play(Template.sound.phonecallend, .3, false);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0008, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0009, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    Template.data.entschuldigung = 1;
                    break;
                case entschuldigung.ablehnen:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.data.entschuldigung = 3;
                    Template.dataForSave.evil + 1;
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0012, true, true, 5, 50, Template.sound.Elo, 1);
                    Template.ƒS.Sound.play(Template.sound.phonecallend, .3, false);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0008, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0009, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    break;
                case entschuldigung.waspassiert:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.dataForSave.good + 1;
                    Template.dataForSave.calm + 1;
                    Template.data.entschuldigung = 1;
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0013, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0014, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0015, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0008, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0009, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0010, true, true, 5, 50, Template.sound.Elo, 1);
                    await Template.satzbau(Template.characters.Elo, text.Elo.E0011, true, true, 5, 50, Template.sound.Elo, 1);
                    break;
            }
        }
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0011, true, true, 5, 50, Template.sound.MainNarrator, 1);
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(2);
        return "szene3";
    }
    Template.zufuß = zufuß;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map