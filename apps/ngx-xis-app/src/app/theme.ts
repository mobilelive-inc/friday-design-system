import {ThemeConfig} from "../components/utils/theme.service";


export const themeGray: ThemeConfig = {
    name: "Gray",
    properties: {
        "--primary": "#66c9d5",
        "--secondary": "#c4d93c",
        "--success": "#2874a4",
        "--info": "#fccc2e",
        "--warning": "#f48245",
        "--danger": "#c36837",
        "--light": "#ffffff",
        "--dark": "#282828",
        "--white": "#e5e5e5",

        "--primary-hover": "#d07240",
        "--secondary-hover": "#4a89bd",
        "--success-hover": "#b7c43f",
        "--info-hover": "#3fadb4",
        "--warning-hover": "#c0a21d",
        "--danger-hover": "#3a83c2",
        "--dark-hover": "#94afb3",
        "--light-hover": "#a6babe",
    }
};

export const themeDark: ThemeConfig = {
    name: "Dark",
    properties: {
        "--primary": "#87f7a3",
        "--secondary": "#008463",
        "--success": "#003789",
        "--info": "#f3ebd6",
        "--warning": "#d9bd80",
        "--danger": "#d4876e",
        "--light": "#f95792",
        "--dark": "#fbf6ff",
        "--white": "#282828",

        "--primary-hover": "#b45f38",
        "--secondary-hover": "#32597a",
        "--success-hover": "#74802a",
        "--info-hover": "#3c7e85",
        "--warning-hover": "#8e711c",
        "--danger-hover": "#285a86",
        "--dark-hover": "#6b8084",
        "--light-hover": "#9fb4b8",
        "--gray-dark": "#fbf6ff",
        "--gray": "#66636a",
    }
};
