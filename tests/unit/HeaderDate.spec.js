// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header date display', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header);

    // Check that this component properly displays today's date
    it('displays the correct date, year, month, week day', () => {
        // Current full date
        let today = new Date();

        // Current date number (01, 02, 03, ... , 31)
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date);

        // Current year
        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year);

        // Current month as a three letter substring in uppercase
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
        let month = months[today.getMonth()].substring(0, 3).toUpperCase();
        expect(wrapper.html()).toContain(month);

        // Current week day in uppercase
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let weekDay = weekdays[today.getDay()].toUpperCase();
        expect(wrapper.html()).toContain(weekDay);
    })
});