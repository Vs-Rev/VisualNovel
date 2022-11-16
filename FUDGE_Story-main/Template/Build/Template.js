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
        //sounds
        examplesound: "",
        backgroundBuero: "./Audio/backgroundBuero.wav",
    };
    //Backgrounds
    Template.locations = {
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
    Template.data = {
        protagonist: {
            name: "",
        },
        score: 0,
        state: {
            a: 1,
        },
    };
    //Charakters
    Template.characters = {
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
            name: Template.data.protagonist.name,
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Images/Characters/whiteknight/whiteknight_standard.png",
            }
        },
        MainNarrator: {
            name: "",
        }
    };
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
    //SaveGame preparation
    Template.dataForSave = {
        //Hier Speicherbare Elemente eintragen
        points: 0,
        gesprochen: {
            marie: false,
            james: false,
            violet: false,
            luna: false
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
    let menu = true;
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
        }
    }
    console.log(1);
    window.addEventListener("load", start);
    function start(_event) {
        console.log(2);
        //Menu
        Template.gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen aufrufen bezogen auf die .TS Datei
        let scenes = [
            { scene: Template.Szene1, name: "Szene1" }
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
            whiteknight: {
                T0000: "Edler Abenteurer. Dich erwartet eine Reise voller Gefahren und Tanzveranstaltungen.",
                T0001: "neben ihr unter den Sternen zu sitzen..",
                T0002: "..ihre Hand zu halten und ihr dabei tief in die Augen zu schauen und zu sagen..",
                T0003: ".. Du Hurensohn. Aber wie heißt du eigentlich edler Cockreiter?   ",
                T0004: "hallo was geht ich heiße so und so",
            },
            MainNarrator: {
                T0000: ". . .",
                T0001: ". . .",
                T0002: "Oh!!!",
                T0003: "Verzeih mir doch bitte meine Unachtsamkeit. . .",
                T0004: "Ich war tief in meinen Gedanken versunken. . .",
                T0005: "Man hat viel Zeit zum Nachdenken weist du...",
                T0006: "Wenn man nirgends mehr hin kann. . .",
                T0007: "Würdest du mit einem alten Herren wie mir, deinen Namen teilen?",
                T0008: "Das ist sehr lieb von dir!!!",
                T0009: ". . .",
                T0010: "Spann mich nun nicht so auf die Folter. Sag schon, wie ist dein Name? (Der Vorname reicht mir schon... und am besten auf Groß- und Kleinschreibung achten. . .",
                T0011: ". . . gewöhnlicher Name . . .",
                T0012: "Nun",
                T0013: ". . .",
                T0014: "Das ist sehr bedauerlich.",
                T0015: "Oh! Du bist immernoch hier?",
                T0016: "Ich denke wir beide kommen wohl nicht weit, wenn wir uns nicht gegenseitig austauschen",
                T0017: "Wunderst du dich nicht wie du hier gelandet bist?",
                T0018: "Nun gut, dann übernehme ich eben die Entscheidung für dich. . .",
                T0019: "Also. . . dein Name ist: ",
            }
        };
        //Szenenablauf
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0000);
        await Template.ƒS.update(2);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0001);
        await Template.ƒS.update(2);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0002);
        await Template.ƒS.update(3);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0003);
        await Template.ƒS.update(5);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0004);
        await Template.ƒS.update(5);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0005);
        await Template.ƒS.update(5);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0006);
        await Template.ƒS.update(5);
        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0007);
        await Template.delay();
        //Entscheidungsoptionen
        let entscheidung1 = {
            iSayYes: "Namen mitteilen",
            iSayNo: "Misstrauisch ablehnen" //Passiert b
        };
        let erstesdialogelement = await Template.ƒS.Menu.getInput(entscheidung1, "auswahl");
        //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
        switch (erstesdialogelement) { //Wenn Auswahl "Anruf annehmen"
            case entscheidung1.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0008);
                await Template.ƒS.update(2);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0009);
                await Template.ƒS.update(2);
                await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0010, false);
                await Template.ƒS.update(2);
                Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.data.protagonist.name;
                await Template.ƒS.Speech.tell(Template.characters.MainNarrator, Template.data.protagonist.name + " also? Ein sehr . . .", true);
                await Template.ƒS.update(2);
                await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0011);
                console.log(Template.data.protagonist.name);
                break;
            case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0012);
                await Template.ƒS.update(2);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0013);
                await Template.ƒS.update(2);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0014);
                await Template.ƒS.update(3);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0015);
                await Template.ƒS.update(2);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0016);
                await Template.ƒS.update(2);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0017);
                await Template.ƒS.update(2);
                //Entscheidungsoptionen
                let entscheidung2 = {
                    iSayYes: "Namen mitteilen",
                    iSayNo: "Erneut ablehnen" //Passiert b
                };
                let zweitesdialogelement = await Template.ƒS.Menu.getInput(entscheidung2, "auswahl");
                switch (zweitesdialogelement) {
                    case entscheidung2.iSayYes:
                        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0008);
                        await Template.ƒS.update(2);
                        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0009);
                        await Template.ƒS.update(2);
                        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0010, false);
                        await Template.ƒS.update(2);
                        Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                        Template.characters.whiteknight.name = Template.data.protagonist.name;
                        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, Template.data.protagonist.name + " also? Ein sehr . . .", true);
                        await Template.ƒS.update(2);
                        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0011);
                        console.log(Template.data.protagonist.name);
                        break;
                    case entscheidung2.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
                        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0018);
                        await Template.ƒS.update(2);
                        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0019, false);
                        Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                        Template.characters.whiteknight.name = Template.data.protagonist.name;
                        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, Template.data.protagonist.name + " also? Ein sehr . . .", true);
                        await Template.ƒS.update(2);
                        await Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0011);
                        console.log(Template.data.protagonist.name);
                        break;
                }
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
                console.log("audio is being played");
                await Template.ƒS.Location.show(Template.locations.background1); //Location initialisieren die in Main.ts definiert wurden
                console.log("Background is being displayed");
                await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge); //Ein Beispiel-Übergang der in Main.ts definiert wurde
                console.log("Transition is being displayed");
                await Template.ƒS.Character.show(Template.characters.whiteknight, Template.characters.whiteknight.pose.standard, Template.ƒS.positionPercent(10, 90)); //Charaktere mit deren Posen anzeigen die in Main.ts definiert wurden
                await Template.ƒS.update(1); //Update funktion? Idk warum ehrlich gesagt
                await Template.ƒS.Speech.tell(Template.characters.whiteknight, text.whiteknight.T0000); //Sprechtext wird eingeleitet
                await Template.ƒS.Speech.tell(Template.characters.whiteknight, text.whiteknight.T0001); //Sprechtext 2 wird eingeleitet
                await Template.ƒS.Speech.tell(Template.characters.whiteknight, text.whiteknight.T0002);
                await Template.ƒS.Speech.tell(Template.characters.whiteknight, text.whiteknight.T0003, false);
                await Template.ƒS.update(1);
                Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.data.protagonist.name;
                await Template.ƒS.Speech.tell(Template.characters.narrator, Template.data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem Fall beginnen.", true);
                console.log(Template.data.protagonist.name);
                await Template.ƒS.update(2);
                /*ƒS.Sound.play(sound.money, 0.3, false);*/ //Itemsound
                /*await ƒS.Character.animate(characters.geld, characters.geld.pose.normal, fromCenterToCenter()); */ //Animation des Charakters (in diesem Fall ein Item "Geld") wird gespielt
                await Template.ƒS.Speech.tell(Template.characters.whiteknight, text.whiteknight.T0004); //Sprechtext wird eingeleitet
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
    }
    Template.Szene1 = Szene1;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map