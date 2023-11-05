import styles from './styles.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {FaPaw} from 'react-icons/fa'
import Image from 'next/image'
import catPic1 from './images/catPic1.png'
import dogPic1 from './images/dogPic1.png'
import dogPic2 from './images/dogPic2.png'
import groomingPic from './images/catAndDogPic1.png'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.subContainer}>

                        {/* healthCare */}

            <div className={styles.healthcareContainer}>
                <div className={styles.healthcare}>
                    <div className={styles.textContainer}>
                        <div className={styles.heading}>Healthcare</div>
                        <div className={styles.subTextContainer}>
                            <p className={styles.subPara}>Exact diagnosis of animal diseases:</p>
                            <ul className={styles.list}>
                                <li>Health checks;</li>
                                <li>Complete analysis of blood and urine;</li>
                                <li>Biochemical analysis of blood;</li>
                                <li>Ultrasound and digital radiology (X-ray)</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image className={styles.catPic1} src={catPic1} alt="cat-pic-1" width={150} height={180} />
                    </div>
                    <Link href='/services/healthcare'>
                        <div className={styles.arrowContainer}>
                            <BsArrowRight />
                        </div>
                    </Link>
                </div>
            </div>


                        {/* video1 */}

            <div className={styles.video1Container}>
              {/*  <video src={vetVideo1} width={200} height={220} controls className={styles.catVid} /> */}
                <video className={styles.catVid} width={200} height={220} controls autoPlay muted>
                    <source src={'/vetVideo1.mp4'} type="video/mp4" />
                </video>
            </div>



                        {/* dayCare */}

            <div className={styles.daycareContainer}>
                <div className={styles.daycare}>
                    <div className={styles.textContainer}>
                        <div className={styles.heading}>Daycare</div>
                        <div className={styles.subTextContainer}>
                            <p className={styles.subPara}>Animal care services:</p>
                            <ul className={styles.list}>
                                <li>Micro and macro-filling therapy</li>
                                <li>Dietology</li>
                                <li>Urgent help</li>
                                <li>Daily maintenance</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image className={styles.dogPic1} src={dogPic1} alt="cat-pic-1" width={180} height={200} />
                    </div>
                    <div className={styles.arrowContainer}>
                        <BsArrowRight />
                    </div>
                </div>
            </div>



                            {/* video2 */}


            <div className={styles.video2Container}>
            <video width={200} height={240} controls className={styles.catVid} autoPlay muted>
                    <source src='/vetVideo2.mp4' type='video/mp4'/>
                </video>
            </div>

                                {/* consulting */}

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap" rel="stylesheet"/>

            <div className={styles.consultingContainer}>
                <div className={styles.consulting}>
                    <Image className={styles.dogPic2} src={dogPic2} width={190} height={230}/>
                    <div className={styles.consText}>Consulting services related to animal care</div>
                    <div className={styles.arrowContainer2}>
                        <BsArrowRight className={styles.arrow} />
                    </div>
                </div>
            </div>


                                {/* grooming */}

            <div className={styles.groomingContainer}>
                <div className={styles.grooming}>

                    <div className={styles.pawTextContainer}>

                        <div className={styles.pawContainer}>
                            <FaPaw className={styles.paw} />            
                        </div>
                        <div className={styles.groomTextContainer}>
                            <div className={styles.groomHeading}>Grooming</div>
                            <div className={styles.listsContainer}>
                                <ul className={styles.sublist}>
                                    <li>Brushing</li>
                                    <li>Nail clipping</li>
                                    <li>Drying</li>
                                </ul>
                                <ul className={styles.sublist}>
                                    <li>Cleaning out ears</li>
                                    <li>Coat trimming</li>
                                    <li>Bathing</li>
                                </ul>
                            </div>
                            <div className={styles.seeButtonContainer}>
                                <p className={styles.buttonText}>See More</p>
                                <BsArrowRight className={styles.buttonArrow} />
                            </div>
                        </div>

                    </div>

                    <div className={styles.doublePawContainer}>
                        <FaPaw className={styles.upperPaw} />
                        <FaPaw className={styles.lowerPaw} />
                    </div>
                    <Image className={styles.groomingPic} src={groomingPic} width={500} height={250} />
                    <div className={styles.pawContainer2}>
                        <FaPaw className={styles.paw2} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page