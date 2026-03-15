export const setTheme = (isDarkMode) => {
    const root = document.documentElement;

    if(isDarkMode){
        root.classList.add('dark');
        localStorage.setItem("theme", "dark")
    }else{
        root.classList.remove('dark');
        localStorage.setItem("theme", "light")
    }
}

export const getSavedTheme = () => {
    return localStorage.getItem("theme") === "dark";
}