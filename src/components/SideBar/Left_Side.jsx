
const Left_Side = () => {
    return (
        <div className=" md:w-2/5">
            <img className="mx-auto mt-2 md:h-[500px] md:w-[350px]" src="/public/images/game.png" alt="" />
            {/* all buttons */}
            <div className="grid md:grid-cols-2 h-auto gap-4 mx-6 mt-2 md:mt-4">
               <button className="bg-[#515664] uppercase w-full p-1">New Card</button>
               <button className="bg-[#515664] uppercase w-full p-1">Save Card</button>
               <button className="bg-[#515664] uppercase w-full p-1">Export As</button>
               <button className="bg-[#515664] uppercase w-full p-1">Load Card</button>
               <button className="bg-[#42481b] uppercase w-full p-1">Yegopro</button>
               <button className="bg-[#42481b] uppercase w-full p-1">Discord</button>
              
            </div>
        </div>
    );
};

export default Left_Side;