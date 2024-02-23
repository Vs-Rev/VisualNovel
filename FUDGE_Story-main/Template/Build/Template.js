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
    Template.state = {
        a: 1,
    };
    Template.items = {
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
        Packt: {
            name: "BILLs Flamme",
            description: "Eine seltsame kalte blaue Flamme. Wenn BILL mit dir spricht, leuchtet sie stärker",
            image: "./Images/Inventory/BILLsPakt.png",
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
    };
    //SaveGame preparation
    Template.dataForSave = {
        //Hier Speicherbare Elemente eintragen
        protagonist: {
            name: "",
        },
        billspakt: false,
        billgetroffen: false,
        evil: 0,
        good: 0,
        entschuldigung: 0,
        Halisgefährteangenommen: true,
        Entscheidungsfrage1: 0,
        Entscheidungsfrage2: 0,
        Entscheidugnsfrage3: 0,
        Entscheidungsfrage4: 0,
        gefallen: 0,
    };
    async function horizontalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
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
    Template.horizontalShake = horizontalShake;
    // vertical Shaker
    async function verticalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
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
    Template.verticalShake = verticalShake;
    //Sounds
    Template.sound = {
        //music 
        examplemusic: "",
        titletheme: "./Audio/TitleTheme.wav",
        introductiontheme: "./Audio/Ambience/Introduction.wav",
        MysteryManTheme: "./Audio/MysteryMan_Theme.wav",
        Bedroom: "./Audio/Themes/Bedroom.wav",
        Meadow: "./Audio/Themes/Meadow.wav",
        Halistheme: "./Audio/Themes/HalisTheme.wav",
        MainTheme: "./Audio/Themes/MainTheme.wav",
        BillTheme: "./Audio/Themes/asd.wav",
        wachentheme: "./Audio/Themes/GuaridansTheme.wav",
        //sounds
        tension: "./Audio/Soundeffects/tension.wav",
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
        forest: "./Audio/Ambience/forest.wav",
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
    Template.locations = {
        waldweg: {
            name: "waldweg",
            background: "./Images/Backgrounds/Waldweg/waldweg.png",
        },
        fortsetzungfolgt: {
            name: "fortsetzungfolgt",
            background: "./Images/Backgrounds/fortsetzungfolgt.png",
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
        chapter2: {
            name: "chapter2",
            background: "./Images/Chapters/Chapter2.png",
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
        },
        schlossweitsicht: {
            name: "schlossweitsicht",
            background: "./Images/Backgrounds/Schloss/Castle.png",
        },
        TempelimWald: {
            name: "Tempel",
            background: "./Images/Backgrounds/Bill/Temple.png",
        },
        Schlosstor: {
            name: "Schlosstor",
            background: "./Images/Backgrounds/Schloss/Castlegate.png",
        },
        Thronsaal: {
            name: "Thronsaal",
            background: "./Images/Backgrounds/Schloss/throneroom.png",
        },
        Billsraum: {
            name: "Billsraum",
            background: "./Images/Backgrounds/Schloss/throneroomBILL.png",
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
    Template.characters = {
        narrator: {
            name: "narrator",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                standard: "./Images/Characters/Mysteryman/Mysteryman.png",
                eyesonly: "./Images/Characters/Mysteryman/Mysteryman_Eyesonly.png"
            }
        },
        MysteriousWoman: {
            name: "Mysteriöse Frau",
        },
        Wache1: {
            name: "Wache 1",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                standard: "./Images/Characters/Castle/wache1.png",
            }
        },
        Wache2: {
            name: "Wache 2",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                standard: "./Images/Characters/Castle/wache2.png",
            }
        },
        Berater: {
            name: "Königlicher Berater",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                standard: "./Images/Characters/Castle/berater.png",
            }
        },
        Bill: {
            name: "BILL",
            origin: Template.ƒS.ORIGIN.CENTER,
            pose: {
                standard: "./Images/Characters/Bill/BigSize/Bill_Standard-export.png",
                sauer: "./Images/Characters/Bill/BigSize/Bill_Angry-export.png",
                holy: "./Images/Characters/Bill/BigSize/Bill_Introduction-export.png",
                bored: "./Images/Characters/Bill/BigSize/Bill_Bored-export.png",
                happy: "./Images/Characters/Bill/BigSize/Bill_Happy-export.png",
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
            origin: Template.ƒS.ORIGIN.CENTER,
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
            name: Template.dataForSave.protagonist.name,
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
    function fromLeftToLeft() {
        return {
            start: { translation: Template.ƒS.positionPercent(75, 100) },
            end: { translation: Template.ƒS.positionPercent(100, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromLeftToLeft = fromLeftToLeft;
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
    function fromCenterToRight_Halistrator() {
        return {
            start: { translation: Template.ƒS.positionPercent(50, 48) },
            end: { translation: Template.ƒS.positionPercent(80, 48) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToRight_Halistrator = fromCenterToRight_Halistrator;
    function fromRightToCenter_Halistrator() {
        return {
            start: { translation: Template.ƒS.positionPercent(80, 48) },
            end: { translation: Template.ƒS.positionPercent(50, 48) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromRightToCenter_Halistrator = fromRightToCenter_Halistrator;
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
            "The Tale of a Knight - by Vasilii Gurev" +
            "<br/>" +
            "-------------" + "<br/>" +
            "Die Transitions wurden sowohl aus dem FreeTransitions Ordner verwendet als auch selbst erstellt." +
            "<br/>" +
            "Der Großteil der Geräuschkulisse wurde selbst erstellt und zum Teil von Freesound.org mit einer Royalty Free Lizenz verwendet." +
            "<br/>" +
            "-------------" + "<br/>" +
            "Musik" + "<br/>" +
            "*----Vasilii Gurev----*" + "<br/>" +
            "-------------" + "<br/>" +
            "Hintergründe" + "<br/>" +
            "*----Vasilii Gurev----*" + "<br/>" +
            "-------------" + "<br/>" +
            "Story" + "<br/>" +
            "*----Vasilii Gurev----*" + "<br/>" +
            "-------------" + "<br/>" +
            "Charaktere" + "<br/>" +
            "*----Vasilii Gurev----*" + "<br/>" +
            "Konzept" + "<br/>" +
            "*----Vasilii Gurev----*" + "<br/>" +
            "-------------" + "<br/>" + "<br/>" + "<br/>" + "<br/>" +
            "EXTERNE INHALTE" + "<br/>" + "<br/>" + "<br/>" + "<br/>" +
            "-------------" + "<br/>" +
            "Charaktere" + "<br/>" +
            "*----Nina Distler----*" + "<br/>" +
            "Wache 1" + "<br/>" +
            "Wache 2" + "<br/>" +
            "Königlicher Berater" + "<br/>" +
            "-------------" + "<br/>" +
            "Hintergründe" + "<br/>" +
            "*----DALL·E----*" + "<br/>" +
            "Wiesen des Friedens" + "<br/>" +
            "Schloss am Ufer" + "<br/>" +
            "Wald des Vergessenen" + "<br/>" +
            "Tor vor dem Schloss" + "<br/>" +
            "Thornsaal" + "<br/>" +
            "BILLs Thronsaal" + "<br/>" +
            "-------------" + "<br/>" +
            "Inventar" + "<br/>" +
            "*----DALL·E----*" + "<br/>" +
            "Kleidung" + "<br/>" +
            "BILLs Pakt" + "<br/>" +
            "-------------" + "<br/>" +
            "SFX" + "<br/>" +
            "*----Freesound.org----*" + "<br/>" +
            "Bezogen und bearbeitet mit einer Royalty free Linzenz" + "<br/>" +
            "-------------" + "<br/>" +
            "Eine Geschichte inspiriert von UNDERTALE by Toby Fox" + "<br/>");
    }
    Template.showCredits = showCredits;
    function showSteuerung() {
        Template.ƒS.Text.addClass("steuerung");
        Template.ƒS.Text.print("<h2>Steuerungsübersicht</h2>" +
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
            "<br/>" +
            "-------------" + "<br/>" +
            "<h1>[Kämpfen]</h1>" + "<br/>" +
            "In dieser Visual Novel wird es viele Herausforderungen geben, die jedoch nicht mit Kämpfen gelöst werden. In der Welt von Verdantia steht jeder auf Musik. Gewinne im GrooveWettbewerb indem deine Groove Leiste gefüllt wird. Eine Niederlage erfolgt, sobald du 3 Mal bei einer Leeren Anzeige einen Minusgroove erhältst.");
    }
    Template.showSteuerung = showSteuerung;
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
            case inGameMenu.inventar:
                await Template.ƒS.Inventory.open();
                await Template.ƒS.update();
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
            { id: "Szene0_1", scene: Template.Szene0_1, name: "Szene0_1" },
            { id: "Szene1_1", scene: Template.Szene1_1, name: "Szene1_1" },
            { id: "Szene1_2", scene: Template.Szene1_2, name: "Szene1_2" },
            { id: "Szene1_3", scene: Template.Szene1_3, name: "Szene1_3" },
            { id: "Szene1_4", scene: Template.Szene1_4, name: "Szene1_4" },
            { id: "Szene1_6", scene: Template.Szene1_6, name: "Szene1_6" },
            { id: "Szene4_1", scene: Template.Szene4_1, name: "Szene4_1" },
            { id: "Szene4_2", scene: Template.Szene4_2, name: "Szene4_2" },
            { id: "Szene4_3", scene: Template.Szene4_3, name: "Szene4_3" },
            //{ id:"Szene5_Entscheidung",scene: Szene5_Entscheidung, name: "Szene5_Entscheidung" },
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
    async function Szene0_1() {
        console.log("FudgeStory Template Scene0 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T000: "Irgendwann kommt der Moment, in dem du entscheiden musst, ob du die Seite umblätterst, oder das Buch schließt.",
            },
        };
        //Szenenablauf
        Template.ƒS.Sound.setMasterVolume(8);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T000, true, true, 50, 50, Template.sound.MainNarrator, 100);
        Template.ƒS.Speech.hide();
        Template.ƒS.Sound.play(Template.sound.chaptertransition, 0.05, false);
        await Template.ƒS.Location.show(Template.locations.tipp1);
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.chaptertransition, 0.05, false);
        await Template.ƒS.Location.show(Template.locations.tipp2);
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.chaptertransition, 0.05, false);
        await Template.ƒS.Location.show(Template.locations.tipp3);
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.chaptertransition, 0.05, false);
        await Template.ƒS.Location.show(Template.locations.tipp4);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.blackscreen, 0.05, false);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(10);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
    }
    Template.Szene0_1 = Szene0_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1_1() {
        console.log("FudgeStory Template Scene1 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T0000: "...",
                T0001: "...",
                T0002: "Oh,",
                T0003: "Entschuldige meine Unachtsamkeit...",
                T0004: "Ich war ganz in Gedanken versunken.",
                T0005: "Kannst du mich sehen?",
                T1005: "Ich kann dich leider nicht sehen.",
                T1006: "Würdest du mir einen Gefallen tun und",
                T1007: "... mich ins Licht rücken?",
                T0006: "Ist es nicht besser, eine Kerze anzuzünden, als die Dunkelheit zu verfluchen?",
                T0007: "Da wir gerade dabei sind, uns kennenzulernen, würdest du mir deinen Namen verraten?",
                T0008: "Das ist sehr freundlich von dir!",
                T0009: "...",
                T0010: "Mach es nicht so spannend. Wie heißt du?",
                T0011: "... ein alltäglicher Name.",
                T0012: "Dein Name ist also",
                T0013: "...",
                T0014: "Ablehnen?",
                T0015: "Tut mir leid. Dieser Name ist schon vergeben.",
                T0016: "Ich hätte mir an deiner Stelle sowieso einen besseren Namen ausgesucht.",
                T0017: "Also, wie lautet dein richtiger Name?",
                T0018: "Gut, dann übernehme ich die Entscheidung für dich...",
                T0019: "Also... dein Name ist:",
                T0020: "Ah, bevor ich es vergesse...",
                T0021: "Eine heldenhafte Reise in ein längst vergessenes Königreich voller Herausforderungen, Tücken und Gefahren erwartet dich.",
                T0022: "Bevor wir diese Geschichte beginnen, muss ich wissen...",
                T0023: "Bist du bereit für diese Herausforderung?",
                T0024: "Fantastisch!!!",
                T0025: " war definitiv nicht darauf vorbereitet, aber ",
                T1026: " hatte keine andere Wahl",
                // Licht an
                L0001: "Großartig!",
                L0002: "Es gibt keinen Lichtschalter...",
                L0003: "Aber es ist der Gedanke, der zählt. Warte, ich kümmere mich darum.",
                // Licht aus
                L0004: "Möchtest du wirklich weiterhin vor einem dunklen Bildschirm sitzen?",
                L0005: "Lass mich mal versuchen.",
                // Tutorial
                TT001: ", heute ist dein Glückstag!",
                TT002: "Sieht so aus, als wärst du jetzt auch hier gefangen. Aber immerhin mit mir!",
                TT003: "Wir werden eine Menge Spaß zusammen haben!",
                TT004: "Wie wäre es mit einer kleinen Führung?",
                TT005: "Oder hättest du gerne etwas zu trinken?",
                TT006: "Oder wir könnten auch einfach in Stille verweilen und nichts tun.",
                // Trinken
                TT007: "Gerne, was hättest du denn gerne?",
                TT008: "Oh, Moment...",
                TT009: "Es scheint, ich habe hier gar nichts.",
                // Tour
                TT010: "Wunderbar!",
                TT011: "Hmm...",
                TT012: "Ich fürchte, ich habe hier nicht viel zu zeigen...",
                TT013: "Aber sieh nur! Dieses Leuchten dort. Es ist so...",
                TT014: "... erhellend.",
                // Beenden
                TT015: "Spiel wird beendet...",
                TT016: "Bitte warten...",
                TT017: "Speicherstände werden erstellt...",
                TT018: "Beenden fehlgeschlagen",
                TT019: "Sieht so aus, als gäbe es keinen Ausweg, nicht wahr?",
                T0026: "Mir ist gerade etwas eingefallen!",
                T0027: "Die Leute lieben meine Geschichten.",
                T0028: "Davon habe ich reichlich zu erzählen.",
                T0029: "Möchtest du eine hören?",
                // Geschichte erzählen
                G0014: "Das freut mich!",
                G0015: "Es ist schon eine Weile her, dass jemand meinen Geschichten gelauscht hat.",
                G0016: "Aber diese Geschichte wird dich sicher fesseln.",
                G0017: "Bereite dich mental darauf vor.",
                G0018: "Kann ich dir dabei helfen?",
                // Nach dem Herrn fragen
                G0001: "Es freut mich, dass du Interesse an mir zeigst.",
                G0002: "Leider...",
                G0003: "kann ich mich nicht mehr an meinen Namen erinnern...",
                G0004: "ebenso wenig, wie ich hierher gekommen bin.",
                G0005: "Ich weiß nur, dass ich schon eine Ewigkeit hier feststecke.",
                G0006: "Falls du einen Weg findest, von diesem Ort zu entkommen...",
                G0007: "Bitte lass es mich wissen, ja?",
                // Nach der Umgebung fragen
                G0008: "Wo wir sind?",
                G0009: "Ich bin mir nicht ganz sicher.",
                G0010: "Alles kommt mir bekannt vor, verhält sich aber seltsam.",
                G0011: "Je länger du hier verweilst, desto mehr Erinnerungen verblassen.",
                G0012: "...",
                G0013: "Was habe ich gerade gesagt?",
                // Tutorial spielen
                T0030: "Alles klar...",
                T0031: "Moment...",
                T0032: "Es fällt mir gerade auf, dass es noch gar kein Tutorial gibt...",
                T0033: "Ich bin sicher, du kommst auch ohne zurecht.",
                // Tutorial nicht spielen
                T0034: "Ah, du magst also direktes Handeln?",
                T0035: "Aber beschwer dich später nicht, ich habe dich gewarnt.",
                T0036: "Jegliche Haftung für körperliche oder geistige Schäden ist hiermit ausgeschlossen... heh",
                T0037: "Jetzt mach es dir bequem und hör gut zu..."
            }
        };
        //Szenenablauf
        Template.ƒS.Sound.setMasterVolume(8);
        await Template.ƒS.Sound.fade(Template.sound.darkwind, .02, 10, true); //Der Sound der in Main.ts definiert wurde
        console.log("audio is being played");
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.newversion, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(10);
        Template.state.a = 10;
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
                //InventarItem
                //ƒS.Inventory.add(items.pageVampire); 
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
                Template.dataForSave.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.dataForSave.protagonist.name;
                await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + " also?", true, true, 4, 50, Template.sound.MainNarrator, 2);
                //stimme("Ein sehr. . .");
                await Template.satzbau(Template.characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, Template.sound.MainNarrator, 2);
                console.log(Template.dataForSave.protagonist.name);
                break;
            case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0013, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0014, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0015, true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0016, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0017, false, false, 3, 50, Template.sound.MainNarrator, 2);
                Template.dataForSave.protagonist.name = await Template.ƒS.Speech.getInput();
                Template.characters.whiteknight.name = Template.dataForSave.protagonist.name;
                await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + " also?", true, true, 4, 50, Template.sound.MainNarrator, 2);
                //stimme("Ein sehr. . .");
                await Template.satzbau(Template.characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, Template.sound.MainNarrator, 2);
                console.log(Template.dataForSave.protagonist.name);
                break;
        }
        await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.TT001, true, true, 5, 50, Template.sound.MainNarrator, 3);
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
                    Template.horizontalShake();
                    await Template.ƒS.Sound.play(Template.sound.glitch, 0.05);
                    await Template.ƒS.update(4);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT018, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.TT019, true, true, 4, 50, Template.sound.MainNarrator, 2);
                    await Template.ƒS.Location.show(Template.locations.startscreenbackground);
                    await Template.ƒS.update(1);
                    await Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.ƒS.positionPercent(10, 80));
                    await Template.ƒS.Sound.fade(Template.sound.darkwind, .02, 10, true);
                    await Template.ƒS.update(3);
                    tutorial.splice(2, 1, "");
                    break;
            }
            i++;
        }
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0026, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0027, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0028, true, true, 4, 50, Template.sound.MainNarrator, 2);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0029 + " " + Template.dataForSave.protagonist.name + "?", false, false, 4, 50, Template.sound.MainNarrator, 2);
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
                    await Template.ƒS.Sound.fade(Template.sound.MainTheme, .03, 10, true); //Der Sound der in Main.ts definiert wurde
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
                await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.T0025 + Template.dataForSave.protagonist.name + text.MainNarrator.T1026, true, true, 10, 50, Template.sound.MainNarrator, 5);
                break;
        }
        await Template.ƒS.Character.animate(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.fromLeftToCenter());
        await Template.ƒS.Character.hide(Template.characters.narrator);
        await Template.ƒS.update(2);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0037, true, true, 3, 50, Template.sound.MainNarrator, 2);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.darkwind, 0, 5, false);
        await Template.ƒS.Sound.fade(Template.sound.MainTheme, 0, 5, false);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
    }
    Template.Szene1_1 = Szene1_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1_2() {
        console.log("FudgeStory Template Scene2 starting");
        //Gesprochener Text
        let text = {
            MainNarrator: {
                M0000: "Wach auf!",
                // Aufwachen ja
                M0001: "Hast du vielleicht etwas Wichtiges vergessen?",
                M0002: "Etwas SEHR Wichtiges?",
                M1003: "Deine Eltern sind für zwei Wochen im Urlaub.",
                M1004: "Du bist verantwortlich für das Haus und deine Schwester.",
                M1005: "Sie bleibt heute länger in der Schule wegen des Geschichtserzähltags. Es ist bereits dunkel; du solltest sie abholen.",
                M1006: "Das ist etwas...",
                M1007: "was man nicht einfach vergessen sollte.",
                M1008: "Doch.",
                M1009: "Doch!",
                M1010: "DOCH!",
                M0003: "",
                M0004: "stand letztendlich auf.",
                // Aufwachen nein
                M0005: "blieb liegen und verpasste das Spannende.",
                M0006: "Ende.",
                M0007: "Wie fandest du die Geschichte?",
                M2008: "Nicht gut?",
                M2009: "Verständlich, bisher ist noch nicht viel passiert.",
                M2010: "Also steh auf und trödel nicht!",
                M0008: "Kein Grund, gleich so aufzubrausen.",
                M0009: "Spar dir deine Energie lieber für später.",
                M0010: "Gute Einstellung. Besser, sich nicht unnötig aufzuregen.",
                M0011: "Aber ich glaube...",
                M0012: "du ahnst noch nicht, was alles auf dich zukommt.",
                M0013: "Schweigen kann auch eine Antwort sein...",
                M0014: "wenn auch keine gute.",
                M0015: "Wie dem auch sei...",
                M0020: "Zimmer verlassen.",
                M0021: "Gute Idee! Zieh dich ordentlich an, bevor du gehst.",
                M0022: "Kleidung hinzugefügt.",
                M0023: "Du entscheidest dich...",
                M0024: "fürs Nichtstun...",
                M0025: "Wie originell...",
                M0026: "Moment!",
                M0027: "Deine Entschlossenheit imponiert mir, aber in Schlafsachen zur Schule deiner Schwester zu gehen ist keine gute Idee.",
                M0028: "Warte, ich helfe dir...",
                M0029: "Bitte sehr!",
                M0030: "Du solltest dich langsam auf den Weg machen.",
                M0031: "Deine Schwester wartet schon auf dich.",
                M0032: "Oder noch schlimmer...",
                M0033: "Mit dem Fahrrad?",
                M0034: "Du scheinst motiviert zu sein...",
                M0035: "Na dann, tritt kräftig in die Pedale!",
                M0036: "Zu Fuß?",
                M0037: "Sportlich...",
                M0038: "Aber nicht gerade die beste Wahl, wenn du ohnehin schon spät dran bist...",
                M0039: "Mit dem Bus?",
                M0040: "Bescheiden...",
                M0041: "Aber beeil dich!",
                M0042: "Mit der Bahn?",
                M0043: "Das scheint wohl die schnellste Option zu sein.",
                M0044: "Auf geht's!"
            },
            whiteknight: {},
        };
        //dataForSave.protagonist.name = "Brani";
        //characters.whiteknight.name = dataForSave.protagonist.name;
        Template.ƒS.Sound.setMasterVolume(8);
        Template.ƒS.Sound.play(Template.sound.chaptertransition, .02, false);
        await Template.ƒS.Location.show(Template.locations.prolog);
        await Template.ƒS.update(5);
        await Template.ƒS.Progress.save();
        await Template.ƒS.update(1);
        await Template.ƒS.update(5);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        await Template.ƒS.update(5);
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
                Template.dataForSave.good + 1;
                console.log(Template.dataForSave.good);
                await Template.ƒS.Speech.hide();
                await Template.ƒS.Sound.fade(Template.sound.Bedroom, 0.05, 4, true);
                await Template.ƒS.update(1);
                await Template.ƒS.Location.show(Template.locations.homeroom);
                await Template.ƒS.update(5);
                await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                break;
            case aufwachen.liegenbleiben:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.Speech.hide();
                console.log(Template.dataForSave);
                Template.dataForSave.evil + 1;
                console.log(Template.dataForSave.evil);
                await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0005, true, true, 3, 50, Template.sound.MainNarrator, 1);
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
                    Template.dataForSave.good + 1;
                    await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0010, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0011, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0012, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    break;
                case Benehmen.wütend:
                    Template.dataForSave.evil + 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0008, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0009, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
                    break;
                case Benehmen.nichts:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0013, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0014, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.M0015, true, true, 5, 50, Template.sound.MainNarrator, 1);
                    await Template.satzbau(Template.characters.MainNarrator, Template.dataForSave.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
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
                    Template.ƒS.Inventory.add(Template.items.Kleidung);
                    Aktion01.splice(1, 1, "");
                    break;
                case Aktion01[2]:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.dataForSave.good + 1;
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
            Template.ƒS.Inventory.add(Template.items.Kleidung);
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
        /*await ƒS.update(2);
        await ƒS.Sound.play(sound.buttonhover, .2, false);
      let transportmethode: number = 0;
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
        let transportelement = await ƒS.Menu.getInput(transport, "auswahl");
        switch (transportelement) {
          case transport.Fahrrad:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0033 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0034 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0035 , true, true, 5, 50, sound.MainNarrator, 1);
            transportmethode = 1;
            break;
          case transport.Bus:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0039 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0040 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0041 , true, true, 5, 50, sound.MainNarrator, 1);
            transportmethode = 2;
            break;
          case transport.Bahn:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0042 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0044 , true, true, 5, 50, sound.MainNarrator, 1);
            transportmethode = 3;
            break;
          case transport.Fuß:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0036 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0037 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0038 , true, true, 5, 50, sound.MainNarrator, 1);
            await satzbau(characters.MainNarrator, text.MainNarrator.M0035 , true, true, 5, 50, sound.MainNarrator, 1);
            transportmethode = 4;
            break;
        }
        ƒS.Speech.clear();
        await ƒS.Location.show(locations.blackbackground);
        await ƒS.update(2);
        await ƒS.Sound.fade(sound.Bedroom, 0, 4, true);
        await ƒS.update(1);
      
        if(transportmethode == 1 ){
          await ƒS.Sound.fade(sound.bicycle, 0.05, 3, false);
          await ƒS.Sound.fade(sound.bicycle, 0.05, 3, false);
        }
        if(transportmethode == 2 ){
          await ƒS.Sound.fade(sound.bus, 0.05, 3, false);
          await ƒS.Sound.fade(sound.bus, 0.05, 3, false);
          
        }
        if(transportmethode == 3 ){
          await ƒS.Sound.fade(sound.train, 0.05, 3, false);
          await ƒS.Sound.fade(sound.train, 0.05, 3, false);
          
        }
        if(transportmethode == 4 ){
          await ƒS.Sound.fade(sound.walking, 0.05, 3, false);
          await animationwalking();
          await ƒS.Sound.fade(sound.walking, 0.05, 3, false);
          return "zufuß";
        }*/
        //return "Szene1_3";
        await Template.ƒS.Sound.fade(Template.sound.Bedroom, 0, 1, false);
        Template.ƒS.Location.show(Template.locations.blackbackground);
        Template.ƒS.update(2);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
    }
    Template.Szene1_2 = Szene1_2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1_3() {
        console.log("FudgeStory Template zufuß starting");
        //Gesprochener Text
        let text = {
            MainNarrator: {
                M0000: "Eine dieser perfekten Nächte, findest du nicht auch?",
                M0001: "Die Ruhe vor dem Sturm, wie man so schön sagt.",
                M0002: "Lass uns einen Moment innehalten und die Stille genießen.",
                M0003: "Nur für einen kurzen Augenblick, umgeben von vollkommener Ruhe...",
                M0004: "...",
                M0005: "Ist das wirklich nötig?",
                M0006: "Komm schon, geh schon ran.",
                M0007: "",
                // Entschuldigung annehmen
                M0008: "...",
                M0009: "Ich überlasse die Entscheidung dir.",
                // Telefonat ablehnen
                M0010: "Danke. Lass uns mit unserer Geschichte fortfahren...",
                M0011: "Beeil dich, es wird bereits spät!",
            },
            Elo: {
                E0000: "Hey, ",
                E0001: "Ich muss dir etwas sagen...",
                E0002: "Es tut mir leid wegen gestern... Ich hätte nicht so reagieren sollen.",
                E0003: "Ich hätte keinen solchen Aufstand machen dürfen.",
                E0004: "Es kam alles so überraschend und unerwartet...",
                E0005: "Kannst du mir verzeihen?",
                // Entschuldigung annehmen
                E0006: "Das bedeutet mir viel...",
                E0007: "Das beruhigt mich wirklich. Danke.",
                E0008: "Ich hoffe, wir sehen uns bald wieder.",
                E0009: "Ach ja, und vergiss nicht, deine Schwester abzuholen.",
                E0010: "Ich kenne deine Vergesslichkeit!!!",
                E0011: "Tschüss!",
                // Entschuldigung ablehnen
                E0012: "Ich dachte mir schon, dass du es nicht verstehen würdest...",
                // Unklarheit
                E0013: "Ah...",
                E0014: "Alles klar, wir lassen das Thema ruhen.",
                E0015: "Danke dir.",
            },
        };
        //await ƒS.Sound.fade(sound.introductiontheme, 0.3, 3, true);
        //data.protagonist.name = "Halis";
        //characters.whiteknight.name = data.protagonist.name;
        /*dataForSave.protagonist.name = "Brani";
        characters.whiteknight.name = dataForSave.protagonist.name;*/
        await Template.ƒS.Location.show(Template.locations.waldweg);
        await Template.ƒS.update(3);
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
                await Template.satzbau(Template.characters.Elo, text.Elo.E0000 + Template.dataForSave.protagonist.name, true, true, 5, 50, Template.sound.Elo, 1);
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
                Template.dataForSave.entschuldigung == 2;
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
                    Template.dataForSave.entschuldigung = 1;
                    break;
                case entschuldigung.ablehnen:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    Template.dataForSave.entschuldigung = 3;
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
                    Template.dataForSave.entschuldigung = 1;
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
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.nightambience, 0, 2, true);
        await Template.ƒS.update(5);
        Template.ƒS.Location.show(Template.locations.blackbackground);
        Template.ƒS.update(2);
        //return "Szene4_1";
    }
    Template.Szene1_3 = Szene1_3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1_4() {
        console.log("FudgeStory Template Scene3 starting");
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T0000: "Endlich angekommen.",
                T0001: "Die Show ist noch im Gange. Wir können schon mal reingehen.",
                T0002: "Was meinst du?",
                // Hineingehen
                T0003: "Okay, dann lass uns reingehen.",
                T0004: "Mal sehen, ob wir noch einen guten Platz finden.",
                T0005: "Ticket erhalten.",
                // Bei abgelehnter Entschuldigung (entschuldigung: 0):
                T0006: "Dafür brauchen wir ein Ticket.",
                T0007: "Und da liegt das Problem.",
                T0008: "Es sieht so aus, als hätten wir hier wenig Auswahl.",
                T0009: "Vielleicht könnten wir uns...",
                T0010: "einschleichen?",
                T0011: "Warum einschleichen, wenn wir doch bereits Platz nehmen könnten?",
                T0012: "Ah, du suchst den Nervenkitzel.",
                T0013: "In Ordnung...",
                T0014: "Was ist los?",
                T0015: "Dich aufhalten? Warum sollte ich?",
                T0016: "Das macht die Sache doch erst richtig spannend.",
                T0017: "Gut, dann lass uns schnell sein, bevor die Vorstellung beginnt.",
                T0018: "Mutig. Aber wie heißt es so schön: Wer nicht wagt, der nicht gewinnt.",
                T0019: "Stimmt's?",
                T0020: "Jetzt liegt es an dir.",
                T0021: "Meine Schwester...",
                T0022: "Ich habe total vergessen, dass sie heute auftritt.",
                T0023: "Deshalb habe ich kein Ticket besorgt.",
                T0024: "Sie ist noch so jung...",
                T0025: "Ich muss sie nach der Vorstellung nach Hause bringen.",
                T0026: "Ich möchte die Vorstellung mit ihr zusammen sehen.",
                T0027: "Sonst ist sie bestimmt traurig...",
                T0028: "Du wurdest bemerkt.",
                T0029: "Was nun?",
                T0030: "...",
                T0031: "Glück gehabt.",
                T0032: "Du zeigst dein Ticket.",
                T0033: "Mit dem Kopf durch die Wand...",
                T0034: "Mal sehen, ob das gutgeht.",
            },
            School: {
                S0000: "ERINNERUNG",
                S0001: "DIE LETZTE VORSTELLUNG BEGINNT BALD",
                S0002: "BITTE NEHMEN SIE IHRE PLÄTZE EIN",
                S0003: "ACHTUNG",
                S0004: "LETZTER AUFRUF",
                S0005: "ALLE ZUSCHAUER, BITTE NEHMEN SIE JETZT IHRE PLÄTZE EIN",
                S0006: "DIE LETZTE VORSTELLUNG BEGINNT IN KÜRZE",
            },
            Elo: {
                // Bei angenommener Entschuldigung (entschuldigung: 1):
                E0000: "Hey, du bist ja mal pünktlich!",
                E0001: "Du wirst ja immer besser.",
                E0002: "Hast du denn schon einen Platz reserviert?",
                E0003: "Die Halle ist voll, alle Plätze sind belegt.",
                E0004: "Ich habe extra einen Platz neben mir freigehalten.",
                E0005: "Du bist ja kein Fremder.",
                E0006: "Wenn du möchtest, kannst du dich neben mich setzen, bis die Show vorbei ist.",
                // Platz nehmen
                E0007: "Super, ich hol uns was zu trinken. Geh schon mal vor. Hier ist deine Karte.",
                // Anruf ignoriert (entschuldigung: 2):
                E0008: "Hey, ich habe versucht, dich zu erreichen. Warst wohl beschäftigt...",
                E0009: "Hör zu...",
                E0010: "Eigentlich wollte ich mich entschuldigen...",
                E0011: "Ach, egal.",
                E0012: "Das kann warten. Lass uns loslegen.",
                E0013: "Ich möchte die letzte Vorführung nicht verpassen. Ich liebe Geschichten.",
                // Platz ablehnen
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
                T1019: ". . .",
                T1020: "Moment. . .",
                T1021: "Ich kann doch nicht einfach gegen ein Kind kämpfen",
                T1022: "Oder. . .",
                T1023: "Nein! Du hast Glück gehabt!",
                T1024: "Ich lass dich noch davon kommen. . .",
                T1025: "Jetzt verschwinde!",
                T1026: ". . .",
                T1027: "Andererseits. . .",
                T1028: "Es gäbe drinnen noch ein Platz. . .",
                T1029: "Noch E-EIN TICKET das nicht verkauft wurde. . .",
                T1030: "Ich könnte es dir geben. . .",
                T1031: "Wenn du mir einen Gefallen tust. . .",
                //Gefallen
                T2001: "Du willst garnicht hören worum es sich handelt?",
                T2002: "Gut, jedem das seine schätze ich. . .",
                T2003: "Merk dir das. Du schuldest mir einen Gefallen",
                T2004: "Vielleicht nicht jetzt",
                T2005: "Vielleicht nicht heute. . .",
                T2006: "Vielleicht nicht nächsten Monat. . .",
                T2007: "ABER DU SCHULDEST MIR EINEN GEFALLEN",
                T2008: "Ich drücke für dich ein Auge zu. . .",
                T2009: "Dieses EINE Mal",
                T2010: "Jetzt geh schon, bevor ich es mir anders überlege!",
                //reinlaufen
                T3001: "Hey ähm. . . was machst du da?",
                T3002: "HEY!!!",
                T3003: "Du kannst doch nicht einfach so reinlaufen ohne ein Ticket!",
                T3004: "Oder kannst du das?",
                T3005: "Vielleicht kann er das. . .",
                T3006: "Das wird ein Nachspiel haben!",
                T3007: "Das wirst du schon sehen!!!",
                T3008: "Du wirst schon sehen was es heißt, mich DEN TICKETKONTROLLEUR zu überlisten!",
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
                T0040: "Komm das nächste mal etwas früher ja?",
                T0041: "Ja? Was ist mit deiner Schwester?",
                T0042: "Nun gut, ich lass dir das außnahmsweise mal durchgehen. . .",
                //Schleichen
                T0043: "HEY!",
                T00442: "Wer schleicht hier rum! Zeig dich!",
                T0044: "Dachtest du wirklich du könntest einfach so in das Theater schleichen?",
                T0045: "Noch schlimmer!",
                T0046: "Du dachtest du könntest einfach an MIR vorbeischleichen?!",
                T0047: "An MIR dem GROßEN TICKETVERKÄUFER!",
                T0048: "Wie töricht!",
                T0049: "Erkläre dich jetzt und sofort!",
                T0050: "Moment du bist doch ein Schüler oder?",
                T0051: "Naja ich bin mir sicher du hast deine Gründe",
                T0052: "Ich mache für dich eine Ausnahme",
                T0053: "Aber nur dieses EINE MAL",
                T0054: "Viel Spaß, geh durch und mach keinen Ärger",
            }
        };
        let umsehen = 0;
        let ticketbekommen = 0;
        let sneaken = 0;
        let überreden = 0;
        let lügen = 0;
        //testing
        //Theater Front
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
        //Umschauen ja oder nein
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
                ticketbekommen = 2;
                break;
            case reingehen.umsehen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0000, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0001, true, true, 5, 50, Template.sound.School, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.School.S0002, true, true, 5, 50, Template.sound.School, 2);
                umsehen = 1;
                if (umsehen == 1) {
                    //entschuldigung = angenommen
                    if (Template.dataForSave.entschuldigung == 1) {
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
                                Template.ƒS.Inventory.add(Template.items.Ticket);
                                ticketbekommen = 1;
                                break;
                            case setzen.ablehnen:
                                await Template.buttonpress(Template.sound.buttonpress, .2);
                                Template.dataForSave.evil + 1;
                                await Template.satzbau(Template.characters.Elo, text.Elo.E0014, true, true, 5, 50, Template.sound.Elo, 2);
                                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0007, true, true, 5, 50, Template.sound.MainNarrator, 2);
                                ticketbekommen = 2;
                                break;
                        }
                    }
                    //entschuldigung = Anruf abgelehnt
                    if (Template.dataForSave.entschuldigung == 2) {
                        ticketbekommen = 2;
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
                    if (Template.dataForSave.entschuldigung == 3) {
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0008, true, true, 5, 50, Template.sound.MainNarrator, 2);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0009, true, true, 5, 50, Template.sound.MainNarrator, 2);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0010, false, false, 5, 50, Template.sound.MainNarrator, 2);
                        ticketbekommen == 2;
                    }
                }
                break;
        }
        //Ticket erhalten
        if (ticketbekommen == 1) {
            console.log("Hollalaaaa");
            let saalbetreten = {
                rein: "Saal betreten",
                //reinschleich: "Reinschleichen",
            };
            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            let ticketelement = await Template.ƒS.Menu.getInput(saalbetreten, "auswahl");
            switch (ticketelement) {
                case saalbetreten.rein:
                    Template.dataForSave.good + 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0017, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    break;
                /*case saalbetreten.reinschleich:
                  dataForSave.evil + 1;
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 5, 50, sound.MainNarrator, 2);
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, sound.MainNarrator, 2);
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0013, true, true, 5, 50, sound.MainNarrator, 2);
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0014, true, true, 5, 50, sound.MainNarrator, 2);
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0015, true, true, 5, 50, sound.MainNarrator, 2);
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0016, false, false, 5, 50, sound.MainNarrator, 2);
                  sneaken = 1;
                  console.log(sneaken);
                  break;*/
            }
        }
        if (ticketbekommen == 2) {
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0031, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0032, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0033, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
            let saalbetreten = {
                überzeugen: "Ticketkontrolleur überreden",
                //schleichen: "Reinschleichen",
            };
            let ticketelement = await Template.ƒS.Menu.getInput(saalbetreten, "auswahl");
            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            switch (ticketelement) {
                case saalbetreten.überzeugen:
                    Template.dataForSave.good + 1;
                    überreden = 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, Template.sound.MainNarrator, 2);
                    break;
                /*case saalbetreten.schleichen:
                  dataForSave.evil + 1;
                  sneaken = 1;
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, sound.MainNarrator, 2);
                  await satzbau(characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, sound.MainNarrator, 2);
                  break;
              }*/
            }
            //Überzeugen
            if (überreden == 1) {
                //Abwägen von Good und Evil
                if (Template.dataForSave.good > Template.dataForSave.evil) {
                    //ja kein Problem, passiert dies das. Von mir aus kannst du rein. Aber nur eine Außnahme
                }
                if (Template.dataForSave.evil >= Template.dataForSave.good) {
                    //Sag mal wie kannst du nur bla bla bla - Überreden
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
                        schwester: "Meine Schwester",
                        drohen: "Wie kannst du es wagen?",
                    };
                    let überredenelement = await Template.ƒS.Menu.getInput(ticketgespräch, "auswahl");
                    await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
                    switch (überredenelement) {
                        case ticketgespräch.schwester:
                            await Template.buttonpress(Template.sound.buttonpress, .2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0021, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0041, false, false, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0022, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0023, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0024, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0025, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0026, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0027, true, true, 5, 50, Template.sound.MainNarrator, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0052, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0053, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0054, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            break;
                        case ticketgespräch.drohen:
                            Template.dataForSave.evil + 1;
                            await Template.buttonpress(Template.sound.buttonpress, .2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0011, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0012, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0013, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0014, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0015, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0016, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0017, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T0018, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            //await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0019, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1020, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1021, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1022, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1023, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1024, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1025, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            //andererseits bla bla
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1026, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1027, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1028, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1029, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1030, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T1031, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                            sneaken = 1;
                            let einengefallen = {
                                gefallenzustimmen: "Gefallen erwidern",
                                reinlaufen: "Einfach reinlaufen",
                            };
                            let eingefallenelement = await Template.ƒS.Menu.getInput(einengefallen, "auswahl");
                            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
                            switch (eingefallenelement) {
                                case einengefallen.gefallenzustimmen:
                                    await Template.buttonpress(Template.sound.buttonpress, .2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2001, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2002, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2003, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2004, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2005, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2006, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2007, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2008, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2009, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T2010, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    Template.dataForSave.gefallen = 1;
                                    break;
                                case einengefallen.reinlaufen:
                                    Template.dataForSave.evil + 1;
                                    await Template.buttonpress(Template.sound.buttonpress, .2);
                                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0033, true, true, 5, 50, Template.sound.MainNarrator, 2);
                                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0034, true, true, 5, 50, Template.sound.MainNarrator, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3001, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3002, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3003, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3004, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3005, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3006, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3007, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    await Template.satzbau(Template.characters.Ticketkontrolleur, text.Ticketkontrolleur.T3008, true, true, 5, 50, Template.sound.Ticketkontrolleur, 2);
                                    break;
                            }
                    }
                }
                /*if (sneaken == 1) {
                  dataForSave.evil + 1;
                  if (ticketbekommen == 2) {
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 5, 50, sound.MainNarrator, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T00442, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0029, true, true, 5, 50, sound.MainNarrator, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0044, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0045, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0046, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0047, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0048, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0049, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0030, true, true, 5, 50, sound.MainNarrator, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0050, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0051, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0052, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0053, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0054, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0031, true, true, 5, 50, sound.MainNarrator, 2);
                  }
                  //Du schleichst hier rum! Bla Bla bla bla bla hast du ein ticket?
            
                  if (ticketbekommen == 1) {
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 5, 50, sound.MainNarrator, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T00442, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0029, true, true, 5, 50, sound.MainNarrator, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0044, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0045, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0046, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0047, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0048, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0049, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.MainNarrator, text.MainNarrator.T0032, true, true, 5, 50, sound.MainNarrator, 2);
            
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0034, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0035, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0036, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0037, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0038, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0039, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0040, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0041, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    //Ja, das ist trotzdem nicht gut rumzuschleichen aber du kannst gerne rein
                  }
                  //bla bla bla warm schleichst du rum das macht man nicht! Aber du siehst aus wie jemand der das nicht so oft tut. Komm, heute mache ich eine ausnahme
                }*/
                /*if (ticketbekommen == 1) {
                  if (sneaken == 1) {
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0050, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0051, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0052, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0053, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0054, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                  }
                  //Viel Spaß bla bla
                }*/
                //ÜBERGANG INS THEATER
                //Im Saal
                /*    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0031, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0032, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0033, false, false, 5, 50, sound.Ticketkontrolleur, 2);
               
                   
                   let ticketgeben = {
                     geben: "Ticket vorzeigen",
                   };
                   let gebenelement = await ƒS.Menu.getInput(ticketgeben, "auswahl");
                   await ƒS.Sound.play(sound.buttonhover, .2, false);
                   switch (gebenelement) {
                     case ticketgeben.geben:
                       dataForSave.good + 1;
                       break;
                   }
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0034, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0035, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0036, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0037, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0038, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0039, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                   await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0040, true, true, 5, 50, sound.Ticketkontrolleur, 2);
               
                   //Reinschleichen
                   if (sneaken == 1) {
               
                   } */
                Template.ƒS.Character.hideAll();
                Template.ƒS.Speech.hide();
                await Template.ƒS.Location.show(Template.locations.blackbackground);
                Template.ƒS.update(3);
                await Template.ƒS.Sound.fade(Template.sound.nightambience, 0, 4, false);
                Template.ƒS.update(1);
            }
        }
    }
    Template.Szene1_4 = Szene1_4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene1_6() {
        console.log("FudgeStory Template Scene1_6 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T0000: "Der Vorhang hebt sich!",
                T0001: "Oh, wie wunderbar! Ich liebe Geschichten!",
                T0002: "Es wird dunkel um dich herum.",
                T0003: "Du fühlst dich...",
                T0004: "etwas unwohl...",
                T0005: "Von der geheimnisvollen alten Dame geht ein seltsames, schwaches Leuchten aus.",
                T0006: "Dein Unbehagen nimmt zu. Etwas stimmt hier nicht.",
                T0007: "Es scheint, als würden Funken aus ihrer Richtung sprühen.",
                T0008: "Deine Sinne scheinen dich zu täuschen.",
                T0009: "Du hast das Gefühl, das Bewusstsein zu verlieren.",
                T0100: "Speichern...",
                // Beruhigen / Nachgeben
                T0010: "Du versuchst, dich zu beruhigen.",
                T0011: "...",
                T0012: "Dein Körper fühlt sich federleicht an.",
                T0013: "So leicht, als würdest du schweben.",
                T0014: "Dein Abenteuer beginnt...",
                // Schreien
                T0015: "Du möchtest aufspringen und schreien.",
                T0016: "Es ist unerträglich!",
                T0017: "Du verlierst die Kontrolle.",
                T0018: "Plötzlich fühlst du dich, als würdest du schweben.",
            },
            Leserin: {
                L0000: "...",
                L0001: "Hmpf...",
                L0002: "HUST HUST",
                L0003: "...",
                L0004: "Endlich.",
                L0005: "Ich wurde hierher eingeladen, um eine meiner Geschichten zu erzählen.",
                L0006: "Glaubt ihr, Geschichten sind nur etwas für Kinder?",
                L0007: "Ha-Ha-Ha-Ha-Ha",
                L0008: "Passt gut auf, diese Geschichte hat es in sich.",
                L0009: "Nun denn...",
                L0010: "Es war einmal, in einer anderen Welt...",
                L0011: "Ein lang erwarteter Besucher...",
                L0012: "Eine Welt am Rande des Abgrunds...",
                L0013: "BEGINNT",
            },
            whiteknight: {
                W0000: "",
            },
            Publikum: {
                P0000: "Das war grandios!",
                P0001: "Ja! Zugabe!",
                P0002: "Naja, so toll war es jetzt auch nicht.",
                P0003: "Mein Kind könnte das besser.",
                P0004: "Was kommt als Nächstes?",
                P0005: "Wer ist das?",
                P0006: "War das geplant?",
                P0007: "Ich habe mein Schnitzel im Ofen vergessen!",
                P0008: "...",
            },
        };
        //Szenenablauf
        Template.ƒS.Sound.setMasterVolume(11);
        await Template.ƒS.Location.show(Template.locations.theaterindoor1);
        await Template.ƒS.update(5);
        await Template.ƒS.Sound.fade(Template.sound.audience, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
        console.log("audio is being played");
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.grayedout, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(2);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0000, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0002, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0003, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0004, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0005, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0006, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0007, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.Publikum, text.Publikum.P0008, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0000, true, true, 3, 50, Template.sound.MainNarrator, 1);
        Template.ƒS.Sound.play(Template.sound.curtains, 0.8, false);
        await Template.ƒS.Location.show(Template.locations.theaterindoor2);
        await Template.ƒS.update(6);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0000, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0001, true, true, 3, 50, Template.sound.Leserin, 1);
        Template.ƒS.Sound.play(Template.sound.cough, 0.8, false);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0002, true, true, 3, 50, Template.sound.Leserin, 1);
        Template.ƒS.Sound.fade(Template.sound.audience, 0, 0.8, true);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0003, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0004, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0005, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0006, true, true, 3, 50, Template.sound.Leserin, 1);
        Template.ƒS.Sound.play(Template.sound.laughterold, 0.5, false);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0007, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0008, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0009, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0001, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.ƒS.Location.show(Template.locations.theaterindoor3);
        await Template.ƒS.update(3);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0010, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0003, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0004, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.ƒS.Sound.fade(Template.sound.thunder, 0.04, 0.5, true);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.oldmagic, 0.3, false);
        await Template.ƒS.Location.show(Template.locations.theaterindoor4);
        await Template.ƒS.update(3);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0011, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0005, true, true, 3, 50, Template.sound.MainNarrator, 1);
        Template.ƒS.Sound.play(Template.sound.oldmagic, 0.8, false);
        await Template.ƒS.Location.show(Template.locations.theaterindoor5);
        await Template.ƒS.update(3);
        await Template.satzbau(Template.characters.Leserin, text.Leserin.L0012, true, true, 3, 50, Template.sound.Leserin, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0006, true, true, 3, 50, Template.sound.MainNarrator, 1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0007, false, false, 3, 50, Template.sound.MainNarrator, 1);
        Template.ƒS.Sound.play(Template.sound.oldmagic, 0.8, false);
        await Template.ƒS.Location.show(Template.locations.theaterindoor6);
        await Template.ƒS.update(3);
        let reaktion = {
            nachgeben: "Nachgeben",
            abreagieren: "Abreagieren",
            schreien: "Schreien",
        };
        let reaktionelement = await Template.ƒS.Menu.getInput(reaktion, "auswahl");
        switch (reaktionelement) {
            case reaktion.nachgeben:
                await Template.buttonpress(Template.sound.buttonpress, 0.2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0010, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0012, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0013, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0014, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.Leserin, text.Leserin.L0013, false, false, 3, 50, Template.sound.Leserin, 1);
                break;
            case reaktion.abreagieren:
                await Template.buttonpress(Template.sound.buttonpress, 0.2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0010, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0011, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0012, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0013, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0014, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.Leserin, text.Leserin.L0013, false, false, 3, 50, Template.sound.Leserin, 1);
                break;
            case reaktion.schreien:
                await Template.buttonpress(Template.sound.buttonpress, 0.2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0015, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0016, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0017, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0018, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T0014, false, false, 3, 50, Template.sound.MainNarrator, 1);
                await Template.satzbau(Template.characters.Leserin, text.Leserin.L0013, false, false, 3, 50, Template.sound.Leserin, 1);
                break;
        }
        Template.ƒS.Sound.play(Template.sound.oldmagic, 0.8, false);
        await Template.ƒS.Location.show(Template.locations.theaterindoor7);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.oldmagic, 0.8, false);
        await Template.ƒS.Location.show(Template.locations.theaterindoor8);
        await Template.ƒS.update(3);
        Template.ƒS.Sound.play(Template.sound.oldmagic, 0.8, false);
        await await Template.ƒS.Location.show(Template.locations.theaterindoor9);
        await Template.ƒS.update(3);
        await Template.ƒS.Sound.fade(Template.sound.thunder, 0, 0.6, false);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        Template.ƒS.Sound.play(Template.sound.teleport, 0.8, false);
        await Template.ƒS.update(3);
        await Template.ƒS.update(3);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.fade(Template.sound.darkwind, 0, 0.8, true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.hide();
        await Template.ƒS.update(1);
    }
    Template.Szene1_6 = Szene1_6;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene4_1() {
        console.log("FudgeStory Template Scene4 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T001: ". . .",
                T002: ". . .",
                T003: "Nichts passiert.",
                T004: "zzZ zzZ",
                T005: "zzZ... ich wünschte... zzZ",
                T006: "... ich hätte ein Knoblauchwürstchen... zzZ",
                T007: "zzZ... zzZ...",
                T008: "zzZ... zzZ... nein, wo willst du hin?",
                T009: "zzZ... komm wieder zurück zu mir... zzZ",
                T010: "Das ist mein Cujus!... zzZ",
                T011: "Das Schnarchen kommt von einem schlafenden Mann weiter vorne.",
                T012: "Wer auch immer da gemütlich schläft, könnte bestimmt aufklären, was hier los ist.",
                T013: "Das Schnarchen kommt von einem schlafenden Mann weiter vorne.",
                T014: "zzZ... zzZ... Wohin willst du mit meiner Ziege... zzZ",
                T015: "Nicht die Ziege!... zzZ",
                T016: "Vielleicht solltest du ihn aufwecken.",
                T017: "Deine Hand greift behutsam die Schulter des schlafenden Mannes, und du beginnst, sie vorsichtig zu schütteln.",
                T018: "Mit voller Wucht holst du aus, zielst dabei auf den Kopf des Schlafenden und schlägst zu, ohne zu zögern.",
                T019: "!!!",
                T020: "!!!!!!!!!!!!!!!!!!",
                T021: "Ahhhh! Ein Eindringling!",
                T022: "Wie kannst du es wagen, dich an den GROßEN Halistrator so hinterlistig anzuschleichen!",
                T023: "zzZ... Hmpf?... Hm... zzZ",
                T024: "...zzZ",
                T025: "!!!",
                T026: "WER? WAS?...",
                T027: "Oh!",
                T028: "Sei gegrüßt, Reisender!",
                T029: "Ich nehme an, du bist ein Reisender?",
                T030: "So, wie du aussiehst.",
                T031: "Verzeih mir meine Unachtsamkeit.",
                T032: "Ich muss wohl eingeschlafen sein, als ich...",
                T033: "Als ich diesen riesigen Ball des Todes am Himmel bekämpfen wollte!",
                T034: "Es muss wohl ein Zauber gewesen sein, der mich in einen tiefen Schlaf fallen ließ.",
                T035: "Ja, so war es...",
                T036: "Hätte ich mir nicht etwas Besseres einfallen lassen können?",
                T037: "Ich bin nun wirklich zu nichts zu gebrauchen...",
                T038: "Kein Wunder, dass sie mich weggeschickt haben.",
                T039: "Es tut mir leid, ich habe mich noch gar nicht vorgestellt!",
                T040: "Man nennt mich Halistrator! Halistrator der Unbeholfene!",
                T041: "Ich bin hier, um das Königreich... nein,",
                T042: "Ich bin hier, um die ganze Wunderwelt zu retten!!!",
                T043: "Ja, das klingt besser!",
                T044: "Wer bist du in deiner prächtigen Rüstung?",
                T045: "Unser Held versuchte mit aller Kraft, sich aufzuwecken.",
                T046: "Zwicken brachte nichts.",
                T047: "Sich fallen zu lassen ebenso wenig.",
                T048: "Im Kreis zu rennen half auch nicht weiter.",
                T049: "Halis gab dem verzweifelten Helden eine kräftige Ohrfeige.",
                T050: "Das erwies sich als sehr effektiv.",
                T051: "Der Held teilte ihm daraufhin seinen Namen mit.",
                T052: "Halistrator schien ihn zunächst für verrückt zu halten -",
                T053: "...",
                T054: "HEY!",
                T055: "Er kann mich nicht hören...",
                T056: "Ich erledige nur meine Arbeit!",
                T057: "Vielleicht solltest du es auch mal versuchen, he?",
                T058: "Das würde uns beiden die Sache viel einfacher machen.",
                T059: "Als der Held sich umsah, bemerkte er seine glänzende silberne Rüstung.",
                T060: "Halistrator bot an, unseren Helden zum Schloss des Lichts zu begleiten. Wird der Held das Angebot annehmen oder seine Reise alleine fortsetzen?",
            },
            whiteknight: {
                T000: "...",
                T001: "Wo bin ich...?",
                T002: "Was ist hier los...?",
                T003: "Was ist das?",
                T004: "Dieses Schnarchen...",
                T005: "...",
                T006: "Wer schnarcht hier so laut?",
                //Nur ein Traum
                T007: "Hier stimmt doch etwas nicht!",
                T008: "War ich nicht gerade noch im Theatersaal?",
                T009: "Nein, das muss alles nur ein böser Traum sein!",
                T010: "Ja genau, ein Traum! Du existierst nur in meinem Kopf!",
                T011: "Ich muss mich nur aufwecken...",
                T012: "Mal sehen...",
                T013: "HEY",
                T014: "Warum wache ich nicht auf?",
                T015: "Das ist doch ein schlechter Scherz!",
                T016: "...",
                T017: "Was ist mit der Prinzessin?",
                T018: "Warum kann sie das Königreich nicht regieren?",
                T019: "Moment, warum frage ich das gerade...",
                T020: "Das alles ist doch sowieso nicht von Bedeutung...",
                T021: "Ich kann dich hören...",
                T022: "Des Beraters?",
                T023: "...",
                T024: "Ich bin hier für ein Abenteuer!",
                T025: "Das alles muss ein Fehler sein...",
                T026: "Ich sollte nicht hier sein!",
                T027: "Nein, du verstehst das nicht...",
                T028: "Ich weiß nicht einmal, wie ich hierher kam!",
                T029: "Gerade war ich noch im Theater, und jetzt das...",
                T030: "Außerdem höre ich ständig eine Stimme, die mir die Handlung erzählt.",
                T031: "Siehst du?",
                T032: "Kannst du vielleicht einmal nichts sagen?",
                T033: "Weißt du, wie ich zurück in meine Welt komme?",
                T034: "Vielleicht durch ein Portal oder so etwas?",
                T035: "Es gibt doch immer ein Portal...",
                T036: "Welcher Berater?",
                T037: "Und welcher König?",
                T038: "HUH",
                T039: "Ehm...",
                T040: "Ich. . .",
                T041: "Ich weiß es nicht",
                T042: "Ich wurde von einer höheren Macht erwählt!",
                T043: "Verneige dich vor mir!",
                T044: "Oder spüre den göttlichen Zorn!",
            },
            Halistrator: {
                T001: "Nur ein Traum? Wie meinst du das?",
                T002: "Also mein Knoblauchwürstchen scheint mir sehr real zu sein!",
                T003: "Ich wäre zumindest sehr traurig, wenn dem nicht so wäre...",
                T004: "Geht es dir gut?!?!",
                T005: "Ganz klar ein Zeichen der Wunderweltkrankheit...",
                T006: "Zum Glück kenne ich genau das richtige Heilmittel dafür!",
                T007: "Na also, geht doch!",
                T008: "Für mich existierst du definitiv!",
                T009: "Ein Scherz? Ich verstehe ihn nicht so ganz...",
                T010: "Aber hey! Ich hätte einen auf Lager!",
                T011: "Was hat vier Beine und kann fliegen?",
                T012: "Zwei Vögel!",
                T013: "...",
                T014: "Du scheinst wirklich auf den Kopf gefallen zu sein, mein Freund.",
                T015: "Meine Heilung hilft dir nur vorübergehend. Ich kenne aber jemanden, der dir helfen kann!",
                T016: "Vielleicht hast du ja dein Gedächtnis verloren? Das ist einem aus meinem Stamm bereits passiert!",
                T017: "Er wurde dafür angeklagt, dass er in ein Haus eingebrochen ist und sämtliche Reichtümer eines anderen Stammesmitgliedes gestohlen hat.",
                T018: "Bei seiner Anhörung behauptete er, er habe das Gedächtnis verloren und wüsste nichts von der Situation.",
                T019: "Keiner wollte ihm glauben, aber ich schon!",
                T020: "Der Arme. Gedächtnisverlust scheint in letzter Zeit häufiger aufzutreten!",
                T021: "Ich sollte dem auf der Spur bleiben...",
                T022: "Dann möchte ich dir mal auf die Sprünge helfen, edler Reisender.",
                T023: "Wo fange ich an...",
                T024: "Am besten ganz am Anfang.",
                T025: "Wir befinden uns im Königreich Verdantia.",
                T026: "Alle Völker lebten seit Anbeginn der Zeit in ewiger Harmonie.",
                T027: "Doch vor kurzem ereignete sich ein Schicksalsschlag für diesen ewigen Frieden.",
                T028: "Das Schloss des Lichts wurde von einem Drachen angegriffen!",
                T029: "Die Königliche Familie regierte seit Anbeginn der Zeit über Verdantia und sorgte für Recht und Ordnung.",
                T030: "Leider hat der Drache die Königsfamilie bei dem Angriff ausgelöscht.",
                T031: "Alle...",
                T032: "Bis auf ihre Tochter, die Prinzessin!",
                T033: "Nur ein Wesen mit königlichem Blut ist dazu würdig, Verdantia zu regieren.",
                T034: "Wie gut, dass du fragst!",
                T035: "Das heißt, deinem Gedächtnis geht es schon ein wenig besser...",
                T036: "Die Prinzessin wurde entführt!",
                T037: "Der Drache war nicht alleine...",
                T038: "Irgendetwas muss ihn wohl kontrolliert haben...",
                T039: "Drachen sind von Natur aus keine aggressiven Geschöpfe, weißt du...",
                T040: "Bestimmt weißt du das! Das ist schließlich Kinderwissen!",
                T041: "Oder waren das Kaninchen...",
                T042: "Wie dem auch sei...",
                T043: "Ich wurde von Weitem gesandt, um die Prinzessin im Auftrag des Beraters zurückzuholen.",
                T044: "Des Beraters des Königs natürlich!",
                T045: "Seit dem Angriff ist er der Ranghöchste im Schloss und hat somit das Sagen, bis die Prinzessin zurückgekehrt ist!",
                T046: "Er wüsste sicherlich, wie du aus deinem Traum erwachen kannst...",
                T047: "Hust hust... deinen Gedächtnisverlust heilen... hust Hust.",
                T048: "...",
                T049: "Das ist aber nicht sehr höflich!",
                T050: "Nun dann, schätze ich, du möchtest die Hintergrundgeschichte nicht wissen?",
                T051: "Wie du hergekommen bist?",
                T052: "Warum ich Knoblauchwürstchen mag?",
                T053: "...",
                T054: "Warum die Blumen vor dir lustige Gesichter haben!?",
                T055: "...",
                T056: "Okay.",
                T057: "Oh, schon so spät?",
                T058: "Ich glaube, ich muss los...",
                T059: "Dieser flammende Todesball im Himmel ist noch nicht besiegt!",
                T060: "...",
                T061: "Nein, weißt du was...",
                T062: "Ich erzähle sie dir trotzdem.",
                T063: "Es ist meine Pflicht, die Bürger um mich herum aufzuklären...",
                T064: "Oder so...",
                T065: "Also.",
                T066: "Gut, damit hätte ich dich aufgeklärt.",
                T067: "Ich wusste, mein Gespür für dich war richtig!",
                T068: "Na, in irgendetwas muss ich ja doch gut sein!",
                T069: "Weißt du überhaupt, worauf du dich hier einlässt?",
                T070: "Ich meine...",
                T071: "Es könnte durchaus sein, dass das wohl wichtigste und tragischste Ereignis der Geschichte von Verdantia an dir vorbeigegangen ist...",
                T072: "Lass mich dich kurz darüber aufklären.",
                T073: "Noch Fragen?",
                T074: "Ein Fehler?",
                T075: "Wie meinst du das?",
                T076: "Klingt stark nach dem Wunderwelt-Syndrom!",
                T077: "Weißt du, ich glaube nicht an Fehler.",
                T078: "Hast du dich vielleicht bloß verlaufen?",
                T079: "Und da soll noch jemand sagen, ich sei verrückt.",
                T080: "Nunja, ich weiß zwar nicht, worüber du sprichst...",
                T081: "Oder was diese andere Welt, aus der du kamst, sein soll...",
                T082: "Aber ich denke, der Berater des Königs kann dir bestimmt bei deinem Problem helfen.",
                T083: "Sollte es wirklich eine andere Welt geben, wäre er der Einzige, der wüsste, wie du zurückkommen könntest.",
                T084: "Aber jetzt sag mal...",
                T085: "Für einen so gewöhnlichen Reisenden wie dich...",
                T086: "...nunja, so gewöhnlich bist du anscheinend ja nicht...",
                T087: "Du hast eine sehr prächtige Rüstung!",
                T088: "Sie erinnert mich fast an...",
                T089: "Nein...",
                T090: "Das kann nicht sein...",
                T091: "Woher hast du eine solche Rüstung?",
                T092: "Also ehrlich... du solltest antworten, wenn jemand mit dir redet!",
                T093: "...",
                T094: "Auserwählt? Von einer höheren Macht?",
                T095: "Welcher denn?",
                T096: "Weißt du...",
                T097: "Du hast mich für einen Augenblick an den weißen Ritter aus einer uralten Legende erinnert.",
                T098: "Ein Held, der zur Zeit des Untergangs von Verdantia aus einer anderen Welt kommt und die ganze Wunderwelt retten soll.",
                T099: "Moment...",
                T100: "Ein weißer Ritter...",
                T101: "Aus einer anderen Welt...",
                T102: "Hm...",
                T103: "Nein, ich glaube nicht, dass du das bist...",
                T104: "Ich glaube, laut der Legende trägt er eine scharlachrote Feder an seinem Helm.",
                T105: "Deine ist eher...",
                T106: "Lachsrot.",
                T107: "Hah, naja...",
                T108: "Du kannst es gar nicht sein...",
                T109: "Ich glaube nicht.",
                T110: "Weißt du was?",
                T111: "Komm doch mit mir mit!",
                T112: "Wir können zusammen zum Schloss des Lichts gehen!",
                T113: "Es ist doch immer besser, einen Freund an seiner Seite zu haben, nicht wahr?",
                T114: "Vom Berater des Königs bekommst du bestimmt all die Antworten, nach denen du suchst!",
                T115: "Wie sieht es aus, edler Reisender?",
                T116: "WOW! WIE SCHÖN!",
                T117: "Endlich jemand, der mich nicht ablehnt...",
                T118: "Vater, siehst du das? Mein erster Gefährte!",
                T119: "Wir werden so viel Spaß zusammen haben!",
                T120: "Komm mir hinterher, ich kenne den Weg!",
                T121: "...glaube ich.",
                T122: "Oh...",
                T123: "Nunja...",
                T124: "...",
                T125: "Ich verstehe das...",
                T126: "Ehrlich...",
                T127: "Ich würde mich selbst wahrscheinlich auch nicht wählen, haha...",
                T128: "Wie konnte ich nur glauben, dass jemand anderes mit mir reisen wollen würde...",
                T129: "Ich hoffe, du bist bei deiner Suche erfolgreich...",
                T130: "Vielleicht sehen wir uns ja noch...",
                T131: "Wie sagt man so schön...",
                T132: "Man sieht sich immer zweimal im Leben...",
                T133: "...",
                T134: "...",
                T135: "Es tut mir leid, Vater...",
                T136: "Ich habe es wieder nicht hinbekommen...",
                T137: "...",
            },
        };
        //Szenenablauf
        //characters.whiteknight.name = "Vasi";
        //dataForSave.protagonist.name = characters.whiteknight.name;+
        if (Template.dataForSave.protagonist.name == "") {
            Template.dataForSave.protagonist.name = "???";
            Template.characters.whiteknight.name = Template.dataForSave.protagonist.name;
        }
        await Template.ƒS.Progress.save();
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.chapter1);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.setMasterVolume(11);
        await Template.ƒS.Sound.fade(Template.sound.deepdark, 0.07, 0.1, true);
        await Template.ƒS.update(5);
        //Aufwachen - Kapitel 1
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T001, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T002, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.ƒS.Sound.fade(Template.sound.snoring, 0.03, 0.3, true);
        await Template.ƒS.update(4);
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T003, false, false, 5, 50, Template.sound.MainNarrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let aufwachen = {
            ja: "Augen öffnen",
            nein: "Augen geschlossen lassen"
        };
        let aufwachelement = await Template.ƒS.Menu.getInput(aufwachen, "auswahl");
        switch (aufwachelement) {
            case aufwachen.ja:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.update(1);
                break;
            case aufwachen.nein:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T001, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T002, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T003, true, true, 3, 50, Template.sound.MainNarrator, 2);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T004, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T005, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T006, true, true, 5, 50, Template.sound.MainNarrator, 3);
                break;
        }
        await Template.ƒS.Sound.fade(Template.sound.deepdark, 0, 0.1, false);
        await Template.ƒS.update(1);
        Template.ƒS.Speech.clear();
        await Template.ƒS.update(2);
        Template.ƒS.Sound.play(Template.sound.pianoharp, 0.05, false);
        await Template.signaldelay();
        console.log("Background is being displayed");
        Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(3);
        await Template.ƒS.update(1);
        Template.ƒS.Location.show(Template.locations.meadow);
        await Template.ƒS.update(3);
        await Template.ƒS.update(3);
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.newversion, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(3);
        await Template.ƒS.update(1);
        await Template.ƒS.Sound.fade(Template.sound.Meadow, 0.07, 0.1, true);
        console.log("audio is being played");
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T005, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T006, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T007, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let schnarchen = {
            untersuchen: "Geräusch untersuchen",
            nichtuntersuchen: "Ignorieren"
        };
        let schnarchelement = await Template.ƒS.Menu.getInput(schnarchen, "auswahl");
        switch (schnarchelement) {
            case schnarchen.untersuchen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.update(1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T011, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T012, true, true, 5, 50, Template.sound.MainNarrator, 3);
                break;
            case schnarchen.nichtuntersuchen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.update(1);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T008, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T010, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
        }
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
        await Template.ƒS.update(1);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T014, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T015, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T016, false, false, 5, 50, Template.sound.MainNarrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let aufwecken = {
            vorsichtig: "Sanft rütteln",
            laut: "Auf seinen Kopf schlagen"
        };
        let aufweckelement = await Template.ƒS.Menu.getInput(aufwecken, "auswahl");
        switch (aufweckelement) {
            case aufwecken.vorsichtig:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.update(1);
                Template.dataForSave.good + 1;
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T023, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T024, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.snoring, 0, 0.1, false);
                await Template.ƒS.Sound.fade(Template.sound.Meadow, 0, 0.1, false);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T025, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T026, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T027, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Sound.play(Template.sound.Halistheme, 0.03, true);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T028, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T029, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T030, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T031, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T032, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T033, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T034, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T035, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T036, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T037, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T038, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T039, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T040, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T041, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T042, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T043, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case aufwecken.laut:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.ƒS.update(1);
                Template.dataForSave.evil + 1;
                console.log(Template.dataForSave.evil);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.snoring, 0, 0.1, false);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T019, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T020, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T021, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.Meadow, 0, 0.1, false);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T022, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
                await Template.ƒS.Sound.play(Template.sound.Halistheme, 0.03, true);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T028, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T029, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T030, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T031, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T032, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T033, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T034, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T035, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T036, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T037, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T038, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T039, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T040, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T041, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T042, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T043, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.Halistrator);
        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
        await Template.satzbau(Template.characters.Halistrator, text.MainNarrator.T044, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let vorstellen = {
            eintraum: "Nur ein Traum",
            schweigen: "Schweigen",
            einabenteuer: "Abenteuerlich",
            möchtezurück: "Ein Fehler",
        };
        let vorstellelement = await Template.ƒS.Menu.getInput(vorstellen, "auswahl");
        switch (vorstellelement) {
            case vorstellen.eintraum:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T007, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T008, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T001, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T002, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T003, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T010, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T045, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T046, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T047, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T048 + Template.dataForSave.protagonist.name, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T004, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T005, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T006, true, true, 5, 50, Template.sound.Halistrator, 3);
                //slap
                await Template.buttonpress(Template.sound.slap, .2);
                await Template.ƒS.update(3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T049, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T050, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T013, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T007, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T014, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T015, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T008, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T009, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T010, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T011, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T012, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T016, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T013, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T015, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T016, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T017, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T018, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T019, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T020, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T021, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T022, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.Halistheme, 0, 0.1, false);
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0.03, 0.5, true);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T019, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T020, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T034, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T035, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T021, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T022, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T044, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T046, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T047, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case vorstellen.schweigen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.evil + 1;
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T048, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T049, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T050, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T051, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T052, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T053, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T054, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T055, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T056, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T057, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T058, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T059, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T060, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T061, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T062, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T063, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T064, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T065, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.Halistheme, 0, 0.1, false);
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0.03, 0.5, true);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T022, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T044, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T023, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T066, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case vorstellen.einabenteuer:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.good + 1;
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T051, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T024, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T067, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T068, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T069, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T070, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T071, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T072, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.Halistheme, 0, 0.1, false);
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0.03, 0.5, true);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T022, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T044, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case vorstellen.möchtezurück:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T025, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T074, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T075, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T026, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T076, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T077, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T078, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T027, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T028, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T029, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T030, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T052, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T053, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T054, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T031, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T055, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T032, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T056, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T057, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T058, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T079, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T033, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T034, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T035, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T080, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T081, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T082, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T083, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T036, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T037, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.ƒS.Sound.fade(Template.sound.Halistheme, 0, 0.1, false);
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0.03, 0.5, true);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T022, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T034, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T035, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
        }
        await Template.ƒS.Sound.fade(Template.sound.titletheme, 0, 0.1, false);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Halistheme, 0.03, 0.3, true);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T073, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T023, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T084, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T085, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T086, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T087, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T088, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Character.hide(Template.characters.Halistrator);
        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T089, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T090, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T091, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Character.animate(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.fromCenterToRight_Halistrator());
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.whiteknight, Template.characters.whiteknight.pose.standard, Template.ƒS.positionPercent(20, 48));
        await Template.ƒS.update(5);
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T038, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T059, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T039, true, true, 5, 50, Template.sound.MainNarrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let rüstung = {
            schweigen: "Schweigen",
            weißnicht: "Weiß ich nicht",
            lügen: "Eine höhere Macht",
        };
        let rüstungselement = await Template.ƒS.Menu.getInput(rüstung, "auswahl");
        switch (rüstungselement) {
            case rüstung.schweigen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.evil + 1;
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T023, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(80, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T092, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case rüstung.weißnicht:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T040, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T041, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(80, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T093, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case rüstung.lügen:
                Template.dataForSave.evil + 1;
                await Template.buttonpress(Template.sound.buttonpress, .2);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T042, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T043, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T044, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(80, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T094, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T095, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.Halistrator);
        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(80, 48));
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T096, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T097, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T098, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T099, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T100, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T101, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Character.hide(Template.characters.Halistrator);
        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(80, 48));
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T102, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T103, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T104, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T105, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T106, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T107, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T108, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T109, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T110, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T111, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Sound.fade(Template.sound.Halistheme, 0, 0.3, true);
        await Template.ƒS.update(2);
        await Template.ƒS.Sound.fade(Template.sound.Meadow, 0.03, 0.3, true);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T112, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T113, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T114, true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.ƒS.Character.hide(Template.characters.Halistrator);
        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(80, 48));
        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T115 + Template.dataForSave.protagonist.name + "?", true, true, 5, 50, Template.sound.Halistrator, 3);
        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T060, false, false, 5, 50, Template.sound.MainNarrator, 3);
        await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
        let gefährte = {
            akzeptieren: "Akzeptieren",
            ablehnen: "Ablehnen",
        };
        let gefährtenelement = await Template.ƒS.Menu.getInput(gefährte, "auswahl");
        switch (gefährtenelement) {
            case gefährte.akzeptieren:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.good + 1;
                Template.dataForSave.Halisgefährteangenommen = true;
                await Template.ƒS.Character.hide(Template.characters.whiteknight);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.animate(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.fromRightToCenter_Halistrator());
                await Template.ƒS.update(2);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T116, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T117, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T118, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T119, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T120, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T121, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
            case gefährte.ablehnen:
                await Template.buttonpress(Template.sound.buttonpress, .2);
                Template.dataForSave.evil + 1;
                Template.dataForSave.Halisgefährteangenommen = false;
                await Template.ƒS.Character.hide(Template.characters.whiteknight);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.animate(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.fromRightToCenter_Halistrator());
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T122, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T123, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T124, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T125, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T126, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T127, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T128, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T129, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T130, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T131, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T132, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T133, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Sound.fade(Template.sound.Meadow, 0, 2, false);
                await Template.ƒS.update(2);
                Template.ƒS.Location.show(Template.locations.blackbackground);
                Template.ƒS.update(3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.update(5);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T134, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T135, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T136, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.update(5);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T137, true, true, 5, 50, Template.sound.Halistrator, 3);
                break;
        }
        Template.ƒS.Location.show(Template.locations.blackbackground);
        Template.ƒS.update(3);
        await Template.ƒS.Character.hide(Template.characters.Halistrator);
        await Template.ƒS.update(5);
        await Template.ƒS.Sound.fade(Template.sound.Meadow, 0, 2, false);
        if (Template.dataForSave.Halisgefährteangenommen == true) {
            Template.dataForSave.Entscheidungsfrage1 = 1;
            //return"Szene4_2";
        }
        else {
            Template.dataForSave.Entscheidungsfrage1 = 2;
            //return"Szene5_1";
        }
    }
    Template.Szene4_1 = Szene4_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene4_2() {
        console.log("FudgeStory Template Scene4_2 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T001: "Halistrator stolperte über seine eigenen Füße...",
                T002: "Unser Held ging nun ohne Ziel durch diese wundersame neue Welt.",
                T003: "Er fragt sich, ob es wirklich die richtige Entscheidung war, den Gefährten abzuweisen.",
                T004: "Die Antwort wird er schon sicherlich noch erfahren.",
                T005: "Sag mal, weißt du wirklich, wo du langläufst? In diesem Wald sehe selbst ICH nichts mehr.",
                T006: "Unser Held wusste auf jeden Fall, wohin er möchte!",
                T007: "Mit einem klaren Ziel vor Augen, stürzte er sich selbstsicher in das nächstbeste Abenteuer!",
                T008: "...",
                T009: "Und gelangte tief im Wald an einen Tempel...",
                T010: "Na immerhin gibst du es zu!",
                T011: "Aber ohne Weg gibt es keine Geschichte.",
                T012: "Und komm mir jetzt nicht mit 'Der Weg ist das Ziel' -",
                T013: "Okay? Das ist meine Aufgabe!",
                T014: "So lief unser Held mit dem Kopf durch die Wand durch einen tiefen magischen Wald.",
                T015: "Total ungefährlich...",
                T016: "Ein Tempel voller seltsamer Inschriften.",
                T017: "Scheint, als wäre hier schon seit Äonen niemand gewesen.",
                T018: "Unser Held beschloss, sich nicht in den geheimnisvollen Tempel zu wagen.",
                T019: "Er geht den Weg zurück, von dem er gekommen ist.",
                T020: "Jedoch...",
                T021: "Ist er wieder beim Tempel angekommen.",
                T022: "Irgendwas scheint hier nicht zu stimmen.",
                T023: "Irgendetwas möchte, dass er diesen Tempel näher betrachtet.",
                T024: "Vorsichtig, aber neugierig, starrte unser Held die Inschriften des Tempels an.",
                T025: "Sie schienen keiner bekannten Sprache anzugehören.",
                T026: "Irgendetwas sagte dem Helden jedoch, dass hier irgendetwas nicht stimmt.",
                T027: "Es geschieht nichts.",
                T028: "Als der Held die Schrift ansah, sprach eine Stimme aus ihm heraus in einer fremden Sprache.",
                T029: "Es schien, als könne der Held plötzlich alles verstehen, was auf dem Tempel geschrieben stand.",
                T030: "Der Boden erzitterte.",
                T031: "Die Winde in den Bäumen waren lauter als je zuvor.",
                T032: "Die Vögel suchten schnell das Weite.",
                T033: "Es schien, als sei irgendetwas...",
                T034: "Erwacht...",
                T035: "BILLS PAKT hinzugefügt.",
            },
            whiteknight: {
                T000: ". . .",
            },
            Halistrator: {
                T001: "Sieh mal!!!",
                T002: "Ist das nicht schön...",
                T003: "Genauso habe ich mir dieses Schloss vorgestellt.",
                T004: "Naja... also nicht so zerstört, aber dennoch...",
                T005: "Siehst du! Ich sage doch, du kannst auf mich zählen.",
                T006: "Komm schneller, wir haben es nicht mehr weit.",
                T007: "Uhhh, ich bin ja sooooo aufgeregt!!!",
                T008: "Aaa-a-alles gut! Das war reine Absicht!",
                T009: "Ich habe ein gefährliches Wesen im Boden gespürt!",
                T010: "Ich wollte uns retten, glück gehabt, schätze ich...",
                T011: "He... he...",
                T012: "Erste Lektion!",
                T013: "Gefahren lauern überall! Bleib stets achtsam!",
                T014: "Weiter geht's!",
            },
            BILL: {
                T000: "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
                T001: "NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                T002: "OH DU LIEBER REISENDER",
                T003: "DU VERIRRRTE SEELE",
                T004: "DU HAST MICH",
                T005: "GERETTETTTTTT",
                T006: "Ah, wie schön es doch ist, frei zu sein!",
                T007: "Du hast ja gar keine Ahnung, wie lange ich da feststeckte!",
                T008: "Du hast sicherlich eine Menge Fragen, ich weiß, ich weiß...",
                T009: "...",
                T010: "Ah... Du hast sie WIRKLICH",
                T011: "Na gut... Ich schätze, dafür, dass du mich befreit hast, gewähre ich dir die Antworten, nach denen du suchst!",
                T012: "WAS DU MÖCHTEST, ENTSCHEIDEN?",
                T013: "Nein, nein...",
                T014: "Ich weiß GANZ GENAU, was du da tust",
                T015: "Du gehörst nicht in diese Welt...",
                T016: "RICHTIG?!",
                T017: "Natürlich, ich habe IMMER RECHT",
                T018: "Sorry, mein kleines Ding...",
                T019: "Ich würde dir gerne die Entscheidungsfreiheit überlassen, mich alles zu fragen, was du möchtest!",
                T020: "Aber meine Zeit hier ist sehr begrenzt...",
                T021: "Ich kann mich...",
                T022: "NOCH NICHT ganz",
                T023: "MANIFESTIEREN",
                T024: "Hör zu...",
                T025: "Ich bin eine Seele, die einst in Verdantia gelebt hat",
                T026: "Ich war ein König und hatte Familie, Kinder und...",
                T027: "Ein prächtiges Königreich voller fröhlicher Bewohner!",
                T028: "Eines Tages kam ein anderer König aus dem Osten",
                T029: "ER NAHM MIR ALLES",
                T030: "Er hat meine Familie",
                T031: "GETÖTET",
                T032: "Hilf mir, meinen Frieden zu finden! Mein altes Schloss ist...",
                T033: "GANZ IN DER NÄHE",
                T034: "Ich weiß, du möchtest wieder nach Hause",
                T035: "In deine alte Welt...",
                T036: "Ich bin so eine Art DSCHINN, wie ihr es in EURER WELT sagen würdet",
                T037: "Ich kann dir diesen Wunsch erfüllen...",
                T038: "Dazu musst du mich nur...",
                T039: "NACH HAUSE BRINGEN",
                T040: "DEAL?",
                T041: "Wunderbar",
                T042: "Es hat mich gefreut, mit dir Geschäfte zu machen",
                T043: "Ich werde dich zum Schloss führen",
                T044: "Wir sehen uns...",
                T045: "Ha ha ha ha ha...",
                T046: "NEIN?!",
                T047: "WILLST DU DENN NICHT NACH",
                T048: "HAUSE?!",
                T049: "??",
                T050: "Na schön...",
                T051: "So sei es...",
            }
        };
        //Szenenablauf
        //characters.whiteknight.name = "Vasi";
        //dataForSave.protagonist.name = characters.whiteknight.name;+
        if (Template.dataForSave.protagonist.name == "") {
            Template.dataForSave.protagonist.name = "???";
            Template.characters.whiteknight.name = Template.dataForSave.protagonist.name;
        }
        await Template.ƒS.Progress.save();
        await Template.ƒS.update(1);
        //await ƒS.Location.show(locations.chapter1);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.setMasterVolume(11);
        //await ƒS.Sound.fade(sound.deepdark, 0.07, 0.1, true);
        //await ƒS.update(5);
        //Aufwachen - Kapitel 1
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.newversion, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(3);
        //dataForSave.Halisgefährteangenommen = false;
        if (Template.dataForSave.Halisgefährteangenommen == true) {
            await Template.ƒS.Sound.fade(Template.sound.Meadow, 0.07, 3, true);
            console.log("audio is being played");
            await Template.ƒS.Location.show(Template.locations.schlossweitsicht);
            await Template.ƒS.update(3);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T001, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T002, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T003, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T004, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T005, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T006, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T007, true, true, 5, 50, Template.sound.Halistrator, 3);
            Template.horizontalShake();
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T001, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T008, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T009, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T010, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T011, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T012, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T013, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.standard, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, Template.sound.Halistrator, 3);
            await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, Template.sound.MainNarrator, 3);
            Template.ƒS.Location.show(Template.locations.blackbackground);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.hide(Template.characters.Speechbox);
            Template.ƒS.update(3);
            await Template.ƒS.Sound.fade(Template.sound.Meadow, 0, 2, false);
        }
        //Hier geht es weiter, wenn Halistrator mitkommt
        //Hier geht es weiter, wenn man Halistrator abgelehnt hat
        if (Template.dataForSave.Halisgefährteangenommen == false) {
            await Template.ƒS.Sound.fade(Template.sound.forest, 0.03, 3, true);
            console.log("audio is being played");
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T002, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T003, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T005, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
            let orientierung = {
                orientiert: "Ja total!",
                verloren: "Keine Ahnung"
            };
            let orientierungselement = await Template.ƒS.Menu.getInput(orientierung, "auswahl");
            switch (orientierungselement) {
                case orientierung.orientiert:
                    Template.dataForSave.evil + 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T006, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T007, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T008, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    break;
                case orientierung.verloren:
                    Template.dataForSave.good + 1;
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T010, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T011, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T012, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T013, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T014, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T015, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    break;
            }
            await Template.ƒS.update(3);
            await Template.ƒS.Location.show(Template.locations.TempelimWald);
            await Template.ƒS.update(3);
            await Template.buttonpress(Template.sound.buttonhover, .2);
            let tempeluntersuchen = {
                untersuchen: "Untersuchen",
                weggehen: "Weggehen"
            };
            let untersuchenelement = await Template.ƒS.Menu.getInput(tempeluntersuchen, "auswahl");
            switch (untersuchenelement) {
                case tempeluntersuchen.untersuchen:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T016, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    break;
                case tempeluntersuchen.weggehen:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.update(1);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T019, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T020, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T021, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T022, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T023, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T016, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    break;
            }
            let schriften = ["Schrift vorlesen", "Schrift anstarren", "Nichts tun"];
            function mam(b) {
                x = b;
                return b;
            }
            let x = 0;
            while (mam(x) < 3) {
                let schriftenauswahl = await Template.ƒS.Menu.getInput(schriften, "auswahl");
                console.log(schriften.length);
                //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
                switch (schriftenauswahl) { //Wenn Auswahl "Namen eingben"
                    case schriften[0]:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        await Template.ƒS.Sound.fade(Template.sound.forest, 0, 2, false);
                        await Template.ƒS.update(2);
                        await Template.ƒS.Sound.fade(Template.sound.tension, 0.03, 4, true);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T028, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        Template.verticalShake();
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T029, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T030, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        Template.verticalShake();
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T031, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T032, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        Template.verticalShake();
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T033, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T034, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.ƒS.Sound.fade(Template.sound.tension, 0, 3, false);
                        schriften.splice(0, 1, "");
                        mam(5);
                        break;
                    case schriften[1]:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T024, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T025, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T026, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
                        schriften.splice(1, 1, "");
                        break;
                    case schriften[2]:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T027, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        schriften.splice(2, 1, "");
                }
                x++;
                console.log(mam(x));
            }
            await Template.ƒS.Location.show(Template.locations.blackbackground);
            await Template.ƒS.update(3);
            await Template.ƒS.update(2);
            //await ƒS.Location.show(locations.TempelimWald);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.holy, Template.ƒS.positionPercent(50, 48));
            await Template.ƒS.update(5);
            await Template.ƒS.Sound.fade(Template.sound.BillTheme, 0.05, 3, true);
            await Template.ƒS.update(3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T000, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T001, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T002, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T003, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T004, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T005, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T006, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.bored, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Bill, text.BILL.T007, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T008, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T009, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T010, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T011, true, true, 5, 50, Template.sound.Leserin, 3);
            let fragen = {
                frage1: "Wie komme ich hier raus?",
                frage2: "Was bist du?"
            };
            let fragenelement = await Template.ƒS.Menu.getInput(fragen, "auswahl");
            switch (fragenelement) {
                case fragen.frage1:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    break;
                case fragen.frage2:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    break;
            }
            await Template.satzbau(Template.characters.Bill, text.BILL.T012, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.happy, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Bill, text.BILL.T013, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T014, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T015, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T016, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T017, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T018, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T019, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T020, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T021, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T022, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T023, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.bored, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Bill, text.BILL.T024, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T025, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T026, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T027, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T028, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T029, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T030, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.sauer, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Bill, text.BILL.T031, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.bored, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Bill, text.BILL.T032, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T033, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T034, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T035, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T036, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T037, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T038, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.happy, Template.ƒS.positionPercent(50, 48));
            await Template.satzbau(Template.characters.Bill, text.BILL.T039, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T040, true, true, 5, 50, Template.sound.Leserin, 3);
            Template.ƒS.Location.show(Template.locations.TempelimWald);
            await Template.ƒS.update(4);
            let deal = {
                ja: "Akzeptieren",
                nein: "Ablehnen"
            };
            let dealAccepted = false;
            let dealelement = await Template.ƒS.Menu.getInput(deal, "auswahl");
            switch (dealelement) {
                case deal.ja:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.Character.hide(Template.characters.Bill);
                    await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.happy, Template.ƒS.positionPercent(50, 48));
                    await Template.satzbau(Template.characters.Bill, text.BILL.T041, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T042, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T043, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T044, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T045, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T035, true, true, 5, 50, Template.sound.MainNarrator, 3);
                    Template.dataForSave.billgetroffen = true;
                    Template.ƒS.Inventory.add(Template.items.Packt);
                    Template.dataForSave.billspakt = true;
                    dealAccepted = true;
                    break;
                case deal.nein:
                    await Template.buttonpress(Template.sound.buttonpress, .2);
                    await Template.ƒS.Character.hide(Template.characters.Bill);
                    await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.sauer, Template.ƒS.positionPercent(50, 48));
                    await Template.satzbau(Template.characters.Bill, text.BILL.T046, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T047, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T048, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T049, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T050, true, true, 5, 50, Template.sound.Leserin, 3);
                    await Template.satzbau(Template.characters.Bill, text.BILL.T051, true, true, 5, 50, Template.sound.Leserin, 3);
                    Template.dataForSave.billgetroffen = true;
                    break;
            }
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.bored, Template.ƒS.positionPercent(50, 48));
            Template.ƒS.Character.hideAll;
            Template.ƒS.Location.show(Template.locations.blackbackground);
            await Template.ƒS.Sound.fade(Template.sound.BillTheme, 0, 5, true);
            await Template.ƒS.update(8);
        }
    }
    Template.Szene4_2 = Szene4_2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Szene4_3() {
        console.log("FudgeStory Template Scene4_3 starting");
        console.log(Template.characters.MainNarrator);
        //Gesprochener Text
        let text = {
            MainNarrator: {
                T001: "Halistrator stolperte beim Reden über eine Fliege und flog gegen eine Wache...",
                T002: "Die Wachen richten ihre Waffen auf euch.",
                T003: "Endlich angekommen im Thronsaal vom Schloss des Lichts, finden unsere Helden den königlichen Berater.",
                T004: "Ihr setzt den Berater des Königs über euer Vorhaben in Kenntnis.",
                T005: "Irgendetwas tief in unserem Helden führte ihn aus dem Wald heraus.",
                T006: "Es war, als würde eine zweite Seele im Körper unseres Helden hausen.",
                T007: "So kam unser Held endlich beim Schloss an, von dem Halistrator erzählt hatte.",
                T008: "Ob er auch schon dort ist...",
                T009: "Du spürst das Brennen der blauen Flamme in deiner Seele.",
                T010: "Sieh mal, Halistrator ist auch hier!",
                T011: "Was?",
                T012: "Hey, das kannst du doch nicht bringen?",
                T013: "Ich bin doch der Erzähler!",
                T014: "Nein, warte.",
                T015: "Wie bist du hierhergekommen?",
                T016: "Was, halt nein.",
                T017: "Ne- e- e- ei.",
            },
            whiteknight: {
                T000: ". . .",
                T001: "Hahahaha.",
                T002: "Ah, der ist immer so!",
                T003: "Er bringt wirklich jeden zum Lachen.",
                T004: "Hahahah, ich kann gar nicht mehr aufhören damit!",
                T005: "Ja, wir haben es ziemlich eilig. Er ist der Hofnarr!",
                T006: "Den der Berater sich so sehr gewünscht hat!",
                T007: "Es tut mir so leid für meinen Freund hier.",
                T008: "Er ist nunja... Etwas ganz Besonderes.",
                T009: "Er braucht den Segen des königlichen Beraters, bitte!",
                T010: "Ich werde ihn auch dafür bestrafen, dass er Wachen einfach so anrempelt.",
            },
            Halistrator: {
                T001: "W-wir wollen zum Berater des Königs! Wir sind gekommen, um zu helfen!",
                T002: "Er hat mich gerade Freund genannt! WIE SCHÖN!",
                T003: "Das lief jetzt nicht so wie geplant, oder...",
                T004: "Und jetzt? Irgendwelche Ideen?",
                T005: "Ich habs!",
                T006: "Ich weiß, wohin wir gehen könnten!",
                T007: "Der königliche Berater ist gewiss nicht der einzige, der Wissen über Türen in andere Welten verfügt!",
                T008: "Komm, folge mir! Wir besuchen einen alten Freund meiner Familie!",
                T009: "Da! Das muss er sein! Der Berater des Königs!",
                T010: "Wie schön! Jetzt geht das Abenteuer so richtig los!",
                T011: "Aber irgendetwas stimmt doch mit diesem Berater nicht...",
                T012: "Ich werde das Gefühl nicht los, dass er...",
                T013: "Wir müssen fliehen! Schnell, folge mir!",
                T014: "Ich habe einen Plan!",
            },
            Berater: {
                T000: "Was sucht ihr hier? Seht ihr denn nicht, dass ich beschäftigt bin?!",
                T001: "Verstehe...",
                T002: "Wenn das so ist...",
                T003: "Dann könnt ihr mir wirklich nützlich sein!",
                T004: "Ihr müsst die Prinzessin unbedingt retten!",
                T005: "Ich bin nicht geschaffen für diese Position eines Herrschers...",
                T006: "Doch ich warne euch!",
                T007: "Der Drache flog in Richtung des Reichs der Finsternis.",
                T008: "Der Weg wird kein Leichter sein!",
                T009: "Bringt mir die Prinzessin ins Schloss, und ich zeige dir, wie du zurück in deine Welt gelangst!",
                T010: "Wunderbar!",
                T011: "WIE KANNST DU ES WAGEN",
                T012: "Die KÖNIGLICHEN BEFEHLE ZU MISSACHTEN!?",
                T013: "WACHEN!!!",
                T014: "HALT! Wie seid ihr hier reingekommen?!",
                T015: "WACHEN!!!",
            },
            BILL: {
                T000: "Pass auf, lass mich das für dich erledigen.",
                T001: "Okay, mein Bester, ich übernehme ab hier!",
                T002: "Ah, wie schön es ist, wieder hier zu sein!",
                T003: "Nach all der langen, langen Zeit.",
                T004: "Danke dir!",
                T005: "Du hast mir wirklich den Allerwertesten gerettet.",
                T006: "Dafür möchte ich dir was zeigen!",
                T007: "WILLKOMMEN IN",
                T008: "MEINEM REICH!",
                T009: "Gefällt es dir?",
                T010: "Mach es dir gerne gemütlich!",
                T011: "Ahja, wegen deinem kleinen Freund...",
                T012: "Er hat dich doch schon sicherlich genug genervt, oder?",
                T013: "Um den musst du dir keine Sorgen mehr machen...",
                T014: "Heh heh.",
                T015: "Ich werde dich nun aus dieser Welt in deine eigene zurückbringen.",
                T016: "Ahja, es wird etwas schmerzhaft.",
                T017: "Keiner hat gesagt, dass du dabei LEBEND sein musst, oder?",
                T018: "HAH HAH HAH HAH HAAHAHAHAHAHAHAHA",
                T019: "Aber das war einmal...",
                T020: "Ich muss meine Familie rächen, verstehst du!",
                T021: "Der Feind hat mich verflucht.",
                T022: "Siehst du das Symbol auf dem Boden? Das ist das Zeichen der Finsternis!",
                T023: "Ich kann mich nicht länger manifestieren...",
                T024: "Ich werde dir helfen, versprochen!",
                T025: "Nimm mich mit, und ich stehe dir zur Seite.",
                T026: "Aber du musst auch etwas für mich tun...",
                T027: "Bitte hilf mir, mich zu erlösen!!!",
            },
            Wache1: {
                T000: "HAAAAAALT!",
                T001: "NENNT EUER ANLIEGEN! SOFORT!",
                T002: "RAUDIES",
                T003: "DAS ICH EUCH JAAA NICHT WIEDERSEHE!",
                T004: "HEY!!!",
                T005: "DER HOFNARR? NA GUT.",
                T006: "ALLES, WAS VOM BERATER ANGEORDNET WURDE, MUSS ZUGESTELLT WERDEN!",
                T007: "MOOOOOOOOMENT!",
                T008: "ICH KENNE DICH DOCH IRGENDWOHER...",
                T009: "DU WOLLTEST DOCH IRGENDWANN SCHON EINMAL REIN, ODER NICHT?!",
                T010: "JA, OHNE GENEHMIGUNG!",
                T011: "HAAAAAALT!",
                T012: "NIEMAND DARF IN DIE HALLEN DES BERATERS PASSIEREN!",
            },
            Mysteriouswoman: {
                T000: "Halt, warte!",
                T001: "Tu es nicht!",
                T002: "Er ist nicht der, für den er sich ausgibt!",
                T003: "Bitte glaube mir! Du musst fliehen! Ich weiß, wer du bist!",
                T004: "Ich bin auch aus der anderen Welt!",
            },
            Wache2: {
                T000: "Wo wollt ihr denn hin?",
                T001: "Kannst du mir mal bitte nicht ins Ohr schreien? Ich stehe direkt neben dir!",
                T002: "Entschuldigt bitte meinen Kameraden hier...",
                T003: "Er kann manchmal etwas...",
                T004: "Aufbrausend wirken.",
                T005: "Aber ihr seht nicht aus wie irgendwelche...",
                T006: "Ja genau, danke, Raudies.",
                T007: "Macht mir nichts vor.",
                T008: "Ihr stinkt regelrecht nach Bösem.",
                T009: "Verzieht euch von diesem Hof! Wir können nicht noch mehr Ärger gebrauchen.",
                T010: "Ähm...",
                T011: "Wow, das glaubst du einfach so...",
                T012: "Ich werde ziemlich sicher zu wenig bezahlt.",
                T013: "Geht schon durch!",
                T014: "Lass gut sein...",
                T015: "Sieh sie dir an.",
                T016: "Was sollen die schon ausrichten können, oder?",
                T017: "Verstehe. Nun gut, geht rein!",
                T018: "Seit dem Drachenangriff werden wir sowieso nicht mehr bezahlt.",
                T019: "Wir stehen hier eigentlich nur zum Spaß rum.",
                T020: "Ja, so lauten die Befehle! Was habt ihr hier verloren?",
            },
        };
        //Szenenablauf
        //characters.whiteknight.name = "Vasi";
        //dataForSave.protagonist.name = characters.whiteknight.name;+
        if (Template.dataForSave.protagonist.name == "") {
            Template.dataForSave.protagonist.name = "???";
            Template.characters.whiteknight.name = Template.dataForSave.protagonist.name;
        }
        Template.ƒS.Sound.play(Template.sound.chaptertransition, 0.05, false);
        await Template.ƒS.Location.show(Template.locations.chapter2);
        await Template.ƒS.update(3);
        await Template.ƒS.Location.show(Template.locations.blackbackground);
        Template.ƒS.Sound.play(Template.sound.chaptertransition, 0.05, false);
        await Template.ƒS.update(3);
        await Template.ƒS.Progress.save();
        await Template.ƒS.update(1);
        //await ƒS.Location.show(locations.chapter1);
        await Template.ƒS.update(1);
        Template.ƒS.Sound.setMasterVolume(11);
        //await ƒS.Sound.fade(sound.deepdark, 0.07, 0.1, true);
        //await ƒS.update(5);
        //Aufwachen - Kapitel 1
        await Template.ƒS.Character.show(Template.characters.Speechbox, Template.characters.Speechbox.pose.newversion, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(3);
        //Hier geht es weiter, wenn Halistrator mitkommt
        if (Template.dataForSave.Halisgefährteangenommen == true) {
            await Template.ƒS.Location.show(Template.locations.Schlosstor);
            await Template.ƒS.update(3);
            await Template.ƒS.Sound.fade(Template.sound.wachentheme, 0.07, 3, true);
            await Template.ƒS.Character.show(Template.characters.Wache2, Template.characters.Wache2.pose.standard, Template.ƒS.positionPercent(70, 48));
            await Template.ƒS.update(3);
            await Template.ƒS.Character.show(Template.characters.Wache1, Template.characters.Wache1.pose.standard, Template.ƒS.positionPercent(20, 48));
            await Template.ƒS.update(3);
            if (Template.dataForSave.evil <= Template.dataForSave.good) {
                //wenn gut mehr als böse
                await Template.satzbau(Template.characters.Wache1, text.Wache1.T000, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T000, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache1, text.Wache1.T001, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T001, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T002, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T003, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T004, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T005, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache1, text.Wache1.T002, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T006, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T001, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T001, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T002, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Sound.play(Template.sound.buttonhover, .2, false);
                let reaktionwachen = {
                    humorvoll: "Der Hofnarr",
                    nachgiebig: "Unterwerfen",
                };
                let orientierungselement = await Template.ƒS.Menu.getInput(reaktionwachen, "auswahl");
                switch (orientierungselement) {
                    case reaktionwachen.humorvoll:
                        Template.dataForSave.evil + 1;
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        await Template.ƒS.update(1);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T001, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T002, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T003, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T004, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache1, text.Wache1.T004, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T010, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T005, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T006, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache1, text.Wache1.T005, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache1, text.Wache1.T006, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T011, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T012, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T013, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        if (Template.dataForSave.gefallen == 1) {
                            await Template.satzbau(Template.characters.Wache1, text.Wache1.T007, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.Wache1, text.Wache1.T008, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.Wache1, text.Wache1.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.Wache1, text.Wache1.T010, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.Wache2, text.Wache2.T014, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.Wache2, text.Wache2.T015, true, true, 5, 50, Template.sound.MainNarrator, 3);
                            await Template.satzbau(Template.characters.Wache2, text.Wache2.T016, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        }
                        break;
                    case reaktionwachen.nachgiebig:
                        Template.dataForSave.good + 1;
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        await Template.ƒS.update(1);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T007, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.ƒS.Character.hide(Template.characters.Halistrator);
                        await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.cute, Template.ƒS.positionPercent(50, 48));
                        await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T002, true, true, 5, 50, Template.sound.Halistrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T008, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.whiteknight, text.whiteknight.T010, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T018, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        await Template.satzbau(Template.characters.Wache2, text.Wache2.T019, true, true, 5, 50, Template.sound.MainNarrator, 3);
                        break;
                }
                await Template.ƒS.Sound.fade(Template.sound.wachentheme, 0, 3, true);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Wache1);
                await Template.ƒS.update(1);
                await Template.ƒS.Character.hide(Template.characters.Wache2);
                await Template.ƒS.update(2);
                await Template.ƒS.Location.show(Template.locations.Thronsaal);
                await Template.ƒS.update(3);
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0.03, 3, true);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T003, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.ƒS.update(3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T009, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.update(2);
                await Template.ƒS.Character.show(Template.characters.Berater, Template.characters.Berater.pose.standard, Template.ƒS.positionPercent(50, 48));
                await Template.ƒS.update(3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T000, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T001, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T002, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T003, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T004, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T005, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T006, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T007, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T008, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.satzbau(Template.characters.Berater, text.Berater.T009, true, true, 5, 50, Template.sound.Elo, 3);
                await Template.buttonpress(Template.sound.buttonhover, .2);
                let abenteuerannehmen = {
                    annehmen: "Annehmen",
                    ablehnen: "Ablehnen",
                };
                let abenteuerelement = await Template.ƒS.Menu.getInput(abenteuerannehmen, "auswahl");
                switch (abenteuerelement) {
                    case abenteuerannehmen.annehmen:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        //Wenn entschuldigung angenommen
                        if (Template.dataForSave.entschuldigung == 2) {
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T000, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T001, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T002, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T003, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T004, true, true, 5, 50, Template.sound.Leserin, 3);
                            //ENDE 7
                        }
                        if (Template.dataForSave.entschuldigung != 2) {
                            await Template.satzbau(Template.characters.Berater, text.Berater.T010, true, true, 5, 50, Template.sound.Elo, 3);
                            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T010, true, true, 5, 50, Template.sound.Halistrator, 3);
                            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T011, true, true, 5, 50, Template.sound.Halistrator, 3);
                            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T012, true, true, 5, 50, Template.sound.Halistrator, 3);
                            //ENDE 3
                        }
                        break;
                    case abenteuerannehmen.ablehnen:
                        await Template.buttonpress(Template.sound.buttonpress, .2);
                        //Wenn entschuldigung angenommen
                        if (Template.dataForSave.entschuldigung == 2) {
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T000, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T001, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T002, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T003, true, true, 5, 50, Template.sound.Leserin, 3);
                            await Template.satzbau(Template.characters.MysteriousWoman, text.Mysteriouswoman.T004, true, true, 5, 50, Template.sound.Leserin, 3);
                            //ENDE 5
                        }
                        //Entschuldigung ELO alles andere
                        if (Template.dataForSave.entschuldigung != 2) {
                            await Template.satzbau(Template.characters.Berater, text.Berater.T011, true, true, 5, 50, Template.sound.Elo, 3);
                            await Template.satzbau(Template.characters.Berater, text.Berater.T012, true, true, 5, 50, Template.sound.Elo, 3);
                            await Template.satzbau(Template.characters.Berater, text.Berater.T013, true, true, 5, 50, Template.sound.Elo, 3);
                            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T013, true, true, 5, 50, Template.sound.Halistrator, 3);
                            await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, Template.sound.Halistrator, 3);
                            //ENDE 4
                        }
                        break;
                }
                await Template.ƒS.update(5);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.hide(Template.characters.Wache1);
                await Template.ƒS.Character.hide(Template.characters.Wache2);
                await Template.ƒS.Character.hide(Template.characters.Berater);
                await Template.ƒS.update(2);
                await Template.ƒS.Sound.fade(Template.sound.titletheme, 0, 3, true);
                await Template.ƒS.Location.show(Template.locations.fortsetzungfolgt);
                await Template.ƒS.update(10);
            }
            //ENDE 6
            if (Template.dataForSave.good <= Template.dataForSave.evil) {
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T007, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T008, true, true, 5, 50, Template.sound.MainNarrator, 3);
                await Template.satzbau(Template.characters.Wache2, text.Wache2.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
                //wenn böse mehr als gut
                await Template.ƒS.Sound.fade(Template.sound.wachentheme, 0, 3, true);
                await Template.ƒS.Location.show(Template.locations.blackbackground);
                await Template.ƒS.update(5);
                await Template.ƒS.Character.hide(Template.characters.Halistrator);
                await Template.ƒS.Character.hide(Template.characters.Wache1);
                await Template.ƒS.Character.hide(Template.characters.Wache2);
                await Template.ƒS.Character.hide(Template.characters.Berater);
                await Template.ƒS.update(2);
                await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.surprised, Template.ƒS.positionPercent(50, 48));
                await Template.ƒS.update(5);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T003, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T004, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T005, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T006, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T007, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.satzbau(Template.characters.Halistrator, text.Halistrator.T008, true, true, 5, 50, Template.sound.Halistrator, 3);
                await Template.ƒS.Character.hideAll;
                await Template.ƒS.Location.show(Template.locations.fortsetzungfolgt);
                await Template.ƒS.update(10);
            }
        }
        //Hier geht es weiter, wenn man Halistrator abgelehnt hat
        if (Template.dataForSave.Halisgefährteangenommen == false) {
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T005, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T006, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T007, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T008, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.ƒS.Location.show(Template.locations.Schlosstor);
            await Template.ƒS.update(3);
            await Template.ƒS.Sound.fade(Template.sound.wachentheme, 0.07, 3, true);
            await Template.ƒS.Character.show(Template.characters.Wache2, Template.characters.Wache2.pose.standard, Template.ƒS.positionPercent(70, 48));
            await Template.ƒS.update(3);
            await Template.ƒS.Character.show(Template.characters.Wache1, Template.characters.Wache1.pose.standard, Template.ƒS.positionPercent(20, 48));
            await Template.ƒS.update(3);
            await Template.satzbau(Template.characters.Wache1, text.Wache1.T011, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.Wache1, text.Wache1.T012, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.Wache2, text.Wache2.T020, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T000, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.buttonpress(Template.sound.buttonhover, .2);
            Template.ƒS.Sound.play(Template.sound.glitch, 0.03, false);
            let BILL = {
                BILL: "B I L L",
                BILL2: "B I L L",
            };
            let billelement = await Template.ƒS.Menu.getInput(BILL, "auswahl");
            switch (billelement) {
                case BILL.BILL:
                    Template.dataForSave.evil + 5;
                    break;
                case BILL.BILL2:
                    Template.dataForSave.evil + 5;
                    break;
            }
            await Template.ƒS.Sound.fade(Template.sound.wachentheme, 0, 3, true);
            await Template.ƒS.Character.hide(Template.characters.Wache1);
            await Template.ƒS.update(1);
            await Template.ƒS.Character.hide(Template.characters.Wache2);
            await Template.ƒS.update(2);
            await Template.ƒS.Location.show(Template.locations.Thronsaal);
            await Template.ƒS.update(3);
            await Template.ƒS.Character.show(Template.characters.Berater, Template.characters.Berater.pose.standard, Template.ƒS.positionPercent(50, 48));
            await Template.ƒS.update(3);
            await Template.satzbau(Template.characters.Berater, text.Berater.T014, true, true, 5, 50, Template.sound.Elo, 3);
            await Template.satzbau(Template.characters.Berater, text.Berater.T015, true, true, 5, 50, Template.sound.Elo, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T010, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.ƒS.Character.show(Template.characters.Halistrator, Template.characters.Halistrator.pose.sauer, Template.ƒS.positionPercent(20, 48));
            await Template.ƒS.update(3);
            Template.ƒS.Sound.play(Template.sound.glitch, 0.03, false);
            await Template.satzbau(Template.characters.Bill, text.BILL.T001, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T011, true, true, 5, 50, Template.sound.MainNarrator, 3);
            Template.verticalShake();
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T012, true, true, 5, 50, Template.sound.MainNarrator, 3);
            Template.verticalShake();
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T013, true, true, 5, 50, Template.sound.MainNarrator, 3);
            Template.verticalShake();
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T014, true, true, 5, 50, Template.sound.MainNarrator, 3);
            Template.verticalShake();
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T015, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T016, true, true, 5, 50, Template.sound.MainNarrator, 3);
            Template.verticalShake();
            await Template.satzbau(Template.characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, Template.sound.MainNarrator, 3);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.hide(Template.characters.Wache1);
            await Template.ƒS.Character.hide(Template.characters.Wache2);
            await Template.ƒS.Character.hide(Template.characters.Berater);
            await Template.ƒS.update(2);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.happy, Template.ƒS.positionPercent(50, 48));
            await Template.ƒS.update(3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T002, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T003, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T004, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T005, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T006, true, true, 5, 50, Template.sound.Leserin, 3);
            Template.verticalShake();
            Template.ƒS.Sound.play(Template.sound.glitch, 0.03, false);
            await Template.ƒS.Sound.fade(Template.sound.BillTheme, 0.03, 3, true);
            await Template.ƒS.Location.show(Template.locations.Billsraum);
            await Template.ƒS.update(2);
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.bored, Template.ƒS.positionPercent(50, 48));
            await Template.ƒS.update(3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T007, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T008, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T009, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T010, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T011, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T012, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T013, true, true, 5, 50, Template.sound.Leserin, 3);
            await Template.satzbau(Template.characters.Bill, text.BILL.T014, true, true, 5, 50, Template.sound.Leserin, 3);
            //Wenn packt angenommen
            if (Template.dataForSave.billspakt == true) {
                await Template.ƒS.Character.hide(Template.characters.Bill);
                await Template.ƒS.Character.show(Template.characters.Bill, Template.characters.Bill.pose.happy, Template.ƒS.positionPercent(50, 48));
                await Template.ƒS.update(3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T015, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T016, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T017, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T018, true, true, 5, 50, Template.sound.Leserin, 3);
                //ENDING 1
            }
            if (Template.dataForSave.billspakt == false) {
                await Template.satzbau(Template.characters.Bill, text.BILL.T019, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T020, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T021, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T022, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T023, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T024, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T025, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T026, true, true, 5, 50, Template.sound.Leserin, 3);
                await Template.satzbau(Template.characters.Bill, text.BILL.T027, true, true, 5, 50, Template.sound.Leserin, 3);
                //ENDING 2
            }
            await Template.ƒS.Character.hide(Template.characters.Bill);
            await Template.ƒS.Character.hide(Template.characters.Halistrator);
            await Template.ƒS.Character.hide(Template.characters.Wache1);
            await Template.ƒS.Character.hide(Template.characters.Wache2);
            await Template.ƒS.Character.hide(Template.characters.Berater);
            await Template.ƒS.update(2);
            await Template.ƒS.Sound.fade(Template.sound.BillTheme, 0, 3, true);
            await Template.ƒS.Location.show(Template.locations.fortsetzungfolgt);
            await Template.ƒS.update(10);
        }
    }
    Template.Szene4_3 = Szene4_3;
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
//# sourceMappingURL=Template.js.map