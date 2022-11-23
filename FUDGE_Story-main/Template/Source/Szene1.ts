namespace Template {
  export async function Szene1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");

    //   document.addEventListener("keydown", hndKeyPress);
    //   async function hndKeyPress(_event: KeyboardEvent, t: number, textgeschwindigkeit: number, geskipped: boolean, pausenlänge: number, skiplänge: number, speechlength: number): Promise<void> {
    //     switch (_event.code) {
    //     case ƒ.KEYBOARD_CODE.SPACE:
    //       t = speechlength;
    //       textgeschwindigkeit = 0;
    //       geskipped = true;
    //       pausenlänge = 1;
    //       await ƒS.update(skiplänge);
    //       console.log(pausenlänge);
    //       console.log("update abgewartet");
    //       break;
    //     case ƒ.KEYBOARD_CODE.A:
    //       t = speechlength;
    //       break;
    //   }
    // }
    // hndKeyPress(KeyA, 1, 1, true, 1, 2, 2);

    console.log(characters.MainNarrator);
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
        T0034: "Ah. . . Du bist also eher die Taffe Persönlichkeit?",
        T0035: "Aber sag nicht ich hätte dich nicht gewarnt",
        T0036: "Dann lehn dich zurück und hör gut zu. . .",


      }
    };
    //Wartet delay ab wenn aufgerufen
    let signaldelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    //Buttonfunktion
    function buttonpress(buttonart: string, lautstärke: number) {
      ƒS.Sound.play(buttonart, lautstärke, false);
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
        if(geskipped == 1){
          console.log("Text geskipped");
        }
        else {
        ƒS.Sound.play(voicetype, .2, false); //Der Sound der in Main.ts definiert wurde
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
          console.log(t);
          await signaldelay();
      }
    }


    //String länge prüfen
    // Funktion prüft die angegebene Textlänge und gibt eine zahl zurück, die die wiederholungen für den Sound bestimmt
    async function stimme(r: string): Promise<number> {
      let speechlength = r.length / 4;
      console.log(speechlength);
      let i: number = 0;
      for (i = 0; i < speechlength; i++) {
        await ƒS.Sound.play(sound.MainNarrator, .2, false); //Der Sound der in Main.ts definiert wurde
        //await ƒS.update(.2);
        console.log(i);
      }
      return speechlength;
    };
    //Szenenablauf
    await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.standard, ƒS.positionPercent(50, 100));
    await ƒS.Character.show(characters.narrator, characters.narrator.pose.eyesonly, ƒS.positionPercent(50, 80));
    await satzbau(characters.MainNarrator, text.MainNarrator.T0001, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50, /*Stimme*/sound.MainNarrator, /*skiplänge*/1);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0001, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator, /*skiplänge*/1);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0002, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator, /*skiplänge*/1);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0003, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 5,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator,/*skiplänge*/ 3);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0004, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator, /*skiplänge*/ 2);



    //Licht anschalten Text
    await satzbau(characters.MainNarrator, text.MainNarrator.T0005 + text.MainNarrator.T1005 + text.MainNarrator.T1006, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T1007, false, true, 5, 50, sound.MainNarrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let lichtanschalten = {
      lichtan: "Licht anschalten",
      lichtaus: "Nichts tun"
    };
    let lichtanschaltenelement = await ƒS.Menu.getInput(lichtanschalten, "auswahl");
    switch (lichtanschaltenelement) {
      case lichtanschalten.lichtan:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0001, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0002, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0003, false, false, 3, 50, sound.MainNarrator, 2);
        ƒS.Sound.play(sound.makelight, 0.3, false);
        await delay();
        await ƒS.Character.hide(characters.narrator);
        await delay();
        await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(50, 80));
        await ƒS.Location.show(locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await ƒS.update(3)
        break;

      case lichtanschalten.lichtaus:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0004, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0005, true, true, 3, 50, sound.MainNarrator, 2);
        ƒS.Sound.play(sound.makelight, 0.3, false);
        await delay();
        await ƒS.Character.hide(characters.narrator);
        await delay();
        await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(50, 80));
        await ƒS.Location.show(locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        break;
    }
    await ƒS.update(3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0006, true, true, 8, 50, sound.MainNarrator, 4);
    stimme(text.MainNarrator.T0007);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0007, true, true, 3, 50, sound.MainNarrator, 2);
    //Namen sagen
    let entscheidung1 = {
      iSayYes: "Namen sagen", //Passiert a
      iSayNo: "Ablehnen" //Passiert b
    };
    let erstesdialogelement = await ƒS.Menu.getInput(entscheidung1, "auswahl");
    //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
    switch (erstesdialogelement) { //Wenn Auswahl "Namen eingben"
      case entscheidung1.iSayYes:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0008, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0009, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0010, false, false, 7, 50, sound.MainNarrator, 3);
        //ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
        data.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = data.protagonist.name;
        await satzbau(characters.MainNarrator, data.protagonist.name + " also?", true, true, 4, 50, sound.MainNarrator, 2);
        stimme("Ein sehr. . .");
        await satzbau(characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, sound.MainNarrator, 2);
        console.log(data.protagonist.name);
        break;
      case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0013, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0014, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0015, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0016, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0017, false, false, 3, 50, sound.MainNarrator, 2);
        data.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = data.protagonist.name;
        await satzbau(characters.MainNarrator, data.protagonist.name + " also?", true, true, 4, 50, sound.MainNarrator, 2);
        stimme("Ein sehr. . .");
        await satzbau(characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, sound.MainNarrator, 2);
        console.log(data.protagonist.name);
        break;
    }
    await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.TT001, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.TT002, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.TT003, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.TT004, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.TT005, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.TT006, false, false, 4, 50, sound.MainNarrator, 2);
    //FUNKTION FÜR SWITCH CASE MIT ALLEN MÖGLICHKEITEN
    let tutorial = ["Tour annehmen", "Trinken annehmen", "Konversation verlassen"];
    let i: number = 0;
    while (i < 3) {
      let tutorialauswahl = await ƒS.Menu.getInput(tutorial, "auswahl");
      console.log(tutorial.length)

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
      switch (tutorialauswahl) { //Wenn Auswahl "Namen eingben"
        case tutorial[0]:
          buttonpress(sound.buttonpress, .2);
          await ƒS.update(2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT010, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT011, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT012, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT013, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT014, true, true, 4, 50, sound.MainNarrator, 2);
          tutorial.splice(0, 1, "");
          break;
        case tutorial[1]:
          buttonpress(sound.buttonpress, .2);
          await ƒS.update(2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT007, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT008, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT009, true, true, 4, 50, sound.MainNarrator, 2);
          //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
          tutorial.splice(1, 1, "");
          break;
        case tutorial[2]:
          buttonpress(sound.buttonpress, .2);
          await ƒS.update(2);
          await ƒS.Location.show(locations.blackbackground);
          await ƒS.Sound.fade(sound.darkwind, 0, 0.2, true);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT015, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT016, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT017, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT018, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT019, true, true, 4, 50, sound.MainNarrator, 2);
          await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true);
          await ƒS.Location.show(locations.startscreenbackground);
          await ƒS.update(4);
          tutorial.splice(2, 1, "");
          break;
      }
      i++;
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T0026, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0027, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0029 + data.protagonist.name + "?", false, false, 4, 50, sound.MainNarrator, 2);
    //FUNKTION FÜR SWITCH CASE MIT BEENDEN
    //Entscheidung mithilfe von Array (wieder zurückkehren in switch funktion)
    let b: number = 0
    let geschichten = ["Geschichte anhören", "Nach der Umgebung fragen", "Nach dem Herrn fragen"];
    function mam(b: number): number {
      x = b;
      return b;
    }
    let x: number = 0;
    while (mam(x) < 3) {
      let geschichtenauswahl = await ƒS.Menu.getInput(geschichten, "auswahl");
      console.log(geschichten.length)

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:

      switch (geschichtenauswahl) { //Wenn Auswahl "Namen eingben"
        case geschichten[0]:
          buttonpress(sound.buttonpress, .2);
          await ƒS.update(2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0014, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0015, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0016, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0017, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0018, true, true, 4, 50, sound.MainNarrator, 2);
          geschichten.splice(0, 1, "");
          mam(5);
          break;
        case geschichten[1]:
          buttonpress(sound.buttonpress, .2);
          await ƒS.update(2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0008, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0009, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0010, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0011, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0012, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0013, true, true, 4, 50, sound.MainNarrator, 2);
          //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
          geschichten.splice(1, 1, "");
          break;
        case geschichten[2]:
          buttonpress(sound.buttonpress, .2);
          await ƒS.update(2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0001, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0002, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0003, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0004, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0005, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0006, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0007, true, true, 4, 50, sound.MainNarrator, 2);
          geschichten.splice(2, 1, "");
          break;
      }
      x++;
      console.log(mam(x));
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T1007, false, false, 3, 50, sound.MainNarrator, 2);
    let tutorialspielen = {
      ja: "Tutorial spielen",
      nein: "Ich brauche keine Einweisung",
    };
    let tutorialspielement = await ƒS.Menu.getInput(tutorialspielen, "auswahl");
    switch (tutorialspielement) {
      case tutorialspielen.ja:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0030, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0031, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0032, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0033, true, true, 7, 50, sound.MainNarrator, 3);
        break;

      case tutorialspielen.nein:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0034, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0035, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0036, true, true, 7, 50, sound.MainNarrator, 3);
        break;
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T0020, true, true, 7, 50, sound.MainNarrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0021, true, true, 8, 50, sound.MainNarrator, 4);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0022, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0023, false, false, 4, 50, sound.MainNarrator, 2);
    let herausforderung = {
      iSayYes: "Auf jeden Fall", //Passiert a
      iSayNo: "Ich glaube eher nicht" //Passiert b
    };
    let herausforderungselement = await ƒS.Menu.getInput(herausforderung, "auswahl");
    switch (herausforderungselement) {
      case herausforderung.iSayYes:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0024, true, true, 7, 50, sound.MainNarrator, 3);
        break;
      case herausforderung.iSayNo:
        buttonpress(sound.buttonpress, .2);
        await ƒS.update(2);
        await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.T0025 + data.protagonist.name + text.MainNarrator.T1026, true, true, 10, 50, sound.MainNarrator, 5);
        break;
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
    await ƒS.update(1);
  }
}

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