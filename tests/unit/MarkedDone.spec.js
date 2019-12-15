// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('Task marked done in the list', () => {
    // List of 3 tasks, all set as not done (done: false)
    const tasks = [
        {
            id: 1,
            title: 'foo',
            done: false
        },
        {
            id: 2,
            title: 'foo2',
            done: false
        },
        {
            id: 3,
            title: 'foo3',
            done: false
        }
    ];
    // Now mount the component and you have the wrapper
    const wrapper = mount(List, {
        propsData:{
            list: tasks
        }
    });

    // Test that when the first item in the list is marked as done, the item is updated correctly
    it('item is updated when an item in the list is clicked (marked as done)', () => {
        // Triggering the click event on the first list element (task)
        wrapper.find('span:first-of-type').trigger('click');
        // Getting the list of tasks from the wrapper's props
        let list = wrapper.props().list;
        // Expecting first task's "done" value to equal true
        expect(list[0].done).toEqual(true)
    })
});