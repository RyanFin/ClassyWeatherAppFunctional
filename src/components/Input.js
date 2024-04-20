export default function Input({ location, onChangeLocation }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search from Location"
        value={location}
        onChange={onChangeLocation}
        // onKeyDown={onKeyPress}
      />
    </div>
  );
}
