namespace Template {
  export async function Szene3(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene3 starting");



    //Gesprochener Text
    let text = {
      MainNarrator: {
        T0000: "Endlich sind wir da",
        T0001: "Wir können schon reingehen, die Show scheint aber anscheinend noch nicht vorbeizusein. . .",
        T0002: "Deine Entscheidung",

        //Reingehen
        T0003: "Nun gut, dann lass uns rein.",
        T0004: "Wir sollten schauen dass wir einen Sitzplatz bekommen",

        T0005: "Karte hinzugefügt",
        //Wenn Entschuldigung abgelehnt (entschuldigung : 0):
        T0006: "Wir brauchen dafür übrigens eine Karte",
        T0007: "Und da geht sie",

        T0008: "Hm. . . scheint hier wohl nicht viele zu geben die du fragen könntest",
        T0009: "Vielleicht sollten wir uns. . .",
        T0010: "Reinschleichen?",
      },
      School: {
        S0000: "ERINNERUNG",
        S0001: "LETZTE VORFÜHRUNG BEGINNT IN KÜRZE",
        S0002: "BITTE BEGEBEN SIE SICH AUF IHRE PLÄTZE",

        S0003: "ACHTUNG ACHTUNG",
        S0004: "LETZTER AUFRUF",
        S0005: "BITTE BEGEBEN SIE SICH NUN AUF IHRE PLÄTZE",
        S0006: "DIE LETZTE VORFÜHRUNG BEGINNT IN KÜRZE",
      },
      Elo: {
        //Wenn Entschuldigung angenommen (entschuldigung: 1):
        E0000: "Hey! Du bist ja ausnahmsweise mal früh dran",
        E0001: "Langsam wirst du zu einem besseren Menschen",
        E0002: "Sag mal, hast du überhaupt einen Sitzplatz reserviert?",
        E0003: "Die ganze Halle ist voll und alle Plätze belegt.",
        E0004: "Ich habe extra einen Platz dazugebucht, damit ich nicht neben jemand Fremdes sitzen muss",
        E0005: "DU bist niemand. . . Fremdes",
        E0006: "Wenn du magst, kannst du dich neben mich setzen und warten bis die Show zu ende ist",
        //Wenn Nebensetzen
        E0007: "Das freut mich! Ich hole uns noch etwas zu trinken. Geh schonmal vor. Hier die Karte für dich!",
        //Wenn Anruf ignoriert (entschuldigung : 2):
        E0008: "Oh Hey! Ich habe versucht dich zu erreichen, vermutlich warst du zu beschäftigt. . .",
        E0009: "Hör zu. . .",
        E0010: "Eigentlich wollte ich mich. . .",

        E0011: "Oh. . . egal",
        E0012: "Das hat auch später Zeit. Wir sollten jetzt los.",
        E0013: "Ich möchte die letzte Vorführung nicht verpassen. Ich LIEBE Geschichten",

        //Wenn setzen ablehenn
        E0014: "Ich verstehe. . .",
      },
    };
    let umsehen: number = 0;
    await ƒS.Sound.fade(sound.peopletalking, 0.05, 3, true);
    await ƒS.update(2);
    await ƒS.Location.show(locations.theaterfront);
    await ƒS.update(5);
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.grayedout, ƒS.positionPercent(50, 100));
    await ƒS.update(2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0000, true, true, 5, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0001, true, true, 5, 50, sound.MainNarrator, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0002, false, false, 5, 50, sound.MainNarrator, 2);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let reingehen = {
      reingehen: "Saal betreten",
      umsehen: "Umsehen",
    };
    let reingehelement = await ƒS.Menu.getInput(reingehen, "auswahl");
    switch (reingehelement) {
      case reingehen.reingehen:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0003, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0004, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0006, true, true, 5, 50, sound.MainNarrator, 2);
        break;
      case reingehen.umsehen:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.School.S0000, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0001, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0002, true, true, 5, 50, sound.School, 2);
        umsehen = 1;
        break;
    }
    if (umsehen == 1) {
      if (data.entschuldigung == 1) {
        await satzbau(characters.Elo, text.Elo.E0000, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0001, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0002, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0003, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0004, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0005, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0006, false, false, 5, 50, sound.Elo, 2);
        await ƒS.Sound.play(sound.buttonhover, .2, false);
        let setzen = {
          setzen: "Sitzgelegenheit annehmen",
          ablehnen: "Ablehnen",
        };
        let setzelement = await ƒS.Menu.getInput(setzen, "auswahl");
        switch (setzelement) {
          case setzen.setzen:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.Elo, text.Elo.E0007, true, true, 5, 50, sound.Elo, 2);
            break;
          case setzen.ablehnen:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.Elo, text.Elo.E0014, true, true, 5, 50, sound.Elo, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0007, true, true, 5, 50, sound.MainNarrator, 2);
            break;
        }
      }
      if (data.entschuldigung == 2) {
        await satzbau(characters.Elo, text.Elo.E0008, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0009, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0010, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.MainNarrator, text.School.S0003, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0004, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0005, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0006, true, true, 5, 50, sound.School, 2);
      }
      if (data.entschuldigung == 0) {
        await satzbau(characters.MainNarrator, text.MainNarrator.T0008, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0009, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0010, true, true, 5, 50, sound.MainNarrator, 2);

      }
    }
  }
}
