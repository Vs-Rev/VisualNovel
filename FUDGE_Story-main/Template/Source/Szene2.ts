namespace Template {
  export async function Szene2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene2 starting");



    //Gesprochener Text
    let text = {
      MainNarrator: {
        M0000: " erwachte aus dem süßen Schlaf, als wäre nichts gewesen",
        //Aufwachen ja
        M0001: " wusste, es gibt etwas wichtiges. . .",
        M0002: "etwas so unglaublich wichtiges, dass ",
        M0003: " beschloss, gegen die verführerische Gemütlichkeit des eigenen Bettes anzukämpfen und. . .",
        M0004: "schaffte es letztendlich aufzustehen",
        //Aufwachen nein
        M0005: " wollte liegen bleiben, der gemütlichen Verführung des Bettes verfallen doch. . .",
        M0006: "Die Fesseln der Gemütlichkeit lösten sich wie auf magische Weise!",
        M0007: " stand auf",

        M0008: " war wütend, ernzürnt wie als wäre sein Herz im heißesten Vulkan geschmiedet worden",
        M0009: "Doch es war klar, dass es noch sehr viel zu tun gibt!",

        M0010: " war ganz gelassen. Ganz entspannt und ohne jede Sorge",
        M0011: "Doch da war ",
        M0012: " noch nicht klar, was noch alles vorne liegt",

        M0013: "So viele Gefühle auf einmal überkamen ",
        M0014: ", das garnicht klar war, wie ",
        M0015: " sich verhalten sollte.",
        M0016: "Das Resultat war. . .",
        M0017: "Stillschweigend",

        M0018: "Schnell war klar, dass etwas sehr wichtiges getan werden musste!",
        M0019: "So wichtig, dass das Lebenen davon abhing",
      },
      whiteknight: {
        //Aufwachen nein
        W0000: "Was?",
        W0001: "Moment, wie bin ich gerade aufgestanden?!",

        W0002: "Das war ein erholsamer Schlaf. Ich hatte so einen schönen Traum",
        W0003: ". . . glaube ich",
        W0004: "Moment. . . Was habe ich gleich nochmal geträumt?",
        //
      },
    };

    //Wartet delay ab wenn aufgerufen
    let signaldelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    //Buttonfunktion
    async function buttonpress(buttonart: string, lautstärke: number) {
      ƒS.Sound.play(buttonart, lautstärke, false);
        await timer(0, 2);
    }
    //Satzbaufunktion
    async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number, voicetype: string, skiplänge: number) {
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
        if(geskipped == 1){
          console.log("Text geskipped");
        }
        else {
        ƒS.Sound.play(voicetype, .05, false); //Der Sound der in Main.ts definiert wurde
        await ƒS.update(.2);
      }
      }

      for (t = 0; t < pausenlänge; t++) {
        document.addEventListener("mousedown", hndMousePress);
        async function hndMousePress(_event: MouseEvent): Promise<void> {
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

    //Allgemeiner Timer Funktion
    async function timer(skipable: number, länge: number){
      let t: number;
      for (t = 0; t < länge; t++) {
        if(skipable == 1){
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
    data.protagonist.name = "Nina";
    characters.whiteknight.name = data.protagonist.name;
    await ƒS.Sound.fade(sound.clockticking, 0.5, 2, true);
    await ƒS.update(1);
    await timer(0, 5);
    await ƒS.Sound.fade(sound.clockticking, 0, 2, false);
    await ƒS.update(1);
    ƒS.Sound.play(sound.alarmclock, 1, false);
    await ƒS.update(1);
    ƒS.Sound.play(sound.impact, 1, false);
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.newversion, ƒS.positionPercent(50, 100));
    await ƒS.Location.show(locations.homeroom);
    await ƒS.update(1);
    await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.M0000, /*waitfornext*/false,/*skipbar*/ false,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50, /*Stimme*/sound.MainNarrator, /*skiplänge*/1);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let aufwachen = {
      aufstehen: "Aufstehen",
      liegenbleiben: "Liegen bleiben",
    };
    let verhalten: number = 0;
    let aufwachentscheidung = await ƒS.Menu.getInput(aufwachen, "auswahl");
    switch (aufwachentscheidung) {
      case aufwachen.aufstehen:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0003, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M0004, true, true, 3, 50, sound.MainNarrator, 1);
        break;

      case aufwachen.liegenbleiben:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0005, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,text.MainNarrator.M0006, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0007 , true, true, 3, 50, sound.MainNarrator, 1);
        verhalten = 1;
        break;
    }
    if(verhalten == 1){
      let Benehmen = {
        ruhig: "Ruhe bewahren",
        wütend: "Wütend reagieren",
        nichts: "Nichts sagen",
      };
      let benehmensentscheidung = await ƒS.Menu.getInput(Benehmen, "auswahl");
      switch (benehmensentscheidung) {
        case Benehmen.ruhig:
          await satzbau(characters.whiteknight,text.whiteknight.W0002, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.whiteknight,text.whiteknight.W0003, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.whiteknight,text.whiteknight.W0004, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.M0010, true, true, 6, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0011 + data.protagonist.name + text.MainNarrator.M0012 , true, true, 5, 50, sound.MainNarrator, 1);
          break;
        case Benehmen.wütend:
          await satzbau(characters.whiteknight,text.whiteknight.W0000, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.whiteknight,text.whiteknight.W0001, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0008 , true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0009 , true, true, 5, 50, sound.MainNarrator, 1);
          break;
        case Benehmen.nichts:
          await satzbau(characters.MainNarrator, text.MainNarrator.M0013 + data.protagonist.name + text.MainNarrator.M0014 + text.MainNarrator.M0015, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0016, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0017, true, true, 5, 50, sound.MainNarrator, 1);
          break;
      }
    }
      await satzbau(characters.MainNarrator, text.MainNarrator.M0018 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0019 , true, true, 5, 50, sound.MainNarrator, 1);
    //Szenenablauf
  }
}
