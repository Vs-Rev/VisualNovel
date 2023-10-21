namespace Template {
  export async function Szene1_6(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene1_6 starting");
    console.log(characters.MainNarrator);
    //Gesprochener Text
    let text = {
      MainNarrator: {
        T0000: "Da, der Vorhang öffnet sich!",
        T0001: "Ohhh wie schön! Ich liebe Geschichten!",
        T0002: "Es wird dunkel",
        T0003: "Du fühlst dich. . .",
        T0004: "Etwas unwohl. . .",
        T0005:
          "Ausgehend von der mysteriösen alten Dame vernimmst du ein seltsames, schwaches Leuchten",
        T0006:
          "Du fühlst dich zunehmend unwohler. Irgendetwas stimmt hier nicht",
        T0007:
          "Aus der Richtung der Dame scheinen regelrecht Funken zu sprühen",
        T0008: "Deine Sinne scheinen dir nicht länger treu zu sein",
        T0009:
          "Du hast das Gefühl, als würdest du gleich dein Bewusstsein verlieren",

        //Abreagieren / Nachgeben
        T0010: "Du versuchst dich zu beruhigen",
        T0011: ". . .",
        T0012: "Dein Körper fühlt sich leicht an",
        T0013: "So leicht, als würdest du schweben",
        T0014: "Dein Abenteuer. . .",
        //Schreien
        T0015: "Du möchtest aufstehen und aus deiner tiefsten Kehle schreien",
        T0016: "Du erträgst es nicht!",
        T0017: "Du verlierst die Kontrolle",
        T0018: "Du fühlst dich plötzlich so an, als würdest du schweben",
      },
      Leserin: {
        L0000: ". . .",
        L0001: "Hmpf. . .",
        L0002: "HUST HUST",
        L0003: ". . .",
        L0004: "Na eendliich",
        L0005:
          "Iiich bin hier her eeingeladen worden um euch eine meiner Geschichten zu erzählen",
        L0006: "Ihr glaauubt Geschichten sind nuuur etwas für Kinder?",
        L0007: "Ha-Ha-Ha-Ha-Ha",
        L0008: "Paasst bloß aauf, dieese hier haaat es in sich",
        L0009: "Nuun deennn. . .",
        L0010: "Es war einmal, in einer anderen Welt. . .",
        L0011: "Ein lang erwarteter Besucher. . .",
        L0012: "Eine Welt die kurz vor dem Abgrund steht. . .",

        L0013: "B E G I N N T",
      },
      whiteknight: {
        W0000: "",
      },
      Publikum: {
        P0000: "Das war grandios!",
        P0001: "Jaa! Zugabe!",
        P0002: "Naja so toll war das jetzt auch nicht",
        P0003: "Mein Kind kann das bestimmt besser",
        P0004: "was kommt denn nun?",
        P0005: "Wer ist das?",
        P0006: "Stand das auf dem Plan?",
        P0007: "Ich habe mein Schnitzel im Backofen vergessen!",
        P0008: ". . .",
      },
    };

    //Szenenablauf
    ƒS.Sound.setMasterVolume(11);
    await ƒS.Location.show(locations.theaterindoor1);
    ƒS.update(5);
    await ƒS.Sound.fade(sound.darkwind, 0.07, 0.1, true); //Der Sound der in Main.ts definiert wurde
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
    await ƒS.Location.show(locations.theaterindoor2);
    ƒS.update(6);
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
    ƒS.update(3);
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
    await ƒS.Location.show(locations.theaterindoor4);
    ƒS.update(3);
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
    await ƒS.Location.show(locations.theaterindoor5);
    ƒS.update(3);
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
    await ƒS.Location.show(locations.theaterindoor6);
    ƒS.update(3);
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
    await ƒS.Location.show(locations.theaterindoor7);
    ƒS.update(3);
    await ƒS.Location.show(locations.theaterindoor8);
    ƒS.update(3);
    await ƒS.Location.show(locations.theaterindoor9);
    ƒS.update(3);
    await ƒS.Location.show(locations.blackbackground);
    ƒS.update(3);
    await ƒS.update(3);
    await ƒS.update(1);
    ƒS.Sound.fade(sound.darkwind, 0, 0.8, true);
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    ƒS.update(1);
  }
}
