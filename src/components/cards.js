export default function Cards() {
  const sections = [
    {
      title: "Documentation",
      description:
        "The AON-M2 2020 Industrial 3D Printer offers the specs you need to print the strongest thermoplastics.",
    },
    {
      title: "Academy",
      description:
        "Select from hundreds of materials. Avoid getting locked into using pricey proprietary plastics. Achieve lower total cost of ownership.",
    },
    {
      title: "Online store",
      description:
        "Material → Slicer → Process → Part. Plot the optimal path to your part with dedicated experts for each step.",
    },
    {
      title: "Vendors",
      description:
        "Material selection, slicer file optimization, print process development - our materials scientists, applications engineers, and additive experts support you at each step.",
    },
    {
      title: "Suppliers",
      description:
        "Material → Slicer → Process → Part. Plot the optimal path to your part with dedicated experts for each step. ",
    },
    {
      title: "Missing Section",
      description:
        "The AON-M2 2020 Industrial 3D Printer offers the specs you need to print the strongest thermoplastics.",
    },
  ];
  return (
    <div className="card-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {sections.map((section, i) => (
                <div
                  key={i}
                  className="col-lg-4 text-white mb-5 p-5 position-relative"
                >
                  <div className="bg-dark h-100 p-5 d-flex justify-content-between flex-column">
                    <h4 className="text-center mb-5">{section.title}</h4>
                    <div className="text-center flex-grow-1 mb-5">
                      {section.description}
                    </div>
                    <button className="btn btn-primary ">Go somewhere</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
