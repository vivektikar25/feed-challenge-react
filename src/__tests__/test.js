import React from 'react';
import PostedFeedCard from './../Components/Feeds/PostedFeedCard';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() })

test('PostedFeedCard Test', () => {
    const PostedFeedCardRendered = shallow(<PostedFeedCard feed={{ "id": 1, "verb": "posted", "object": "Post:1", "actor": "Bobby L. Booker", "created_at": "2018-03-28T16:07:13.840Z", "updated_at": "2018-03-28T16:07:13.840Z" }} />);
    expect(PostedFeedCardRendered.contains("Bobby L. Booker")).toEqual(true);
});

it('renders an `.card`', () => {
    const wrapper = shallow(<PostedFeedCard feed={{ "id": 1, "verb": "posted", "object": "Post:1", "actor": "Bobby L. Booker", "created_at": "2018-03-28T16:07:13.840Z", "updated_at": "2018-03-28T16:07:13.840Z" }} />);
    expect(wrapper.find('.card').length).toEqual(1);
});

// it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(<PostedFeedCard onButtonClick={onButtonClick} feed={{ "id": 1, "verb": "posted", "object": "Post:1", "actor": "Bobby L. Booker", "created_at": "2018-03-28T16:07:13.840Z", "updated_at": "2018-03-28T16:07:13.840Z" }} />);
//     // expect(wrapper.find('.actorBio').length).toEqual(1);
//     wrapper.find('.actorBio').simulate('click');
//     expect(onButtonClick.calledOnce).to.equal(true);
// });