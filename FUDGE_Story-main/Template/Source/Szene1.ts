namespace Template {
  export async function Szene1(): ƒS.SceneReturn {
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
    await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.standard, ƒS.positionPercent(50, 100));
    await ƒS.Speech.setTickerDelays(250); //Wie schnell der Text angezeigt wird
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0000);
    await ƒS.update(2);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0001);
    await ƒS.update(2);
    await ƒS.Speech.setTickerDelays(50);
    /*await ƒS.Sound.fade(sound.introductiontheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");*/
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0002);
    await ƒS.update(3);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0003);
    await ƒS.update(5);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0004);
    await ƒS.update(5);


    //Licht anschalten Text
    ƒS.Speech.setTickerDelays(50);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0005 + text.MainNarrator.T1005 + text.MainNarrator.T1006);
    await ƒS.update(8);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T1007, false);
    await ƒS.update(3);
    let lichtanschalten = {
      lichtan: "Licht anschalten",
      lichtaus: "Nichts tun"
    };
    let lichtanschaltenelement = await ƒS.Menu.getInput(lichtanschalten, "auswahl");
    switch (lichtanschaltenelement) {
      case lichtanschalten.lichtan:
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0001);
        await ƒS.update(10);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0002);
        await ƒS.update(7);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0003);
        await ƒS.update(4)
        ƒS.Sound.play(sound.makelight, 0.3, false);
        await ƒS.update(1);
        await ƒS.Location.show(locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        await ƒS.update(6)
        break;

      case lichtanschalten.lichtaus:
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0004);
        await ƒS.update(7);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0005);
        await ƒS.update(2);
        ƒS.Sound.play(sound.makelight, 0.3, false);
        await ƒS.update(2);
        await ƒS.Location.show(locations.startscreenbackground); //Location initialisieren die in Main.ts definiert wurden
        console.log("Background is being displayed");
        break;
    }
    await ƒS.update(3);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0006);
    await ƒS.update(15);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0007);
    await ƒS.update(5);
    await delay();


    //Namen sagen
    let entscheidung1 = {
      iSayYes: "Namen sagen", //Passiert a
      iSayNo: "Ablehnen" //Passiert b
    };
    let erstesdialogelement = await ƒS.Menu.getInput(entscheidung1, "auswahl");

    //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:


    switch (erstesdialogelement) { //Wenn Auswahl "Namen eingben"
      case entscheidung1.iSayYes:
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0008);
        await ƒS.update(5);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0009);
        await ƒS.update(3);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
        await ƒS.update(10);
        data.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = data.protagonist.name;
        ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also?", true);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator,"Ein sehr. . .");
        await ƒS.update(5);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
        await ƒS.update(4);
        console.log(data.protagonist.name);
        break;
      case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        await ƒS.Speech.setTickerDelays(50);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0012);
        await ƒS.update(6);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0013);
        await ƒS.Speech.setTickerDelays(50);
        await ƒS.update(5);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0014);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0015);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0016);
        await ƒS.update(7);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0017, false);
        await ƒS.update(3);
        data.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = data.protagonist.name;
        ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also?", true);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator,"Ein sehr. . .");
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
        await ƒS.update(4);
        console.log(data.protagonist.name);

        break;
    }

    ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + text.MainNarrator.TT001);
    await ƒS.update(5);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT002);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT003);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT004);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT005);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT006, false);
    await ƒS.update(4);

  //FUNKTION FÜR SWITCH CASE MIT ALLEN MÖGLICHKEITEN
  let tutorial = ["Tour annehmen", "Trinken annehmen", "Konversation verlassen"];

  let i: number = 0;
  while (i < 3) {
  let tutorialauswahl = await ƒS.Menu.getInput(tutorial, "auswahl");
  console.log(tutorial.length)
  
  //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:

  switch (tutorialauswahl) { //Wenn Auswahl "Namen eingben"
    case tutorial[0]:
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT010);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT011);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT012);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT013);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT014);
      await ƒS.update(4);
      tutorial.splice(0, 1, "");
      break;

    case tutorial[1]:
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT007);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT008);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT009);
      await ƒS.update(4);
      //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
      tutorial.splice(1, 1, "");
      break;

    case tutorial[2]:
      await ƒS.Location.show(locations.blackbackground);

      await ƒS.Sound.fade(sound.darkwind, 0, 0.2, true);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT015);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT016);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT017);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT018);
      await ƒS.update(4);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.TT019);
      await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true);
      await ƒS.Location.show(locations.startscreenbackground);
      await ƒS.update(4);
      tutorial.splice(2, 1, "");
      break;
    }
    i++;
}

    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0026);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0027);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0028);
    await ƒS.update(4);
    ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0029 + data.protagonist.name + "?", false);
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
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0014);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0015);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0016);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0017);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0018);
        await ƒS.update(4);
        geschichten.splice(0, 1, "");
        mam(5);
        break;

      case geschichten[1]:
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0008);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0009);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0010);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0011);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0012);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0013);
        await ƒS.update(4);
        //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
        geschichten.splice(1, 1, "");
        break;

      case geschichten[2]:
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0001);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0002);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0003);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0004);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0005);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0006);
        await ƒS.update(4);
        ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.G0007);
        await ƒS.update(4);
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