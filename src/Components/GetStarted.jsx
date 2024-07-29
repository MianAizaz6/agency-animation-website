const GetStarted = () => {
    return (
        <div className="getstarted-section container-fluid">
            <div className="container flex flex-col gap-3">
                <div className="content flex flex-col gap-2 max-w-[900px] mx-auto">
                    <div className="title">Elevate Your Brand with Expert Guidance</div>
                    <div className="subtitle">
                        Book a free consultation to see how our expert team can provide strategic insights and actionable plans for your business
                    </div>
                </div>
                <button className="w-fit mx-auto border border-white text-white font-semibold text-[1rem] uppercase">Get Started</button>
            </div>
        </div>
    );
};

export default GetStarted;
