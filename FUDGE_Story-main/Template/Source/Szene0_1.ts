namespace Template {
  export async function Szene0_1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene0 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T000: "Irgendwann kommt der Moment, in dem du entscheiden musst, ob du die Seite umblätterst, oder das Buch schließt.",
      },
    };
    //Szenenablauf
    ƒS.Sound.setMasterVolume(8);
    await satzbau(characters.MainNarrator, text.MainNarrator.T000, true, true, 50, 50, sound.MainNarrator, 100);
    ƒS.Speech.hide();
    ƒS.Sound.play(sound.chaptertransition, 0.05, false);
    await ƒS.Location.show(locations.tipp1);
    await ƒS.update(3);
    await ƒS.Location.show(locations.blackbackground);
    await ƒS.update(3);
    ƒS.Sound.play(sound.chaptertransition, 0.05, false);
    await ƒS.Location.show(locations.tipp2);
    await ƒS.update(3);
    await ƒS.Location.show(locations.blackbackground);
    await ƒS.update(3);
    ƒS.Sound.play(sound.chaptertransition, 0.05, false);
    await ƒS.Location.show(locations.tipp3);
    await ƒS.update(3);
    await ƒS.Location.show(locations.blackbackground);
    await ƒS.update(3);
    ƒS.Sound.play(sound.chaptertransition, 0.05, false);
    await ƒS.Location.show(locations.tipp4);
    await ƒS.update(3);
    ƒS.Sound.play(sound.blackscreen, 0.05, false);
    await ƒS.Location.show(locations.blackbackground);
    await ƒS.update(10);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    ƒS.update(1);
  }
}

