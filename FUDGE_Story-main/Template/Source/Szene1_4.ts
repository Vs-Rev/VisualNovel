namespace Template {
  export async function Szene1_4(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene3 starting");



    //Gesprochener Text
    let text = {
      MainNarrator: {
        T0000: "Endlich angekommen.",
        T0001: "Die Show ist noch im Gange. Wir können schon mal reingehen.",
        T0002: "Was meinst du?",
      
        // Hineingehen
        T0003: "Okay, dann lass uns reingehen.",
        T0004: "Mal sehen, ob wir noch einen guten Platz finden.",
      
        T0005: "Ticket erhalten.",
        // Bei abgelehnter Entschuldigung (entschuldigung: 0):
        T0006: "Dafür brauchen wir ein Ticket.",
        T0007: "Und da liegt das Problem.",
      
        T0008: "Es sieht so aus, als hätten wir hier wenig Auswahl.",
        T0009: "Vielleicht könnten wir uns...",
        T0010: "einschleichen?",
      
        T0011: "Warum einschleichen, wenn wir doch bereits Platz nehmen könnten?",
        T0012: "Ah, du suchst den Nervenkitzel.",
        T0013: "In Ordnung...",
        T0014: "Was ist los?",
        T0015: "Dich aufhalten? Warum sollte ich?",
        T0016: "Das macht die Sache doch erst richtig spannend.",
      
        T0017: "Gut, dann lass uns schnell sein, bevor die Vorstellung beginnt.",
      
        T0018: "Mutig. Aber wie heißt es so schön: Wer nicht wagt, der nicht gewinnt.",
        T0019: "Stimmt's?",
      
        T0020: "Jetzt liegt es an dir.",
      
        T0021: "Meine Schwester...",
        T0022: "Ich habe total vergessen, dass sie heute auftritt.",
        T0023: "Deshalb habe ich kein Ticket besorgt.",
        T0024: "Sie ist noch so jung...",
        T0025: "Ich muss sie nach der Vorstellung nach Hause bringen.",
        T0026: "Ich möchte die Vorstellung mit ihr zusammen sehen.",
        T0027: "Sonst ist sie bestimmt traurig...",
        T0028: "Du wurdest bemerkt.",
        T0029: "Was nun?",
        T0030: "...",
        T0031: "Glück gehabt.",
        T0032: "Du zeigst dein Ticket.",
        T0033: "Mit dem Kopf durch die Wand...",
        T0034: "Mal sehen, ob das gutgeht.",
      },
      School: {
        S0000: "ERINNERUNG",
        S0001: "DIE LETZTE VORSTELLUNG BEGINNT BALD",
        S0002: "BITTE NEHMEN SIE IHRE PLÄTZE EIN",
      
        S0003: "ACHTUNG",
        S0004: "LETZTER AUFRUF",
        S0005: "ALLE ZUSCHAUER, BITTE NEHMEN SIE JETZT IHRE PLÄTZE EIN",
        S0006: "DIE LETZTE VORSTELLUNG BEGINNT IN KÜRZE",
      },
      Elo: {
        // Bei angenommener Entschuldigung (entschuldigung: 1):
        E0000: "Hey, du bist ja mal pünktlich!",
        E0001: "Du wirst ja immer besser.",
        E0002: "Hast du denn schon einen Platz reserviert?",
        E0003: "Die Halle ist voll, alle Plätze sind belegt.",
        E0004: "Ich habe extra einen Platz neben mir freigehalten.",
        E0005: "Du bist ja kein Fremder.",
        E0006: "Wenn du möchtest, kannst du dich neben mich setzen, bis die Show vorbei ist.",
        // Platz nehmen
        E0007: "Super, ich hol uns was zu trinken. Geh schon mal vor. Hier ist deine Karte.",
        // Anruf ignoriert (entschuldigung: 2):
        E0008: "Hey, ich habe versucht, dich zu erreichen. Warst wohl beschäftigt...",
        E0009: "Hör zu...",
        E0010: "Eigentlich wollte ich mich entschuldigen...",
      
        E0011: "Ach, egal.",
        E0012: "Das kann warten. Lass uns loslegen.",
        E0013: "Ich möchte die letzte Vorführung nicht verpassen. Ich liebe Geschichten.",
      
        // Platz ablehnen

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
        T1019: ". . .",
        T1020: "Moment. . .",
        T1021: "Ich kann doch nicht einfach gegen ein Kind kämpfen",
        T1022: "Oder. . .",
        T1023: "Nein! Du hast Glück gehabt!",
        T1024: "Ich lass dich noch davon kommen. . .",
        T1025: "Jetzt verschwinde!",
        T1026: ". . .",
        T1027: "Andererseits. . .",
        T1028: "Es gäbe drinnen noch ein Platz. . .",
        T1029: "Noch E-EIN TICKET das nicht verkauft wurde. . .",
        T1030: "Ich könnte es dir geben. . .",
        T1031: "Wenn du mir einen Gefallen tust. . .",

        //Gefallen
        T2001: "Du willst garnicht hören worum es sich handelt?",
        T2002: "Gut, jedem das seine schätze ich. . .",
        T2003: "Merk dir das. Du schuldest mir einen Gefallen",
        T2004: "Vielleicht nicht jetzt",
        T2005: "Vielleicht nicht heute. . .",
        T2006: "Vielleicht nicht nächsten Monat. . .",
        T2007: "ABER DU SCHULDEST MIR EINEN GEFALLEN",
        T2008: "Ich drücke für dich ein Auge zu. . .",
        T2009: "Dieses EINE Mal",
        T2010: "Jetzt geh schon, bevor ich es mir anders überlege!",

        //reinlaufen
        T3001: "Hey ähm. . . was machst du da?",
        T3002: "HEY!!!",
        T3003: "Du kannst doch nicht einfach so reinlaufen ohne ein Ticket!",
        T3004: "Oder kannst du das?",
        T3005: "Vielleicht kann er das. . .",
        T3006: "Das wird ein Nachspiel haben!",
        T3007: "Das wirst du schon sehen!!!",
        T3008: "Du wirst schon sehen was es heißt, mich DEN TICKETKONTROLLEUR zu überlisten!",
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
        T0040: "Komm das nächste mal etwas früher ja?",

        T0041: "Ja? Was ist mit deiner Schwester?",
        T0042: "Nun gut, ich lass dir das außnahmsweise mal durchgehen. . .",

        //Schleichen
        T0043: "HEY!",
        T00442: "Wer schleicht hier rum! Zeig dich!",
        T0044: "Dachtest du wirklich du könntest einfach so in das Theater schleichen?",
        T0045: "Noch schlimmer!",
        T0046: "Du dachtest du könntest einfach an MIR vorbeischleichen?!",
        T0047: "An MIR dem GROßEN TICKETVERKÄUFER!",
        T0048: "Wie töricht!",
        T0049: "Erkläre dich jetzt und sofort!",

        T0050: "Moment du bist doch ein Schüler oder?",
        T0051: "Naja ich bin mir sicher du hast deine Gründe",
        T0052: "Ich mache für dich eine Ausnahme",
        T0053: "Aber nur dieses EINE MAL",
        T0054: "Viel Spaß, geh durch und mach keinen Ärger",
      }
    };
    let umsehen: number = 0;
    let ticketbekommen: number = 0;
    let sneaken: number = 0;
    let überreden: number = 0;
    let lügen: number = 0;
    //testing




    //Theater Front
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
    //Umschauen ja oder nein
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
        ticketbekommen = 2;
        break;
      case reingehen.umsehen:
        await buttonpress(sound.buttonpress, .2);
        await satzbau(characters.MainNarrator, text.School.S0000, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0001, true, true, 5, 50, sound.School, 2);
        await satzbau(characters.MainNarrator, text.School.S0002, true, true, 5, 50, sound.School, 2);
        umsehen = 1;
        if (umsehen == 1) {
          //entschuldigung = angenommen
          if (dataForSave.entschuldigung == 1) {
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
                dataForSave.good + 1;
                await satzbau(characters.Elo, text.Elo.E0007, true, true, 5, 50, sound.Elo, 2);
                ƒS.Inventory.add(items.Ticket);
                ticketbekommen = 1;
                break;
              case setzen.ablehnen:
                await buttonpress(sound.buttonpress, .2);
                dataForSave.evil + 1;
                await satzbau(characters.Elo, text.Elo.E0014, true, true, 5, 50, sound.Elo, 2);
                await satzbau(characters.MainNarrator, text.MainNarrator.T0007, true, true, 5, 50, sound.MainNarrator, 2);
                ticketbekommen = 2;
                break;
            }
          }
          //entschuldigung = Anruf abgelehnt
          if (dataForSave.entschuldigung == 2) {
            ticketbekommen = 2;
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
          if (dataForSave.entschuldigung == 3) {
            await satzbau(characters.MainNarrator, text.MainNarrator.T0008, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0009, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0010, false, false, 5, 50, sound.MainNarrator, 2);
            ticketbekommen == 2;
          }
        }
    

        break;
    }


    










    //Ticket erhalten
    if (ticketbekommen == 1) {
      console.log("Hollalaaaa");
      let saalbetreten = {
        rein: "Saal betreten",
        //reinschleich: "Reinschleichen",
      };
      await ƒS.Sound.play(sound.buttonhover, .2, false);
      let ticketelement = await ƒS.Menu.getInput(saalbetreten, "auswahl");
      switch (ticketelement) {
        case saalbetreten.rein:
          dataForSave.good + 1;
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0017, true, true, 5, 50, sound.MainNarrator, 2);
          break;
        /*case saalbetreten.reinschleich:
          dataForSave.evil + 1;
          await satzbau(characters.MainNarrator, text.MainNarrator.T0011, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0012, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0013, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0014, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0015, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0016, false, false, 5, 50, sound.MainNarrator, 2);
          sneaken = 1;
          console.log(sneaken);
          break;*/
      }
    }
    if (ticketbekommen == 2) {
      await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0031, true, true, 5, 50, sound.Ticketkontrolleur, 2);
      await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0032, true, true, 5, 50, sound.Ticketkontrolleur, 2);
      await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0033, true, true, 5, 50, sound.Ticketkontrolleur, 2);
      let saalbetreten = {
        überzeugen: "Ticketkontrolleur überreden",
        //schleichen: "Reinschleichen",
      };
      let ticketelement = await ƒS.Menu.getInput(saalbetreten, "auswahl");
      await ƒS.Sound.play(sound.buttonhover, .2, false);
      switch (ticketelement) {
        case saalbetreten.überzeugen:
          dataForSave.good + 1;
          überreden = 1;
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, sound.MainNarrator, 2);
          break;
        /*case saalbetreten.schleichen:
          dataForSave.evil + 1;
          sneaken = 1;
          await satzbau(characters.MainNarrator, text.MainNarrator.T0018, true, true, 5, 50, sound.MainNarrator, 2);
          await satzbau(characters.MainNarrator, text.MainNarrator.T0019, true, true, 5, 50, sound.MainNarrator, 2);
          break;
      }*/
    }

    //Überzeugen
    if (überreden == 1) {
      //Abwägen von Good und Evil
      if (dataForSave.good > dataForSave.evil) {
        //ja kein Problem, passiert dies das. Von mir aus kannst du rein. Aber nur eine Außnahme
      }
      if (dataForSave.evil >= dataForSave.good) {
        //Sag mal wie kannst du nur bla bla bla - Überreden
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
          schwester: "Meine Schwester",
          drohen: "Wie kannst du es wagen?",
        };
        let überredenelement = await ƒS.Menu.getInput(ticketgespräch, "auswahl");
        await ƒS.Sound.play(sound.buttonhover, .2, false);
        switch (überredenelement) {
          case ticketgespräch.schwester:
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0021, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0041, false, false, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0022, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0023, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0024, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0025, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0026, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.MainNarrator, text.MainNarrator.T0027, true, true, 5, 50, sound.MainNarrator, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0052, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0053, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0054, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            break;
          case ticketgespräch.drohen:
            dataForSave.evil + 1;
            await buttonpress(sound.buttonpress, .2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0011, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0012, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0013, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0014, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0015, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0016, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0017, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0018, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            //await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0019, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1020, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1021, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1022, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1023, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1024, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1025, true, true, 5, 50, sound.Ticketkontrolleur, 2);

            //andererseits bla bla
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1026, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1027, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1028, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1029, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1030, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T1031, true, true, 5, 50, sound.Ticketkontrolleur, 2);
            sneaken = 1;
            let einengefallen = {
              gefallenzustimmen: "Gefallen erwidern",
              reinlaufen: "Einfach reinlaufen",
            };
            let eingefallenelement = await ƒS.Menu.getInput(einengefallen, "auswahl");
            await ƒS.Sound.play(sound.buttonhover, .2, false);
            switch (eingefallenelement) {
              case einengefallen.gefallenzustimmen:
                await buttonpress(sound.buttonpress, .2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2001, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2002, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2003, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2004, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2005, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2006, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2007, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2008, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2009, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T2010, true, true, 5, 50, sound.Ticketkontrolleur, 2);
                dataForSave.gefallen = 1;
            break;
            case einengefallen.reinlaufen:
              dataForSave.evil + 1;
              await buttonpress(sound.buttonpress, .2);
              await satzbau(characters.MainNarrator, text.MainNarrator.T0033, true, true, 5, 50, sound.MainNarrator, 2);
              await satzbau(characters.MainNarrator, text.MainNarrator.T0034, true, true, 5, 50, sound.MainNarrator, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3001, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3002, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3003, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3004, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3005, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3006, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3007, true, true, 5, 50, sound.Ticketkontrolleur, 2);
              await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T3008, true, true, 5, 50, sound.Ticketkontrolleur, 2);


              break;
        }
      }
    }
    
    /*if (sneaken == 1) {
      dataForSave.evil + 1;
      if (ticketbekommen == 2) {
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T00442, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0029, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0044, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0045, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0046, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0047, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0048, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0049, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0030, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0050, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0051, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0052, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0053, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0054, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0031, true, true, 5, 50, sound.MainNarrator, 2);
      }
      //Du schleichst hier rum! Bla Bla bla bla bla hast du ein ticket?

      if (ticketbekommen == 1) {
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0028, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T00442, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0029, true, true, 5, 50, sound.MainNarrator, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0044, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0045, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0046, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0047, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0048, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0049, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.MainNarrator, text.MainNarrator.T0032, true, true, 5, 50, sound.MainNarrator, 2);

        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0034, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0035, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0036, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0037, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0038, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0039, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0040, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0041, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0042, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        //Ja, das ist trotzdem nicht gut rumzuschleichen aber du kannst gerne rein
      }
      //bla bla bla warm schleichst du rum das macht man nicht! Aber du siehst aus wie jemand der das nicht so oft tut. Komm, heute mache ich eine ausnahme
    }*/



    /*if (ticketbekommen == 1) {
      if (sneaken == 1) {
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0050, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0051, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0052, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0053, true, true, 5, 50, sound.Ticketkontrolleur, 2);
        await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0054, true, true, 5, 50, sound.Ticketkontrolleur, 2);
      }
      //Viel Spaß bla bla
    }*/

    //ÜBERGANG INS THEATER



    //Im Saal
    /*    await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0031, true, true, 5, 50, sound.Ticketkontrolleur, 2);
       await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0032, true, true, 5, 50, sound.Ticketkontrolleur, 2);
       await satzbau(characters.Ticketkontrolleur, text.Ticketkontrolleur.T0033, false, false, 5, 50, sound.Ticketkontrolleur, 2);
   
       
       let ticketgeben = {
         geben: "Ticket vorzeigen",
       };
       let gebenelement = await ƒS.Menu.getInput(ticketgeben, "auswahl");
       await ƒS.Sound.play(sound.buttonhover, .2, false);
       switch (gebenelement) {
         case ticketgeben.geben:
           dataForSave.good + 1;
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
       if (sneaken == 1) {
   
       } */
    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.blackbackground);
    ƒS.update(3);
    await ƒS.Sound.fade(sound.nightambience, 0, 4, false);
    ƒS.update(1);
  }
    }}}
