import Cousin from "../Cousin/Cousin";

const Fufu = () => {
    return (
        <div>
            <h2>Fufu</h2>
            <section className="flex">
                <Cousin name={'Fatema'}></Cousin>
                <Cousin name={'Sara'}></Cousin>
            </section>
        </div>
    );
};

export default Fufu;