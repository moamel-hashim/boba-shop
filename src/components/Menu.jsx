import React from "react";

export default function Menu() {
  return (
    <main>
      <section>
        <div className="menuTitle">
          <h3>Our</h3>
          <h3>Menu</h3>
        </div>
      </section>
      <section>
        <div className="series">
          <h4>Series</h4>
        </div>
        <div className="text-align-center">
          <div className="image-container text-align-center">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/909/353/small/bubble-milk-tea-special-promotions-design-boba-milk-tea-pearl-milk-tea-yummy-drinks-coffees-and-soft-drinks-with-logo-and-cute-funny-doodle-style-advertisement-banner-illustration-vector.jpg" alt="an art image of boba drinks" />
          </div>
        </div>
      </section>
      <section>
        <div className="drinks-title">
          <h4>blended series</h4> <br />
          <p>Our signature yogurt series & snow series. contains Dairy</p>
        </div>
        <div className="drinks-container">
          <div className="drinks">
            <img src="https://theoregondietitian.com/wp-content/uploads/2022/06/MatchaBubbleTea-1200-x-1200.jpg" alt="Green tea boba" /> <br />
            <h5>Green Tea Boba</h5> <br />
            <p>Greek yogurt blended with fresh milk and fresh mango slices, lined with Greek yogurt. *contains dairy</p> <br />
            <p>$6.75</p>
          </div>
          <div className="drinks">
            <img src="https://www.honestfoodtalks.com/wp-content/uploads/2022/01/Thai-tea-with-milk-ice-and-boba-on-top.jpg" alt="Thai tea boba drink" /> <br />
            <h5>Thai Tea Boba</h5> <br />
            <p>Greek yogurt blended with fresh milk and fresh mango slices, lined with Greek yogurt. *contains dairy</p> <br />
            <p>$6.75</p>
          </div>
          <div className="drinks">
            <img src="https://www.honestfoodtalks.com/wp-content/uploads/2022/07/Coffee-boba-recipe-1.jpeg" alt="Milk tea boba" /> <br />
            <h5>Milk Tea Boba</h5> <br />
            <p>Greek yogurt blended with fresh milk and fresh mango slices, lined with Greek yogurt. *contains dairy</p> <br />
            <p>$6.75</p>
          </div>
        </div>
      </section>
    </main>
  )
}
