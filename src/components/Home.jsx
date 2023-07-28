import mylogo from '../assets/my-logo.png'

const Home = () => {

    return (
        <>  
            <div id="Inicio">
                <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 md:flex">
                    <div className=" md:w-2/5 h-5/6 ">
                        <div className="h-96 flex flex-col items-center justify-center md:mt-10 md:mb-5 lg:mt-20 lg:mb-10">
                            <img 
                                className="w-60 h-60 md:w-56 md:h-56 lg:w-72 lg:h-72" 
                                src={mylogo}
                                alt="Imagen logo" />
                        </div>
                    </div>
                    <div className="md:w-3/5 h=5/6 text-center">
                        <div className="md:h-96 flex flex-col items-center justify-center md:mt-10 md:mb-5 lg:mt-20 lg:mb-10">
                            <div>
                                <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-title">Rose Aravena</h1>
                                <p className="mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-3xl text-texto">Front-end Developer</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </>
    );
};

export default Home;