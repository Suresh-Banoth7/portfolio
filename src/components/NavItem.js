const NavItem = ({ icon, text, sectionId, activeSection, onClick }) => (
    <li className="nav-item">
      <button
        onClick={() => onClick(sectionId)}
        className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300
          ${activeSection === sectionId ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-700'}
        `}
      >
        {icon}
        <span className="ml-2">{text}</span>
      </button>
    </li>
  );
export default NavItem  