export enum ThemeTimeOfDay {
    LIGHT_THEME = "app_light_theme",
    DARK_THEME = "app_dark_theme"
}

export const selectTheme = (time:string) => {
    const currentHour = new Date(time).getHours()
    const theme:ThemeTimeOfDay = currentHour > 18 ? ThemeTimeOfDay.DARK_THEME : ThemeTimeOfDay.LIGHT_THEME
    return theme
} 