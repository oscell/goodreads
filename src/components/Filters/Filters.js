import {
  RefinementList,

  ToggleRefinement,
} from "react-instantsearch";
import { RatingMenu } from "./RatingMenu/RatingMenu";
import { RangeSlider } from "./RangeSlider/RangeSlider";
import "./Filters.css"

function SearchBar() {
  return (
    <>
      <ToggleRefinement attribute="isRead"></ToggleRefinement>
      <RefinementList attribute="genres"></RefinementList>
      <RefinementList attribute="author"></RefinementList>
      <RatingMenu attribute="my_rating_count"></RatingMenu>
      <RangeSlider attribute="avgRating"></RangeSlider>
    </>
  );
}

export default SearchBar;
