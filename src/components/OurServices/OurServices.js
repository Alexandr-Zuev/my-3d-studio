import React from 'react';
import CategoryImage1 from '../../images/img-1.png'; 
import CategoryImage2 from '../../images/img-2.png'; 
import CategoryImage3 from '../../images/img-3.png'; 
import CategoryImage4 from '../../images/img-4.png'; 
import CategoryImage5 from '../../images/img-5.png'; 
import CategoryImage6 from '../../images/img-6.png'; 

const OurServices = () => {
    const categories = [
        { id: 1, title: 'Vehicles', description: 'We create realistic models of cars, airplanes, and other vehicles.', image: CategoryImage1 },
        { id: 2, title: 'Architecture', description: 'We design detailed architectural models of buildings and structures.', image: CategoryImage2 },
        { id: 3, title: 'Details', description: 'We model small parts and components with high precision.', image: CategoryImage3 },
        { id: 4, title: 'Characters', description: 'We create unique and realistic 3D characters for any project.', image: CategoryImage4 },
        { id: 5, title: 'Plants', description: 'We model a variety of plants for natural and urban scenes.', image: CategoryImage5 },
        { id: 6, title: 'Animals', description: 'We create detailed 3D models of animals for various needs.', image: CategoryImage6 },
    ];

    return (
        <section className="our-services">
            <h2>OUR SERVICES</h2>
            <div className="services-text">
                <h3>Transforming ideas into 3D masterpieces</h3>
                <p>
                    From conceptualization to creation, we specialize in turning your ideas into stunning 3D artworks.
                    Experience art like never before with our unique approach and attention to detail.
                </p>
            </div>
            <div className="services-grid">
                {categories.map((category) => (
                    <article key={category.id} className="service-card">
                        <img src={category.image} alt={category.title} className="category-image" />
                        <h4>{category.title + '>'}</h4>
                        <p>{category.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default OurServices;