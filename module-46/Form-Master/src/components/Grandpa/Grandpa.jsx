import Dad from "../Dad/Dad";
import Fufu from "../Fufu/Fufu";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'


const Grandpa = () => {
    const asset = 'diamond';
    return (
        <div className="grandpa ">
            <h2>GrandPa</h2>

            <section className="flex">

                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Fufu></Fufu>
            </section>

        </div>
    );
};

export default Grandpa;


{/* <section className="flex">

<Dad asset={asset}></Dad>
<Uncle asset={asset}></Uncle>
<Fufu></Fufu>
</section> */}