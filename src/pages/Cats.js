import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title/Title.js";
import { catsThunk } from "../store/cats/thunks";

const Cats = () => {
  const dispatch = useDispatch();

  const { cats } = useSelector(({ cats }) => cats);

  useEffect(() => {
    dispatch(catsThunk());
  }, [dispatch]);

  return (
    <div>
      <Title />
      <div>Cats</div>
      {cats && <img src={cats.file} alt="cat" />}
      <button onClick={() => dispatch(catsThunk())}>новый кiт</button>
    </div>
  );
};

export default Cats;
