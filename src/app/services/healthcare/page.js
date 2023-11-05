import styles from './styles.module.css'
import {FaPaw} from 'react-icons/fa'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link'

const page = () => {
  return (
    
    <div className={styles.mainContainer}>

  
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap" rel="stylesheet"/>
    

        <div className={styles.main}>

          <div className={styles.headingAndPaws}>
              <div className={styles.heading}>Healthcare</div>
              <div className={styles.pawsContainer}>
                  <FaPaw className={styles.leftPaw} />
                  <FaPaw className={styles.rightPaw} />
              </div>
          </div>

          <div className={styles.subheadingAndPaw}>
            <div className={styles.subTextContainer}>
              <div className={styles.subText}>Exact diagnosis of animal diseases:</div>
              <ul className={styles.subList}>
                <li>Health checks;</li>
              </ul>
            </div>
            <FaPaw className={styles.paw} />
          </div>

          <div className={styles.bodytextAndArrows}>
            <Link href='/services' className={styles.linkArrowContainer}>
             <div className={styles.arrowContainer}>
                <BsArrowLeft className={styles.arrow} />
                </div>
            </Link>

            <div className={styles.bodyText}>
              <div className={styles.questionText}>
                When can I make an appointment for my pet's health check?
              </div>
              <div className={styles.answerText}> 
                Health check appointments are available throughout the week, including weekends.
              </div>

              <div className={styles.questionText}>
                How much is a pet health check appointment?
              </div>
              <div className={styles.answerText}> 
              The cost of our pet health check is 50 GEL (prices at 2023).  Any additional treatments or procedures<br/> 
              arising are charged in addition to this.<br/><br/>
              We strongly recommend joining our Pet Health Plans where the health check is included as part of the<br/> 
              plan AND you can spread the costs of this and other routine pet healthcare costs in easy monthly <br/>
              payments.
              </div>

              <div className={styles.questionText}>
                How long does a pet health check take?
              </div>
              <div className={styles.answerText}> 
                A standard pet health check takes 15 - 20 minutes.
              </div>

              <div className={styles.questionText}>
                Who conducts the pet heath check? 
              </div>
              <div className={styles.answerText}> 
                The initial health check may be carried out by one of our vets or a final year veterinary student, working <br/>
                under the close supervision of an experienced veterinary surgeon. The vet will also examine your pet <br/>
                and discuss any findings or treatment required.
              </div>

              <div className={styles.questionText}>
                Where does the pet health check take place?
              </div>
              <div className={styles.answerText}> 
                Pet health checks take place at the SmartCare Animal hospital (in Tbilisi, Georgia) where all of your pet's 
                needs can be catered for.
              </div>

              <div className={styles.questionText}>
                Can I book a health check for any type of pet?
              </div>
              <div className={styles.answerText}>
                Yes - not only do we have a team of experienced small animal vets who focus on cats and dogs, we also <br/>
                have a specialist exotics team who can provide health checks for more unusual pets including birds, <br/>
                rodents and reptiles.
              </div>

              <div className={styles.questionText}>
                How often should my pet have a health check?
              </div>
              <div className={styles.answerText}> 
                All pets should have a full health check once per year (usually at the time of their annual vaccination). We <br/>
                recommend that older pets (cats over ten years, dogs over eight years old) are checked every six months <br/>
                as they can be prone to developing age related health conditions
              </div>                
            </div>

            <div className={styles.arrowContainer}>
              <BsArrowRight className={styles.arrow} />
            </div>
          </div>

          <div className={styles.bookButtonContainer}>
            <div className={styles.bookButton}>
              Book Now
            </div>
          </div>

        </div>
    </div>
  )
}

export default page