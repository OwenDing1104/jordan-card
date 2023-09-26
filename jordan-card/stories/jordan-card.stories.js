import { html } from 'lit';
import '../src/jordan-card.js';

export default {
  title: 'JordanCard',
  component: 'jordan-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <jordan-card
      style="--jordan-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </jordan-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
