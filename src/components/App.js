import { useState } from "react";
import logo from "../images/LOGO.webp";

const blogs = [
  {
    id: 1,
    title: "Top 5 Burger Shop in Cebu",
    description:
      "We will list the places in Cebu that serves the best burgers we have ever tasted in our lives",
    cardImg:
      "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg",
    blogBanner:
      "https://t3.ftcdn.net/jpg/02/94/31/20/360_F_294312040_Yw5wclSBbMXSQF42LQg74QUU9XhjfIM3.jpg",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Cebu",
    releaseDate: 1689722133991,
    tags: ["burger", "top", "American Cuisine"],
    views: 1234234,
  },
  {
    id: 2,
    title: "Bell + Amadeus",
    description: "A fancy restaurant to impress your date",
    cardImg:
      "https://sugbo.ph/wp-content/uploads/2022/12/BellAmadeus-1-1-1024x1024.jpg",
    blogBanner:
      "https://images.summitmedia-digital.com/spotph/images/2022/09/09/10-2-1662702766.jpg",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Cebu",
    releaseDate: 1685407042568,
    tags: ["restaurant", "high-end", "French Cuisine"],
    views: 414141,
  },
  {
    id: 3,
    title: "Italianni's",
    description: "Pagtan-aw kitkit langaw oui bagette",
    cardImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRU5-UMypfkDpOEbTVAit8dZDGk__m7hyUA&usqp=CAU",
    blogBanner:
      "https://lifestyle.inquirer.net/files/2016/06/ITALIANNI%E2%80%99S-ROAST-CHICKEN-PLATTER.jpg",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Italy",
    releaseDate: 1684543030145,
    tags: ["restaurant", "chicken", "Italian Cuisine"],
    views: 1,
  },
  {
    id: 4,
    title: "Best Pares in Manila",
    description: "Experience the best Pares in Manila",
    cardImg: "https://www.sunstar.com.ph/uploads/images/2019/12/07/196648.jpg",
    blogBanner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpElHMS9VAPtHq6FJG0GKo46fbzFQEsF9RA&usqp=CAU",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Manila",
    releaseDate: 1687135021138,
    tags: ["beef pares", "beef", "top"],
    views: 567,
  },
  {
    id: 5,
    title: "Best Pie in Cebu",
    description: "Eddie's Log Cabin got us falling in love with their pies",
    cardImg:
      "https://www.allrecipes.com/thmb/gFUz9-AWOCaudy_tLYmE7HGvMoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/18463MulberryPieAndreaJanelleJackson4x3-0da05e65e8f4471ca5baef96fe6bbf57.jpg",
    blogBanner:
      "https://www.theperksofbeingus.com/wp-content/uploads/2021/04/Coconut-Cream-Pie-e1650115531565-1200x600.jpg",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Cebu",
    releaseDate: 1658190988389,
    tags: ["pie", "dessert", "best"],
    views: 5675677,
  },
  {
    id: 6,
    title: "Best Pie in Portugal",
    description: "Hoy ali diri, sabak daddy bi!",
    cardImg:
      "https://www.allrecipes.com/thmb/gFUz9-AWOCaudy_tLYmE7HGvMoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/18463MulberryPieAndreaJanelleJackson4x3-0da05e65e8f4471ca5baef96fe6bbf57.jpg",
    blogBanner:
      "https://www.theperksofbeingus.com/wp-content/uploads/2021/04/Coconut-Cream-Pie-e1650115531565-1200x600.jpg",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Portugal",
    releaseDate: 1658190988389,
    tags: ["pie", "dessert", "best"],
    views: 10,
  },
  {
    id: 7,
    title: "Croissant",
    description: "kwasong kwasong kwasong ",
    cardImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRU5-UMypfkDpOEbTVAit8dZDGk__m7hyUA&usqp=CAU",
    blogBanner:
      "https://lifestyle.inquirer.net/files/2016/06/ITALIANNI%E2%80%99S-ROAST-CHICKEN-PLATTER.jpg",
    blogContent:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod justo ac dui fringilla hendrerit. Sed quis orci eget purus consequat pretium. Vestibulum a congue dui. Fusce pretium velit justo, vitae volutpat eros tincidunt nec. Sed gravida sit amet dolor id volutpat. Suspendisse suscipit ligula viverra arcu efficitur pretium. Mauris fermentum justo id eros eleifend, at pretium ex efficitur. Sed vitae semper magna.</p><p>Etiam eu faucibus magna. Fusce ut dui vel lacus bibendum aliquam in ac libero. Sed ac ultrices enim. In a lectus vitae nulla scelerisque facilisis. Sed ac magna neque. Cras ullamcorper at erat vitae tempus. Suspendisse nunc tortor, aliquet id dapibus at, maximus non ipsum. Curabitur gravida libero sed lectus hendrerit, id congue nisl malesuada. Praesent dolor mi, varius ut nisl nec, laoreet malesuada purus. Etiam accumsan non dolor vitae fermentum. Sed elementum tortor ut lectus ornare, non pretium urna efficitur. Quisque auctor nibh ut magna dictum, at accumsan mi faucibus.</p><p>Sed ultrices erat leo, in tincidunt tellus dapibus in. Mauris placerat leo metus, a venenatis magna accumsan sit amet. Donec commodo ipsum nisl, sit amet commodo enim pulvinar a. Suspendisse semper lorem leo, vitae pharetra metus tristique a. Donec ut massa posuere, imperdiet lectus non, blandit sapien. Praesent et tellus enim. Pellentesque dapibus justo quis metus condimentum, iaculis lacinia neque efficitur.</p><p>Nunc semper ipsum iaculis, congue nisl quis, accumsan ante. Sed non massa tincidunt, ullamcorper odio eget, lacinia nisi. Nulla pharetra dolor et fermentum porttitor. In ut luctus dolor. Praesent sed turpis justo. In hac habitasse platea dictumst. Nulla vehicula, nibh in malesuada volutpat, nisl nisi condimentum magna, id malesuada neque mauris sit amet nulla. Etiam sit amet mi eget urna tristique feugiat. Maecenas et ipsum tellus.</p><p>Suspendisse condimentum est quam, quis finibus ligula venenatis quis. Maecenas pharetra molestie rutrum. Aenean eu tortor lacus. Sed quis turpis urna. Aenean non ultrices sapien. Vivamus varius est quis metus condimentum, id iaculis nunc faucibus. Nullam commodo pharetra lobortis. Nulla sed luctus libero. Nullam egestas eros maximus nulla porta lacinia. Vestibulum eget magna eget neque cursus mattis.</p>",
    location: "Cebu",
    releaseDate: 1684543030145,
    tags: ["restaurant", "chicken", "French Cuisine"],
    views: 2,
  },
];

