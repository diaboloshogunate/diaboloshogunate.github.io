import React, {Component} from "react";
import Glide from '@glidejs/glide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import benSernaGrey from '../Images/profiles/ben-serna.jpg';
import jeremyRoss from '../Images/profiles/jeremy-ross.jpg';
import markWestcott from '../Images/profiles/mark-westcott.jpg';
import mikeSayenko from '../Images/profiles/mike-sayenko.jpg';
import susanaSerna from '../Images/profiles/susana-serna.jpg';

const data = [
    {
        author: "Jeremy Ross",
        position: "Owner of Indevver",
        profile: jeremyRoss,
        testimony: `I've worked with Robert on a few projects now and I've been really impressed with his ability to take
            an idea to completion with very little oversight.
            He asks the right questions, and can be trusted to write great code code.`
    },
    {
        author: "Susana Serna",
        position: "Owner of Clinica De Salud",
        profile: susanaSerna,
        testimony: `Robert does excellent work in a timely manner.
            Since they updated my clinic's web page,
            more patients have called to make appointments and mentioned the web page.`
    },
    {
        author: "Mike Sayenko",
        position: "Owner of Sayenko Design",
        profile: mikeSayenko,
        testimony: `It has been a pleasure to work with Robert.
                    He's passionate, communicates very well, responsive, and honest.
                    His desire to improve and get better is a result of his passion and I love guys like that.
                    He documents well, has good constructive feedback, and is always looking for improvements in the process.
                    I believe he has a very bright future ahead.`
    },
    {
        author: "Mark Westcott",
        position: "Pianist, Teacher, Author",
        profile: markWestcott,
        testimony: `My teaching career was at a standstill due to a long cancer battle.
            Robert created a beautiful website which almost immediately
            reignited interest in my performing and teaching reputation.
            I now receive numerous inquiries about my teaching and other activities and I am as busy as my schedule permits.`
    },
    {
        author: "Ben Serna Grey",
        position: "Author, Composer",
        profile: benSernaGrey,
        testimony: `Robert made the process of making my website easy.
            Everything is set up so I can easily update my portfolio, add blog posts, anything else I need.
            I'm glad I have a good-looking site I can direct people to now`
    },
];
const slides = data.map((testimony) => {
    return <div className="glide__slide" key={testimony.author}>
        <blockquote className="testimony">
            <img src={testimony.profile} alt={testimony.author} />
            {testimony.testimony}
            <cite>
                <div className="name">{testimony.author}</div>
                <div className="position">{testimony.position}</div>
            </cite>
        </blockquote>
    </div>
});
const bullets = data.map((testimony, index) => {
    return <button className="glide__bullet" data-glide-dir={"="+index++} key={testimony.author}/>
});
class Testimonials extends Component {
    componentDidMount() {
            new Glide('.glide', {
                type: 'carousel',
                perView: 3,
                breakpoints: {
                    800: {
                        perView: 2
                    },
                    480: {
                        perView: 1
                    }
                }
            }).mount();
    }
    render() {
        return <section className="testinomials">
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        {slides}
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                    <div className="glide__bullets" data-glide-el="controls[nav]">
                        {bullets}
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Testimonials;