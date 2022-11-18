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
        examplesound: string;
        backgroundBuero: string;
        makelight: string;
        darkwind: string;
    };
    let locations: {
        examplelocation: {
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
    };
    let data: {
        protagonist: {
            name: string;
        };
        score: number;
        state: {
            a: number;
        };
    };
    let characters: {
        narrator: {
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
            };
        };
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function fromlefterToLeft(): ƒS.AnimationDefinition;
    function fromCenterToCenter(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
        gesprochen: {
            marie: boolean;
            james: boolean;
            violet: boolean;
            luna: boolean;
        };
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    let delay: ƒS.Signal;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function Szene1(): ƒS.SceneReturn;
}
