import { fetchCats } from "../../requests/cats";
import { catsRequest, catsLoading, catsFail } from "./actions";

export const catsThunk = () => async (dispatch) => {
  try {
    dispatch(catsLoading(true));
    const { data } = await fetchCats().then((data) => data);

    if (data) {
      dispatch(catsLoading(false));
      dispatch(catsRequest(data));
    }
  } catch (e) {
    dispatch(catsFail(e));
  }
};
