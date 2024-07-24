type T_DescriptionList = {
  title?: string;
  lists: string[];
};

const DescriptionList = ({ title, lists }: T_DescriptionList) => {
  return (
    <div>
      {title}
      {lists}
    </div>
  );
};

export default DescriptionList;
