import type { SceneTree } from "./types";

let currentPath: string[] = [];
let sceneStructure: SceneTree;

export function setSceneStructure(structure: SceneTree): void {
    sceneStructure = structure;
}

export function getCurrentScene(): string | null {
    return new URLSearchParams(window.location.search).get("scene");
}

export function getCurrentLevel() {
    let current: any = sceneStructure;
    for (const key of currentPath) {
        current = current[key];
    }
    return current;
}

export function goToScene(scene: string): void {
    const url = new URL(window.location.href);
    url.searchParams.set(
        "mode",
        currentPath[0] === "Scene" ? "current" : "all"
    );
    url.searchParams.set("scene", scene);
    window.location.href = url.toString();
}

function findScenePath(scene: string): string[] | null {
    const search = (
        tree: any = sceneStructure,
        path: string[] = []
    ): string[] | null => {
        for (const [key, value] of Object.entries(tree)) {
            if (Array.isArray(value)) {
                if (value.includes(scene)) return [...path, key];
            } else {
                const found = search(value, [...path, key]);
                if (found) return found;
            }
        }
        return null;
    };
    return search();
}

export function setupInitialState(): void {
    const currentScene = getCurrentScene();
    if (currentScene) {
        const foundPath = findScenePath(currentScene);
        if (foundPath) currentPath = foundPath;
    }
}

export function navigateToCategory(category: string): void {
    currentPath.push(category);
}

export function navigateBack(): void {
    currentPath.pop();
}

export function canGoBack(): boolean {
    return currentPath.length > 0;
}
