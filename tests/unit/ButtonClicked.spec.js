// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('"+" button clicked in Footer', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Footer);

    // Checking whether the "open" property in Footer component changes to true
    // when "+" button is clicked in Footer component
    it('"open" property in Footer changes to true when clicked', () => {
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.open).toEqual(true);
    })
});