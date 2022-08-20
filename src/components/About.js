import about from "../static-image/about-me.jpg"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="about-image-wrapper">
                <img src={about} className="about-image" alt="about me image" />
            </div>
            <div className="about-paragraph-wrapper">
                <h1 className="about-title">About Me</h1>
                <p className="about-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum voluptatibus illum, beatae deserunt aliquam atque quis voluptates numquam odit dolores quod sapiente temporibus iusto ipsam autem, enim nisi eligendi ut amet aut fugiat consectetur rem! Ea, et hic eveniet temporibus magni expedita amet quia quis numquam molestias atque voluptas ullam aperiam distinctio. Deserunt voluptatem doloremque incidunt deleniti temporibus quod optio inventore, voluptatibus accusantium ipsum iusto recusandae sed et vero soluta numquam fugiat, aspernatur ut. Non voluptatum fugiat corrupti, aperiam explicabo maxime enim consequatur! Iste repellat, nisi eos vitae recusandae eaque molestias maiores id eveniet nesciunt dolor quo molestiae suscipit sed sint, assumenda ipsam libero nihil nobis esse? Sunt quae, excepturi fugiat esse, magnam nostrum, incidunt corporis maxime voluptas vitae dolorum pariatur aperiam consequuntur deleniti tenetur perferendis repellat officia libero exercitationem et nemo quas. Architecto nam, id velit similique officia corporis odio reprehenderit praesentium eos, dolor accusantium dolorem nobis repellat, provident eum. Ipsam, alias provident velit ipsa vitae reprehenderit molestias harum omnis sit adipisci, dolores tenetur incidunt quas sunt sequi ex eius accusantium qui saepe labore in rem, quae corrupti totam. Doloremque recusandae consectetur repudiandae ea nemo sapiente laboriosam voluptate amet praesentium! Aliquid quod sint sunt deleniti aperiam hic nesciunt praesentium?</p>
            </div>
        </div>
    )
}