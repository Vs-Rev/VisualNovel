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
    let items: {
        pageVampire: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            exist: boolean;
        };
        Kleidung: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            exist: boolean;
        };
        Ticket: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            exist: boolean;
        };
    };
    let dataForSave: {
        protagonist: {
            name: string;
        };
        evil: number;
        good: number;
        entschuldigung: number;
        Halisgefährteangenommen: boolean;
        Entscheidungsfrage1: number;
        Entscheidungsfrage2: number;
        Entscheidugnsfrage3: number;
        Entscheidungsfrage4: number;
    };
    let sound: {
        examplemusic: string;
        titletheme: string;
        introductiontheme: string;
        MysteryManTheme: string;
        Bedroom: string;
        Meadow: string;
        Halistheme: string;
        MainTheme: string;
        examplesound: string;
        inventoryadd: string;
        blackscreen: string;
        chaptertransition: string;
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
        snoring: string;
        pianoharp: string;
        slap: string;
        cough: string;
        curtains: string;
        laughterold: string;
        oldmagic: string;
        teleport: string;
        nightambience: string;
        darkwind: string;
        forestnight: string;
        peopletalking: string;
        deepdark: string;
        audience: string;
        thunder: string;
        MainNarrator: string;
        Elo: string;
        Karten: string;
        School: string;
        Ticketkontrolleur: string;
        Halistrator: string;
        Leserin: string;
    };
    let locations: {
        waldweg: {
            name: string;
            background: string;
        };
        meadow: {
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
        white: {
            name: string;
            background: string;
        };
        theaterindoor1: {
            name: string;
            background: string;
        };
        theaterindoor2: {
            name: string;
            background: string;
        };
        theaterindoor3: {
            name: string;
            background: string;
        };
        theaterindoor4: {
            name: string;
            background: string;
        };
        theaterindoor5: {
            name: string;
            background: string;
        };
        theaterindoor6: {
            name: string;
            background: string;
        };
        theaterindoor7: {
            name: string;
            background: string;
        };
        theaterindoor8: {
            name: string;
            background: string;
        };
        theaterindoor9: {
            name: string;
            background: string;
        };
        prolog: {
            name: string;
            background: string;
        };
        chapter1: {
            name: string;
            background: string;
        };
        tipp1: {
            name: string;
            background: string;
        };
        tipp2: {
            name: string;
            background: string;
        };
        tipp3: {
            name: string;
            background: string;
        };
        tipp4: {
            name: string;
            background: string;
        };
    };
    function animationwalking(): Promise<void>;
    let characters: {
        narrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                eyesonly: string;
            };
        };
        Leserin: {
            name: string;
        };
        Publikum: {
            name: string;
        };
        Elo: {
            name: string;
        };
        Ticketkontrolleur: {
            name: string;
        };
        Halistrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                standard: string;
                sauer: string;
                surprised: string;
                cute: string;
            };
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
    function fromLeftToLeft(): ƒS.AnimationDefinition;
    function fromCenterToCenter(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
    function fromLeftToCenter(): ƒS.AnimationDefinition;
    function fromCenterToRight_Halistrator(): ƒS.AnimationDefinition;
    function fromRightToCenter_Halistrator(): ƒS.AnimationDefinition;
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
    function Szene0_1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1_1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1_2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1_3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1_4(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1_5(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1_6(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene4_1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene5_Entscheidung(): ƒS.SceneReturn;
}
