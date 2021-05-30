import React from 'react'
import ProductSection from '../components/products/productSection'
import '../styles/index.css'


const Index = () => {
    return (
        <div>
            <section className="first-section">
                <h1 className="intro-title">fresh and good</h1>
                <p className="desc">now browse upto 15000+ foods, groceries, etc from all over the worls</p>
                <button className="offer-btn">upto 18% off</button>
            </section>

            <ProductSection />
        </div>
    )
}

export default Index
