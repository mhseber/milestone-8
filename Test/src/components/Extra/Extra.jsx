
const Extra = () => {
    return (
        <label className="swap swap-flip text-9xl mt-4">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
        </label>
    );
};

export default Extra;