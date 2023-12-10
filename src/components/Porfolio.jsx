// import smunir from "../assets/images/smunir.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white min-h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          style={{ border: "1px solid hotpink" }}
        >
          {projects.map((item) => (
            <div className="card w-64" key={item.id}>
              <div
                className="shadow-md shadow-gray-600 rounded-lg "
                style={{ border: "1px solid hotpink" }}
              >
                <img
                  src={item.src}
                  alt="smunir"
                  className="rounded-md hover:scale-105 duration-200 h-50 object-cover"
                />
              </div>
              <div
                className="flex items-center justify-center"
                style={{ border: "1px solid hotpink" }}
              >
                <button
                  className="w-1/2 px-3 py-3 m-4 hover:scale-105 duration-300"
                  style={{ border: "1px solid hotpink" }}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-3 py-3 m-4 hover:scale-105 duration-300"
                  style={{ border: "1px solid hotpink" }}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
