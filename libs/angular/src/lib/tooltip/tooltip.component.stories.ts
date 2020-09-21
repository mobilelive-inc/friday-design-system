import { text, number, boolean } from '@storybook/addon-knobs';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'TooltipComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TooltipComponent,
  props: {
    tooltipText: text('tooltipText', 'Tooltip mock text'),
  }
})
