import type { SceneTree } from "./types";
import { setSceneStructure, setupInitialState } from "./navigation-logic";
import {
    createNavContainer,
    createToggleButton,
    renderMenu,
    setupArrowNavigation,
} from "./navigation-ui";

export function startNavigation(sceneStructure: SceneTree): void {
    setSceneStructure(sceneStructure);
    setupInitialState();

    createNavContainer();
    createToggleButton();
    renderMenu();
    setupArrowNavigation();
}
