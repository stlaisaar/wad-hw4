// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('Task marked done in the list', () => {

    // List of 3 tasks, all set to be not done
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

    // Create Test to test when an item in the list is marked as done item is updated correctly
    it('item is updated when an item in the list is clicked (marked as done)', () => {
        // Firstly triggering the click event on the first list element (task)
        wrapper.find('span:first-of-type').trigger('click');
        // Now getting the list of tasks from the wrapper props
        let list = wrapper.props().list;
        // Checking if the first task is now marked true as it should be
        expect(list[0].done).toEqual(true)
    })
});