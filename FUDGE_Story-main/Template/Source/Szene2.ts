namespace Template {
  export async function Szene2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene2 starting");



    //Gesprochener Text
    let text = {
      MainNarrator: {
        M0000: "Wach auf",
        //Aufwachen ja
        M0001: ", hast du nicht etwas wichtiges vergessen?",
        M0002: "Etwas SEHR wichtiges?",

        M1003: "Naja, deine Eltern sind für 2 Wochen im Urlaub",
        M1004: "Du musst also alleine auf das Haus und auf deine Schwester aufpassen",
        M1005: "Sie ist heute länger in der Schule, da heute Geschichtserzähltag ist. Du solltest sie abholen, es ist schon dunkel geworden!",
        M1006: "Das ist etwas. . .",
        M1007: "Das man nicht vergessen sollte",

        M1008: "Doch",
        M1009: "Doch!",
        M1010: "DOCH",


        M0003: "",
        M0004: "schaffte es letztendlich aufzustehen",
        //Aufwachen nein
        M0005: " blieb liegen und verschlief alles spannende",
        M0006: "Ende",
        M0007: "Wie fandest du die Geschichte?",
        M2008: "Blöd?",
        M2009: "Kann ich mir vorstellen, ist ja noch nicht viel passiert",
        M2010: "Also steh jetzt auf und verschwende keine Zeit!",

        M0008: ", kein Grund gleich so wütend zu werden",
        M0009: "Heb dir deine Energie lieber für später auf",

        M0010: ", gute Einstellung. Es ist auch besser sich nicht zu wehren.",
        M0011: "Doch ich glaube. . .",
        M0012: "dir ist nicht klar, was noch alles vor dir liegt",

        M0013: "Schweigen ist auch eine Antwort. . .",
        M0014: "wenn auch keine Gute",
        M0015: "Wie dem auch sei. . .",

        M0020: "Zimmer verlassen",
        M0021: "Gute Idee! Du solltest dich ordentlich kleiden, bevor du aus dem Haus gehst",
        M0022: "Kleidung wurde hinzugefügt",
        M0023: "Du tust. . .",
        M0024: "also nichts. . .",
        M0025: "Wie einfallsreich. . .",

        M0026: "Warte mal!",
        M0027: "Mir gefällt deine - mit dem Kopf durch die Wand - Einstellung, aber du solltest nicht in Schlafsachen zur Schule deiner Schwester gehen",
        M0028: "Warte, lass mich dir helfen. . .",
        M0029: "Gerngeschehen!",

        M0030: "Du solltest dich wirklich langsam auf den Weg machen",
        M0031: "Sonst wartet deine Schwester ganz alleine auf dich",
        M0032: "Oder Schlimmeres. . .",

        M0033: "Mit dem Fahrrad?",
        M0034: "Nicht gerade das spannendste Fortbewegungsmittel aber. . .",
        M0035: "So soll es sein",

        M0036: "Zu Fuß?",
        M0037: "Sportlich sportlich. . .",
        M0038: "Nicht gerade vorteilhaft wenn du sowieso spät dran bist aber. . .",
        //M0035

        M0039: "Mit dem Bus?",
        M0040: "Bescheiden. Aber es fährt um diese Uhrzeit keiner mehr,",
        M0041: "Was solls. Du hast Glück dass ich heute gut gelaunt bin",
        
        M0042: "Mit der Bahn?",
        M0043: "Scheint wohl die schnellste Alternative zu sein",
        M0044: "Dann nichts wie weg mit dir!",


      },
      whiteknight: {
      },
    };

    //Wartet delay ab wenn aufgerufen
    let signaldelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
    //Buttonfunktion
    async function buttonpress(buttonart: string, lautstärke: number) {
      ƒS.Sound.play(buttonart, lautstärke, false);
        await timer(0, 2);
    }
    //Satzbaufunktion
    async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number, voicetype: string, skiplänge: number) {
      let speechlength = text.length / 4;
      ƒS.Speech.setTickerDelays(textgeschwindigkeit);
      console.log(speechlength);
      let doonce: boolean = true;
      let istdurch: number = 0;
      let geskipped: number = 0;
      console.log(istdurch.valueOf())
      //SpeechAudiofunktion
      let t: number = 0;
      //-- Check input key. Wenn pressed wird audioausgabe nicht berücksichtigt bzw abgebrochen
      for (t = 0; t < speechlength; t++) { //Text wird in der Schleife nur einmal ausgegeben
        if (doonce == true) {
          ƒS.Speech.tell(Sprecher, text, waitfornext);
          doonce = false;
        }
        document.addEventListener("mousedown", hndMousePress);
        async function hndMousePress(_event: MouseEvent): Promise<void> {
          console.log(MouseEvent);
          t = text.length;
          geskipped = 1;
          document.removeEventListener("mousedown", hndMousePress);
        }
        document.addEventListener("keydown", hndKeyPress);
        async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
          switch (_event.code) {
            case ƒ.KEYBOARD_CODE.SPACE:
              console.log(KeyboardEvent);
              t = text.length;
              geskipped = 1;
              break;
        }
        document.removeEventListener("keydown", hndKeyPress);
      }
        if(geskipped == 1){
          console.log("Text geskipped");
        }
        else {
        ƒS.Sound.play(voicetype, .05, false); //Der Sound der in Main.ts definiert wurde
        await ƒS.update(.2);
      }
      }

      for (t = 0; t < pausenlänge; t++) {
        document.addEventListener("mousedown", hndMousePress);
        async function hndMousePress(_event: MouseEvent): Promise<void> {
          console.log(MouseEvent);
          t = pausenlänge;
          document.removeEventListener("mousedown", hndMousePress);
        }
        document.addEventListener("keydown", hndKeyPress);
        async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
          switch (_event.code) {
            case ƒ.KEYBOARD_CODE.SPACE:
              console.log(KeyboardEvent);
              t = text.length;
              geskipped = 1;
              break;
        }
        document.removeEventListener("keydown", hndKeyPress);
      }
          console.log(t);
          await signaldelay();
      }
    }

    //Allgemeiner Timer Funktion
    async function timer(skipable: number, länge: number){
      let t: number;
      for (t = 0; t < länge; t++) {
        if(skipable == 1){
          document.addEventListener("mousedown", hndMousePress);
          async function hndMousePress(_event: MouseEvent): Promise<void> {
            console.log(MouseEvent);
            t = länge;
            document.removeEventListener("mousedown", hndMousePress);
          }
        }
        else {
          console.log(t);
          await signaldelay();
        }
      }
    }
    data.protagonist.name = "Vasi";
    characters.whiteknight.name = data.protagonist.name;
    await ƒS.Sound.fade(sound.clockticking, 0.05, 2, true);
    await ƒS.update(2);
    await timer(0, 5);
    await ƒS.Sound.fade(sound.clockticking, 0, 2, false);
    await ƒS.update(1);
    ƒS.Sound.play(sound.alarmclock, 0.07, false);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Speechbox, characters.Speechbox.pose.grayedout, ƒS.positionPercent(50, 100));
    await ƒS.update(2);
    //ƒS.Sound.play(sound.impact, 1, false);
    await satzbau(characters.MainNarrator, text.MainNarrator.M0000, /*waitfornext*/true,/*skipbar*/ true,/*pausenlänge*/ 5,/*geschwindigkeit*/ 50, /*Stimme*/sound.MainNarrator, /*skiplänge*/1);
    await ƒS.update(3);
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let aufwachen = {
      aufstehen: "Aufstehen",
      liegenbleiben: "Liegen bleiben",
    };
    let verhalten: number = 0;
    let aufwachentscheidung = await ƒS.Menu.getInput(aufwachen, "auswahl");
    switch (aufwachentscheidung) {
      case aufwachen.aufstehen:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.Speech.hide();
        await ƒS.Sound.fade(sound.Bedroom, 0.05, 4, true);
        await ƒS.update(1);
        await ƒS.Location.show(locations.homeroom);
        await ƒS.update(5);
        await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, sound.MainNarrator, 1);
        break;

      case aufwachen.liegenbleiben:
        await buttonpress(sound.buttonpress, .2);
        await ƒS.Speech.hide();
        await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0005, true, true, 3, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,text.MainNarrator.M0006, true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,text.MainNarrator.M0007, true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,text.MainNarrator.M2008, true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,text.MainNarrator.M2009, true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator,text.MainNarrator.M2010, false, false, 5, 50, sound.MainNarrator, 1);
        await ƒS.Sound.fade(sound.Bedroom, 0.05, 4, true);
        await ƒS.update(1);
        await ƒS.Location.show(locations.homeroom);
        await ƒS.update(5);
        verhalten = 1;
        break;
    }
    if(verhalten == 1){
      let Benehmen = {
        ruhig: "Ruhe bewahren",
        wütend: "Wütend reagieren",
        nichts: "Nichts sagen",
      };
      let benehmensentscheidung = await ƒS.Menu.getInput(Benehmen, "auswahl");
      switch (benehmensentscheidung) {
        case Benehmen.ruhig:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.M0010, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0011, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0012, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, sound.MainNarrator, 1);
          break;
        case Benehmen.wütend:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, data.protagonist.name + text.MainNarrator.M0008, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0009, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, sound.MainNarrator, 1);
          break;
        case Benehmen.nichts:
          await buttonpress(sound.buttonpress, .2);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0013, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0014, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0015, true, true, 5, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator,data.protagonist.name + text.MainNarrator.M0001, true, true, 3, 50, sound.MainNarrator, 1);
          await satzbau(characters.MainNarrator, text.MainNarrator.M0002, true, true, 3, 50, sound.MainNarrator, 1);
          break;
      }
    }
    await ƒS.Sound.play(sound.buttonhover, .2, false);
    let vergessen = {
      ja: "Was denn?",
      nein: "Nein",
    };
    let nein = {
      nein: "Nein",
    };
    let wasdenn = {
      was: "Was denn?",
    };
    let vergessenentscheidung = await ƒS.Menu.getInput(vergessen, "auswahl");
    switch (vergessenentscheidung) {
      case vergessen.ja:
        await buttonpress(sound.buttonpress, .2);
      await satzbau(characters.MainNarrator, text.MainNarrator.M1003 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M1004 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M1005 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M1006 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M1007 , true, true, 5, 50, sound.MainNarrator, 1);
      break;
      case vergessen.nein:
        await satzbau(characters.MainNarrator, text.MainNarrator.M1008 , false, false, 5, 50, sound.MainNarrator, 1);
        await ƒS.Menu.getInput(nein, "auswahl");
        await satzbau(characters.MainNarrator, text.MainNarrator.M1009 , false, false, 5, 50, sound.MainNarrator, 1);
        await ƒS.Menu.getInput(nein, "auswahl");
        await satzbau(characters.MainNarrator, text.MainNarrator.M1010 , false, false, 5, 50, sound.MainNarrator, 1);
        await ƒS.Menu.getInput(wasdenn, "auswahl");
        await satzbau(characters.MainNarrator, text.MainNarrator.M1003 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M1004 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M1005 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M1006 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M1007 , true, true, 5, 50, sound.MainNarrator, 1);
        break;
    //Szenenablauf
    }
    let gekleidet: number = 0;
    ƒS.Speech.clear();
    await ƒS.update(2);
    let Aktion01 = ["Zimmer verlassen", "Kleidung anziehen", "Nichts tun"];
    function mam(b: number): number {
      x = b;
      return b;
    }
    let x: number = 0;
    while (mam(x) < 3) {
    let Aktion01Progress = await ƒS.Menu.getInput(Aktion01, "auswahl");
    switch (Aktion01Progress) {
      case Aktion01[0]:
        await satzbau(characters.MainNarrator, text.MainNarrator.M0020 , true, true, 5, 50, sound.MainNarrator, 1);
        if (gekleidet != 3){
          gekleidet = 1;
        }
        Aktion01.splice(0, 1, "");
        mam(5);
        break;
      case Aktion01[1]:
        await satzbau(characters.MainNarrator, text.MainNarrator.M0021 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M0022 , true, true, 5, 50, sound.MainNarrator, 1);
        gekleidet = 3;
        Aktion01.splice(1, 1, "");
        break;
      case Aktion01[2]:
        await satzbau(characters.MainNarrator, text.MainNarrator.M0023 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M0024 , true, true, 5, 50, sound.MainNarrator, 1);
        await satzbau(characters.MainNarrator, text.MainNarrator.M0025 , true, true, 5, 50, sound.MainNarrator, 1);
        Aktion01.splice(2, 1, "");
        break;
    }
  }
  await ƒS.Location.show(locations.blackbackground);
  await ƒS.update(5);
  if (gekleidet == 1){
    await satzbau(characters.MainNarrator, text.MainNarrator.M0026 , true, true, 5, 50, sound.MainNarrator, 1);
    await satzbau(characters.MainNarrator, text.MainNarrator.M0027 , true, true, 5, 50, sound.MainNarrator, 1);
    await satzbau(characters.MainNarrator, text.MainNarrator.M0028 , true, true, 5, 50, sound.MainNarrator, 1);
    await satzbau(characters.MainNarrator, text.MainNarrator.M0022 , true, true, 5, 50, sound.MainNarrator, 1);
  }

  await satzbau(characters.MainNarrator, text.MainNarrator.M0030 , true, true, 5, 50, sound.MainNarrator, 1);
  await satzbau(characters.MainNarrator, text.MainNarrator.M0031 , true, true, 5, 50, sound.MainNarrator, 1);
  await satzbau(characters.MainNarrator, text.MainNarrator.M0032 , true, true, 5, 50, sound.MainNarrator, 1);
