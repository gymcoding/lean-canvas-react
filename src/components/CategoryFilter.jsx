function CategoryFilter({ category, onChange }) {
  const categories = ['신규', '헬스케어', '물류', '여행'];
  return (
    <select
      className="border p-2 rounded-lg w-full sm:w-32"
      value={category}
      onChange={e => {
        const val = e.target.value;
        onChange(val === 'all' ? undefined : val);
      }}
    >
      <option value={'all'}>전체</option>
      {categories.map(cate => (
        <option key={cate} value={cate}>
          {cate}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
