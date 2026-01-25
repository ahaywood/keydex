const Purchase = () => {
  return (
    <div className="border border-border rounded-md py-5 px-6 mb-9">
      <h3 className="text-sm font-bold text-center mb-4">One-time purchase:</h3>
      <div className="money flex justify-center items-start gap-[2px] mb-4">
        <span className="font-light">$</span>
        <span className="font-thin text-5xl">29</span>
        <span className="font-light">99</span>
      </div>
      <button className="mb-3 bg-purple-heart hover:bg-violet-darker rounded-md w-full block h-9 center">
        Add to Cart
      </button>
      <button className="bg-violet hover:bg-violet-darker rounded-md w-full block h-9 center">
        Buy Now
      </button>
    </div>
  );
};

export { Purchase };
