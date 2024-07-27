type T_FeaturesList = {
  title: string;
  text: string;
};

const FeaturesList = ({ title, text }: T_FeaturesList) => {
  return (
    <div>
      {title}
      {text}
    </div>
  );
};

export default FeaturesList;
