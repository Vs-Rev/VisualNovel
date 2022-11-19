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
        //sounds
        examplesound: "",
        backgroundBuero: "./Audio/backgroundBuero.wav",
        makelight: "./Audio/Soundeffects/Makelight.wav",
        //ambience
        darkwind: "./Audio/Ambience/darkwind.wav",
    };
    //Typewritersound
    function Typewritersound() {
    }
    //Backgrounds
    Template.locations = {
        examplelocation: {
            name: "examplelocation",
            background: "",
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
        },
        Speechbox: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "./Images/Speechbox.png",
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
                T0003: ".. Du Hurensohn. Aber wie heißt du eigentlich edler Cockreiter?",
                T0004: "hallo was geht ich heiße so und so",
            },
            MainNarrator: {
                T0000: ". . .",
                T0001: ". . .",
                T0002: "Oh",
                T0003: "Verzeih mir doch bitte meine Unachtsamkeit. . .",
                T0004: "Ich bin wohl in meinen Gedanken versunken. . .",
                T0005: "Kannst du mich sehen? ",
                T1005: "Ich dich zumindest nicht. ",
                T1006: "Wärst du wohl so freundlich und könntest mich. . . ",
                T1007: "erleuchten?",
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
                T0020: "Lieber ",
                T0021: ". Dich erwartet eine heldenhafte Reise in ein längst vergessenes Königreich voller Herausforderungen, Tücken und Gefahren.",
                T0022: "Bevor ich dich aufkläre, wo wir hier sind und wie du an diesen Ort gelangt bist, muss ich wissen. . .",
                T0023: "Bist du der Herausforderung gewachsen?",
                T0024: "Wunderbar!!!",
                T0025: "Er war definitiv nicht bereit, doch er hatte keine leider keine andere Wahl",
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
            }
        };
        //Szenenablauf
        await Template.ƒS.Sound.fade(Template.sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        console.log("audio is being played");
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.standard, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.Speech.setTickerDelays(250); //Wie schnell der Text angezeigt wird
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0000);
        await Template.ƒS.update(2);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0001);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.setTickerDelays(50);
        /*await ƒS.Sound.fade(sound.introductiontheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        console.log("audio is being played");*/
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0002);
        await Template.ƒS.update(3);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0003);
        await Template.ƒS.update(5);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0004);
        await Template.ƒS.update(5);
        //Licht anschalten Text
        Template.ƒS.Speech.setTickerDelays(50);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0005 + text.MainNarrator.T1005 + text.MainNarrator.T1006);
        await Template.ƒS.update(8);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T1007, false);
        await Template.ƒS.update(3);
        let lichtanschalten = {
            lichtan: "Licht anschalten",
            lichtaus: "Nichts tun"
        };
        let lichtanschaltenelement = await Template.ƒS.Menu.getInput(lichtanschalten, "auswahl");
        switch (lichtanschaltenelement) {
            case lichtanschalten.lichtan:
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.L0001);
                await Template.ƒS.update(10);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.L0002);
                await Template.ƒS.update(7);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.L0003);
                await Template.ƒS.update(4);
                Template.ƒS.Sound.play(Template.sound.makelight, 0.3, false);
                await Template.ƒS.update(1);
                await Template.ƒS.Location.show(Template.locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
                console.log("Background is being displayed");
                await Template.ƒS.update(6);
                break;
            case lichtanschalten.lichtaus:
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.L0004);
                await Template.ƒS.update(7);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.L0005);
                await Template.ƒS.update(2);
                Template.ƒS.Sound.play(Template.sound.makelight, 0.3, false);
                await Template.ƒS.update(2);
                await Template.ƒS.Location.show(Template.locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
                console.log("Background is being displayed");
                break;
        }
        await Template.ƒS.update(3);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0006);
        await Template.ƒS.update(15);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0007);
        await Template.ƒS.update(5);
        await Template.delay();
        //Namen sagen
        let entscheidung1 = {
            iSayYes: "Namen sagen",
            iSayNo: "Ablehnen" //Passiert b
        };
        let erstesdialogelement = await Template.ƒS.Menu.getInput(entscheidung1, "auswahl");
        //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
        switch (erstesdialogelement) { //Wenn Auswahl "Namen eingben"
            case entscheidung1.iSayYes:
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0008);
                await Template.ƒS.update(5);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0009);
                await Template.ƒS.update(3);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0010, false);
                await Template.ƒS.update(10);
                Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.data.protagonist.name;
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, Template.data.protagonist.name + " also?", true);
                await Template.ƒS.update(4);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, "Ein sehr. . .");
                await Template.ƒS.update(5);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0011);
                await Template.ƒS.update(4);
                console.log(Template.data.protagonist.name);
                break;
            case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
                await Template.ƒS.Speech.setTickerDelays(50);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0012);
                await Template.ƒS.update(6);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0013);
                await Template.ƒS.Speech.setTickerDelays(50);
                await Template.ƒS.update(5);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0014);
                await Template.ƒS.update(4);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0015);
                await Template.ƒS.update(4);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0016);
                await Template.ƒS.update(7);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0017, false);
                await Template.ƒS.update(3);
                Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.data.protagonist.name;
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, Template.data.protagonist.name + " also?", true);
                await Template.ƒS.update(4);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, "Ein sehr. . .");
                await Template.ƒS.update(4);
                Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0011);
                await Template.ƒS.update(4);
                console.log(Template.data.protagonist.name);
                break;
        }
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, Template.data.protagonist.name + text.MainNarrator.TT001);
        await Template.ƒS.update(5);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT002);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT003);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT004);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT005);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT006, false);
        await Template.ƒS.update(4);
        //FUNKTION FÜR SWITCH CASE MIT ALLEN MÖGLICHKEITEN
        let tutorial = ["Tour annehmen", "Trinken annehmen", "Konversation verlassen"];
        let i = 0;
        while (i < 3) {
            let tutorialauswahl = await Template.ƒS.Menu.getInput(tutorial, "auswahl");
            console.log(tutorial.length);
            //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
            switch (tutorialauswahl) { //Wenn Auswahl "Namen eingben"
                case tutorial[0]:
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT010);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT011);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT012);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT013);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT014);
                    await Template.ƒS.update(4);
                    tutorial.splice(0, 1, "");
                    break;
                case tutorial[1]:
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT007);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT008);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT009);
                    await Template.ƒS.update(4);
                    //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
                    tutorial.splice(1, 1, "");
                    break;
                case tutorial[2]:
                    await Template.ƒS.Location.show(Template.locations.blackbackground);
                    await Template.ƒS.Sound.fade(Template.sound.darkwind, 0, 0.2, true);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT015);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT016);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT017);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT018);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.TT019);
                    await Template.ƒS.Sound.fade(Template.sound.darkwind, 0.07, 0.1, true);
                    await Template.ƒS.Location.show(Template.locations.startscreenbackground);
                    await Template.ƒS.update(4);
                    tutorial.splice(2, 1, "");
                    break;
            }
            i++;
        }
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0026);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0027);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0028);
        await Template.ƒS.update(4);
        Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.T0029 + Template.data.protagonist.name + "?", false);
        //FUNKTION FÜR SWITCH CASE MIT BEENDEN
        //Entscheidung mithilfe von Array (wieder zurückkehren in switch funktion)
        let b = 0;
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
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0014);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0015);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0016);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0017);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0018);
                    await Template.ƒS.update(4);
                    geschichten.splice(0, 1, "");
                    mam(5);
                    break;
                case geschichten[1]:
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0008);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0009);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0010);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0011);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0012);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0013);
                    await Template.ƒS.update(4);
                    //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
                    geschichten.splice(1, 1, "");
                    break;
                case geschichten[2]:
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0001);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0002);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0003);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0004);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0005);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0006);
                    await Template.ƒS.update(4);
                    Template.ƒS.Speech.tell(Template.characters.MainNarrator, text.MainNarrator.G0007);
                    await Template.ƒS.update(4);
                    geschichten.splice(2, 1, "");
                    break;
            }
            x++;
            console.log(mam(x));
        }
        // await ƒS.Sound.fade(sound.titletheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        // console.log("audio is being played");
        // await ƒS.update(3);
        // ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0020 + data.protagonist.name + text.MainNarrator.T0021);
        // await ƒS.update(5);
        // ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0022);
        // await ƒS.update(5);
        // let herausforderung = {
        //   iSayYes: "Auf jeden Fall", //Passiert a
        //   iSayNo: "Ich glaube eher nicht" //Passiert b
        // };
        // let herausforderungselement = await ƒS.Menu.getInput(herausforderung, "auswahl");
        // switch (herausforderungselement) {
        //   case herausforderung.iSayYes:
        //     ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0024);
        //     break;
        //   case herausforderung.iSayNo:
        //     ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0025);
        //     break;
        // }
        //   await ƒS.Sound.fade(sound.titletheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        //   console.log("audio is being played");
        //   await ƒS.Location.show(locations.background1); //Location initialisieren die in Main.ts definiert wurden
        //   console.log("Background is being displayed");
        //   await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge); //Ein Beispiel-Übergang der in Main.ts definiert wurde
        //   console.log("Transition is being displayed");
        //   await ƒS.Character.show(characters.whiteknight, characters.whiteknight.pose.standard, ƒS.positionPercent(10, 90)); //Charaktere mit deren Posen anzeigen die in Main.ts definiert wurden
        //   await ƒS.update(1); //Update funktion? Idk warum ehrlich gesagt
        //   await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0000); //Sprechtext wird eingeleitet
        //   await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0001); //Sprechtext 2 wird eingeleitet
        //   await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0002);
        //   await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0003, false);
        //   await ƒS.update(1);
        //   data.protagonist.name = await ƒS.Speech.getInput();
        //   characters.whiteknight.name = data.protagonist.name;
        //   await ƒS.Speech.tell(characters.narrator, data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem Fall beginnen.", true);
        //   console.log(data.protagonist.name);
        //   await ƒS.update(2);
        //   /*ƒS.Sound.play(sound.money, 0.3, false);*/ //Itemsound
        //   /*await ƒS.Character.animate(characters.geld, characters.geld.pose.normal, fromCenterToCenter()); */ //Animation des Charakters (in diesem Fall ein Item "Geld") wird gespielt
        //   await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0004); //Sprechtext wird eingeleitet
        //   // Novel Page 
        //   // Keine Ahnung was Novel Page ist amk
        //   // Kann sein dass das die Novel Page also quasi die aktuelle Stelle in der Handlung definiert und es als Text ausgibt. Entweder als Anzeige auf dem Bildschirm oder nur fürs Programm relevant  
        //   ƒS.Text.setClass("novel-page");
        //   ƒS.Text.print("34 Worlington Street");
        //   //Inventory Funktion
        //   /*ƒS.Inventory.add(items.money);
        //   await ƒS.Character.hide(characters.geld);
        //   await ƒS.update(1);
        //   await ƒS.Speech.tell(characters.camille, text.camille.T0004);
        //   */
        //   /*ƒS.Sound.play(sound.handy, 0.5, false);*/ //Weiterer Sound
        //   //Zeitliche Delay Funktion wird erwartet (bis Delay zuende ist?)
        //   await delay();
        //   //Entscheidungsoptionen
        //   let firstDialogueElementOptions = {
        //     iSayYes: "Anruf annehmen", //Passiert a
        //     iSayNo: "Anruf ignorieren" //Passiert b
        //   };
        //   let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        //   //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
        //   switch (firstDialogueElement) { //Wenn Auswahl "Anruf annehmen"
        //     case firstDialogueElementOptions.iSayYes:
        //     /* 
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0000);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0001);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0007);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0002);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0003);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0004);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0005);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0011);
        //      await ƒS.Speech.tell(characters.smith, text.smith.T0006);
        //      await ƒS.Speech.tell(characters.camille, text.camille.T0012);
        //      break;*/
        //     case firstDialogueElementOptions.iSayNo: //Wenn Auswahl "Anruf ablehnen"
        //     /*
        //       await ƒS.Speech.tell(characters.camille, text.camille.T0013);
        //       await ƒS.Speech.tell(characters.camille, text.camille.T0014);
        //       await ƒS.Speech.tell(characters.camille, text.camille.T0015);
        //       break;
        //       */
        //   }
        //   //Weitere CharakterAnimation
        //   /*await ƒS.Character.animate(characters.camille, characters.camille.pose.happy, fromLeftToRight());
        //   await ƒS.Character.hide(characters.camille);*/
        //   //Sound wird gespielt
        /*
        ƒS.Sound.fade(sound.backgroundBuero, 0, 0.2, true);
        */
        //Erwartet update 1? Immernoch keine Ahnung was das ist. Möglicherweise der letzte Schritt bis in die nächste Szene? Oder ein Mausklick? KEINE AHNUNG MAAN
        await Template.ƒS.update(1);
    }
    Template.Szene1 = Szene1;
})(Template || (Template = {}));
//FUNKTION FÜR SWITCH CASE MIT BEENDEN
//Entscheidung mithilfe von Array (wieder zurückkehren in switch funktion)
//let i: number = 0
//   let tutorial = ["Tour annehmen", "Trinken annehmen", "Konversation verlassen"];
//   let test = ["Tour annehmen", "Trinken annehmen", "Konversation verlassen"];
//   console.log(tutorial[2] != test[2]);
//   function mam(i: number): number {
//     x = i;
//   return i;
//   }
//   let x: number = 0;
//   while (mam(x) < 3) {
//   let tutorialauswahl = await ƒS.Menu.getInput(tutorial, "auswahl");
//   console.log(tutorial.length)
//   //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
//   switch (tutorialauswahl) { //Wenn Auswahl "Namen eingben"
//     case tutorial[0]:
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT010);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT011);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT012);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT013);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT014);
//       await ƒS.update(4);
//       tutorial.splice(0, 1, "");
//       break;
//     case tutorial[1]:
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT007);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT008);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT009);
//       await ƒS.update(4);
//       //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
//       tutorial.splice(1, 1, "");
//       break;
//     case tutorial[2]:
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT015);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT016);
//       await ƒS.update(4);
//       ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT017);
//       await ƒS.update(4);
//       tutorial.splice(2, 1, "");
//       mam(5);
//       break;
//     }
//     x++;
//  console.log(mam(x));
// }
//# sourceMappingURL=Template.js.map