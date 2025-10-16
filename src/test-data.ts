import type { SceneTree } from "./types";

export const turboLapsStructure: SceneTree = {
    Scene: {
        Prototype: ["Elipse-Track"],
        Joystick: ["Virtual-Joystick", "Steerable-Rect", "Test-Car"],
        Mouse: ["Draw-a-Point"],
        Sound: ["Sound-Demo"],
        PCGame: [
            "Rectangle-Track",
            "Car",
            "Track-Boundary",
            "Starting-Grid",
            "Road-Markings",
            "Track-Grass",
            "Lap-Tracker",
            "Game-Score",
            "Menu",
            "Countdown",
            "Continue",
        ],
    },
    MultiScene: {
        Joystick: ["Joystick-Test", "XY-Joystick-Test", "Joystick-For-Car"],
        Tool: ["Track-Cursor"],
        PCGame: [
            "Start-Race",
            "Car-Out-Of-Track",
            "Lap-Measurement",
            "Race-Restart",
        ],
    },
    Game: ["TurboLaps-Pc", "TurboLaps-Mobile"],
};

export const customStructure: SceneTree = {
    Scene: {
        Category1: ["Scene1", "Scene2"],
        Category2: ["Scene3", "Scene4"],
    },
    Scenes: ["Scene5", "Scene6"],
};
