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
        T001: "Sieh mal!!!",

      },

      BILL: {
        T000: "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
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
    if (dataForSave.Halisgefährteangenommen == true){
      await ƒS.Sound.fade(sound.Meadow, 0.07, 3, true);
      console.log("audio is being played");
    await ƒS.Location.show(locations.schlossweitsicht);
    await ƒS.update(3);
    await ƒS.Character.show(characters.Halistrator, characters.Halistrator.pose.surprised, ƒS.positionPercent(50, 48));
    }
    //Hier geht es weiter, wenn Halistrator mitkommt
    //Hier geht es weiter, wenn man Halistrator abgelehnt hat
    if (dataForSave.Halisgefährteangenommen == false){
    }
}
}