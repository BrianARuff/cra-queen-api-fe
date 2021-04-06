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
      <input
        style={{
          width: "18.75rem",
          height: "1.875rem",
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
