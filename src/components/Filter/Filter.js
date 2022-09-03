import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(filterItems(e.target.value));
  };

  return (
    <label className={css.label}>
      Search contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
