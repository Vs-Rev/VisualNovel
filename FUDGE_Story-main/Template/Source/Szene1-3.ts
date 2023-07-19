namespace Template {
    export async function Szene1_3(): ƒS.SceneReturn {
      console.log("FudgeStory Template zufuß starting");
  
  
  
      //Gesprochener Text
      let text = {
        MainNarrator: {
          M0000: "Es ist eine dieser schönen Nächte findest du nicht?",
          M0001: "Die Ruhe vor dem Sturm heh",
          M0002: "Lass uns einfach mal für einen Moment nichts tun und schweigen",
          M0003: "Nur einen Moment, erfüllt von Stille. . .",
          M0004: ". . .",
          M0005: "Muss das sein?",
          M0006: "Na los, geh schon ran",
          M0007: "",
          //Entschuldigung Annehmen
          M0008: ". . .",
          M0009: "Ich lass das mal deine Sorge sein",
          //Telefonat ablehnen
          M0010: "Danke. Okay, fahren wir mit der Geschichte fort. . .",
          M0011: "Jetzt solltest du dich beeilen, es wird schon spät!",
        },
        Elo: {
          E0000: "Hey, ",
          E0001: "Hör zu. . .",
          E0002: "Ich wollte mich nur entschuldigen. . . für mein gestriges Verhalten. . .",
          E0003: "Ich hätte nicht so eine Szene machen sollen",
          E0004: "Es kam alles nur so plötzlich und ohne Vorwarnung. . .",
          E0005: "Kannst du mir verzeihen?",
          //Entschuldigung Annehmen
          E0006: "Das ist schön. . .",
          E0007: "Das beruhigt mich. . . Danke",
          E0008: "Ich hoffe wir können uns bald wieder sehen",
          E0009: "Ahja und vergiss nicht deine Schwester abzuholen",
          E0010: "Ich weiß wie vergesslich du sein kannst!!!",
          E0011: "Byeee",
          //Entschuldigung Ablehnen
          E0012: "Ich wusste du würdest es nicht verstehen. . .",
          //Was meinst du
          E0013: "Ah. . .",
          E0014: "Verstehe schon, wir reden nicht darüber",
          E0015: "Danke dir",
        },
      };
      //await ƒS.Sound.fade(sound.introductiontheme, 0.3, 3, true);
      //data.protagonist.name = "Halis";
      //characters.whiteknight.name = data.protagonist.name;
      dataForSave.protagonist.name = "Brani";
      characters.whiteknight.name = dataForSave.protagonist.name;
      await ƒS.Location.show(locations.waldweg);
      await ƒS.Sound.fade(sound.nightambience, 0.2, 4, true);
      await ƒS.update(5);
      await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.grayedout, ƒS.positionPercent(50, 100));
      await ƒS.update(2);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0000 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0001 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0002 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0003 , true, true, 5, 50, sound.MainNarrator, 1);
      ƒS.Sound.play(sound.phonering, .3, false);
      ƒS.update(3);
      ƒS.Speech.hide;
      await ƒS.update(1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0004 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0005 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0006 , false, false, 5, 50, sound.MainNarrator, 1);
      ƒS.Sound.play(sound.buttonhover, .2, false);
      let rangehen = {
        rangehen: "Nachsehen",
        ablehnen: "Ignorieren",
      };
      let rangegangen: number = 0;
      let handyentscheidung = await ƒS.Menu.getInput(rangehen, "auswahl");
      switch (handyentscheidung) {
        case rangehen.rangehen:
          await buttonpress(sound.buttonpress, .2);
          dataForSave.good +1;
          await ƒS.update(1);
          await satzbau(characters.Elo, text.Elo.E0000 + dataForSave.protagonist.name , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0001 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0002 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0003 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0004 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0005 , false, false, 5, 50, sound.Elo, 1);
          rangegangen = 1;
          break;
        case rangehen.ablehnen:
          await buttonpress(sound.buttonpress, .2);
          dataForSave.evil +1;
          await ƒS.update(1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0010 , true, true, 5, 50, sound.MainNarrator, 1);
          dataForSave.entschuldigung = 2;
          break;
    }
    if(rangegangen == 1){
      let entschuldigung = {
        annehmen: "Entschuldigung annehmen",
        ablehnen: "Entschuldigung ablehnen",
        waspassiert: "Was meinst du?",
      };
      ƒS.Sound.play(sound.buttonhover, .2, false);
      let entschuldigungsentscheidung = await ƒS.Menu.getInput(entschuldigung, "auswahl");
      switch (entschuldigungsentscheidung) {
        case entschuldigung.annehmen:
          await buttonpress(sound.buttonpress, .2);
          dataForSave.good +1;
          await ƒS.update(1);
          await satzbau(characters.Elo, text.Elo.E0006 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0007 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0008 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0009 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0010 , true, true, 5, 50, sound.Elo, 1);
          await satzbau(characters.Elo, text.Elo.E0011 , true, true, 5, 50, sound.Elo, 1);
          ƒS.Sound.play(sound.phonecallend, .3, false);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0008 , true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0009 , true, true, 5, 50, sound.MainNarrator, 1);
          dataForSave.entschuldigung = 1; 
          break;
        case entschuldigung.ablehnen:
          await buttonpress(sound.buttonpress, .2);
          dataForSave.entschuldigung = 3;
          dataForSave.evil +1;
          await ƒS.update(1);
          await satzbau(characters.Elo, text.Elo.E0012 , true, true, 5, 50, sound.Elo, 1);
          ƒS.Sound.play(sound.phonecallend, .3, false);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0008 , true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0009 , true, true, 5, 50, sound.MainNarrator, 1);
          break;
        case entschuldigung.waspassiert: 
        await buttonpress(sound.buttonpress, .2);
        dataForSave.good +1;
        dataForSave.entschuldigung = 1;
        await ƒS.update(1);
        await satzbau(characters.Elo, text.Elo.E0013 , true, true, 5, 50, sound.Elo, 1);
        await satzbau(characters.Elo, text.Elo.E0014 , true, true, 5, 50, sound.Elo, 1);
        await satzbau(characters.Elo, text.Elo.E0015 , true, true, 5, 50, sound.Elo, 1);
        await satzbau(characters.Elo, text.Elo.E0008 , true, true, 5, 50, sound.Elo, 1);
        await satzbau(characters.Elo, text.Elo.E0009 , true, true, 5, 50, sound.Elo, 1);
        await satzbau(characters.Elo, text.Elo.E0010 , true, true, 5, 50, sound.Elo, 1);
        await satzbau(characters.Elo, text.Elo.E0011 , true, true, 5, 50, sound.Elo, 1);
        break;
    }
  }
  await satzbau(characters.MainNarrator, text.MainNarrator.M0011 , true, true, 5, 50, sound.MainNarrator, 1);
  ƒS.Speech.clear();
  await ƒS.update(2);
  ƒS.Character.hideAll();
  ƒS.Speech.hide();
  ƒS.update(1);
  //return "szene1_4";
    }
  }
  