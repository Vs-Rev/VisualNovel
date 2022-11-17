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
            T0002: "Oh",
            T0003: "Verzeih mir doch bitte meine Unachtsamkeit. . .",
            T0004: "Ich war tief in meinen Gedanken versunken. . .",
            T0005: "Es ist so dunkel hier drin. Wärst du wohl so freundlich das Licht anzuschalten?",
            T0006: "Licht bringt zwar Klarheit in die Dinge, offenbart dafür auch unschöne Wahrheiten findest du nicht?",
            T0007: "Da wir uns gerade so schön unterhalten und offenbar nicht viele Auswahlmöglichkeiten haben. . . Möchtest du deinen Namen mit einem alten Herren wie mir teilen?",

            T0008: "Das ist sehr lieb von dir!!!",
            T0009: ". . .",
            T0010: "Spann mich nun nicht so auf die Folter. Sag schon, wie ist dein Name? (Der Vorname reicht mir schon... und am besten auf Groß- und Kleinschreibung achten. . .",
            T0011: ". . . gewöhnlicher Name . . .",

            T0012: "Nun",
            T0013: ". . .",
            T0014: "Das ist sehr bedauerlich.",
            T0015: "Du bist immernoch hier?",
            T0016: "Ich denke wir beide kommen wohl nicht weit, wenn wir uns nicht gegenseitig vorstellen",
            T0017: "Wunderst du dich nicht wie du hier gelandet bist?",

            T0018: "Nun gut, dann übernehme ich eben die Entscheidung für dich. . .",
            T0019: "Also. . . dein Name ist: ",
            
            T0020: "Lieber ",
            T0021: ". Dich erwartet eine heldenhafte Reise in ein längst vergessenes Königreich voller Herausforderungen, Tücken und Gefahren.",
            T0022: "Bevor ich dich aufkläre, wo wir hier sind und wie du an diesen Ort gelangt bist, muss ich wissen. . .",
            T0023: "Bist du der Herausforderung gewachsen?",

            T0024: "Wunderbar!!!",
            T0025: "Er war definitiv nicht bereit, doch er hatte keine leider keine andere Wahl",

            //Lichtan
            L0001: "Er versuchte zu helfen um etwas Licht ins Dunkle zu bringen",
            L0002: "Doch er fand keinen . . . Lichtschalter",
            L0003: "Keinen Lichtschalter gefunden heh? Das ist okay. Ich versuche es schon seit ich mich erinnern kann doch leider ohne Erfolg",

            //Lichtaus
            L0004: "Nichts passiert",
            L0005: "Nein? Naja. Ich mag es sowieso viel lieber wenn es dunkel ist.",



        }
      };
  //Szenenablauf
      await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.standard, ƒS.positionPercent(50, 100)); 
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


      //Licht anschalten Text
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0005, false);
      await ƒS.update(5);
      let lichtanschalten = {
        lichtan : "Licht anschalten",
        lichtaus: "Nichts tun"
      };
      let lichtanschaltenelement = await ƒS.Menu.getInput(lichtanschalten, "auswahl");
      switch (lichtanschaltenelement) {
        case lichtanschalten.lichtan:
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0001);
          await ƒS.update(10);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0002);
          await ƒS.update(7);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0003);
          await ƒS.update(10)
          break;

        case lichtanschalten.lichtaus:
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0004);
          await ƒS.update(3);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.L0005);
          await ƒS.update(3);
          break;
      }
      await ƒS.update(3);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0006);
      await ƒS.update(15);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0007);
      await ƒS.update(5);
      await delay();


      //Namen sagen
      let entscheidung1 = {
        iSayYes: "Namen mitteilen", //Passiert a
        iSayNo: "Misstrauisch ablehnen" //Passiert b
      };
      let erstesdialogelement = await ƒS.Menu.getInput(entscheidung1, "auswahl");

      //Abhängig von der oben stehenden Entscheidung wird nun folgendes passieren:


      switch (erstesdialogelement) { //Wenn Auswahl "Namen eingben"
        case entscheidung1.iSayYes:
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0008);
          await ƒS.update(5);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0009);
          await ƒS.update(3);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
          await ƒS.update(7);
      data.protagonist.name = await ƒS.Speech.getInput();
      characters.whiteknight.name = data.protagonist.name;
      ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also? Ein sehr . . .", true);
      await ƒS.update(6);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
      await ƒS.update(4);
      console.log(data.protagonist.name);
          break;
        case entscheidung1.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
        
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0012);
          await ƒS.update(4);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0013);
          await ƒS.update(4);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0014);
          await ƒS.update(4);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0015);
          await ƒS.update(4);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0016);
          await ƒS.update(10);
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0017);
          await ƒS.update(4);
          //Entscheidungsoptionen
          let entscheidung2 = {
            iSayYes: "Namen mitteilen", //Passiert a
            iSayNo: "Erneut ablehnen" //Passiert b
          };
          let zweitesdialogelement = await ƒS.Menu.getInput(entscheidung2, "auswahl");
          switch (zweitesdialogelement) {
            case entscheidung2.iSayYes:
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0008);
                await ƒS.update(5);
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0009);
                await ƒS.update(5);
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0010, false);
                await ƒS.update(2);
            data.protagonist.name = await ƒS.Speech.getInput();
            characters.whiteknight.name = data.protagonist.name;
            ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also? Ein sehr . . .", true);
            await ƒS.update(5);
            ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
            await ƒS.update(5);
            console.log(data.protagonist.name);
                break;

                case entscheidung2.iSayNo: //Wenn Auswahl "Name sagen ablehnen"
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0018);
                await ƒS.update(5);
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0019, false);
                await ƒS.update(2);
                data.protagonist.name = await ƒS.Speech.getInput();
                characters.whiteknight.name = data.protagonist.name;
                ƒS.Speech.tell(characters.MainNarrator, data.protagonist.name + " also? Ein sehr . . .", true);
                await ƒS.update(5);
                ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0011);
                await ƒS.update(5);
                console.log(data.protagonist.name);
                    break;

          }
      await ƒS.Sound.fade(sound.titletheme, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
      console.log("audio is being played");
      await ƒS.update(7);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0020 + data.protagonist.name + text.MainNarrator.T0021);
      await ƒS.update(5);
      ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0022);
      await ƒS.update(5);
      let herausforderung = {
        iSayYes: "Auf jeden Fall", //Passiert a
        iSayNo: "Ich glaube eher nicht" //Passiert b
      };
      let herausforderungselement = await ƒS.Menu.getInput(herausforderung, "auswahl");
      switch (herausforderungselement) {
        case herausforderung.iSayYes:
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0024);
          break;
        case herausforderung.iSayNo:
          ƒS.Speech.tell(characters.MainNarrator, text.MainNarrator.T0025);
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