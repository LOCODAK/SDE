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
            Purr-fectly Healthy: Planning an Ideal Diet for Your Pet
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
                  Kartheek
                </Link>
              </b>
            </span>
            <span>3 days ago</span>
          </div>
        </div>

        <div className="imageTextWrapper">
          <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/8434725/pexels-photo-8434725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          />

          <p className="singlePostDesc">
          Our pets are cherished members of the family, and just like us, they deserve a balanced and nutritious diet to thrive. 
          In this guide, we'll explore how to plan the ideal diet for your furry or feathered friend.<br/><br/>

          The foundation of a healthy pet diet is quality. Whether you have a cat, dog, bird, or reptile, choose food that meets 
          their specific nutritional needs. Consult with your veterinarian to determine the best diet for your pet's age, breed, 
          and health status.<br/><br/>

          Freshwater is essential. Ensure your pet has access to clean water at all times. Hydration is a key component of their 
          well-being.<br/><br/>

          Portion control is vital. Overfeeding can lead to obesity and related health issues. Follow the recommended serving sizes 
          on the food packaging or your vet's guidance.<br/><br/>

          Incorporate variety. Just like us, pets appreciate a diverse menu. Experiment with different flavors and types of food to 
          keep mealtime interesting.<br/><br/>
          </p>
        </div>
      </div>
    </div>
  );
}
