namespace Template {
  export async function Szene4_2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene4_2 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T001: "Halistrator stolperte über seine eigenen Füße. . .",

        T002: "Unser Held ging nun ohne Ziel durch diese wundersame neue Welt",
        T003: "Er fragt sich, ob es wirklich die richtige Entscheidung war, den Gefährten abzuweisen",
        T004: "Die Antwort wird er schon sicherlich noch erfahren",
        T005: "Sag mal, weißt du wirklich wo du langläufst? In diesem Wald sehe selbst ICH nichts mehr",

        T006: "Unser Held wusste auf jeden Fall wohin er möchte!",
        T007: "Mit einem klaren Ziel vor Augen, stürtze er sich selbstsicher in das nächstbeste Abenteuer!",
        T008: ". . .",
        T009: "Und gelangte tief im Wald an einen Tempel. . .",

        T010: "Na immerhin gibst du es zu!",
        T011: "Aber ohne Weg, gibt es keine Geschichte",
        T012: "Und komm mir jetzt nicht mit - Der Weg ist das Ziel -",
        T013: "Okay? Das ist meine Aufgabe!",
        T014: "So lief unser Held mit dem Kopf durch die Wand durch einen tiefen magischen Wald",
        T015: "Total ungefährlich. . .",

        T016: "Ein Tempel voller seltsamer Inschriften",
        T017: "Scheint, als wäre hier schon seit Äonen niemand gewesen",

        T018: "Unser Held beschließt sich nicht in den geheimnissvollen Tempel zu wagen",
        T019: "Er geht den Weg zurück, von dem er gekommen ist",
        T020: "Jedoch. . .",
        T021: "Ist er wieder beim Tempel angekommen",
        T022: "Irgendwas scheint hier nicht zu stimmen",
        T023: "Irgendetwas möchte, dass er diesen Tempel näher betrachtet",

        T024: "Vorsichtig, aber wahnsinnig starrte unser Held die Inschriften des Tempels an",
        T025: "Sie schienen keiner bekannten Sprache anzugehören",
        T026: "Irgendetwas sagte dem Helden jedoch, dass irgendetwas nicht richtig sei",

        T027: "Es geschieht nichts",

        T028: "Als der Held die Schrift ansah, sprach eine Stimme aus ihm heraus in einer fremden Sprache",
        T029: "Es schien, als könne der Held plötzlich alles verstehen was auf dem Tempel geschrieben stand",
        T030: "Der Boden erzitterte",
        T031: "Die Winde in den Bäumen waren lauter als je zuvor",
        T032: "Die Vögel suchten schnell das Weite",
        T033: "Es schien als sei irgendetwas. . .",
        T034: "Erwacht. . .",

