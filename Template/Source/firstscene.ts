namespace Template {
    export async function firstscene(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene starting");

      let text = {
        Lily: {
            T0001: "Hallo",
            T0002: "Anderer Text",
            T0003: "Text Nummer 3"
        }
      }

await ƒS.Location.show(locations.beachDay);
await //ƒS.Character.show(characters.narrator, ƒS.positionPercent(70, 100));
await ƒS.update();
//await ƒS.Speech.tell(characters.narrator, text.lily.T0001);
    }
  }