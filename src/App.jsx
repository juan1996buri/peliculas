import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          {/* Portada */}
          <div className="rounded-2xl mb-4">
            <img
              src="https://i.blogs.es/4c3cf2/godofwarragnarok/1366_2000.jpeg"
              className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
            <Card
              img="https://pbs.twimg.com/media/FJ-e00rUYAQzxzJ?format=jpg&name=900x900"
              title="HALO ORIGINAL"
              category="PS5"
              price="$60"
            />
            <Card
              img="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/06/23/16244426663318.jpg"
              title="VALORANT"
              category="PC"
              price="$70"
            />
            <Card
              img="https://st1.bgr.in/wp-content/uploads/2021/01/PUBG-Mobile-vs-Free-Fire.jpg"
              title="FREE FIRE-PUBG MOVILE"
              category="PC"
              price="$80"
            />
            <Card
              img="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6fJyRdi8O9VwIQGonGNFai/8ac090fe69e7dd2bc9ac8fc213a25927/ac-4-black-flag-heroBanner.jpg"
              title="Assassin's Creed 4"
              category="PC-Xbox"
              price="$70"
            />
            <Card
              img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2013/03/215028-analisis-need-speed-most-wanted.jpg?itok=_XQUSHbc"
              title="need for speed most"
              category="Xbox"
              price="$25"
            />
            <Card
              img="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/04/15701769662337.jpg"
              title="call of duty"
              category="PC"
              price="$20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