export default function App() {
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");
  const data = blogs.slice();

  return (
    <div>
      <Nav />
      <div className="content">
        <TopBlogs />
        <Filter
          data={data}
          tag={tag}
          onSetTag={setTag}
          location={location}
          onSetLocation={setLocation}
        />
        <Results data={data} tag={tag} location={location} />
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <img src={logo} alt="Food Notes" />
        <ul>
          <li>
            <h3>Featured Blogs</h3>
          </li>
          <li>
            <h3>Food Notes</h3>
          </li>
          <li>
            <h3>Foodies</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TopBlogs() {
  const bannerBlog = blogs
    .slice()
    .sort((a, b) => {
      return b.views - a.views;
    })
    .slice(0, 1);
  const topBlogs = blogs
    .slice()
    .sort((a, b) => {
      return b.views - a.views;
    })
    .slice(0, 5)
    .slice(1);

  return (
    <div className="top-blogs">
      <div className="banner-blog">
        <img src={bannerBlog[0].blogBanner} alt={bannerBlog[0].title} />
        <div className="banner-blog-text">
          <h2>{bannerBlog[0].title}</h2>
          <p>{bannerBlog[0].description}</p>
          <Tags tags={bannerBlog[0].tags} key={bannerBlog[0].id} />
        </div>
      </div>
      <div className="card-blogs">
        {topBlogs.map((card, key) => (
          <CardBlog card={card} key={key} />
        ))}
      </div>
    </div>
  );
}

function CardBlog({ card }) {
  return (
    <div className="card-blog">
      <img src={card.cardImg} alt={card.title} />
      <div className="card-text">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <Tags tags={card.tags} key={card.id} />
      </div>
    </div>
  );
}

function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Filter({ data, tag, onSetTag, location, onSetLocation }) {
  let tags = Array.from(new Set(data.flatMap((d) => d.tags)));
  let loc = Array.from(new Set(data.map((d) => d.location)));

  return (
    <div className="filter">
      <select value={tag} onChange={(e) => onSetTag(e.target.value)}>
        <option value="">Select Tags</option>
        {tags.map((t) => (
          <option value={t} key={t}>
            {t}
          </option>
        ))}
      </select>
      <select value={location} onChange={(e) => onSetLocation(e.target.value)}>
        <option value="">Select Location</option>
        {loc.map((l) => (
          <option value={l} key={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
}

function Results({ data, tag, location }) {
  let res = data;
  if (tag !== "") res = res.filter((d) => d.tags.includes(tag));
  if (location !== "") res = res.filter((d) => d.location.includes(location));

  return (
    <div className="results">
      {res.map((r) => (
        <div className="result" key={r.id}>
          <div
            className="result-img"
            style={{ backgroundImage: `url(${r.cardImg})` }}
          ></div>
          <div className="result-text">
            <h2>{r.title}</h2>
            <p>{r.description}</p>
            <Tags tags={r.tags} key={r.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <div className="footer">All Rights Reserved 2023®</div>;
}
