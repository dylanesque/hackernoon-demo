const Tag = ({ tag }) => {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: 'lightgray',
        height: '48px',
        width: 'fit-content',
        margin: '8px',
        border: '4px solid grey',
        padding: '4px 8px',
        fontSize: '14px',
      }}
    >
      #{tag}
    </div>
  );
};

export default Tag;
