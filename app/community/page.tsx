import communityPerkImage from "@/assets/icons/meal.png";
import ColoredText from "@/components/UI/colored-text";
import CommunityContent from "@/components/community-content";
import classes from './page.module.css';



const CommunityPage = function () {
  return (
    <main className={classes.container}>
      <h1>
        One shared passion: <ColoredText>Food</ColoredText>
      </h1>
      <p>Join our community and share your favorite recipes!</p>
      <h2>Community Perks</h2>

      <CommunityContent
        paragraph={"Share & discover recipes"}
        alt="Share & discover recipes"
        imageSource={communityPerkImage}
      ></CommunityContent>
      <CommunityContent
        paragraph={"Find new friends & like-minded people"}
        alt="Find new friends & like-minded people"
        imageSource={communityPerkImage}
      ></CommunityContent>
      <CommunityContent
        paragraph={"Participate in exclusive events"}
        alt="Participate in exclusive events"
        imageSource={communityPerkImage}
      ></CommunityContent>
    </main>
  );
};

export default CommunityPage;
