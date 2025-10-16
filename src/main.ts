import "./style/style.css";
import "./style/scene-navigator.css";
import {
    setSceneStructure,
    setupInitialState,
} from "./navigation-logic";
import {
    createNavContainer,
    createToggleButton,
    renderMenu,
    setupArrowNavigation,
} from "./navigation-ui";
import type { SceneTree } from "./types";
import { turboLapsStructure } from "./test-data";

export function startNavigation(sceneStructure: SceneTree): void {
    setSceneStructure(sceneStructure);
    setupInitialState();

    createNavContainer();
    createToggleButton();
    renderMenu();
    setupArrowNavigation();
}

startNavigation(turboLapsStructure);
