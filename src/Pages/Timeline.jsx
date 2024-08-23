import React from 'react'

// calendar icon import
import { FaCalendarAlt } from "react-icons/fa";


import './Timeline.css';


const Timeline = () => {

    return (

        <>

            <h2 class="heading"> My<span>Journey</span> <span class="animate " style={{ "--i": 1 }}></span> </h2>


            <section class="timeline">

                <div class="timeline-row">

                    <div class="timeline-column">

                        <h3 class="title">Education <span class="animate " style={{ "--i": 2 }}></span></h3>

                        <div class="education-box">

                            <div class="education-content">

                                <div class="content">

                                    <div class="year"> <FaCalendarAlt className='icon' />2019-2024</div>

                                    <h3 > Bachelor Degree - University</h3>

                                    <p>
                                        Discover boundless possibilities at [University Name], where bachelor's degrees are
                                        pathways to success. Experience academic rigor and holistic growth in our dynamic
                                        learning environment.
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    <div class="year"> <FaCalendarAlt className='icon' />2017-2019</div>

                                    <h3 > Bachelor Degree - University</h3>

                                    <p>
                                        Discover boundless possibilities at [University Name], where bachelor's degrees are
                                        pathways to success. Experience academic rigor and holistic growth in our dynamic
                                        learning environment.
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    <div class="year"> <FaCalendarAlt className='icon' />2015-2017</div>

                                    <h3 > Bachelor Degree - University</h3>

                                    <p>
                                        Discover boundless possibilities at [University Name], where bachelor's degrees are
                                        pathways to success. Experience academic rigor and holistic growth in our dynamic
                                        learning environment.
                                    </p>

                                </div>


                            </div>

                            <span class="animate " style={{ "--i": 3 }}></span>


                        </div>

                    </div>


                    {/* Experience  */}

                    <div class="timeline-column">

                        <h3 class="title">Experience <span class="animate " style={{ "--i": 5 }}></span></h3>

                        <div class="education-box">

                            <div class="education-content">

                                <div class="content">

                                    <div class="year"> <FaCalendarAlt className='icon' />2023-2024</div>

                                    <h3> Web Developer - Company</h3>

                                    <p>
                                        As a Web Developer at [Company Name], I designed and developed responsive websites, 
                                        working closely with teams to deliver optimized, secure, and user-friendly digital 
                                        experiences across various platforms
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    <div class="year"> <FaCalendarAlt className='icon' />2021-2022</div>

                                    <h3> Web Developer - Company</h3>

                                    <p>
                                        As a Web Developer at [Company Name], I designed and developed responsive websites, 
                                        working closely with teams to deliver optimized, secure, and user-friendly digital 
                                        experiences across various platforms
                                    </p>

                                </div>


                            </div>

                            <div class="education-content">

                                <div class="content">

                                    <div class="year"> <FaCalendarAlt className='icon' />2020-2021</div>

                                    <h3> Web Developer - Company</h3>

                                    <p>

                                        As a Web Developer at [Company Name], I designed and developed responsive websites, 
                                        working closely with teams to deliver optimized, secure, and user-friendly digital 
                                        experiences across various platforms

                                    </p>

                                </div>


                            </div>

                            <span class="animate scroll" style={{ "--i": 6 }}></span>


                        </div>

                    </div>



                </div>

            </section>


        </>


    )
}

export default Timeline;