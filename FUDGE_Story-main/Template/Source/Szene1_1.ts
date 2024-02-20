namespace Template {
  export async function Szene1_1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1 starting");
    console.log(characters.MainNarrator);
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
    ƒS.Sound.setMasterVolume(8);
    await ƒS.Sound.fade(sound.darkwind, .02, 10, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.newversion, ƒS.positionPercent(50, 100));
    await ƒS.update(10);
    state.a = 10; 
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

        //InventarItem
        //ƒS.Inventory.add(items.pageVampire); 

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
        dataForSave.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = dataForSave.protagonist.name;
        await satzbau(characters.MainNarrator, dataForSave.protagonist.name + " also?", true, true, 4, 50, sound.MainNarrator, 2);
        //stimme("Ein sehr. . .");
        await satzbau(characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, sound.MainNarrator, 2);
        console.log(dataForSave.protagonist.name);
        break;
      case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0013, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0014, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0015, true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0016, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0017, false, false, 3, 50, sound.MainNarrator, 2);
        dataForSave.protagonist.name = await ƒS.Speech.getInput();
        characters.whiteknight.name = dataForSave.protagonist.name;
        await satzbau(characters.MainNarrator, dataForSave.protagonist.name + " also?", true, true, 4, 50, sound.MainNarrator, 2);
        //stimme("Ein sehr. . .");
        await satzbau(characters.MainNarrator, "Ein sehr. . .", true, true, 4, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 4, 50, sound.MainNarrator, 2);
        console.log(dataForSave.protagonist.name);
        break;
    }
    await satzbau(characters.MainNarrator, dataForSave.protagonist.name + text.MainNarrator.TT001, true, true, 5, 50, sound.MainNarrator, 3);
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
          horizontalShake();
          await ƒS.Sound.play(sound.glitch, 0.05);
          await ƒS.update(4);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT018, true, true, 4, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.TT019, true, true, 4, 50, sound.MainNarrator, 2);
          await ƒS.Location.show(locations.startscreenbackground);
          await ƒS.update(1);
          await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(10, 80));
          await ƒS.Sound.fade(sound.darkwind, .02, 10, true); 
          await ƒS.update(3);
          tutorial.splice(2, 1, "");
          break;
      }
      i++;
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T0026, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0027, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 4, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0029 + " " + dataForSave.protagonist.name + "?", false, false, 4, 50, sound.MainNarrator, 2);
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
          await ƒS.Sound.fade(sound.MainTheme, .03, 10, true); //Der Sound der in Main.ts definiert wurde
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
        await satzbau(characters.MainNarrator, dataForSave.protagonist.name + text.MainNarrator.T0025 + dataForSave.protagonist.name + text.MainNarrator.T1026, true, true, 10, 50, sound.MainNarrator, 5);
        break;
    }
    await ƒS.Character.animate(characters.narrator, characters.narrator.pose.standard, fromLeftToCenter());
    await ƒS.Character.hide(characters.narrator);
    await ƒS.update(2);
    await ƒS.Location.show(locations.blackbackground);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0037, true, true, 3, 50, sound.MainNarrator, 2);
    await ƒS.update(1);
    ƒS.Sound.fade(sound.darkwind, 0, 5, false);
    await ƒS.Sound.fade(sound.MainTheme, 0, 5, false);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    ƒS.update(1);
  }
}

