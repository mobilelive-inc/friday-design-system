import {ButtonComponent} from "./button.component";

export default {
  title: 'MlButtonComponent'
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
