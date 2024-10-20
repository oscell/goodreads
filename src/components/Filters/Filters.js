import { RatingMenu } from "./RatingMenu/RatingMenu";
import { RangeSlider } from "./RangeSlider/RangeSlider";
// import {CustomToggleRefinement} from "./CustomToggleRefinement/CustomToggleRefinement"
import { CustomRefinementList } from "./CustomRefinementList/CustomRefinementList";
import "./Filters.css"

const transformItems = (items) => {
  return items.map((item) => {

    return {
      ...item,
      label: item.value === "true" ? 'READ' : 'NOT READ', // Check for string "true"
    };
  });
};

function Filters() {
  return (
    <div className='filters_container'>
      <CustomRefinementList attribute="isRead" title="Status" transformItems={transformItems} showSearch={false} ></CustomRefinementList>
      <CustomRefinementList attribute="genres" title="Genre"></CustomRefinementList>
      <CustomRefinementList attribute="author" title="Author"></CustomRefinementList>
      <RatingMenu attribute="my_rating_count" title="Star Rating"></RatingMenu>
      <RangeSlider attribute="avgRating" title="Status"></RangeSlider>
    </div>
  );
}

export default Filters;
