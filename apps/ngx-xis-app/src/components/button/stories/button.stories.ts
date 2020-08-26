// src/app/components/task.stories.ts
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../button.component';
import {Meta} from "@storybook/angular/types-6-0";

export default {
    title: 'Buttons',
    component: ButtonComponent,
} as Meta;

export const Primary = () => ({
    component: ButtonComponent,
    props: {
    },
    primary: true
});

export const Variants = () => ({
    component: ButtonComponent,
    props: {
        variant:'success'
    },
    primary: true
});

export const Sizes = () => ({
    component: ButtonComponent,
    props: {
        size:'lg'
    },
    primary: true
});
