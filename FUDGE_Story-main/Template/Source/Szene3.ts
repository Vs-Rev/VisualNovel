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

        T0011: "Warum möchtest du dich reinschleichen wenn du doch gerade eine Sitzgelegenheit bekommen hast?",
        T0012: "Ich verstehe, du brauchst den Nervenkitzel",
        T0013: "Na dann. . .",
        T0014: "Was denn?",
        T0015: "Dich aufhalten? Nein wieso denn?",
        T0016: "Das macht das Ganze doch spannender",

        T0017: "Sehr gut. Dann lass uns beeilen bevor die Vorstellung beginnt",

        T0018: "Sehr gewagt. Doch wer nicht wagt, der nicht gewinnt",
        T0019: "Nicht wahr?",

        T0020: "So, das überlasse ich jetzt ganz dir",
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
      Ticketkontrolleur: {
        T0000: "Schönen Abend!",
        T0001: "Moment, an ihr Gesicht kann ich mich nicht erinnern",
        T0002: "Und ich kann mir jedes Gesicht merken",
        T0003: "Wirklich JEDES",
        T0004: "Das ist meine ganz persönliche Superkraft",
        T0005: "Deshalb bin ich Ticketkontrolleur geworden weißt du",
        T0006: "Wo war ich. . .",
        T0007: "Ahja richtig",
        T0008: "Zeig mir einfach dein Ticket dann lass ich dich rein",
        T0009: "Dein Gesicht merk ich mir TROTZDEM",
        T0010: "He he",

        //Drohen
        T0011: "Ah so ist das also",
        T0012: "Glaubst du du kannst mich einfach so einschüchtern?",
        T0013: "MICH",
        T0014: "DEN Ticketkontrolleur",
        T0015: "Lächerlich, ich habe mich natürlich auf so eine Situation vorbereitet",
        T0016: "Auch wenn ich das an einer Grundschule nicht erwartet hätte",
        T0017: "Dann zeig mal was du drauf hast",
        T0018: "Heh heh",

        //beleidigen
        T0019: "Was hast du gerade gesagt?",
        T0020: "Oha",
        T0021: "Das ist aber nicht so nett. . .",
        T0022: "So einen Rüpel wie dich lasse ich ganz sicher nicht einfach so rein!",

        //lügen
        T0023: "Du hast eine Erklärung?",
        T0024: "Wenn das so ist",
        T0025: "Hier, dein Ticket. Viel Spaß",
        T0026: "HA",
        T0027: "Der Ticketkontrolleur hat mal wieder einen Rüpel ausgestrickst!!!",
        T0028: "Habe ICH das nicht TOLL gemacht?",
        T0029: ". . .",
        T0030: "Okay. Ich bin verpflichtet mir das anzuhören, also schieß los",

        //Normal betreten
        T0031: "Schönen guten Abend",
        T0032: "I-Ich bin der einzig WAHRE",
        T0033: "Der einzig Wahre TICKETKONTROLLEUR",
        //Ticket geben
        T0034: "Oh. . .",
        T0035: "Ich hätte gedacht dass wir eine längere Konversation führen würden",
        T0036: "Vielleicht in einem anderen Leben",
        T0037: "Wie auch immer. . .",
        T0038: "Dein Ticket ist gültig. Ich wünsche viel Spaß für die restlichen 10 Minuten",
        T0039: "Also echt. . .",
        T0040: "Komm das nächste mal etwas früher ja?"
      }
    };
    let umsehen: number = 0;
    let ticketbekommen: number = 0;
    let sneaken: number = 0;
    let überreden: number = 0;
    let lügen: number = 0;
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
      //entschuldigung = angenommen
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
            dataForSave.good +1;
            await satzbau(characters.Elo, text.Elo.E0007, true, true, 5, 50, sound.Elo, 2);
            ticketbekommen = 1;
            break;
          case setzen.ablehnen:
            await buttonpress(sound.buttonpress, .2);
            dataForSave.evil +1;
            await satzbau(characters.Elo, text.Elo.E0014, true, true, 5, 50, sound.Elo, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0007, true, true, 5, 50, sound.MainNarrator, 2);
            break;
        }
      }
      //entschuldigung = Anruf abgelehnt
      if (data.entschuldigung == 2) {
        await satzbau(characters.Elo, text.Elo.E0008, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0009, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0010, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.MainNarrator, text.School.S0003, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0004, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0005, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0006, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.Elo, text.Elo.E0011, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0012, true, true, 5, 50, sound.Elo, 2);
        await satzbau(characters.Elo, text.Elo.E0013, false, false, 5, 50, sound.Elo, 2);
      }
      //Entschuldigung abgelehnt
      if (data.entschuldigung == 3) {
        await satzbau(characters.MainNarrator, text.MainNarrator.T0008, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0009, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0010, false, false, 5, 50, sound.MainNarrator, 2);
        ticketbekommen == 2;
      }
    }
    //Ticket erhalten
    if(ticketbekommen == 1){
      let saalbetreten = {
        rein: "Saal betreten",
        reinschleich: "Reinschleichen",
      };
      await ƒS.Sound.play(sound.buttonhover, .2, false);
      let ticketelement = await ƒS.Menu.getInput(saalbetreten, "auswahl");
      switch (ticketelement) {
        case saalbetreten.rein:
          await satzbau(characters.MainNarrator, text.MainNarrator.T0017, true, true, 5, 50, sound.MainNarrator, 2);
          break;
        case saalbetreten.reinschleich:
          dataForSave.crazy +1;
          await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0013, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0014, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0015, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0016, false, false, 5, 50, sound.MainNarrator, 2);
          sneaken = 1;
          break;
    }
  }
  if(ticketbekommen == 2){
    let saalbetreten = {
      überzeugen: "Ticketkontrolleur überreden",
      schleichen: "Reinschleichen",
    };
    let ticketelement = await ƒS.Menu.getInput(saalbetreten, "auswahl");
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    switch (ticketelement) {
      case saalbetreten.überzeugen:
        dataForSave.crazy +1;
        überreden = 1;
        await satzbau(characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, sound.MainNarrator, 2);
      break;
      case saalbetreten.schleichen:
        dataForSave.crazy +1;
        dataForSave.evil +1;
        sneaken = 1;
        await satzbau(characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, sound.MainNarrator, 2);
        break;
  }
  }

  //Überzeugen
  if(überreden == 1){
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0000, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0001, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0002, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0003, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0004, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0005, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0006, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0007, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0008, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0009, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0010, true, true, 5, 50, sound.Ticketkontrolleur, 2);
    await satzbau(characters.MainNarrator, text.MainNarrator.T0020, false, false, 5, 50, sound.MainNarrator, 2);
      let ticketgespräch = {
        schwester: "Ticketkontrolleur überreden",
        drohen: "Reinschleichen",
        beleidigen: "",
        lügen: "",
      };
      let überredenelement = await ƒS.Menu.getInput(ticketgespräch, "auswahl");
      await ƒS.Sound.play(sound.buttonhover, .2, false);
      switch (überredenelement) {
        case ticketgespräch.schwester:
          break;
        case ticketgespräch.drohen:
          dataForSave.evil + 1;
          dataForSave.crazy + 1;
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0011, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0012, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0013, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0014, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0015, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0016, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0017, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0018, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          break;
        case ticketgespräch.beleidigen:
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0019, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0020, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0021, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0022, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          dataForSave.evil +1;
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0017, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0018, true, true, 5, 50, sound.Ticketkontrolleur, 2);
          break;
        case ticketgespräch.lügen:
          dataForSave.evil +1;
          dataForSave.calm +1;
          lügen = 1;
          break;
  }
}
if (lügen == 1){
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0023, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0024, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0025, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0026, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0027, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0028, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0029, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0030, true, true, 5, 50, sound.Ticketkontrolleur, 2);
}
  //Im Saal
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0031, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0032, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0033, false, false, 5, 50, sound.Ticketkontrolleur, 2);
  let ticketgeben = {
    geben: "Ticket vorzeigen",
  };
  let gebenelement = await ƒS.Menu.getInput(ticketgeben, "auswahl");
  await ƒS.Sound.play(sound.buttonhover, .2, false);
  switch (gebenelement) {
    case ticketgeben.geben:
      dataForSave.good +1;
      break;
  }
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0034, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0035, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0036, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0037, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0038, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0039, true, true, 5, 50, sound.Ticketkontrolleur, 2);
  await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0040, true, true, 5, 50, sound.Ticketkontrolleur, 2);

  //Reinschleichen
  if(sneaken == 1){
    
  }
}
}
