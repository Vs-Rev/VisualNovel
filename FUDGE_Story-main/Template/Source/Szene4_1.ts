namespace Template {
  export async function Szene4_1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene4 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T001: ". . .",
        T002: ". . .",
        T003: "Nichts passiert",
        T004: "zzZ      zzZ",
        T005: "zzZ. . . ich wünschte. . .zzZ",
        T006: ". . . ich hätte ein Knoblauchwürstchen. . . zzZ",
        T007: "zzZ. . . zzZ. . .",
        T008: "zzZ. . . zzZ. . . nein wo willst du hin?",
        T009: "zzZ. . . komm wieder zurück zu mir. . .zzZ",
        T010: "Das ist mein Cujus!. . .zzZ",
        T011: "Das Geräusch kommt von einem schlafenden Mann weiter vorne",
        T012: "Wer auch immer da gemütlich schläft könnte bestimmt aufklären, was hier los ist",
        T013: "Das Geräusch kommt von einem schlafenden Mann weiter vorne",
        T014: "zzZ. . . zzZ. . .Wohin willst du mit meiner Ziege. . .zzZ",
        T015: "Nicht die Ziege!!. . .zzZ",
        T016: "Vielleicht solltest du ihn aufwecken",
        T017: "Deine Hand greift behutsam die Schulter des schlafenden Mannes und du beginnst diese vorsichtig zu schütteln",
        T018: "Mit voller Wucht holst du aus, zielst dabei auf den Kopf des schlafenden und haust ohne zu zögern zu",
        T019: "!!!",
        T020: "!!!!!!!!!!!!!!!!!!",
        T021: "Ahhhh! Ein Eindringling!",
        T022: "Wie kannst du es wagen, dich an den GROßEN Halistrator so hinterlistig anzuschleichen!",
        T023: "zzZ. . . Hmpf?. . .Hm. . . zzZ",
        T024: ". . .zzZ",
        T025: "!!!",
        T026: "WER WAS. . .",
        T027: "Oh!",
        T028: "Sei gegrüßt Reisender!",
        T029: "Ich nehme an du bist ein Reisender?",
        T030: "So wie du aussiehst",
        T031: "Verzeih mir meine Unachtsamkeit",
        T032: "Ich muss wohl eingeschlafen sein, als ich. . .",
        T033: "Als ich diesen riesigen Ball des Todes am Himmel bekämpfen wollte!",
        T034: "Es muss wohl ein Zauber gewesen sein der mich in einen tiefen Schlaf fallen gelassen hat",
        T035: "Ja so war es. . .",
        T036: "Hätte ich mir nicht was besseres einfallen lassen können?",
        T037: "Ich bin nun wirklich zu nichts zu gebrauchen. . .",
        T038: "Kein Wunder haben sie mich weggeschickt",
        T039: "Es tut mir Leid, ich habe mich noch garnicht vorgestellt!",
        T040: "Ich werde Halistrator genannt! Halistrator der Unbeholfene!",
        T041: "Ich bin hier um das Königreich. . .nein",
        T042: "Ich bin hier um die ganze Wunderwelt zu retten!!!",
        T043: "Ja das ist besser!",
        T044: "Wer bist du, in deiner prächtigen Rüstung?",

        T045: "Unser Held versuchte sich mit aller Kraft aufzuwecken",
        T046: "Zwicken brachte nichts",
        T047: "Sich fallen zu lassen ebenfalls",
        T048: "Im Kreis rennen hilft auch niemandem weiter ",

        T049: "Halis gab dem verrückten Helden eine saftige Ohrfeige",
        T050: "Das war sehr effektiv",
        T051: "Du teilst ihm deinen Namen mit",

        T052: "Halistrator hielt ihn offensichtlich für verrü-",
        T053: ". . .",
        T054: "HEY!",
        T055: "Er kann mich nicht hören. . .",
        T056: "Ich mache nur meinen Job!",
        T057: "Vielleicht solltest du das auch mal probieren heh?",
        T058: "Das würde uns beiden die Sache viel leichter machen",

        T059: "Als sich der Held umschaute, erkannte er seine glanzvolle silberne Rüstung!",
        T060: "Halistrator möchte unseren Helden zum Schloss des Lichts begleiten, doch wird er das Angebot annehmen oder seine Reise alleine weiterführen?",

      },
      whiteknight: {
        T000: ". . .",
        T001: "Wo bin ich. . .?",
        T002: "Was ist hier los. . .?",
        T003: "Was ist das?",
        T004: "Dieses Schnarchen. . .",
        T005: ". . .",
        T006: "Wer schnarcht hier so laut?",

        //Nur ein Traum
        T007: "Hier stimmt doch etwas nicht!",
        T008: "War ich nicht gerade noch im Theatersaal?",
        T009: "Nein das muss alles nur ein böser Traum sein!",
        T010: "Ja genau ein Traum! Du exestierst nur in meinem Kopf!",
        T011: "Ich muss mich nur aufwecken. . .",
        T012: "Mal sehen. . .",
        T013: "HEY",
        T014: "Warum wache ich nicht auf?",
        T015: "Das ist doch ein schlechter Scherz!",
        T016: ". . .",
        T017: "Was ist mit der Prinzessin?",
        T018: "Warum kann sie das Königreich nicht regieren?",
        T019: "Moment, warum frage ich das gerade. . .",
        T020: "Das alles ist doch sowieso nicht von Bedeutung. . .",
        T021: "Ich kann dich hören. . .",
        T022: "Des Beraters?",
        T023: ". . .",

        T024: "Ich bin hier für ein Abenteuer!",
        T025: "Das alles muss ein Fehler sein. . .",
        T026: "Ich sollte nicht hier sein!",

        T027: "Nein du verstehst das nicht. . .",
        T028: "Ich weiß nichteinmal wie ich herkam!",
        T029: "Gerade war ich noch im Theater und jetzt das",
        T030: "Außerdem höre ich ständig eine Stimme die mir die Handlung erzählt",
        T031: "Siehst du?",
        T032: "Kannst du vielleicht einmal nichts sagen?",
        T033: "Weißt du wie ich zurück in meine Welt komme?",
        T034: "Vielleicht durch ein Portal oder soetwas?",
        T035: "Es gibt doch immer ein Portal. . .",

        T036: "Welcher Berater?",
        T037: "Und welcher König?",

        T038: "HUH",
        T039: "Ehm. . .",

        T040: "Ich. . .",
        T041: "Ich weiß es nicht",

        T042: "Ich wurde von einer höheren Macht erwählt!",
        T043: "Verneige dich vor mir!",
        T044: "Oder spüre den göttlichen Zorn!",

      },

      Halistrator: {
        T001: "Nur ein Traum? Wie meinst du das?",
        T002: "Also mein Knoblauchwürstchen scheint mir sehr real zu sein!",
        T003: "Ich wäre zumindestens sehr traurig wenn dem nicht so wäre. . .",
        T004: "Geht es dir gut?!?!?",
        T005: "Ganz klar ein Zeichen von der Wunderweltkrankheit. . .",
        T006: "Zum Glück kenne ich genau das richtige Heilmittel dafür!",
        T007: "Na also, geht doch!",
        T008: "Für mich existierst du definitiv!",
        T009: "Ein Scherz? Ich verstehe ihn nicht so ganz. . .",
        T010: "Aber hey! Ich hätte einen auf Lager!",
        T011: "Was hat vier Beine und kann fliegen?",
        T012: "Zwei Vögel!",
        T013: ". . .",
        T014: "Du scheinst wirklich auf den Kopf gefallen zu sein mein Freund",
        T015: "Meine Heilung hilft dir nur vorübergehend. Ich kenne aber jemanden der dir Helfen kann!",
        T016: "Vielleicht hast du ja dein Gedächtnis verloren? Das ist einem aus meinem Stamm bereits passiert!",
        T017: "Er wurde dafür angeklagt, dass er in ein Haus eingebrochen ist und sämtliche Reichtümer eines anderen Stammesmitgliedes gestohlen hat",
        T018: "Bei seiner Anhörung behauptete er, er habe das Gedächtnis verloren und wüsste nichts von der Situation",
        T019: "Keiner wollte ihm Glauben schenken, aber ich schon!",
        T020: "Der Arme. Gedächtnisverlust scheint in letzter Zeit häufiger aufzutreten!",
        T021: "Ich sollte dem auf der Spur bleiben. . .",

        T022: "Dann möchte ich dir mal auf die Sprünge helfen edler Reisender",
        T023: "Wo fange ich an. . .",
        T024: "Am besten ganz am Anfang",
        T025: "Wir befinden uns im Königreich Verdantia",
        T026: "Alle Völker lebten seit Anbeginn der Zeit in ewiger Harmonie",
        T027: "Doch vor kurzem ereignete sich ein Schicksalsschlag für diesen ewigen Frieden",
        T028: "Das Schloss des Lichts wurde von einem Drachen angegriffen!",
        T029: "Die Königliche Familie regierte seit anbeginn der Zeit über Verdantia und sorgte für Recht und Ordnung",
        T030: "Leider hat der Drache die Königsfamilie bei dem Angriff ausgelöscht",
        T031: "Alle. . .",
        T032: "Bis auf ihre Tochter, die Prinzessin!",
        T033: "Nur ein Wesen mit königlichem Blut ist dazu würdig, Verdantia zu regieren",

        T034: "Wie gut das du fragst!",
        T035: "Das heißt deinem Gedächtnis geht es schon ein wenig besser. . .",
        T036: "Die Prinzessin wurde entführt!",
        T037: "Der Drache war nicht alleine. . .",
        T038: "Irgendetwas muss ihn wohl kontrolliert haben. . .",
        T039: "Drachen sind von Natur aus keine aggressiven Geschöpfe weist du. . .",
        T040: "Bestimmt weißt du das! Das ist schließlich Kinderwissen!",
        T041: "Oder waren das Kanninchen. . .",
        T042: "Wie dem auch sei. . .",
        T043: "Ich wurde von Weitem gesandt, um die Prinzessin im Auftrag des Beraters zurückzuholen",

        T044: "Des Beraters des Königs natürlich!",
        T045: "Seit dem Angriff, ist er der Ranghöchste im Schloss und hat somit das Sagen bis die Prinzessin zurückgekehrt ist!",
        T046: "Er wüsste sicherlich wie du aus deinem Traum erwachen kannst. . .",
        T047: "Hust hust. . . deinen Gedächtnisverlust heilen . . .hust Hust",

        T048: ". . .",
        T049: "Das ist aber nicht sehr höflich!",
        T050: "Nun dann schätze ich du möchtest die Hintergrundgeschichte nicht wissen?",
        T051: "Wie du hergekommen bist?",
        T052: "Warum ich Knoblauchwürstchen mag?",
        T053: ". . .",
        T054: "Warum die BLUMEN vor dir lustige GESICHTER HABEN!?",
        T055: ". . .",
        T056: "Okay",
        T057: "Oh schon so spät?",
        T058: "Ich glaube ich muss los. . .",
        T059: "Dieser flammende Todesball im Himmel ist noch nicht besiegt!",
        T060: ". . .",
        T061: "Nein weißt du was. . .",
        T062: "Ich erzähle sie dir TROTZDEM",
        T063: "Es ist meine Pflicht die Bürger um mich herum aufzuklären. . .",
        T064: "Oder so. . .",
        T065: "Also",

        T066: "Gut damit hätte ich dich aufgeklärt.",

        T067: "Ich wusste mein Gespür für dich war richtig!",
        T068: "Na in Irgendetwas muss ich ja doch gut sein!",
        T069: "Weißt du überhaupt worauf du dich hier einlässt?",
        T070: "Ich meine. . .",
        T071: "Es könnte durchaus sein, dass das wohl wichtigste und tragischste Ereignis der Geschichte von Verdantia an dir vorbeigegangen ist. . .",
        T072: "Lass mich dich kurz darüber aufklären",

        T073: "Noch fragen?",

        T074: "Ein Fehler?",
        T075: "Wie meinst du das?",
        T076: "Klingt stark nach dem Wunderwelt-Syndrom!",
        T077: "Weißt du, ich glaube nicht an Fehler",
        T078: "Hast du dich vielleicht bloß verlaufen?",

        T079: "Und da soll noch jemand sagen ich sei verrückt",
        T080: "Nunja ich weiß zwar nicht worüber du sprichst. . .",
        T081: "Oder was diese andere Welt aus welcher du kamst sein soll. . .",
        T082: "Aber ich denke dir kann der Berater des Königs bestimmt bei deinem Problem helfen",
        T083: "Sollte es wirklich eine andere Welt geben, wäre er der einzige welcher wüsste, wie du zurück kommen könntest",

        T084: "Aber jetzt sag mal. . .",
        T085: "Für einen so gewöhnlichen Reisenden wie dich. . .",
        T086: ". . . nunja so gewöhnlich bist du anscheinend ja nicht. . .",
        T087: "Hast du eine sehr prächtige Rüstung!",
        T088: "Sie erinnert mich fast an. . .",
        T089: "Nein. . .",
        T090: "Das kann nicht sein. . .",
        T091: "Woher hast du eine solche Rüstung?",

        T092: "Also ehrlich. . . du solltest antworten wenn jemand mit dir redet!",

        T093: ". . .",
        T094: "Auserwählt? Von einer höheren Macht?",
        T095: "Welcher denn?",

        T096: "Weißt du. . .",
        T097: "Du hast mich für einen Augenblick an den weißen Ritter aus einer uralten Legende erinnert",
        T098: "Ein Held, welcher zur Zeit des Untergangs von Verdantia aus einer anderen Welt kommen und die ganze Wunderwelt retten soll",
        T099: "Moment. . .",
        T100: "Ein weißer Ritter. . .",
        T101: "Aus einer anderen Welt. . .",
        T102: "Hm. . .",
        T103: "Nein ich glaube nicht dass du das bist. . .",
        T104: "Ich glaube laut der Legende trägt er eine scharlachrote Feder an seinem Helm",
        T105: "Deine ist eher. . .",
        T106: "Lachsrot",
        T107: "Hah, naja. . .",
        T108: "Du kannst es garnicht sein. . .",
        T109: "Ich glaube nicht",

        T110: "Weißt du was?",
        T111: "Komm doch mit mir mit!",
        T112: "Wir können zusammen zum Schloss des Lichts gehen!",
        T113: "Es ist doch immer besser einen Freund an seiner Seite zu haben nicht wahr?",
        T114: "Vom Berater des Königs bekommst du bestimmt all die Antworten nach denen du suchst!",
        T115: "Wie sieht es aus, edler Reisender ",

        T116: "WOW! WIE SCHÖN!",
        T117: "Endlich jemand der mich nicht ablehnt. . .",
        T118: "Vater, siehst du das? Mein erster Gefährte!",
        T119: "Wir werden so viel Spaß zusammen haben!",
        T120: "Komm mir hinterher, ich kenne den Weg!",
        T121: ". . . glaube ich",

        T122: "Oh. . .",
        T123: "Nunja. . .",
        T124: ". . .",
        T125: "Ich verstehe das. . .",
        T126: "Ehrlich. . .",
        T127: "Ich würde mich selbst wahrscheinlich auch nicht wählen hah. . .",
        T128: "Wie konnte ich nur glauben dass jemand anderes mit mir Reisen wollen würde. . .",
        T129: "Ich hoffe du bist bei deiner Suche erfolgreich. . .",
        T130: "Vielleicht sehen wir uns ja noch. . .",
        T131: "Wie sagt man so schön. . .",
        T132: "Man sieht sich immer zweimal im Leben. . .",
        T133: ". . .",
        T134: ". . .",
        T135: "Es tut mir Leid Vater. . .",
        T136: "Ich habe es wieder nicht hinbekommen. . .",
        T137: ". . .",

      },
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
    await ƒS.Location.show(locations.chapter1);
    await ƒS.update(1);
    ƒS.Sound.setMasterVolume(11);
    await ƒS.Sound.fade(sound.deepdark, 0.07, 0.1, true);
    await ƒS.update(5);
    //Aufwachen - Kapitel 1
    await satzbau(characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.whiteknight, text.whiteknight.T001, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.whiteknight, text.whiteknight.T002, true, true, 5, 50, sound.MainNarrator, 3);
    await ƒS.Sound.fade(sound.snoring, 0.03, 0.3, true);
    await ƒS.update(4);
    await satzbau(characters.whiteknight, text.whiteknight.T003, false, false, 5, 50, sound.MainNarrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let aufwachen = {
      ja: "Augen öffnen",
      nein: "Augen geschlossen lassen"
    };
    let aufwachelement = await ƒS.Menu.getInput(aufwachen, "auswahl");
    switch (aufwachelement) {
      case aufwachen.ja:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        break;

      case aufwachen.nein:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T001, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T002, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T003, true, true, 3, 50, sound.MainNarrator, 2);
        await satzbau(characters.whiteknight, text.whiteknight.T004, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T005, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T006, true, true, 5, 50, sound.MainNarrator, 3);

        break;
    }
    await ƒS.Sound.fade(sound.deepdark, 0, 0.1, false);
    await ƒS.update(1);
    ƒS.Speech.clear();
    await ƒS.update(2);
    ƒS.Sound.play(sound.pianoharp, 0.05, false);
    await signaldelay();
    console.log("Background is being displayed");
    ƒS.Location.show(locations.white);
    await ƒS.update(3);
    await ƒS.update(1);
    ƒS.Location.show(locations.meadow);
    await ƒS.update(3);
    await ƒS.update(3);
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.newversion, ƒS.positionPercent(50, 100));
    await ƒS.update(3);
    await ƒS.update(1);
    await ƒS.Sound.fade(sound.Meadow, 0.07, 0.1, true);
    console.log("audio is being played");
    await satzbau(characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T005, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T006, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T007, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let schnarchen = {
      untersuchen: "Geräusch untersuchen",
      nichtuntersuchen: "Ignorieren"
    };
    let schnarchelement = await ƒS.Menu.getInput(schnarchen, "auswahl");
    switch (schnarchelement) {
      case schnarchen.untersuchen:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        await satzbau(characters.MainNarrator, text.MainNarrator.T011, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T012, true, true, 5, 50, sound.MainNarrator, 3);
        break;

      case schnarchen.nichtuntersuchen:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        await satzbau(characters.MainNarrator, text.MainNarrator.T008, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T009, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T010, true, true, 5, 50, sound.Halistrator, 3);
        break;
    }
    await satzbau(characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
    await ƒS.update(1);
    await satzbau(characters.MainNarrator, text.MainNarrator.T014, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T015, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T016, false, false, 5, 50, sound.MainNarrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let aufwecken = {
      vorsichtig: "Sanft rütteln",
      laut: "Auf seinen Kopf schlagen"
    };
    let aufweckelement = await ƒS.Menu.getInput(aufwecken, "auswahl");
    switch (aufweckelement) {
      case aufwecken.vorsichtig:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        dataForSave.good + 1;
        await satzbau(characters.MainNarrator, text.MainNarrator.T017, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T023, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T024, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Sound.fade(sound.snoring, 0, 0.1, false);
        await ƒS.Sound.fade(sound.Meadow, 0, 0.1, false);
        await satzbau(characters.MainNarrator, text.MainNarrator.T025, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T026, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T027, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Sound.play(sound.Halistheme, 0.03, true);
        await satzbau(characters.MainNarrator, text.MainNarrator.T028, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T029, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T030, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T031, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T032, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T033, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T034, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T035, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T036, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T037, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T038, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T039, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T040, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T041, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T042, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T043, true, true, 5, 50, sound.Halistrator, 3);
        break;

      case aufwecken.laut:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.update(1);
        dataForSave.evil + 1;
        console.log(dataForSave.evil);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T018, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Sound.fade(sound.snoring, 0, 0.1, false);
        await satzbau(characters.MainNarrator, text.MainNarrator.T019, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T020, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T021, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Sound.fade(sound.Meadow, 0, 0.1, false);
        await satzbau(characters.Halistrator, text.MainNarrator.T022, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
        await ƒS.Sound.play(sound.Halistheme, 0.03, true);

        await satzbau(characters.Halistrator, text.MainNarrator.T028, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T029, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T030, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T031, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T032, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T033, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T034, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.MainNarrator.T035, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T036, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T037, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T038, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T039, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.MainNarrator.T040, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T041, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T042, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.MainNarrator.T043, true, true, 5, 50, sound.Halistrator, 3);
        break;
    }
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.MainNarrator.T044, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let vorstellen = {
      eintraum: "Nur ein Traum",
      schweigen: "Schweigen",
      einabenteuer: "Abenteuerlich",
      möchtezurück: "Ein Fehler",
    };
    let vorstellelement = await ƒS.Menu.getInput(vorstellen, "auswahl");
    switch (vorstellelement) {
      case vorstellen.eintraum:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.whiteknight, text.whiteknight.T007, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T008, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T009, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T001, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T002, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T003, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T010, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T045, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T046, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T047, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T048 + dataForSave.protagonist.name, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T004, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T005, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T006, true, true, 5, 50, sound.Halistrator, 3);
        //slap
        await buttonpress(sound.slap, .2)
        await ƒS.update(3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T049, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T050, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T013, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T007, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T014, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T015, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T008, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T009, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T010, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T011, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T012, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T016, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T013, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T015, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T016, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T017, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T018, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T019, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T020, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T021, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T022, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Sound.fade(sound.Halistheme, 0, 0.1, false);
        await ƒS.Sound.fade(sound.titletheme, 0.03, 0.5, true);
        await satzbau(characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, sound.MainNarrator, 3);

        await satzbau(characters.whiteknight, text.whiteknight.T019, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T020, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T034, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T035, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T021, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T022, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T044, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T046, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T047, true, true, 5, 50, sound.Halistrator, 3);
        break;
      case vorstellen.schweigen:
        await buttonpress(sound.buttonpress, .2);
        dataForSave.evil + 1;
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T048, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T049, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T050, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T051, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T052, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T053, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T054, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T055, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T056, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T057, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T058, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T059, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T060, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T061, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T062, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T063, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T064, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T065, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Sound.fade(sound.Halistheme, 0, 0.1, false);
        await ƒS.Sound.fade(sound.titletheme, 0.03, 0.5, true);
        await satzbau(characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T022, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T044, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T023, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T066, true, true, 5, 50, sound.Halistrator, 3);
        break;
      case vorstellen.einabenteuer:
        await buttonpress(sound.buttonpress, .2);
        dataForSave.good + 1;
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T051, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T024, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T067, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T068, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T069, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T070, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T071, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T072, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Sound.fade(sound.Halistheme, 0, 0.1, false);
        await ƒS.Sound.fade(sound.titletheme, 0.03, 0.5, true);
        await satzbau(characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, sound.Halistrator, 3);

        await satzbau(characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, sound.MainNarrator, 3);

        await satzbau(characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, sound.Halistrator, 3);

        await satzbau(characters.whiteknight, text.whiteknight.T022, true, true, 5, 50, sound.MainNarrator, 3);

        await satzbau(characters.Halistrator, text.Halistrator.T044, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, sound.Halistrator, 3);

        break;
      case vorstellen.möchtezurück:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.whiteknight, text.whiteknight.T025, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T074, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T075, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T026, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T076, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T077, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T078, true, true, 5, 50, sound.Halistrator, 3);

        await satzbau(characters.whiteknight, text.whiteknight.T027, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T028, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T029, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T030, true, true, 5, 50, sound.MainNarrator, 3);

        await satzbau(characters.MainNarrator, text.MainNarrator.T052, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T053, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T054, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T031, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T055, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T032, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
        await satzbau(characters.MainNarrator, text.MainNarrator.T056, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T057, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.MainNarrator, text.MainNarrator.T058, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T079, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T033, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T034, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T035, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T080, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T081, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T082, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T083, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T036, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T037, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(50, 48));
        await ƒS.Sound.fade(sound.Halistheme, 0, 0.1, false);
        await ƒS.Sound.fade(sound.titletheme, 0.03, 0.5, true);
        await satzbau(characters.Halistrator, text.Halistrator.T022, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T023, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T024, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T025, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T026, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T027, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T028, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T029, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T030, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T031, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T032, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T033, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T017, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T018, true, true, 5, 50, sound.MainNarrator, 3);

        await satzbau(characters.Halistrator, text.Halistrator.T034, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T035, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T036, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T037, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T038, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T039, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T040, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T041, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T042, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T043, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T045, true, true, 5, 50, sound.Halistrator, 3);
        break;
    }
    await ƒS.Sound.fade(sound.titletheme, 0, 0.1, false);
    await ƒS.update(2);
    await ƒS.Sound.fade(sound.Halistheme, 0.03, 0.3, true);
    await satzbau(characters.Halistrator, text.Halistrator.T073, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.whiteknight, text.whiteknight.T023, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T084, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T085, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T086, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T087, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T088, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T089, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T090, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T091, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.animate(characters.Halistrator, characters.Halistrator.pose.surprised, fromCenterToRight_Halistrator());
    await ƒS.update(2);
    await ƒS.Character.show(characters.whiteknight, characters.whiteknight.pose.standard, ƒS.positionPercent(20, 48));
    await ƒS.update(5);
    await satzbau(characters.whiteknight, text.whiteknight.T038, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T059, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.whiteknight, text.whiteknight.T039, true, true, 5, 50, sound.MainNarrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let rüstung = {
      schweigen: "Schweigen",
      weißnicht: "Weiß ich nicht",
      lügen: "Eine höhere Macht",
    };
    let rüstungselement = await ƒS.Menu.getInput(rüstung, "auswahl");
    switch (rüstungselement) {
      case rüstung.schweigen:
        await buttonpress(sound.buttonpress, .2);
        dataForSave.evil + 1;
        await satzbau(characters.whiteknight, text.whiteknight.T023, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(80, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T092, true, true, 5, 50, sound.Halistrator, 3);
        break;

      case rüstung.weißnicht:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.whiteknight, text.whiteknight.T040, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T041, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(80, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T093, true, true, 5, 50, sound.Halistrator, 3);
        break;

      case rüstung.lügen:
        dataForSave.evil + 1;
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.whiteknight, text.whiteknight.T042, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T043, true, true, 5, 50, sound.MainNarrator, 3);
        await satzbau(characters.whiteknight, text.whiteknight.T044, true, true, 5, 50, sound.MainNarrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.sauer, ƒS.positionPercent(80, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T094, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T095, true, true, 5, 50, sound.Halistrator, 3);
        break;
    }
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(80, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T096, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T097, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T098, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T099, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T100, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T101, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.standard, ƒS.positionPercent(80, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T102, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T103, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T104, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T105, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T106, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T107, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T108, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T109, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T110, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T111, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Sound.fade(sound.Halistheme, 0, 0.3, true);
    await ƒS.update(2);
    await ƒS.Sound.fade(sound.Meadow, 0.03, 0.3, true);
    await satzbau(characters.Halistrator, text.Halistrator.T112, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T113, true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.Halistrator, text.Halistrator.T114, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(80, 48));
    await satzbau(characters.Halistrator, text.Halistrator.T115 + dataForSave.protagonist.name + "?", true, true, 5, 50, sound.Halistrator, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T060, false, false, 5, 50, sound.MainNarrator, 3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let gefährte = {
      akzeptieren: "Akzeptieren",
      ablehnen: "Ablehnen",
    };
    let gefährtenelement = await ƒS.Menu.getInput(gefährte, "auswahl");
    switch (gefährtenelement) {
      case gefährte.akzeptieren:
        await buttonpress(sound.buttonpress, .2);
        dataForSave.good + 1;
        dataForSave.Halisgefährteangenommen = true;
        await ƒS.Character.hide(characters.whiteknight);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.animate(characters.Halistrator, characters.Halistrator.pose.surprised, fromRightToCenter_Halistrator());
        await ƒS.update(2);
        await satzbau(characters.Halistrator, text.Halistrator.T116, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T117, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T118, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T119, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
        await satzbau(characters.Halistrator, text.Halistrator.T120, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T121, true, true, 5, 50, sound.Halistrator, 3);
        break;
      case gefährte.ablehnen:
        await buttonpress(sound.buttonpress, .2);
        dataForSave.evil + 1;
        dataForSave.Halisgefährteangenommen = false;
        await ƒS.Character.hide(characters.whiteknight);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.Character.animate(characters.Halistrator, characters.Halistrator.pose.sauer, fromRightToCenter_Halistrator());
        await satzbau(characters.Halistrator, text.Halistrator.T122, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T123, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T124, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T125, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T126, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T127, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T128, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T129, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T130, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T131, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T132, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T133, true, true, 5, 50, sound.Halistrator, 3);
        await ƒS.Sound.fade(sound.Meadow, 0, 2, false);
        await ƒS.update(2);
        await ƒS.Character.hide(characters.Halistrator);
        await ƒS.update(5);
        await satzbau(characters.Halistrator, text.Halistrator.T134, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T135, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T136, true, true, 5, 50, sound.Halistrator, 3);
        await satzbau(characters.Halistrator, text.Halistrator.T137, true, true, 5, 50, sound.Halistrator, 3);
        break;
    }
    ƒS.Location.show(locations.blackbackground);
    ƒS.update(3);
    await ƒS.Sound.fade(sound.Meadow, 0, 2, false);
    if (dataForSave.Halisgefährteangenommen == true) {
      dataForSave.Entscheidungsfrage1 = 1;
      //return"Szene4_2";
    }
    else {
      dataForSave.Entscheidungsfrage1 = 2;
      //return"Szene5_1";
    }
  }
}