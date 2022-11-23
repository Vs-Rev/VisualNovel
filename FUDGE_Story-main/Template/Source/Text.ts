// async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number, voicetype: string, skiplänge: number) {
//   let speechlength = text.length / 4;
//   ƒS.Speech.setTickerDelays(textgeschwindigkeit);
//   console.log(speechlength);
//   let doonce: boolean = true;
//   let geskipped = false;
//   //SpeechAudiofunktion
//   let t: number = 0;
//   let b: number = 0;
//   //-- Check input key. Wenn pressed wird audioausgabe nicht berücksichtigt bzw abgebrochen
//   for (t = 0; t < speechlength; t++) { //Text wird in der Schleife nur einmal ausgegeben
//     if (doonce == true) {
//       ƒS.Speech.tell(Sprecher, text, waitfornext);
//       doonce = false;
//       // document.addEventListener("keydown", hndKeyPress);
//       // async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
//       //   switch (_event.code) {
//       //     case ƒ.KEYBOARD_CODE.SPACE:
//       //       t = speechlength;
//       //       textgeschwindigkeit = 0;
//       //       geskipped = true;
//       //       //pausenlänge = 1;
//       //       await ƒS.update(skiplänge);
//       //       console.log(pausenlänge);
//       //       console.log("update abgewartet");
//       //       removeEventListener("keydown", hndKeyPress);
//       //       break;
//       //     case ƒ.KEYBOARD_CODE.A:
//       //       t = speechlength;
//       //       removeEventListener("keydown", hndKeyPress);
//       //       break;
//       //   }
//       // }
//       //document.removeEventListener("keydown", hndKeyPress);
//     }
//     if (skipbar == true) {
//       //Wenn SPACE/Mausbutton gedrückt wird, skippt es die rede
//       //Mausabfrage
//       /*document.addEventListener("mousedown", hndMousePress);
//       async function hndMousePress(_event: MouseEvent): Promise<void> {
//         console.log(MouseEvent);
//     }*/
//     }
//     ƒS.Sound.play(voicetype, .2, false); //Der Sound der in Main.ts definiert wurde
//     await ƒS.update(.2);
//   }
//   for (b = 0; b < pausenlänge; b++) {
//     if(pausenlänge == 3){
//     console.log(b);
//     console.log(pausenlänge);
//     await signaldelay();
//     console.log("es geht in if");
//     document.addEventListener("keydown", ConfirmKey);
//     async function ConfirmKey(_event: KeyboardEvent): Promise<void> {
//     switch (_event.code) {
//       case ƒ.KEYBOARD_CODE.SPACE:
//         console.log("Space gedrückt");
//         b = 10;
//         console.log(b);
//         break;
//     }
//   }
// }
//   else{
//     pausenlänge = 0;
//     await signaldelay();
//     console.log("es ist nicht mehr in if");
//   }
  //await ƒS.update(pausenlänge);
  //await signaldelay();
  //await ƒS.Progress.defineSignal;
  //let signal: ƒS.Signal = ƒS.Progress.defineSignal([ƒS.EVENT.KEYDOWN, () => ƒS.Progress,delay()]);
  //await signal();

//   function timer (){
//   let timer: ƒ.Timer;
//   console.log(timer);
// }
//await signal();
// await signaldelay();
// }

















































// function satzbau(Sprecher: string, text: string, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number){}

// //Skippen
// async function skippen(r: string, ausführzeit: number): Promise <boolean>{
//   let sprechertext = r;
//   let skip: boolean = false;
//   await ƒS.update(2);
//   let i: number = 0;
//   console.log(ausführzeit);
//   console.log(i);
//   for (i = 0; i < ausführzeit; i++) {
//     document.addEventListener("keydown", hndKeyPressing);
//     async function hndKeyPressing(_event: KeyboardEvent): Promise<void> {
//       switch (_event.code) {
//         case ƒ.KEYBOARD_CODE.SPACE:
//           console.log("Space is pressed");
//           i = ausführzeit;
//           console.log("gedrückt");
//           console.log(i);
//       }
//       await ƒS.update(ausführzeit);
//     }
//     if (i = ausführzeit){
//       skip = true;
//       break;
//     }
//   }
//   console.log("skip");
//   stimme(sprechertext, skip);
//   return skip;
// }
// async function stimme(r: string, b: boolean): Promise<number>{
// let skip = b;
// let speechlength = r.length/4;
// console.log(speechlength);
// let i: number = 0;
// for (i=0; i<speechlength; i++){
//   await ƒS.Sound.play(sound.speech, .2, false); //Der Sound der in Main.ts definiert wurde
//   await ƒS.update(.2);
//   console.log(i);
// }
// return speechlength;
// };

/*async function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number){
    let speechlength = text.length/4;
    console.log(speechlength);
    let t: number = 0;
    for (t=0; t<speechlength; t++){
      await ƒS.Sound.play(sound.speech, .2, false); //Der Sound der in Main.ts definiert wurde
      await ƒS.update(.2);
      console.log(t);
    ƒS.Speech.tell(Sprecher, text, waitfornext);
  };
}*/