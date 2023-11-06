import "../singlePost.css"
import Link from 'next/link'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="postMetaData">
          <h1 className="singlePostTitle">
            Dive In: A Beginners Guide to Keeping Pet Fish
            <div className="singlePostEdit">
              <AiFillEdit className="singlePostIcon" />
              <BsFillTrashFill className="singlePostIcon" />
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" href="">
                  Aditya
                </Link>
              </b>
            </span>
            <span>2 days ago</span>
          </div>
        </div>

        <div className="imageTextWrapper">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/5150077/pexels-photo-5150077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />

          <p className="singlePostDesc">
          Taking the plunge into the world of pet fish ownership? Fishkeeping is a delightful hobby that requires some knowledge and 
          a dash of creativity. In this beginner's guide, we'll help you dive into the basics of keeping pet fish.<br/><br/>

          Begin by selecting the right fish for your aquarium. Start with hardy and low-maintenance species like Betta fish, 
          Goldfish, or Guppies. Research their specific care requirements to ensure they'll thrive in your tank.<br/><br/>

          A clean and spacious home is essential for your fish. Choose an appropriately-sized tank and install a filter, heater 
          (if needed), and aeration system. Make sure your tank is cycled, creating a healthy environment for your fish.<br/><br/>

          Fish appreciate a well-decorated tank. Add gravel, plants, and ornaments, but be cautious not to overcrowd. Keep water 
          conditions stable, and invest in a water testing kit to monitor parameters like pH, ammonia, and nitrite levels.<br/><br/>

          Feeding your fish high-quality food is crucial. Follow the recommended feeding guidelines and avoid overfeeding. Regular 
          water changes and tank cleaning will keep your aquatic buddies happy and healthy.<br/><br/>

          Fishkeeping is an ongoing learning experience. Join online forums or local fish clubs to connect with fellow enthusiasts. 
          Enjoy the calming presence of your underwater companions and take time to appreciate the beauty of your aquatic world.
          <br/><br/>

          If issues arise, don't panic. Research common fish diseases and their treatments, and keep a quarantine tank on hand for 
          isolating sick fish.<br/><br/>

          As a beginner, patience is your greatest asset. With dedication and care, you'll soon be navigating the waters of pet 
          fish ownership like a pro. Dive in, and may your journey be as colorful and vibrant as your fish!
          </p>
        </div>
      </div>
    </div>
  );
}











