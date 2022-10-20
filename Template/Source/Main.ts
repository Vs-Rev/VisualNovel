namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  export let transition = {
    puzzle: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  }
  export let locations = {
    beachDay: {
      name: "Beach Day",
      background: "Tutorial_SS22/Images/Backgrounds/Bathroom_Foggy.png"
    }
  }

  export let sound = {
    drop: "Audio/drop.mp3"
  };

  export let characters = {
    narrator: {
      name: ""

    }
     protagonist: {
      name: ""
     },
     Lucor: {
      name: "Lucor",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        
      }
     }
  }
}