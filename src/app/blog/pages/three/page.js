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
            Paws and Love: Convincing Your Parents to Get a Pet
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
                  Arun
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
        </div>

        <div className="imageTextWrapper">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />

          <p className="singlePostDesc">
          The desire for a furry, feathered, or scaly companion is a common one, especially among younger folks. If you're 
          eager to bring a pet into your life but need to convince your parents, here's a concise guide to help make your case.
          <br/><br/>

          Start by demonstrating your commitment. Research the specific needs of the pet you want – whether it's a dog, cat, bird, 
          or reptile. Show your parents that you understand the responsibilities, from feeding and grooming to exercise and medical 
          care.<br/><br/>

          Discuss the health benefits of having a pet. Mention the potential to reduce stress, anxiety, and depression. If there 
          are specific health conditions within your family that a pet can help alleviate, bring those up.<br/><br/>

          Address any concerns your parents might have. If allergies are an issue, consider hypoallergenic breeds. If it's about 
          the mess, propose a cleaning routine that you'll stick to. Show that you've thought through potential challenges.
          <br/><br/>

          Be open to compromise. Your parents may have concerns or conditions that you can work together to address. Showing 
          flexibility demonstrates your maturity.<br/><br/>

          By approaching the conversation with empathy, knowledge, and a willingness to collaborate, you can increase the chances 
          of convincing your parents to welcome a furry friend into your home. Remember that pet ownership is a lifelong commitment,
          so ensure you're ready for the responsibility it entails.
          </p>
        </div>
      </div>
    </div>
  );
}

































