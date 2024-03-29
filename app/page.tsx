import { Link, PurpleText } from "@/components/UI";
import ImageSlider from "@/components/image-slider";
import classes from "./page.module.css";

const Home = function () {
  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.slider}>
          <ImageSlider />
        </div>
        <div className={classes.topRightSection}>
          <div className={classes.titleContainer}>
            <h1>
              <PurpleText>Next level food for </PurpleText>
              <PurpleText>Next level foodies</PurpleText>
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.links}>
            <Link href="/community" className={classes.communityLink} >
              Join the community
            </Link>
            <Link href="/meals" className={classes.mealsLink} isBackgroundColorFilled>
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it Works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
