import React from "react";
import DisplayPostCard from "./../Components/Feeds/PostedFeedCard/DisplayPostCard";
import DisplaySharedCard from "./../Components/Feeds/SharedFeedCard/DisplaySharedCard";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const PostCardProp = {
  id: 1,
  verb: "posted",
  object: "Post:1",
  actor: "Bobby L. Booker",
  created_at: "2018-03-28T16:07:13.840Z",
  updated_at: "2018-03-28T16:07:13.840Z"
};
const ShareCardProp = {
  id: 20,
  verb: "shared",
  object: "Share:10",
  actor: "Yole Fonseca Otero",
  created_at: "2018-03-28T16:07:14.082Z",
  updated_at: "2018-03-28T16:07:14.082Z"
};

it("Test post card without post", () => {
  const postedFeedCardRendered = shallow(
    <DisplayPostCard
      feed={PostCardProp}
      cardsPostContent={""}
      showCardsPostContentFlag={false}
      showLoader={false}
    />
  );
  expect(postedFeedCardRendered.contains("Bobby L. Booker")).toEqual(true);
});

it("Test post card with post", () => {
  const postedFeedCardRendered = shallow(
    <DisplayPostCard
      feed={PostCardProp}
      cardsPostContent={"Want to grab pizza"}
      showCardsPostContentFlag={true}
      showLoader={false}
    />
  );
  expect(postedFeedCardRendered.contains("Want to grab pizza")).toEqual(true);
});

it("Test share card without url", () => {
  const sharedFeedCardRendered = shallow(
    <DisplaySharedCard
      feed={ShareCardProp}
      cardsSharedUrl={""}
      showCardsSharedUrlFlag={false}
      showLoader={false}
    />
  );
  expect(sharedFeedCardRendered.contains("Yole Fonseca Otero")).toEqual(true);
});

it("Test share card with url", () => {
  const sharedFeedCardRendered = shallow(
    <DisplaySharedCard
      feed={ShareCardProp}
      cardsSharedUrl={"https://www.flipgive.com/"}
      showCardsSharedUrlFlag={true}
      showLoader={false}
    />
  );
  expect(sharedFeedCardRendered.contains("https://www.flipgive.com/")).toEqual(
    true
  );
});
