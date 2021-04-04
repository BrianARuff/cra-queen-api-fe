type IProps = {
  handleFilterSongs: (e: React.BaseSyntheticEvent) => void;
};
export default function FilterSongs(props: IProps) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>
        <label style={{ flex: "1" }} htmlFor="filter">
          Filter Songs
        </label>
      </h1>
      <input
        style={{
          width: "300px",
          height: "30px",
          alignSelf: "center",
          textAlign: "center",
          fontStyle: "italic",
        }}
        onChange={props.handleFilterSongs}
        type="text"
        id="filter"
        name="filter"
        placeholder="Search by title, album name, or lyrics here..."
      />
    </div>
  );
}
