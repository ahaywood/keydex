const MetaData = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="text-sm mb-8">
      <h4 className="font-bold text-icon mb-[6px]">{label}</h4>
      <div>{children}</div>
    </div>
  );
};

export { MetaData };
