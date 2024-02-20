namespace Template {
  export async function Szene1_6(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1_6 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T0000: "Der Vorhang hebt sich!",
        T0001: "Oh, wie wunderbar! Ich liebe Geschichten!",
        T0002: "Es wird dunkel um dich herum.",
        T0003: "Du fühlst dich...",
        T0004: "etwas unwohl...",
        T0005: "Von der geheimnisvollen alten Dame geht ein seltsames, schwaches Leuchten aus.",
        T0006: "Dein Unbehagen nimmt zu. Etwas stimmt hier nicht.",
        T0007: "Es scheint, als würden Funken aus ihrer Richtung sprühen.",
        T0008: "Deine Sinne scheinen dich zu täuschen.",
        T0009: "Du hast das Gefühl, das Bewusstsein zu verlieren.",
        T0100: "Speichern...",
      
        // Beruhigen / Nachgeben
        T0010: "Du versuchst, dich zu beruhigen.",
        T0011: "...",
        T0012: "Dein Körper fühlt sich federleicht an.",
        T0013: "So leicht, als würdest du schweben.",
        T0014: "Dein Abenteuer beginnt...",
        // Schreien
        T0015: "Du möchtest aufspringen und schreien.",
        T0016: "Es ist unerträglich!",
        T0017: "Du verlierst die Kontrolle.",
        T0018: "Plötzlich fühlst du dich, als würdest du schweben.",
      },
      Leserin: {
        L0000: "...",
        L0001: "Hmpf...",
        L0002: "HUST HUST",
        L0003: "...",
        L0004: "Endlich.",
        L0005: "Ich wurde hierher eingeladen, um eine meiner Geschichten zu erzählen.",
        L0006: "Glaubt ihr, Geschichten sind nur etwas für Kinder?",
        L0007: "Ha-Ha-Ha-Ha-Ha",
        L0008: "Passt gut auf, diese Geschichte hat es in sich.",
        L0009: "Nun denn...",
        L0010: "Es war einmal, in einer anderen Welt...",
        L0011: "Ein lang erwarteter Besucher...",
        L0012: "Eine Welt am Rande des Abgrunds...",
      
        L0013: "BEGINNT",
      },
      whiteknight: {
        W0000: "",
      },
      Publikum: {
        P0000: "Das war grandios!",
        P0001: "Ja! Zugabe!",
        P0002: "Naja, so toll war es jetzt auch nicht.",
        P0003: "Mein Kind könnte das besser.",
        P0004: "Was kommt als Nächstes?",
        P0005: "Wer ist das?",
        P0006: "War das geplant?",
        P0007: "Ich habe mein Schnitzel im Ofen vergessen!",
        P0008: "...",
      },
    };

    //Szenenablauf
    ƒS.Sound.setMasterVolume(11);
    await ƒS.Location.show(locations.theaterindoor1);
    await ƒS.update(5);
    await ƒS.Sound.fade(sound.audience, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
    console.log("audio is being played");
    await ƒS.Character.show(
      characters.Speechbox,
      characters.Speechbox.pose.grayedout,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(2);
    await satzbau(
      characters.Publikum,
      text.Publikum.P0000,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0001,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0002,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0003,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0004,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0005,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0006,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0007,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.Publikum,
      text.Publikum.P0008,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0000,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    ƒS.Sound.play(sound.curtains, 0.8, false);
    await ƒS.Location.show(locations.theaterindoor2);
    await ƒS.update(6);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0000,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.Leserin,
      text.Leserin.L0001,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    ƒS.Sound.play(sound.cough, 0.8, false);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0002,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    ƒS.Sound.fade(sound.audience, 0, 0.8, true);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0003,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.Leserin,
      text.Leserin.L0004,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.Leserin,
      text.Leserin.L0005,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.Leserin,
      text.Leserin.L0006,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    ƒS.Sound.play(sound.laughterold, 0.5, false);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0007,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.Leserin,
      text.Leserin.L0008,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.Leserin,
      text.Leserin.L0009,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0001,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await ƒS.Location.show(locations.theaterindoor3);
    await ƒS.update(3);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0010,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0003,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0004,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await ƒS.Sound.fade(sound.thunder, 0.04, 0.5, true);
    await ƒS.update(3);
    ƒS.Sound.play(sound.oldmagic, 0.3, false);
    await ƒS.Location.show(locations.theaterindoor4);
    await ƒS.update(3);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0011,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0005,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    ƒS.Sound.play(sound.oldmagic, 0.8, false);
    await ƒS.Location.show(locations.theaterindoor5);
    await ƒS.update(3);
    await satzbau(
      characters.Leserin,
      text.Leserin.L0012,
      true,
      true,
      3,
      50,
      sound.Leserin,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0006,
      true,
      true,
      3,
      50,
      sound.MainNarrator,
      1
    );
    await satzbau(
      characters.MainNarrator,
      text.MainNarrator.T0007,
      false,
      false,
      3,
      50,
      sound.MainNarrator,
      1
    );
    ƒS.Sound.play(sound.oldmagic, 0.8, false);
    await ƒS.Location.show(locations.theaterindoor6);
    await ƒS.update(3);
    let reaktion = {
      nachgeben: "Nachgeben", //Passiert a
      abreagieren: "Abreagieren", //Passiert b
      schreien: "Schreien",
    };
    let reaktionelement = await ƒS.Menu.getInput(reaktion, "auswahl");
    switch (reaktionelement) {
      case reaktion.nachgeben:
        await buttonpress(sound.buttonpress, 0.2);
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0010,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0011,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0012,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0013,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0014,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.Leserin,
          text.Leserin.L0013,
          false,
          false,
          3,
          50,
          sound.Leserin,
          1
        );
        break;
      case reaktion.abreagieren:
        await buttonpress(sound.buttonpress, 0.2);
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0010,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0011,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0012,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0013,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0014,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.Leserin,
          text.Leserin.L0013,
          false,
          false,
          3,
          50,
          sound.Leserin,
          1
        );
        break;
      case reaktion.schreien:
        await buttonpress(sound.buttonpress, 0.2);
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0015,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0016,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0017,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0018,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.MainNarrator,
          text.MainNarrator.T0014,
          false,
          false,
          3,
          50,
          sound.MainNarrator,
          1
        );
        await satzbau(
          characters.Leserin,
          text.Leserin.L0013,
          false,
          false,
          3,
          50,
          sound.Leserin,
          1
        );
        break;
    }
    ƒS.Sound.play(sound.oldmagic, 0.8, false);
    await ƒS.Location.show(locations.theaterindoor7);
    await ƒS.update(3);
    ƒS.Sound.play(sound.oldmagic, 0.8, false);
    await ƒS.Location.show(locations.theaterindoor8);
    await ƒS.update(3);
    ƒS.Sound.play(sound.oldmagic, 0.8, false);
    await await ƒS.Location.show(locations.theaterindoor9);
    await ƒS.update(3);
    await ƒS.Sound.fade(sound.thunder, 0, 0.6, false);
    await ƒS.Location.show(locations.blackbackground);
    ƒS.Sound.play(sound.teleport, 0.8, false);
    await ƒS.update(3);
    await ƒS.update(3);
    await ƒS.update(1);
    ƒS.Sound.fade(sound.darkwind, 0, 0.8, true);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.update(1);
  }
}