let transportmethode: number = 0;
//Fahrrad = 1,
//Bus = 2,
//Bahn = 3,
//Fuß = 4,
  let transport = {
    Fahrrad: "Fahrrad nehmen",
    Bus: "Bus fahren",
    Bahn: "Bahn fahren",
    Fuß: "Zu Fuß laufen",
  };
  let transportelement = await ƒS.Menu.getInput(transport, "auswahl");
  switch (transportelement) {
    case transport.Fahrrad:
      await satzbau(characters.MainNarrator, text.MainNarrator.M0033 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0034 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0035 , true, true, 5, 50, sound.MainNarrator, 1);
      transportmethode = 1;
      break;
    case transport.Bus:
      await satzbau(characters.MainNarrator, text.MainNarrator.M0039 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0040 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0041 , true, true, 5, 50, sound.MainNarrator, 1);
      transportmethode = 2;
      break;
    case transport.Bahn:
      await satzbau(characters.MainNarrator, text.MainNarrator.M0042 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0044 , true, true, 5, 50, sound.MainNarrator, 1);
      transportmethode = 3;
      break;
    case transport.Fuß:
      await satzbau(characters.MainNarrator, text.MainNarrator.M0036 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0037 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0038 , true, true, 5, 50, sound.MainNarrator, 1);
      await satzbau(characters.MainNarrator, text.MainNarrator.M0035 , true, true, 5, 50, sound.MainNarrator, 1);
      transportmethode = 4;
      break;
  }
  ƒS.Speech.clear();
  await ƒS.update(2);
  await ƒS.Sound.fade(sound.Bedroom, 0, 4, true);
  await ƒS.update(1);

  if(transportmethode == 1 ){
    await ƒS.Sound.fade(sound.bicycle, 0.05, 3, false);
    await ƒS.Sound.fade(sound.bicycle, 0.05, 3, false);
  }
  if(transportmethode == 2 ){
    await ƒS.Sound.fade(sound.bus, 0.05, 3, false);
    await ƒS.Sound.fade(sound.bus, 0.05, 3, false);
    
  }
  if(transportmethode == 3 ){
    await ƒS.Sound.fade(sound.train, 0.05, 3, false);
    await ƒS.Sound.fade(sound.train, 0.05, 3, false);
    
  }
  if(transportmethode == 4 ){
    await ƒS.Sound.fade(sound.walking, 0.05, 3, false);
    await ƒS.Sound.fade(sound.walking, 0.05, 3, false);
    
  }
  }
}
