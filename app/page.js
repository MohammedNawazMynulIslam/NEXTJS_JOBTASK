import { Categories } from "./components/Categories";
import Content from "./components/Content";
import Header from "./components/Header";
import { Rightsidebar } from "./components/Rightsidebar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 mt-6">
        {/* Sidebar */}
        <div className="ml-5">
          <Sidebar />
        </div>
        {/* Main Content Section */}
        <div className="container col-span-9 grid grid-cols-12  mt-8">
          {/* Categories */}
          <div className="col-span-1">
            <Categories />
          </div>
          {/* Content */}
          <div className="col-span-10">
            <Content />
          </div>
          {/* Right Sidebar */}
          <div className="">
            <Rightsidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
