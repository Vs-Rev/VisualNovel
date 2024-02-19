namespace Template {
  export async function Szene4_3(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene4_3 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T001: "Halistrator stolperte beim Reden über eine Fliege und flog gegen eine Wache. . .",
        T002: "Die Wachen richten ihre Waffen auf euch",
        T003: "Endlich angekommen im Thronsaal vom Schloss des Lichts finden unsere Helden den königlichen Berater",
        T004: "Ihr setzt den Berater des Königs über euer Vorhaben in Kenntniss",


      },
      whiteknight: {
        T000: ". . .",

        T001: "Hahahaha",
        T002: "Ah, der ist immer so!",
        T003: "Er bringt wirklich jeden zum Lachen",
        T004: "Hahahah ich kann garnicht mehr aufhören damit!",
        T005: "Ja, wir haben es ziemlich eilig. Er ist der Hofnarr!",
        T006: "Den der Berater sich so sehr gewünscht hat!",

        T007: "Es tut mir soo leid für meinen Freund hier",
        T008: "Er ist nunja. . . Etwas ganz besonderes",
        T009: "Er braucht den Segen des königlichen Beraters, bitte!",
        T010: "Ich werde ihn auch dafür bestrafen, dass er Wachen einfach so anrempelt",


      },

      Halistrator: {
        T001: "W-wir wollen zum Berater des Königs! Wir sind gekommen, um zu helfen!",
        T002: "Er hat mich gerade Freund genannt WIE SCHÖN!",

        T003: "Das lief jetzt nicht so wie geplant oder. . .",
        T004: "Und jetzt? Irgendwelche Ideen?",
        T005: "Ich habs!",
        T006: "Ich weiß wohin wir gehen könnten!",
        T007: "Der königliche Berater ist gewiss nicht der einzige, welcher Wissen über Türen in andere Welten verfügt!",
        T008: "Komm, folge mir! Wir besuchen einen alten Freund meiner Familie!",

        T009: "Da! Das muss er sein! Der Berater des Königs!",

        T010: "Wie schön! Jetzt geht das Abenteuer so richtig los!",
        T011: "Aber irgendetwas stimmt doch mit diesem Berater nicht. . .",
        T012: "Ich werde das Gefühl nicht los, dass er. . .",

        T013: "Wir müssen fliehen! Schnell, folge mir!",
        T014: "Ich habe einen Plan!",

      },
      Berater: {
        T000: "Was sucht ihr hier? Seht ihr denn nicht, dass ich beschäftigt bin?!",
        T001: "Verstehe. . .",
        T002: "Wenn das so ist. . .",
        T003: "Dann könnt ihr mir wirklich nützlich sein!",
        T004: "Ihr müsst die Prinzessin unbedingt retten!",
        T005: "Ich bin nicht geschaffen für diese Position eines Herrschers. . .",
        T006: "Doch ich warne euch!",
        T007: "Der Drache flog in Richtung des Reichs der Finsternis",
        T008: "Der Weg wird kein Leichter sein!",
        T009: "Bringt mir die Prinzessin ins Schloss und ich zeige dir, wie du zurück in deine Welt gelangst!",

        T010: "Wunderbar!",

        T011: "WIE KANNST DU ES WAGEN",
        T012: "Die KÖNIGLICHEN BEFEHLE ZU MISSACHTEN!?",
        T013: "WACHEN!!!",

      },

      BILL: {
        T000: "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
      },
      Wache1: {
        T000: "HAAAAAALT!",
        T001: "NENNT EUER ANLIEGEN! SOFORT!",
        T002: "RAUDIES",

        T003: "DAS ICH EUCH JAAA NICHT WIEDERSEHE!",
        
        T004: "HEY!!!",
        T005: "DER HORNARR? NA GUT",
        T006: "ALLES WAS VOM BERATER ANGEORDNET WURDE, MUSS ZUGESTELLT WERDEN!",


        T007: "MOOOOOOOOMENT!",
        T008: "ICH KENNE DICH DOCH IRGENDWOHER. . .",
        T009: "DU WOLLTEST DOCH IRGENDWANN SCHONEINMAL REIN ODER NICHT?!",
        T010: "JA OHNE GENEHMIGUNG!",


      },
      Mysteriouswoman: {
        T000: "Halt warte!",
        T001: "Tu es nicht!",
        T002: "Er ist nicht der, für den er sich ausgibt!",
        T003: "Bitte glaube mir! Du musst fliehen! Ich weiß wer du bist!",
        T004: "Ich bin auch aus der anderen Welt!",
      },
      Wache2: {
        T000: "Wo wollt ihr denn hin?",
        T001: "Kannst du mir mal bitte nicht ins Ohr schreien? Ich stehe direkt neben dir!",
        T002: "Entschuldigt bitte meinen Kammeraden hier. . .",
        T003: "Er kann manchmal etwas. . .",
        T004: "Aufbrausend wirken",
        T005: "Aber ihr seht nicht aus wie irgendwelche. . .",
        T006: "Ja genau danke, Raudies",

        T007: "Macht mir nichts vor",
        T008: "Ihr stinkt regelrecht nach Bösem",
        T009: "Verzieht euch von diesem Hof! Wir können nicht noch mehr Ärger gebrauchen",

        T010: "Ähm. . .",
        T011: "Wow, das glaubst du einfach so?. . .",
        T012: "Ich werde ziemlich sicher zu wenig bezhalt",
        T013: "Geht schon durch!",

        T014: "Lass gut sein. . .",
        T015: "Sieh sie dir an",
        T016: "Was sollen die schon ausrichten können oder?",

        T017: "Verstehe. Nun gut, geht rein!",
        T018: "Seit dem Drachenangriff werden wir sowieso nicht mehr bezahlt",
        T019: "Wir stehen hier eigentlich nur zum Spaß rum",

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



        //Hier geht es weiter, wenn Halistrator mitkommt
    if (dataForSave.Halisgefährteangenommen == true){
    await ƒS.Location.show(locations.Schlosstor);
    await ƒS.update(3);
    await ƒS.Sound.fade(sound.wachentheme, 0.07, 3, true);
    await ƒS.Character.show(characters.Wache1, characters.Wache2.pose.standard, ƒS.positionPercent(70, 48));
    await ƒS.update(3);
    await ƒS.Character.show(characters.Wache1, characters.Wache1.pose.standard, ƒS.positionPercent(20, 48));
    await ƒS.update(3);

    if(dataForSave.evil <= dataForSave.good){

      //wenn gut mehr als böse

      await satzbau(characters.Wache1, text.Wache1.T000, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T000, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache1, text.Wache1.T001, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T001, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T002, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T003, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T004, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T005, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache1, text.Wache1.T002, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T006, true, true, 5, 50, sound.MainNarrator, 3);
      await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
      await satzbau(characters.Halistrator, text.Halistrator.T001, true, true, 5, 50, sound.Halistrator, 3);
      await satzbau(characters.MainNarrator, text.MainNarrator.T001, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.MainNarrator, text.MainNarrator.T002, true, true, 5, 50, sound.MainNarrator, 3);
      await ƒS.Sound.play(sound.buttonhover, .2, false);
      let reaktionwachen = {
        humorvoll: "Der Hofnarr",
        nachgiebig: "Unterwerfen",
      };
      let orientierungselement = await ƒS.Menu.getInput(reaktionwachen, "auswahl");
      switch (orientierungselement) {
        case reaktionwachen.humorvoll:
          dataForSave.evil +1;
          await buttonpress(sound.buttonpress, .2);
          await ƒS.update(1);
          await satzbau(characters.whiteknight, text.whiteknight.T001, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T002, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T003, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T004, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache1, text.Wache1.T004, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T010, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T005, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T006, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache1, text.Wache1.T005, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache1, text.Wache1.T006, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T011, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T012, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T013, true, true, 5, 50, sound.MainNarrator, 3);
          if(dataForSave.gefallen == 1){
            await satzbau(characters.Wache1, text.Wache1.T007, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.whiteknight, text.whiteknight.T000, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.Wache1, text.Wache1.T008, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.Wache1, text.Wache1.T009, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.Wache1, text.Wache1.T010, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.Wache2, text.Wache2.T014, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.Wache2, text.Wache2.T015, true, true, 5, 50, sound.MainNarrator, 3);
            await satzbau(characters.Wache2, text.Wache2.T016, true, true, 5, 50, sound.MainNarrator, 3);
          }
          break;
        case reaktionwachen.nachgiebig:
          dataForSave.good +1;
          await buttonpress(sound.buttonpress, .2);
          await ƒS.update(1);
          await satzbau(characters.whiteknight, text.whiteknight.T007, true, true, 5, 50, sound.MainNarrator, 3);
          await ƒS.Character.hide(characters.Halistrator);
          await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.cute, ƒS.positionPercent(50, 48));
          await satzbau(characters.Halistrator, text.Halistrator.T002, true, true, 5, 50, sound.Halistrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T008, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T009, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.whiteknight, text.whiteknight.T010, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T017, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T018, true, true, 5, 50, sound.MainNarrator, 3);
          await satzbau(characters.Wache2, text.Wache2.T019, true, true, 5, 50, sound.MainNarrator, 3);
          break;
      }
      
    await ƒS.Character.hideAll;
    await ƒS.Sound.fade(sound.wachentheme, 0, 3, true);
    await ƒS.Character.hide(characters.Wache1);
    await ƒS.update(3);
    await ƒS.Character.hide(characters.Wache2);
    await ƒS.update(3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.update(3);
    await ƒS.Location.show(locations.Thronsaal);
    await ƒS.update(3);
    await ƒS.Sound.fade(sound.titletheme, 0.03, 3, true);
    await satzbau(characters.MainNarrator, text.MainNarrator.T003, true, true, 5, 50, sound.MainNarrator, 3);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
    await ƒS.update(3);
    await satzbau(characters.Halistrator, text.Halistrator.T009, true, true, 5, 50, sound.Halistrator, 3);
    await ƒS.Character.hide(characters.Halistrator);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Berater, characters.Berater.pose.standard, ƒS.positionPercent(50, 48));
    await ƒS.update(3);
    await satzbau(characters.Berater, text.Berater.T000, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.MainNarrator, text.MainNarrator.T004, true, true, 5, 50, sound.MainNarrator, 3);
    await satzbau(characters.Berater, text.Berater.T001, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T002, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T003, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T004, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T005, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T006, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T007, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T008, true, true, 5, 50, sound.Elo, 3);
    await satzbau(characters.Berater, text.Berater.T009, true, true, 5, 50, sound.Elo, 3);
    await buttonpress(sound.buttonhover, .2);
    let abenteuerannehmen = {
      annehmen: "Annehmen",
      ablehnen: "Ablehnen",
    };
    let abenteuerelement = await ƒS.Menu.getInput(abenteuerannehmen, "auswahl");
    switch (abenteuerelement) {
      case abenteuerannehmen.annehmen:
        await buttonpress(sound.buttonpress, .2);
                //Wenn entschuldigung angenommen
                if(dataForSave.entschuldigung == 2){
                  await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T000, true, true, 5, 50, sound.Leserin, 3);
                  await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T001, true, true, 5, 50, sound.Leserin, 3);
                  await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T002, true, true, 5, 50, sound.Leserin, 3);
                  await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T003, true, true, 5, 50, sound.Leserin, 3);
                  await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T004, true, true, 5, 50, sound.Leserin, 3);
                  //ENDE 7
                }
                if(dataForSave.entschuldigung !=2){
                  await satzbau(characters.Berater, text.Berater.T010, true, true, 5, 50, sound.Elo, 3);
                  await satzbau(characters.Halistrator, text.Halistrator.T010, true, true, 5, 50, sound.Halistrator, 3);
                  await satzbau(characters.Halistrator, text.Halistrator.T011, true, true, 5, 50, sound.Halistrator, 3);
                  await satzbau(characters.Halistrator, text.Halistrator.T012, true, true, 5, 50, sound.Halistrator, 3);
                  //ENDE 3
                }
        break;
      case abenteuerannehmen.ablehnen:
        await buttonpress(sound.buttonpress, .2);
        //Wenn entschuldigung angenommen
        if(dataForSave.entschuldigung == 2){
          await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T000, true, true, 5, 50, sound.Leserin, 3);
          await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T001, true, true, 5, 50, sound.Leserin, 3);
          await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T002, true, true, 5, 50, sound.Leserin, 3);
          await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T003, true, true, 5, 50, sound.Leserin, 3);
          await satzbau(characters.MysteriousWoman, text.Mysteriouswoman.T004, true, true, 5, 50, sound.Leserin, 3);
          //ENDE 5
        }
        //Entschuldigung ELO alles andere
        if(dataForSave.entschuldigung !=2){
          await satzbau(characters.Berater, text.Berater.T011, true, true, 5, 50, sound.Elo, 3);
          await satzbau(characters.Berater, text.Berater.T012, true, true, 5, 50, sound.Elo, 3);
          await satzbau(characters.Berater, text.Berater.T013, true, true, 5, 50, sound.Elo, 3);
          await satzbau(characters.Halistrator, text.Halistrator.T013, true, true, 5, 50, sound.Halistrator, 3);
          await satzbau(characters.Halistrator, text.Halistrator.T014, true, true, 5, 50, sound.Halistrator, 3);
          //ENDE 4
        }
        break;
    }
    await ƒS.update(5);
    await ƒS.Character.hideAll;
    await ƒS.Sound.fade(sound.titletheme, 0, 3, true);
    await ƒS.Location.show(locations.fortsetzungfolgt);
    await ƒS.update(10);

    }

    //ENDE 6
    if(dataForSave.good <= dataForSave.evil){
      await satzbau(characters.Wache2, text.Wache2.T007, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T008, true, true, 5, 50, sound.MainNarrator, 3);
      await satzbau(characters.Wache2, text.Wache2.T009, true, true, 5, 50, sound.MainNarrator, 3);
      //wenn böse mehr als gut
      await ƒS.Sound.fade(sound.wachentheme, 0, 3, true);
      await ƒS.Location.show(locations.blackbackground);
      await ƒS.update(5);
      await ƒS.Character.hideAll;
      await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
      await ƒS.update(5);
      await satzbau(characters.Halistrator, text.Halistrator.T003, true, true, 5, 50, sound.Halistrator, 3);
      await satzbau(characters.Halistrator, text.Halistrator.T004, true, true, 5, 50, sound.Halistrator, 3);
      await satzbau(characters.Halistrator, text.Halistrator.T005, true, true, 5, 50, sound.Halistrator, 3);
      await satzbau(characters.Halistrator, text.Halistrator.T006, true, true, 5, 50, sound.Halistrator, 3);
      await satzbau(characters.Halistrator, text.Halistrator.T007, true, true, 5, 50, sound.Halistrator, 3);
      await satzbau(characters.Halistrator, text.Halistrator.T008, true, true, 5, 50, sound.Halistrator, 3);
      await ƒS.Character.hideAll;
      await ƒS.Location.show(locations.fortsetzungfolgt);
      await ƒS.update(10);
    }
    }
















    //Hier geht es weiter, wenn man Halistrator abgelehnt hat
    if (dataForSave.Halisgefährteangenommen == false){
    }
}
}