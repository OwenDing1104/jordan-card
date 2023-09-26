import { LitElement, html, css } from 'lit';

class JordanCard extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .card {
      max-width: 400px;
      margin: 10px;
      background-color: pink;
      text-align: center;
      padding: 6px;
      border-radius: 6px;
    }

    /* The heading setting in the card */
    .card h1 {
      font-size: 36px;
      color: #ce1141;
    }

    /* The second heading setting in the card */
    .card h2 {
      font-size: 30px;
      color: #ce1141;
    }

    /* The content setting in the card */
    .card p {
      font-size: 16px;
      color: black;
    }

    .card img {
      width: 85%;
      height: auto;
    }

    /*The button setting in the card*/
    .button1 {
      margin: 24px auto;
    }
    .button1 button {
      font-size: 20px;
      color: #ce1141;
      background-color: white;
      padding: 4px;
    }

    .button1 button:hover,
    .button1 button:focus {
      color: white;
      background-color: #ce1141;
    }

    @media only screen and (min-width: 800px) {
      #detail1 {
        display: incline-block;
      }
    }

    @media only screen and (max-width: 799px) {
      #detail1 {
        display: none;
      }
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="card">
        <h1>NBA Superstar</h1>
        <img
          src="https://thumbs.dreamstime.com/b/michael-jordan-chicago-bulls-superstar-image-taken-color-slide-73861883.jpg"
          alt="Jordan"
        />
        <div class="content">
          <h2><b>Michael Jordan</b></h2>
          <p>
            Michael Jeffrey Jordan (born February 17, 1963), also known by his
            initials MJ, is an American former professional basketball player
            and businessman. Widely considered the greatest basketball player of
            all time, the official National Basketball Association (NBA) website
            states that "by acclamation, Michael Jordan is the greatest
            basketball player of all time." He played fifteen seasons in the
            NBA, winning six NBA championships with the Chicago Bulls. He was
            integral in popularizing the sport of basketball and the NBA around
            the world in the 1980s and 1990s, becoming a global cultural icon.
          </p>
          <div class="button1">
            <button id="detail1">Details</button>
          </div>
        </div>
      </div>
      <button id="cloneButton1">CloneCard</button>
      <button id="color1">ColorCard</button>
      <button id="heading1">ChangeHeading</button>
      <button id="delete1">Delete</button>
    `;
  }
}

customElements.define('jordan-card', JordanCard);
