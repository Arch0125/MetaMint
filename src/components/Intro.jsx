import "./styles.css";
import Upload from "./Upload";

export default function Intro() {
  return (
    <div className="App">
      <p>
        <img
          align="right"
          src="https://media.istockphoto.com/vectors/female-character-with-laptop-in-hands-use-non-fungible-token-making-vector-id1318373657?k=20&m=1318373657&s=612x612&w=0&h=uz4NaB86MjFDlgu3iQt5sZmuerXGR3qaShgTzyL_BqE="
          width="550"
        />
      </p>
      <h1 class="headerintro">
          <span className="purpletext">Welcome to MetaMint</span> <br/>
          <br/>
        Give your NFTs a <br />
        twist of <span class="purpletext">Subscriptions ✨</span>{" "}
      </h1>
        <br/>
      <h2 class="intro">
        with <span class="bold">MetaMint</span> you can{" "}
      </h2>
      <p class="feature">📜 Create subscription based NFTs </p>
      <p class="feature">
        ✅ Pre-launch NFTs for subbscribers{" "}
      </p>
      <p class="feature">
        💸 Allow subscribers to mint and re-sell{" "}
      </p>
      <div id="container">
        <h1 class="header2">
          Let's get <span class="purpletext"> started </span>{" "}
        </h1>
        <a href='/Upload'><button class="button" type="button">
          Upload NFT project
        </button></a>
        <a href="/Mint"><button class="button" type="button">
          Create Subscriptions
        </button></a>
      </div>

      <div id="container1">
        <h1 class="support"> This project is powered by </h1>
        <button class="brand" type="button">
          <img
            src="https://www.crypto-news.net/wp-content/uploads/2017/09/ethereum.png"
            width="100pt"
          />
        </button>
        <button class="brand" type="button">
          <img
            src="https://www.moonpay.com/assets/logos/polygon-logo.svg"
            width="100pt"
          />
        </button>
      </div>
    </div>
  );
}
