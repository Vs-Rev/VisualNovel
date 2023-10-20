namespace Template {
  export async function Szene5_Entscheidung(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene5_Entscheidung starting");
    console.log(characters.MainNarrator);



    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    ƒS.update(1);
    //Szenenablauf
    //characters.whiteknight.name = "Vasi";
    //dataForSave.protagonist.name = characters.whiteknight.name;+
    if (dataForSave.protagonist.name == "") {
      dataForSave.protagonist.name = "???";
      characters.whiteknight.name = dataForSave.protagonist.name;
    }
    if (dataForSave.Entscheidungsfrage1 == 1) {
      return"Szene6_2";
    }
    else {
      dataForSave.Entscheidungsfrage1 = 2;
      return"Szene_6_1";
    }
  }
}