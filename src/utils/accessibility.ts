export const focusElement = (element: HTMLElement) => {
    if (element) {
        element.focus();
    }
};

export const setAriaLabel = (element: HTMLElement, label: string) => {
    if (element) {
        element.setAttribute('aria-label', label);
    }
};

export const toggleContrastMode = (isHighContrast: boolean) => {
    const body = document.body;
    if (isHighContrast) {
        body.classList.add('high-contrast');
    } else {
        body.classList.remove('high-contrast');
    }
};