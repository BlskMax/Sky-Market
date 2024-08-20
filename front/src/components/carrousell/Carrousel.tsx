import React from "react";

const Carrousel: React.FC = () => {
    return (
        <div className="flex items-center relative w-[98vw] h-[300px] mt-6 border-none bg-none border-0">
            <img 
                src="/images/carr3.png" 
                className="absolute ml-24 top-0 opacity-0 animate-display w-[72vw] border-[5px] border-yellow-300"
                style={{ animationDelay: '.5s' }}
            />
            <img 
                src="/images/carr5.jpg" 
                className="absolute ml-24 top-0 opacity-0 animate-display w-[72vw] border-[5px] border-yellow-300"
                style={{ animationDelay: '6s' }}
            />
            <img 
                src="/images/carr4.jpg" 
                className="absolute ml-24 top-0 opacity-0 animate-display w-[72vw] border-[5px] border-yellow-300"
                style={{ animationDelay: '11s' }}
            />
        </div>
    );
}

export default Carrousel;