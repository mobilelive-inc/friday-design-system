import { TabComponent } from "./tab.component";

export default {
  title: 'TabComponent',
  component: TabComponent,
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TabComponent,
  props: {
    label: 'Text'
  }
})
