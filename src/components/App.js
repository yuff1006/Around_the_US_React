import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import Card from "./Card";
import PopupWithForm from "./PopupWithForm";
function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
        <PopupWithForm />
        <Card />
      </div>
    </div>
  );
}

export default App;
