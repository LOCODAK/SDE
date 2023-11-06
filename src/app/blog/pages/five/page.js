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
            Pawsitive Connections: The Art of Socializing Your Dog
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
                  Namit
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
        </div>

        <div className="imageTextWrapper">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/18962450/pexels-photo-18962450/free-photo-of-two-dogs-playing-on-the-beach.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />

          <p className="singlePostDesc">
          Dogs are naturally social animals, and their ability to interact with other dogs and people is a vital part of their 
          well-rounded development. In this guide, we'll explore the art of socializing your dog and how it can lead to a happier
          and more balanced furry companion.<br/><br/>

          Socialization is a process that exposes your dog to various stimuli, helping them become accustomed to different 
          environments, people, and animals. This is essential for preventing behavioral issues and ensuring your dog's confidence 
          and comfort in various situations.<br/><br/>

          Start early. The critical period for socialization in puppies is between 3 and 14 weeks of age. During this time, they 
          are more open to new experiences and less likely to develop fear or aggression.<br/><br/>

          Expose your dog to various environments. Take your furry friend for walks in the park, visits to the beach, and trips 
          to pet-friendly stores. These outings help them become comfortable in different settings.<br/><br/>
          </p>
        </div>
      </div>
    </div>
  );
}






















// 