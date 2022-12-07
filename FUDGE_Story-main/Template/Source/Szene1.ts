namespace Template {
  export async function Szene1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");
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
        T0034: "Ah. . . Du bist also eher die taffe Persönlichkeit?",
        T0035: "Aber sag nicht ich hätte dich nicht gewarnt",
        T0036: "Die Haftung meinerseits, für körperliche oder geistige Schäden wird hiermit ausgeschlossen. . . heh",

        T0037: "Jetzt lehn dich zurück und hör gut zu. . .",


      }
    };

    //Szenenablauf
    await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.newversion, ƒS.positionPercent(50, 100));
    await ƒS.update(3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0001, /*waitfornext*/false,/*skipbar*/ false,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50, /*Stimme*/sound.MainNarrator, /*skiplänge*/1);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0001, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator, /*skiplänge*/1);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0002, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator, /*skiplänge*/1);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0003, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 5,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator,/*skiplänge*/ 3);

    await satzbau(characters.MainNarrator, text.MainNarrator.T0004, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 3,/*geschwindigkeit*/ 50,/*Stimme*/ sound.MainNarrator, /*skiplänge*/ 2);
    await ƒS.Character.show(characters.narrator, characters.narrator.pose.eyesonly, ƒS.positionPercent(40, 80));
    await ƒS.update(3);


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
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0001, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0002, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0003, false, false, 2, 50, sound.MainNarrator, 2);
        await ƒS.Character.animate(characters.narrator, characters.narrator.pose.eyesonly, fromCenterToLeft());
        await ƒS.Character.hide(characters.narrator);
        await ƒS.update(2);
        ƒS.Sound.play(sound.makelight, 0.3, false);
        await signaldelay();
        ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(10, 80));
        ƒS.Location.show(locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await ƒS.update(1);
        break;

      case lichtanschalten.lichtaus:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0004, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.L0005, true, true, 3, 50, sound.MainNarrator, 2);
        await ƒS.Character.animate(characters.narrator, characters.narrator.pose.eyesonly, fromCenterToLeft());
        await ƒS.Character.hide(characters.narrator);
        await ƒS.update(2);
        ƒS.Sound.play(sound.makelight, 0.3, false);
        await signaldelay();
        ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(10, 80));
        ƒS.Location.show(locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await ƒS.update(1);
        break;
    }
    await ƒS.update(3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0006, true, true, 8, 50, sound.MainNarrator, 4);
    //stimme(text.MainNarrator.T0007);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0007, true, true, 3, 50, sound.MainNarrator, 2);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    //Namen sagen
    let entscheidung1 = {
      iSayYes: "Namen sagen", //Passiert a
      iSayNo: "Ablehnen" //Passiert b
    };
    let erstesdialogelement = await ƒS.Menu.getInput(entscheidung1, "auswahl");
    //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
    switch (erstesdialogelement) { //Wenn Auswahl "Namen eingben"
      case entscheidung1.iSayYes:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0008, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0009, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0010 + " ", false, false, 4, 50, sound.MainNarrator, 2);
        //ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
        data.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = data.protagonist.name;
        await satzbau(characters.MainNarrator, data.protagonist.name + " also?", true, true, 4, 50, sound.MainNarrator, 2);
        //stimme("Ein sehr. . .");
        await satzbau(characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, sound.MainNarrator, 2);
        console.log(data.protagonist.name);
        break;
      case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0013, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0014, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0015, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0016, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0017, false, false, 3, 50, sound.MainNarrator, 2);
        data.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = data.protagonist.name;
        await satzbau(characters.MainNarrator, data.protagonist.name + " also?", true, true, 4, 50, sound.MainNarrator, 2);
        //stimme("Ein sehr. . .");
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
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    //FUNKTION FÜR SWITCH CASE MIT ALLEN MÖGLICHKEITEN
    let tutorial = ["Tour annehmen", "Trinken annehmen", "Konversation beenden"];
    let i: number = 0;
    while (i < 3) {
      let tutorialauswahl = await ƒS.Menu.getInput(tutorial, "auswahl");
      console.log(tutorial.length)

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:
      switch (tutorialauswahl) { //Wenn Auswahl "Namen eingben"
        case tutorial[0]:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT010, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT011, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT012, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT013, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT014, true, true, 4, 50, sound.MainNarrator, 2);
          tutorial.splice(0, 1, "");
          break;
        case tutorial[1]:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT007, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT008, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT009, true, true, 4, 50, sound.MainNarrator, 2);
          //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
          tutorial.splice(1, 1, "");
          break;
        case tutorial[2]:
          await buttonpress(sound.buttonpress, .2);
          await ƒS.Sound.fade(sound.darkwind, 0, 0.2, true);
          ƒS.Character.hide(characters.narrator);
          await ƒS.update(1);
          ƒS.Location.show(locations.blackbackground);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT015, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT016, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT017, true, true, 4, 50, sound.MainNarrator, 2);
          await ƒS.Sound.play(sound.glitch, 0.05);
          await ƒS.update(4);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT018, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT019, true, true, 4, 50, sound.MainNarrator, 2);
          await ƒS.Location.show(locations.startscreenbackground);
          await ƒS.update(1);
          await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(10, 80));
          ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true);
          await ƒS.update(3);
          tutorial.splice(2, 1, "");
          break;
      }
      i++;
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T0026, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0027, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0029 + " " + data.protagonist.name + "?", false, false, 4, 50, sound.MainNarrator, 2);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    //FUNKTION FÜR SWITCH CASE MIT BEENDEN
    //Entscheidung mithilfe von Array (wieder zurückkehren in switch funktion)
    //let b: number = 0
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
          await buttonpress(sound.buttonpress, .2);
          await ƒS.Sound.fade(sound.MysteryManTheme, 0.05, 0.1, true); //Der Sound der in Main.ts definiert wurde
          await satzbau(characters.MainNarrator, text.MainNarrator.G0014, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0015, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0016, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0017, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.G0018, false, false, 4, 50, sound.MainNarrator, 2);
          geschichten.splice(0, 1, "");
          mam(5);
          break;
        case geschichten[1]:
          await buttonpress(sound.buttonpress, .2);;
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
          await buttonpress(sound.buttonpress, .2);
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
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let tutorialspielen = {
      ja: "Tutorial spielen",
      nein: "Ich brauche keine Einweisung",
    };
    let tutorialspielement = await ƒS.Menu.getInput(tutorialspielen, "auswahl");
    switch (tutorialspielement) {
      case tutorialspielen.ja:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0030, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0031, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0032, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0033, true, true, 7, 50, sound.MainNarrator, 3);
        break;

      case tutorialspielen.nein:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0034, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0035, true, true, 7, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0036, true, true, 7, 50, sound.MainNarrator, 3);
        break;
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T0020, true, true, 7, 50, sound.MainNarrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0021, true, true, 8, 50, sound.MainNarrator, 4);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0022, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0023, false, false, 4, 50, sound.MainNarrator, 2);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let herausforderung = {
      iSayYes: "Auf jeden Fall", //Passiert a
      iSayNo: "Ich glaube eher nicht" //Passiert b
    };
    let herausforderungselement = await ƒS.Menu.getInput(herausforderung, "auswahl");
    switch (herausforderungselement) {
      case herausforderung.iSayYes:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0024, true, true, 7, 50, sound.MainNarrator, 3);
        break;
      case herausforderung.iSayNo:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.T0025 + data.protagonist.name + text.MainNarrator.T1026, true, true, 10, 50, sound.MainNarrator, 5);
        break;
    }
    await ƒS.Character.animate(characters.narrator, characters.narrator.pose.standard, fromLeftToCenter());
    await ƒS.Character.hide(characters.narrator);
    await ƒS.update(2);
    await ƒS.Location.show(locations.blackbackground);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0037, true, true, 3, 50, sound.MainNarrator, 2);
    await ƒS.update(1);
    ƒS.Sound.fade(sound.darkwind, 0, 0.8, true);
    ƒS.Sound.fade(sound.MysteryManTheme, 0, 0.8, true);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    ƒS.update(1);
  }
}

