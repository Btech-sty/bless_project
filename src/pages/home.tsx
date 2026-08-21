function Home() {
  return (
    <div className="container-fluid "
    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0.5, 0.35), rgba(0, 0, 0, 0.35)), url("/What wig.jpeg")' ,
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize: "cover",
      height:"80vh",
    }}>
    <div className=" text-center">
      <button className="btn btn-outline-primary text-white">SHOP NOW </button>
    </div>
    </div>
  );
}

export default Home;