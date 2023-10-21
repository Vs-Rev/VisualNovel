namespace Template {
  export async function Szene1_6(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1_6 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T0000: ". . .",
      },
      Leserin: {
        L0000: "",
      },
      whiteknight: {
        W0000: "",
      },
      Publikum: {
        P0000: "",
      },
    };

    //Szenenablauf
    ƒS.Sound.setMasterVolume(11);
    await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");
    await ƒS.Character.show(
      characters.Speechbox,
      characters.Speechbox.pose.newversion,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(3);
    await ƒS.update(1);
    ƒS.Sound.fade(sound.darkwind, 0, 0.8, true);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    ƒS.update(1);
  }
}
