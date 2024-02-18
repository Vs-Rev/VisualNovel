namespace Template {
  export async function Szene4_2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene4_2 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T001: ". . .",

      },
      whiteknight: {
        T000: ". . .",

      },

      Halistrator: {
        T001: "Nur ein Traum? Wie meinst du das?",
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
  }
}