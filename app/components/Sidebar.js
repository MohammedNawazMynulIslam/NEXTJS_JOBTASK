function Sidebar() {
    return (
      <aside className="bg-gray-700 w-64 py-4 px-4 text-white font-medium">
        <div className="space-y-4">
          <div className="sidebar-section">
            <h4 className="text-lg font-semibold mb-2">Categories</h4>
            {/* Categories list implementation here */}
          </div>
          <div className="sidebar-section">
            <h4 className="text-lg font-semibold mb-2">Settings</h4>
            {/* Settings options implementation here */}
          </div>
        </div>
      </aside>
    );
  }

  export default Sidebar;
