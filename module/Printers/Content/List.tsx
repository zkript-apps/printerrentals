type T_List = {
  lists: string[];
  className?: string;
};

const List = ({ lists, className }: T_List) => {
  return (
    <ul className={`list-disc text-xl ml-12 space-y-2 ${className}`}>
      {lists.map((list, index) => (
        <li key={"list" + index}>{list}</li>
      ))}
    </ul>
  );
};

export default List;
