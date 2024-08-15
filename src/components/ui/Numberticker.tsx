import NumberTicker from "@/components/magicui/number-ticker";

const NumberTickerDemo = () => {
    return (
        <div className="gap-2.5 flex items-center justify-evenly flex-col h-52">
            <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white gap-2.5">
                <NumberTicker value={500} /><span>+</span> 
            </p>
            <span className="text-white text-4xl space-y-2">Members in 1 Day</span>
        </div>
    );
};

export default NumberTickerDemo;
