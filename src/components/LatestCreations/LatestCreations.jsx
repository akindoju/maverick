import "./LatestCreations.scss";

const LatestCreations = () => {
  return (
    <div className="latestCreationsContainer">
      <div className="latestCreationsContainer__write-up">
        <h1>Latest Creations</h1>
        <h4>Make Beautiful things</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          voluptate delectus repellat laborum corrupti commodi provident nam
          libero similique. Doloribus!
        </p>
      </div>

      <figure className="latestCreations latestCreations--1">
        <img
          className="latestCreations__img"
          src="https://images.pexels.com/photos/6193967/pexels-photo-6193967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img 1"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>

      <figure className="latestCreations latestCreations--2">
        <img
          className="latestCreations__img"
          src="https://images.pexels.com/photos/7792864/pexels-photo-7792864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img 2"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>

      <figure className="latestCreations latestCreations--3">
        <img
          className="latestCreations__img"
          src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img 3"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>

      <figure className="latestCreations latestCreations--4">
        <img
          className="latestCreations__img"
          src="https://images.pexels.com/photos/5828538/pexels-photo-5828538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img 4"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>

      <figure className="latestCreations latestCreations--5">
        <img
          className="latestCreations__img"
          src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img 5"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>

      <figure className="latestCreations latestCreations--6">
        <img
          className="latestCreations__img"
          src="https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b910bede1286e5f007d0c_port5.jpg"
          alt="img 6"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>

      <figure className="latestCreations latestCreations--7">
        <img
          className="latestCreations__img"
          src="https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img 7"
        />
        <div className="latestCreations__hover">
          <div className="latestCreations__hover--border">
            <h1>Portfolio Title</h1>
            <h4>Branding, Web Design</h4>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default LatestCreations;
