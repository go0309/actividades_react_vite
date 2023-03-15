const Error = ({children}) => {
  return (
    <div className="bg-red-800 font-bold text-center text-white p-3  uppercase rounded-md">
      {children} 
    </div>
  );
};

export default Error;
