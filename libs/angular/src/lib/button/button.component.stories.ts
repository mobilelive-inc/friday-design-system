import {ButtonComponent} from "./button.component";

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonComponent,
  props: {
    label: 'Text'
  }
})
