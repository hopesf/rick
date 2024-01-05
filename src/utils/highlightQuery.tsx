const highlightQuery = (name: string, query: string) => {
  const parts = name.split(new RegExp(`(${query})`, 'gi'));
  return (
    <span>
      {' '}
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? <b key={index}>{part}</b> : part,
      )}{' '}
    </span>
  );
};

export default highlightQuery;
