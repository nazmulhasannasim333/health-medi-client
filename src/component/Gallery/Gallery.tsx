const Gallery = () => {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold  text-center mb-10">Our Gallery</h2>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col">
              <img
                className="object-cover h-full"
                src="https://images.unsplash.com/photo-1664764119004-999a3f80a1b8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDEzMDc&ixlib=rb-4.0.3&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1666147775717-65fa1fe0c47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1665561741359-7af2d2fdc395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1665391837905-74d250172dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="object-cover h-full"
                  src="https://images.unsplash.com/photo-1666303349374-c4cf8bc9eaaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NDMxNzc&ixlib=rb-4.0.3&q=80&w=400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
