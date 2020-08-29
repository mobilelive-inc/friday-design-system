import {Injectable} from "@angular/core";

export interface ThemeConfig {
    name: string;
    properties: any;
}

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    active;

    getTheme() {
        return this.active;
    }

    setTheme(theme: ThemeConfig): void {
        this.active = theme;

        Object.keys(this.active.properties).forEach(property => {
            // TODO: check Server Side rendering
            document.documentElement.style.setProperty(
                property,
                this.active.properties[property]
            );
        });
    }
}
