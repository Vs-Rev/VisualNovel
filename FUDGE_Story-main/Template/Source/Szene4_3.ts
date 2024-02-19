namespace Template {
  export async function Szene4_3(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene4_3 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T001: "Halistrator stolperte über seine eigenen Füße. . .",


      },
      whiteknight: {
        T000: ". . .",

      },

      Halistrator: {
        T001: "W-wir wollen zum Berater des Königs! Wir sind gekommen, um zu helfen!",

      },

      BILL: {
        T000: "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
      },
      Wache1: {
        T000: "HAAAAAALT!",
        T001: "NENNT EUER ANLIEGEN! SOFORT!",
        T002: "RAUDIES",
      },
      Wache2: {
        T000: "Wo wollt ihr denn hin?",
        T001: "Kannst du mir mal bitte nicht ins Ohr schreien? Ich stehe direkt neben dir!",
        T002: "Entschuldigt bitte meinen Kammeraden hier. . .",
        T003: "Er kann manchmal etwas. . .",
        T004: "Aufbrausend wirken",
        T005: "Aber ihr seht nicht aus wie irgendwelche. . .",
        T006: "Ja genau danke, Raudies",

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
    await ƒS.Character.show(characters.Wache1, characters.Wache1.pose.standard, ƒS.positionPercent(20, 48));

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

    }
    if(dataForSave.good <= dataForSave.evil){
      //wenn böse mehr als gut
    }


    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
    }
















    //Hier geht es weiter, wenn man Halistrator abgelehnt hat
    if (dataForSave.Halisgefährteangenommen == false){
    }
}
}