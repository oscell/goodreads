import { RatingMenu } from "./RatingMenu/RatingMenu";
import { RangeSlider } from "./RangeSlider/RangeSlider";
import {CustomToggleRefinement} from "./CustomToggleRefinement/CustomToggleRefinement"
import { CustomRefinementList } from "./CustomRefinementList/CustomRefinementList";
import "./Filters.css"

function Filters() {
  return (
    <div className='filters_container'>
      <CustomToggleRefinement attribute="isRead"></CustomToggleRefinement>
      <CustomRefinementList attribute="genres" title="Genre"></CustomRefinementList>
      <CustomRefinementList attribute="author" title="Author"></CustomRefinementList>
      <RatingMenu attribute="my_rating_count"></RatingMenu>
      <RangeSlider attribute="avgRating"></RangeSlider>
    </div>
  );
}

export default Filters;
