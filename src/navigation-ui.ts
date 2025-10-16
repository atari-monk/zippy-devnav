import {
    getCurrentScene,
    getCurrentLevel,
    goToScene,
    navigateToCategory,
    navigateBack,
    canGoBack,
} from "./navigation-logic";

let isMenuVisible = true;
let navContainer: HTMLDivElement;

export function createNavContainer(): void {
    navContainer = document.createElement("div");
    navContainer.className = "scene-navigator-container";
    document.body.appendChild(navContainer);
}

export function createToggleButton(): void {
    const button = document.createElement("button");
    button.textContent = "Toggle Menu";
    button.className = "scene-navigator-toggle";
    button.onclick = () => toggleMenu();
    document.body.appendChild(button);
}

function toggleMenu(): void {
    isMenuVisible = !isMenuVisible;
    navContainer.style.display = isMenuVisible ? "flex" : "none";
}

function createButton(
    text: string,
    onClick: () => void,
    isHighlighted = false
): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = "scene-navigator-button";
    if (isHighlighted) button.classList.add("highlighted");
    button.onclick = onClick;
    return button;
}

export function renderMenu(): void {
    navContainer.innerHTML = "";
    const currentLevel = getCurrentLevel();

    if (Array.isArray(currentLevel)) {
        // Scene buttons
        currentLevel.forEach((scene) => {
            const button = createButton(
                scene,
                () => goToScene(scene),
                scene === getCurrentScene()
            );
            navContainer.appendChild(button);
        });
    } else {
        // Category buttons
        Object.keys(currentLevel).forEach((key) => {
            const button = createButton(key, () => {
                navigateToCategory(key);
                renderMenu();
            });
            navContainer.appendChild(button);
        });
    }

    // Back button
    if (canGoBack()) {
        const backButton = createButton("Back", () => {
            navigateBack();
            renderMenu();
        });
        backButton.classList.add("back");
        navContainer.appendChild(backButton);
    }
}

export function setupArrowNavigation(): void {
    window.addEventListener("keydown", (e) => {
        if (!isMenuVisible) return;

        const currentLevel = getCurrentLevel();
        if (!Array.isArray(currentLevel)) return;

        const currentScene = getCurrentScene();
        const currentIndex = currentLevel.findIndex(
            (scene) => scene === currentScene
        );

        if (e.key === "ArrowRight" && currentIndex < currentLevel.length - 1) {
            goToScene(currentLevel[currentIndex + 1]);
        } else if (e.key === "ArrowLeft" && currentIndex > 0) {
            goToScene(currentLevel[currentIndex - 1]);
        }
    });
}