        T035: "BILLS PAKT hinzugefügt",



      },
      whiteknight: {
        T000: ". . .",

      },

      Halistrator: {
        T001: "Sieh mal!!!",
        T002: "Ist das nicht schön. . .",
        T003: "Genauso habe ich mir dieses Schloss vorgestellt",
        T004: "Naja. . . also nicht so zerstört aber dennoch. . .",
        T005: "Siehst du! Ich sage doch du kannst auf mich zählen",
        T006: "Komm schneller, wir haben es nicht mehr weit",
        T007: "Uhhh ich bin ja sooooo aufgeregt!!!",
        T008: "Aaa-a-alles gut! Das war reine Absicht!",
        T009: "Ich habe ein gefährliches Wesen im Boden gespürt!",
        T010: "Ich wollte uns retten, glück gehabt schätze ich. . .",
        T011: "He. . he. . .",
        T012: "Erste Lektion!",
        T013: "Gefahren lauern überall! Bleib stets achtsam!",
        T014: "Weiter geht's!",
      },

      BILL: {
        T000: "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
        T001: "NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        T002: "OH DU LIEBER REISENDER",
        T003: "DU VERIIRRTE SEEEELEEE",
        T004: "DU HAST MICH",
        T005: "GE RE TT ET T T T T T TTTTTTT",
        T006: "Ah wie schön es doch ist frei zu sein!",
        T007: "Du hast ja garkeine Ahnung wie lange ich da feststeckte!",
        T008: "Du hast sicherlich eine Menge Fragen ich weiß ich weiß. . .",
        T009: ". . .",
        T010: "Ah. . . Du hast sie WIRKLICH",
        T011: "Na gut. . . Ich schätze dafür dass du mich befreit hast, gewähre ich dir die Antworten nach denen du suchst!",

        T012: "WAS DU MÖCHTEST ENTSCHEIDEN?",
        T013: "Neein neein. . .",
        T014: "Ich weiß GANZ GENAU was du da tust",
        T015: "Du gehörst nicht in diese Welt. . .",
        T016: "RICHTIG?!",
        T017: "Natürlich, ich habe IMMER REEE E E E E CHT",
        T018: "Sorry mein kleines Ding. . .",
        T019: "Ich würde dir gerne die Entscheidungsfreiheit überlassen um mich alles zu Fragen was du möchtest!",
        T020: "Aber meine Zeit hier ist sehr begrenzt. . .",
        T021: "Ich kann mich. . .",
        T022: "NOCH NI I I I CH T ganz",
        T023: "MANIFESTIEREN",
        T024: "Hör zu. . .",
        T025: "Ich bin eine Seele, die einst in Verdantia gelebt hat",
        T026: "Ich war ein König und hatte Familie, Kinder, und. . .",
        T027: "Und ein prächtiges Königreich voller fröhlicher Bewohner!",
        T028: "Eines Tages kam ein anderer König aus dem Osten",
        T029: "ER NAHM MIR AL L L L L L L L E  S",
        T030: "Er hat meine Familie",
        T031: "G E T Ö T E T",
        T032: "Hilf mir meinen Frieden zu finden! Mein altes Schloss ist. . .",
        T033: "G A N Z IN DER NÄ H  E E E E E",
        T034: "Ich weiß du möchtest wieder nach Hause",
        T035: "In deine alte Welt. . .",
        T036: "Ich bin so eine Art DSCHINN, wie ihr es in EURER WELT sagen würdet",
        T037: "Ich kann dir diesen Wunsch erfüllen. . .",
        T038: "Dazu musst du mich nur. . .",
        T039: "N A C H HAUSE B RI N G EN",
        T040: "DEAL?",

        //DEAL JA
        T041: "Wunderbar",
        T042: "Es hat mich gefreut, mit dir Geschäfte zu machen",
        T043: "Ich werde dich zum Schloss führen",
        T044: "Wir sehen uns. . .",
        T045: "Ha ha ha ha ha. . .",

        //DEAL NEIN
        T046: "N N N N E IN ?!",
        T047: "WILLST DU DENN NICHT NACH",
        T048: "H H  HHH H HH A USE!?",
        T049: "? ? ?",
        T050: "Na schön. . .",
        T051: "So sei es. . .",
      }
    };

    //Szenenablauf
    //characters.whiteknight.name = "Vasi";
    //dataForSave.protagonist.name = characters.whiteknight.name;+
    if (dataForSave.protagonist.name == "") {
      dataForSave.protagonist.name = "???";
      characters.whiteknight.name = dataForSave.protagonist.name;
    }
    await ƒS.Progress.save();
    await ƒS.update(1);
    //await ƒS.Location.show(locations.chapter1);
    await ƒS.update(1);
    ƒS.Sound.setMasterVolume(11);
    //await ƒS.Sound.fade(sound.deepdark, 0.07, 0.1, true);
    //await ƒS.update(5);
    //Aufwachen - Kapitel 1
    await ƒS.Character.show(
      characters.Speechbox,
      characters.Speechbox.pose.newversion,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(3);
    //dataForSave.Halisgefährteangenommen = false;

    if (dataForSave.Halisgefährteangenommen == true){
      await ƒS.Sound.fade(sound.Meadow, 0.07, 3, true);
      console.log("audio is being played");
    await ƒS.Location.show(locations.schlossweitsicht);
    await ƒS.update(3);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T001, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T002, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T003, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T004, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T005, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T006, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T007, true, true, 5, 50, sound.Halistrator, 3);
    horizontalShake();
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
    await satzbau(characters.MainNarrator, text.MainNarrator.T001, true, true, 5, 50, sound.MainNarrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T008, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T009, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T010, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T011, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T012, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T013, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, sound.MainNarrator, 3);
    ƒS.Location.show(locations.blackbackground);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.hide(characters.Speechbox);
    ƒS.update(3);
    await ƒS.Sound.fade(sound.Meadow, 0, 2, false);
    }
    //Hier geht es weiter, wenn Halistrator mitkommt
    //Hier geht es weiter, wenn man Halistrator abgelehnt hat
    if (dataForSave.Halisgefährteangenommen == false){
      await ƒS.Sound.fade(sound.forest, 0.03, 3, true);
      console.log("audio is being played");
      await satzbau(characters.MainNarrator, text.MainNarrator.T002, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.MainNarrator, text.MainNarrator.T003, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.MainNarrator, text.MainNarrator.T005, true, true, 5, 50, sound.MainNarrator, 3);
      await ƒS.Sound.play(sound.buttonhover, .2, false);
      let orientierung = {
        orientiert: "Ja total!",
        verloren: "Keine Ahnung"
      };
      let orientierungselement = await ƒS.Menu.getInput(orientierung, "auswahl");
      switch (orientierungselement) {
        case orientierung.orientiert:
          dataForSave.evil +1;
          await buttonpress(sound.buttonpress, .2);
          await ƒS.update(1);
          await satzbau(characters.MainNarrator, text.MainNarrator.T006, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T007, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T008, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, sound.MainNarrator, 3);
          break;
        case orientierung.verloren:
          dataForSave.good +1;
          await buttonpress(sound.buttonpress, .2);
          await ƒS.update(1);
          await satzbau(characters.MainNarrator, text.MainNarrator.T010, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T011, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T012, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T013, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T014, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T015, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, sound.MainNarrator, 3);
          break;
      }
    await ƒS.update(3);
    await ƒS.Location.show(locations.TempelimWald);
    await ƒS.update(3);
    await buttonpress(sound.buttonhover, .2);
    let tempeluntersuchen = {
      untersuchen: "Untersuchen",
      weggehen: "Weggehen"
    };
    let untersuchenelement = await ƒS.Menu.getInput(tempeluntersuchen, "auswahl");
    switch (untersuchenelement) {
      case tempeluntersuchen.untersuchen:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        await satzbau(characters.MainNarrator, text.MainNarrator.T016, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, sound.MainNarrator, 3);
        break;
      case tempeluntersuchen.weggehen:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        await satzbau(characters.MainNarrator, text.MainNarrator.T018, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T019, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T020, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T021, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T022, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T023, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T016, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, sound.MainNarrator, 3);
        break;
    }
    let schriften = ["Schrift vorlesen", "Schrift anstarren", "Nichts tun"];
    function mam(b: number): number {
      x = b;
      return b;
    }
    let x: number = 0;
    while (mam(x) < 3) {
      let schriftenauswahl = await ƒS.Menu.getInput(schriften, "auswahl");
      console.log(schriften.length)

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:

      switch (schriftenauswahl) { //Wenn Auswahl "Namen eingben"
        case schriften[0]:
          await buttonpress(sound.buttonpress, .2);
          await ƒS.Sound.fade(sound.forest, 0, 2, false);
          await ƒS.update(2);
          await ƒS.Sound.fade(sound.tension, 0.03, 4, true);
          await satzbau(characters.MainNarrator, text.MainNarrator.T028, true, true, 5, 50, sound.MainNarrator, 3);
          verticalShake();
          await satzbau(characters.MainNarrator, text.MainNarrator.T029, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T030, true, true, 5, 50, sound.MainNarrator, 3);
          verticalShake();
          await satzbau(characters.MainNarrator, text.MainNarrator.T031, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T032, true, true, 5, 50, sound.MainNarrator, 3);
          verticalShake();
          await satzbau(characters.MainNarrator, text.MainNarrator.T033, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T034, true, true, 5, 50, sound.MainNarrator, 3);
          await ƒS.Sound.fade(sound.tension, 0, 3, false);
          schriften.splice(0, 1, "");
          mam(5);
          break;
        case schriften[1]:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T024, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T025, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.MainNarrator, text.MainNarrator.T026, true, true, 5, 50, sound.MainNarrator, 3);
          //Nimmt array an der stelle weg und ersetzt es mit "" (nichts)
          schriften.splice(1, 1, "");
          break;
        case schriften [2]:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T027, true, true, 5, 50, sound.MainNarrator, 3);
          schriften.splice(2, 1, "");
      }
      x++;
      console.log(mam(x));
    }
    await ƒS.Location.show(locations.blackbackground);
    await ƒS.update(3);
    await ƒS.update(2);
    //await ƒS.Location.show(locations.TempelimWald);
    await ƒS.Character.show(characters.Bill, characters.Bill.pose.holy, ƒS.positionPercent(50, 48));
    await ƒS.update(5);
    await ƒS.Sound.fade(sound.BillTheme, 0.05, 3, true);
    await ƒS.update(3);
    await satzbau(characters.Bill, text.BILL.T000, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T001, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T002, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T003, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T004, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T005, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T006, true, true, 5, 50, sound.Leserin, 3);
    await ƒS.Character.hide(characters.Bill);
    await ƒS.Character.show(characters.Bill, characters.Bill.pose.bored, ƒS.positionPercent(50, 48));
    await satzbau(characters.Bill, text.BILL.T007, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T008, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T009, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T010, true, true, 5, 50, sound.Leserin, 3);
    await satzbau(characters.Bill, text.BILL.T011, true, true, 5, 50, sound.Leserin, 3);
    let fragen = {
      frage1: "Wie komme ich hier raus?",
      frage2: "Was bist du?"
    };
    let fragenelement = await ƒS.Menu.getInput(fragen, "auswahl");
    switch (fragenelement) {
      case fragen.frage1:
        await buttonpress(sound.buttonpress, .2);
        break;
        case fragen.frage2:
          await buttonpress(sound.buttonpress, .2);
          break;
  }
  await satzbau(characters.Bill, text.BILL.T012, true, true, 5, 50, sound.Leserin, 3);
  await ƒS.Character.hide(characters.Bill);
  await ƒS.Character.show(characters.Bill, characters.Bill.pose.happy, ƒS.positionPercent(50, 48));
  await satzbau(characters.Bill, text.BILL.T013, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T014, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T015, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T016, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T017, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T018, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T019, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T020, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T021, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T022, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T023, true, true, 5, 50, sound.Leserin, 3);
  await ƒS.Character.hide(characters.Bill);
  await ƒS.Character.show(characters.Bill, characters.Bill.pose.bored, ƒS.positionPercent(50, 48));
  await satzbau(characters.Bill, text.BILL.T024, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T025, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T026, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T027, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T028, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T029, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T030, true, true, 5, 50, sound.Leserin, 3);
  await ƒS.Character.hide(characters.Bill);
  await ƒS.Character.show(characters.Bill, characters.Bill.pose.sauer, ƒS.positionPercent(50, 48));
  await satzbau(characters.Bill, text.BILL.T031, true, true, 5, 50, sound.Leserin, 3);
  await ƒS.Character.hide(characters.Bill);
  await ƒS.Character.show(characters.Bill, characters.Bill.pose.bored, ƒS.positionPercent(50, 48));
  await satzbau(characters.Bill, text.BILL.T032, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T033, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T034, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T035, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T036, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T037, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T038, true, true, 5, 50, sound.Leserin, 3);
  await ƒS.Character.hide(characters.Bill);
  await ƒS.Character.show(characters.Bill, characters.Bill.pose.happy, ƒS.positionPercent(50, 48));
  await satzbau(characters.Bill, text.BILL.T039, true, true, 5, 50, sound.Leserin, 3);
  await satzbau(characters.Bill, text.BILL.T040, true, true, 5, 50, sound.Leserin, 3);
  ƒS.Location.show(locations.TempelimWald);
  await ƒS.update(4);
  let deal = {
    ja: "Akzeptieren",
    nein: "Ablehnen"
  };
  let dealAccepted = false;
  let dealelement = await ƒS.Menu.getInput(deal, "auswahl");
  switch (dealelement) {
    case deal.ja:
      await buttonpress(sound.buttonpress, .2);
      await ƒS.Character.hide(characters.Bill);
      await ƒS.Character.show(characters.Bill, characters.Bill.pose.happy, ƒS.positionPercent(50, 48));
      await satzbau(characters.Bill, text.BILL.T041, true, true, 5, 50, sound.Leserin, 3);
      await satzbau(characters.Bill, text.BILL.T042, true, true, 5, 50, sound.Leserin, 3);
      await satzbau(characters.Bill, text.BILL.T043, true, true, 5, 50, sound.Leserin, 3);
      await satzbau(characters.Bill, text.BILL.T044, true, true, 5, 50, sound.Leserin, 3);
      await satzbau(characters.Bill, text.BILL.T045, true, true, 5, 50, sound.Leserin, 3);
      await satzbau(characters.MainNarrator, text.MainNarrator.T035, true, true, 5, 50, sound.MainNarrator, 3);
      dataForSave.billgetroffen = true;
      ƒS.Inventory.add(items.Packt); 
      dataForSave.billspakt = true;
      dealAccepted = true;
      break;
      case deal.nein:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.Character.hide(characters.Bill);
        await ƒS.Character.show(characters.Bill, characters.Bill.pose.sauer, ƒS.positionPercent(50, 48));
        await satzbau(characters.Bill, text.BILL.T046, true, true, 5, 50, sound.Leserin, 3);
        await satzbau(characters.Bill, text.BILL.T047, true, true, 5, 50, sound.Leserin, 3);
        await satzbau(characters.Bill, text.BILL.T048, true, true, 5, 50, sound.Leserin, 3);
        await satzbau(characters.Bill, text.BILL.T049, true, true, 5, 50, sound.Leserin, 3);
        await satzbau(characters.Bill, text.BILL.T050, true, true, 5, 50, sound.Leserin, 3);
        await satzbau(characters.Bill, text.BILL.T051, true, true, 5, 50, sound.Leserin, 3);
        dataForSave.billgetroffen = true;
        break;
}
await ƒS.Character.hide(characters.Bill);
await ƒS.Character.show(characters.Bill, characters.Bill.pose.bored, ƒS.positionPercent(50, 48));
ƒS.Character.hideAll;
ƒS.Location.show(locations.blackbackground);
await ƒS.Sound.fade(sound.BillTheme, 0, 5, true);
await ƒS.update(8);
  }
}
}