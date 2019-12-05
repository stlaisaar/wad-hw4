// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List component text', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(List);

    // Check that this component properly displays the text to add a new task

    it('displays text to add your first task when none are added', () => {
        const listItems = wrapper.findAll(".list-item");

        // 0 list items are currently added
        if (listItems.length === 0) {
            // We expect the text to be there
            expect(wrapper.html()).toContain("Add your first Todo task");
        }
        // Some list items have been added
        else {
            // We do NOT expect the text to be there
            expect(wrapper.html()).not.toContain("Add your first Todo task");
        }
    })
});