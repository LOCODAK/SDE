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
              Hush, Pup! A Guide to Curbing Excessive Barking in Your Dog
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
                  Aryan
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
        </div>

        <div className="imageTextWrapper">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6471471/pexels-photo-6471471.jpeg"
          alt=""
          />

          <p className="singlePostDesc">
          Is your furry friend's barking becoming a bit too much? Excessive barking is a common concern among dog owners, but it's 
          a behavior that can be managed. In this guide, we'll explore the reasons behind your pup's vocal outbursts and provide you 
          with effective strategies to bring peace and quiet back to your home. <br/><br/>

          Dogs bark for various reasons, and understanding why your dog barks is the first step in addressing the issue. Some common 
          triggers include alert barking, anxiety, loneliness, and territorial behavior. Each of these reasons requires a slightly 
          different approach.<br/><br/>

          One effective strategy is training. Teach your dog a "quiet" or "enough" command and reward them when they stop barking 
          on command. Exercise is essential. A tired dog is a quiet dog, so make sure your pup gets enough physical and mental 
          exercise every day.<br/><br/>

          Socialization is crucial too. Gradual exposure to new people, pets, and environments can reduce fear-based barking. 
          Create a safe space for your dog, like a cozy crate, if they bark due to anxiety. Desensitization to triggers can also be 
          helpful. For instance, reward calm behavior when the doorbell rings.<br/><br/>

          Remember to avoid punishing your dog for barking, as it can increase anxiety. And if excessive barking persists, consider 
          consulting a professional dog trainer or behaviorist. Patience and consistency are key in curbing excessive barking. With 
          love and the right strategies, you can teach your dog to hush and enjoy a quieter life together.
          </p>
        </div>
      </div>
    </div>
  );
}