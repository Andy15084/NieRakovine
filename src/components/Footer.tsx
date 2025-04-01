const Footer = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-300">Email: info@nierakovine.sk</p>
            <p className="text-gray-300">Tel: +421 XXX XXX XXX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Sledujte nás</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Twitter</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Prihláste sa na odber noviniek</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Váš email"
                className="px-4 py-2 rounded-l text-gray-900 flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--light-purple)]"
              />
              <button className="bg-[var(--light-purple)] hover:bg-[var(--dark-purple)] px-4 py-2 rounded-r transition-colors duration-200">
                Prihlásiť
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Nie Rakovine. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 