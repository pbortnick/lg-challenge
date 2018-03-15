render() {
  var settings = {
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 500
  };
  <Slider {...settings}>

  function SampleNextArrow(props) {
  const {className, onClick} = props
  return (
    <div className={className} onClick={onClick}>
      <img src={arrow} alt="arrow" />
    </div>
  );
  }

  function SamplePrevArrow(props) {
  const {className, onClick} = props
  return (
    <div className={className} onClick={onClick}>
      <img src={arrow} alt="arrow"/>
    </div>
  );
  }

  var settings = {
    slidesToShow: 8,
    dots: true,
    slidesToScroll: 8,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
