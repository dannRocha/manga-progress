export default Vue.component('list-icon', {
  name: 'list-icon',
  template: `
    <svg
      @click='$emit("Click")'
      stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.46" y="3.06" width="23.08" height="2.18"></rect>
        <rect x="0.46" y="8.29" width="23.08" height="2.18"></rect>
        <rect x="0.46" y="13.53" width="23.08" height="2.18"></rect>
        <rect x="0.46" y="18.76" width="15.81" height="2.18">
      </rect>
    </svg>
  `
})