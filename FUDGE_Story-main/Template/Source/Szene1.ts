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
            T0000: "Edler Abenteurer. Dich erwartet eine Reise voller Gefahren und Tanzveranstaltungen.",
            T0001: "neben ihr unter den Sternen zu sitzen..",
            T0002: "..ihre Hand zu halten und ihr dabei tief in die Augen zu schauen und zu sagen..",
            T0003: ".. Du Hurensohn. Aber wie heißt du eigentlich edler Cockreiter?   ",
            T0004: "hallo was geht ich heiße so und so",
        },
        MainNarrator: {
            T0000: ". . .",
            T0001: ". . .",
            T0002: "Oh!!!",
            T0003: "Verzeih mir doch bitte meine Unachtsamkeit. . .",
            T0004: "Ich war tief in meinen Gedanken versunken. . .",
            T0005: "Man hat viel Zeit zum Nachdenken weist du...",
            T0006: "Wenn man nirgends mehr hin kann. . .",
            T0007: "Würdest du mit einem alten Herren wie mir, deinen Namen teilen?",

            T0008: "Das ist sehr lieb von dir!!!",
            T0009: ". . .",
            T0010: "Spann mich nun nicht so auf die Folter. Sag schon, wie ist dein Name? (Der Vorname reicht mir schon... und am besten auf Groß- und Kleinschreibung achten. . .",
            T0011: ". . . gewöhnlicher Name . . .",

            T0012: "Nun",
            T0013: ". . .",
            T0014: "Das ist sehr bedauerlich.",
            T0015: "Oh! Du bist immernoch hier?",
            T0016: "Ich denke wir beide kommen wohl nicht weit, wenn wir uns nicht gegenseitig austauschen",
            T0017: "Wunderst du dich nicht wie du hier gelandet bist?",

            T0018: "Nun gut, dann übernehme ich eben die Entscheidung für dich. . .",
            T0019: "Also. . . dein Name ist: ",
            
        }
      };
  //Szenenablauf

      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0000);
      await ƒS.update(2);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0001);
      await ƒS.update(2);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0002);
      await ƒS.update(3);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0003);
      await ƒS.update(5);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0004);
      await ƒS.update(5);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0005);
      await ƒS.update(5);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0006);
      await ƒS.update(5);
      await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0007);


      await delay();
      //Entscheidungsoptionen
      let entscheidung1 = {
        iSayYes: "Namen mitteilen", //Passiert a
        iSayNo: "Misstrauisch ablehnen" //Passiert b
      };
      let erstesdialogelement = await ƒS.Menu.getInput(entscheidung1, "auswahl");

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:


      switch (erstesdialogelement) { //Wenn Auswahl "Anruf annehmen"
        case entscheidung1.iSayYes:
          
          await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0008);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0009);
          await ƒS.update(2);
          await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
          await ƒS.update(2);
      data.protagonist.name = await ƒS.Speech.getInput();
      characters.whiteknight.name = data.protagonist.name;
      await ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also? Ein sehr . . .", true);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
      console.log(data.protagonist.name);
          break;



        case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0012);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0013);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0014);
          await ƒS.update(3);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0015);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0016);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0017);
          await ƒS.update(2);
          //Entscheidungsoptionen
          let entscheidung2 = {
            iSayYes: "Namen mitteilen", //Passiert a
            iSayNo: "Erneut ablehnen" //Passiert b
          };
          let zweitesdialogelement = await ƒS.Menu.getInput(entscheidung2, "auswahl");
          switch (zweitesdialogelement) {
            case entscheidung2.iSayYes:
                await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0008);
                await ƒS.update(2);
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0009);
                await ƒS.update(2);
                await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
                await ƒS.update(2);
            data.protagonist.name = await ƒS.Speech.getInput();
            characters.whiteknight.name = data.protagonist.name;
            await ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also? Ein sehr . . .", true);
            await ƒS.update(2);
            await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
            console.log(data.protagonist.name);
                break;

                case entscheidung2.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0018);
          await ƒS.update(2);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0019, false);
          data.protagonist.name = await ƒS.Speech.getInput();
          characters.whiteknight.name = data.protagonist.name;
          await ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also? Ein sehr . . .", true);
          await ƒS.update(2);
          await ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
          console.log(data.protagonist.name);
          break;       
      }




















      await ƒS.Sound.fade(sound.titletheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
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
      await ƒS.Speech.tell(characters.whiteknight, text.whiteknight.T0003,false);
      await ƒS.update(1);
      data.protagonist.name = await ƒS.Speech.getInput();
      characters.whiteknight.name = data.protagonist.name;
      await ƒS.Speech.tell(characters.narrator, data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem Fall beginnen.", true);
      console.log(data.protagonist.name);
      await ƒS.update(2);
      /*ƒS.Sound.play(sound.money, 0.3, false);*/ //Itemsound
      /*await ƒS.Character.animate(characters.geld, characters.geld.pose.normal, fromCenterToCenter()); */ //Animation des Charakters (in diesem Fall ein Item "Geld") wird gespielt
      await ƒS.Speech.tell(characters.whiteknight,text.whiteknight.T0004); //Sprechtext wird eingeleitet

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