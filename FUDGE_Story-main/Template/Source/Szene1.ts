namespace Template {
    export async function Szene1(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene1 starting");
    
    
      //Gesprochener Text
      let text = {
        Character1: {
          T0000: "Beispieltext1",
          T0001: "Beispieltext2",
        },

        Character2: {
            T0000: "Beispieltext1",
            T0001: "Beispieltext2",
        },

        whiteknight: {
            T0000: "Sex ist zwar schön.. aber hast du dir schonmal vorgestellt..",
            T0001: "neben ihr unter den Sternen zu sitzen..",
            T0002: "..ihre Hand zu halten und ihr dabei tief in die Augen zu schauen und zu sagen..",
            T0003: ".. Du Hurensohn",
        }
      };
  //Szenenablauf
      ƒS.Sound.fade(sound.titletheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
      console.log("audio is being played");


      await ƒS.Location.show(locations.background1); //Location initialisieren die in Main.ts definiert wurden
      console.log("Background is being displayed");


      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge); //Ein Beispiel-Übergang der in Main.ts definiert wurde
      console.log("Transition is being displayed");


      await ƒS.Character.show(characters.whiteknight, characters.whiteknight.pose.standard, ƒS.positionPercent(10, 90)) ; //Charaktere mit deren Posen anzeigen die in Main.ts definiert wurden
      await ƒS.update(1); //Update funktion? Idk warum ehrlich gesagt
      await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0000); //Sprechtext wird eingeleitet
      await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0001); //Sprechtext 2 wird eingeleitet
      await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0002);
      await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0003);
      /*ƒS.Sound.play(sound.money, 0.3, false);*/ //Itemsound
      /*await ƒS.Character.animate(characters.geld, characters.geld.pose.normal, fromCenterToCenter()); */ //Animation des Charakters (in diesem Fall ein Item "Geld") wird gespielt
      await ƒS.Speech.tell(characters.camille, text.Character2.T0000); //Sprechertext wird eingeleitet
      await ƒS.Speech.tell(characters.camille, text.Character2.T0001); //Sprechertext 2 wird eingeleitet

      // Novel Page 
      // Keine Ahnung was Novel Page ist amk
      // Kann sein dass das die Novel Page also quasi die aktuelle Stelle in der Handlung definiert und es als Text ausgibt. Entweder als Anzeige auf dem Bildschirm oder nur fürs Programm relevant  
      ƒS.Text.setClass("novel-page");
      ƒS.Text.print("34 Worlington Street");

      //Inventory Funktion
      /*ƒS.Inventory.add(items.money);
      await ƒS.Character.hide(characters.geld);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      */
      
      /*ƒS.Sound.play(sound.handy, 0.5, false);*/ //Weiterer Sound

      //Zeitliche Delay Funktion wird erwartet (bis Delay zuende ist?)




      await delay();
      //Entscheidungsoptionen
      let firstDialogueElementOptions = {
        iSayYes: "Anruf annehmen", //Passiert a
        iSayNo: "Anruf ignorieren" //Passiert b
      };
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:


      switch (firstDialogueElement) { //Wenn Auswahl "Anruf annehmen"
        case firstDialogueElementOptions.iSayYes:
         /* 
          await ƒS.Speech.tell(characters.camille, text.camille.T0005);
          await ƒS.Speech.tell(characters.smith, text.smith.T0000);
          await ƒS.Speech.tell(characters.camille, text.camille.T0006);
          await ƒS.Speech.tell(characters.smith, text.smith.T0001);
          await ƒS.Speech.tell(characters.camille, text.camille.T0007);
          await ƒS.Speech.tell(characters.smith, text.smith.T0002);
          await ƒS.Speech.tell(characters.camille, text.camille.T0008);
          await ƒS.Speech.tell(characters.smith, text.smith.T0003);
          await ƒS.Speech.tell(characters.camille, text.camille.T0009);
          await ƒS.Speech.tell(characters.smith, text.smith.T0004);
          await ƒS.Speech.tell(characters.camille, text.camille.T0010);
          await ƒS.Speech.tell(characters.smith, text.smith.T0005);
          await ƒS.Speech.tell(characters.camille, text.camille.T0011);
          await ƒS.Speech.tell(characters.smith, text.smith.T0006);
          await ƒS.Speech.tell(characters.camille, text.camille.T0012);
          
          break;*/
        case firstDialogueElementOptions.iSayNo: //Wenn Auswahl "Anruf ablehnen"
        /*
          await ƒS.Speech.tell(characters.camille, text.camille.T0013);
          await ƒS.Speech.tell(characters.camille, text.camille.T0014);
          await ƒS.Speech.tell(characters.camille, text.camille.T0015);
          break;
          */
      }
     

      //Weitere CharakterAnimation
      /*await ƒS.Character.animate(characters.camille, characters.camille.pose.happy, fromLeftToRight());

      await ƒS.Character.hide(characters.camille);*/
      
      //Sound wird gespielt
      /*
      ƒS.Sound.fade(sound.backgroundBuero, 0, 0.2, true);
      */

      //Erwartet update 1? Immernoch keine Ahnung was das ist. Möglicherweise der letzte Schritt bis in die nächste Szene? Oder ein Mausklick? KEINE AHNUNG MAAN
      await ƒS.update(1);
    }
}