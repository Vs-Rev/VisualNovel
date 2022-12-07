declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        transition2: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        examplemusic: string;
        titletheme: string;
        introductiontheme: string;
        MysteryManTheme: string;
        Bedroom: string;
        examplesound: string;
        phonecallend: string;
        phonering: string;
        dooropen: string;
        glitch: string;
        backgroundBuero: string;
        makelight: string;
        buttonpress: string;
        buttonhover: string;
        clockticking: string;
        alarmclock: string;
        impact: string;
        mouseclick: string;
        train: string;
        walking: string;
        bus: string;
        bicycle: string;
        nightambience: string;
        darkwind: string;
        forestnight: string;
        peopletalking: string;
        MainNarrator: string;
        Elo: string;
        Karten: string;
        School: string;
    };
    let locations: {
        waldweg: {
            name: string;
            background: string;
        };
        examplelocation: {
            name: string;
            background: string;
        };
        theaterfront: {
            name: string;
            background: string;
        };
        background1: {
            name: string;
            background: string;
        };
        startscreenbackground: {
            name: string;
            background: string;
        };
        blackbackground: {
            name: string;
            background: string;
        };
        homeroom: {
            name: string;
            background: string;
        };
        housefloor: {
            name: string;
            background: string;
        };
        walking01: {
            name: string;
            background: string;
        };
        walking02: {
            name: string;
            background: string;
        };
        walking03: {
            name: string;
            background: string;
        };
        walking04: {
            name: string;
            background: string;
        };
        walking05: {
            name: string;
            background: string;
        };
        walking06: {
            name: string;
            background: string;
        };
        walking07: {
            name: string;
            background: string;
        };
        walking08: {
            name: string;
            background: string;
        };
        walking09: {
            name: string;
            background: string;
        };
        walking10: {
            name: string;
            background: string;
        };
        walking11: {
            name: string;
            background: string;
        };
    };
    function animationwalking(): Promise<void>;
    let data: {
        protagonist: {
            name: string;
        };
        entschuldigung: number;
        score: number;
        state: {
            a: number;
        };
    };
    let characters: {
        narrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                eyesonly: string;
            };
        };
        Elo: {
            name: string;
        };
        whiteknight: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
            };
        };
        MainNarrator: {
            name: string;
        };
        Speechbox: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                newversion: string;
                grayedout: string;
            };
        };
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function fromlefterToLeft(): ƒS.AnimationDefinition;
    function fromCenterToCenter(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
    function fromLeftToCenter(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
        gesprochen: {
            marie: boolean;
            james: boolean;
            violet: boolean;
            luna: boolean;
        };
        beispielwert: number;
        beispielbool: boolean;
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    function timer(skipable: number, länge: number): Promise<void>;
    let signaldelay: ƒS.Signal;
    function buttonpress(buttonart: string, lautstärke: number): Promise<void>;
    function satzbau(Sprecher: any, text: string, waitfornext: boolean, skipbar: boolean, pausenlänge: number, textgeschwindigkeit: number, voicetype: string, skiplänge: number): Promise<void>;
    let delay: ƒS.Signal;
    function hndKeyPress(_event: KeyboardEvent): Promise<any>;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene3(): ƒS.SceneReturn;
}
declare namespace Template {
    function zufuß(): ƒS.SceneReturn;
}
