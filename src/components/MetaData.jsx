const MetaData = ({ title, description }) => {
  const APP_NAME = import.meta.env.VITE_APP_NAME || "APP";
  return (
    <>
      <title>{title ? `${title} - ${APP_NAME}` : APP_NAME}</title>
      {description && <meta name="description" content={description} />}
    </>
  );
};

export default MetaData;
